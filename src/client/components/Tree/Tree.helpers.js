import { Map, List, fromJS } from "immutable";

import { MINTOP, NODEHEIGHT, NODEWIDTH, NODEHSPACING, NODEVSPACING, NODEHPADDING,
         NODEVPADDING } from "./Tree.constants";
import { getKPIChildren, getRootKPI } from "../../dataUtils";


export function getElementsPositions(appState) {
    // get the list of all drill down nodes
    const treeState = appState.getIn(["tree"]);
    
    // initialize with the root
    let nodePositions = List([Map({
        "kpiId": getRootKPI(appState),
        "style": getInitialPosition()
    })]);

    let connectorPositions = List();
    
    // base case, list is empty, show only root
    if (treeState.size === 0) {
        return Map({
            node: nodePositions,
            connector: connectorPositions
        });
    }
    let min = Infinity;
    // loop the state getting the children and computing their position
    treeState.forEach((parentId) => {
        let children = getKPIChildren(parentId, appState);
        const parentPosition = nodePositions.filter(pos =>
            pos.get("kpiId") === parentId
        ).get(0).get("style");
        if (children.size) {
            let connPos = computeConnPos(parentId, children.size, parentPosition);

            children.forEach((kpiId, childrenIndex, children) => {
                const nodePosition = computeNodePosition(kpiId, childrenIndex, children.size, parentPosition);
                min = Math.min(min, nodePosition.getIn(["style", "top"]));
                nodePositions = nodePositions.push(nodePosition);
                // insert position of each connector children
                connPos = connPos.update("children", children => 
                    children.withMutations(children => children.push(Map({
                        "key": kpiId, 
                        "style": Map({"top": childrenIndex*109, "width": 15, "left": -1})
                    })))
                );
            });

            connectorPositions = connectorPositions.push(connPos);
        }
    });
    return Map({
        node: applyOffset(nodePositions, min),
        connector: applyOffset(connectorPositions, min)
    });

    function computeNodePosition(kpiId, index, numSiblings, parentPosition) {
        const left = parentPosition.get("left") + NODEWIDTH + NODEHSPACING;
        const height = ((numSiblings * NODEHEIGHT) + ((numSiblings - 1) * NODEVSPACING));
        const topMost = ((parentPosition.get("top") + NODEHEIGHT / 2) - (height / 2));
        const top = topMost + (index * (NODEHEIGHT + NODEVSPACING));
        return Map({
            "kpiId": kpiId,
            "style": Map({"left": left, "top": top})
        });
    }

    function computeConnPos(kpiId, numSiblings, parentPosition) {
        const height = ((numSiblings * NODEHEIGHT) + ((numSiblings - 1) * NODEVSPACING));
        const topMost = ((parentPosition.get("top") + NODEHEIGHT / 2) - (height / 2));
        return Map({
            "key": kpiId,
            "style": Map({"top": ((parentPosition.get("top") + NODEHEIGHT / 2) - (height / 2) + NODEHEIGHT/2), "left": parentPosition.get("left") + NODEWIDTH}),
            "parent": Map({"top": height/2 - NODEHEIGHT/2, "width": 15}),
            "row": Map({"height": height - NODEHEIGHT}),
            "children": List()
        });
    }

    function applyOffset(positions, min) {
        return positions.map(function(p) {
            return p.updateIn(["style", "top"], function(top) {
                const offset = min < MINTOP ? (-1*min)+MINTOP : 0;
                return top + offset;
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
    return Map({left:20, top:200});
}