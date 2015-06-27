import { Map, List, fromJS } from "immutable";

import { MINTOP, NODEHEIGHT, NODEWIDTH, NODEHSPACING, NODEVSPACING, NODEHPADDING,
         NODEVPADDING } from "./Tree.constants";
import { getKPIChildren, getRootKPI } from "../../dataUtils";


export function getNodePositions(appState) {
    // get the list of all drill down nodes
    const treeState = appState.getIn(["tree"]);
    
    // initialize with the root
    let positions = List([Map({
        "kpiId": getRootKPI(appState),
        "position": getInitialPosition()
    })]);
    
    // base case, list is empty, show only root
    if (treeState.size === 0) {
        return positions;
    }
    let min = Infinity;
    // loop the state getting the children and computing their position
    treeState.forEach((parentId) => {
        let children = getKPIChildren(parentId, appState);
        const parentPosition = positions.filter((pos) => {
            return pos.get("kpiId") === parentId;
        }).get(0).get("position");
        children.forEach((kpiId, childrenIndex, children) => {
            const position = computePosition(kpiId, childrenIndex, children.size, parentPosition);
            min = Math.min(min, position.getIn(["position", "y"]));
            positions = positions.push(position);
        });
    });
    return applyOffset(positions, min);

    function computePosition(kpiId, index, numSiblings, parentPosition) {
        const x = parentPosition.get("x") + NODEWIDTH + NODEHSPACING;
        const height = ((numSiblings * NODEHEIGHT) + ((numSiblings - 1) * NODEVSPACING));
        const top = ((parentPosition.get("y") + NODEHEIGHT / 2) - (height / 2));
        const y = top + (index * (NODEHEIGHT + NODEVSPACING));
        return Map({
            "kpiId": kpiId,
            "position": Map({"x": x, "y": y})
        });
    }

    function applyOffset(positions, min) {
        return positions.map(function(p) {
            return p.updateIn(["position", "y"], function(y) {
                const offset = min < MINTOP ? (-1*min)+MINTOP : 0;
                return y + offset;
            });
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
            const children = getKPIChildren(parentId, appState);
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