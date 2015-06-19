import {Map, List, fromJS} from "immutable";
import * as k from "./Tree.constants";
import * as dataUtils from "../../dataUtils";

export function getNodePositions(appState) {
    // get the list of all drill down nodes
    const treeState = appState.getIn(["tree"]);
    
    // initialize with the root
    let positions = List([Map({
        "kpiId": dataUtils.getRootKPI(appState), // hard coded for now
        "position": getInitialPosition()
    })]);
    
    // base case, list is empty, show only root
    if (treeState.size === 0) {
        return positions;
    }
    // loop the state getting the children and computing their position
    treeState.forEach((parentId, treeStateindex, treeState) => {
        let children = dataUtils.getKPIChildren(parentId, appState);
        const parentPosition = positions.filter((pos) => {
            return pos.get("kpiId") === parentId;
        }).get(0).get("position");
        children.forEach((kpiId, childrenIndex, children) => {
            positions = positions.push(computePosition(kpiId, childrenIndex, children.size, parentPosition));    
        });
        
    });

    return positions;

    function computePosition(kpiId, index, numSiblings, parentPosition) {
        const x = parentPosition.get("x") + k.nodeWidht + k.nodeHSpacing;;
        const height = ((numSiblings * k.nodeHeight) + ((numSiblings - 1) * k.nodeVSpacing));
        const top = ((parentPosition.get("y") + k.nodeHeight / 2) - (height / 2));
        const y = top + (index * (k.nodeHeight + k.nodeVSpacing));
        return Map({
            "kpiId": kpiId,
            "position": Map({"x": x, "y": y})
        });
    }

}

export function getNewTreeState(kpiId, treeState, appState) {
    let newTreeState = List();
    // base case, nothing in state, just push root id
    if (!treeState.size) {
        return newTreeState.push(kpiId);
    }
    // drill has happened before
    treeState.forEach((parentId, treeStateindex, treeState) => {
        if (parentId === kpiId) {
            return false;
        } else {
            newTreeState = newTreeState.push(parentId);
            const children = dataUtils.getKPIChildren(parentId, appState);
            if (children.includes(kpiId) && !treeState.includes(kpiId)) {
                newTreeState = newTreeState.push(kpiId);
                return false;
            }
        }
    });
    return newTreeState;
}

export function getInitialPosition(appState) {
    return Map({x:20, y:200});
}