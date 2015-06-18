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



    // if (treeState.size === 1) {
    //     return List([
    //         Map({
    //             "kpiId": "1",
    //             "position": getInitialPosition()
    //         }),
    //         Map({
    //             "kpiId": "2",
    //             "position": Map({"x": 280, "y": 140})
    //         }),
    //         Map({
    //             "kpiId": "3",
    //             "position": Map({"x": 280, "y": 240})
    //         })
    //     ]);
    // } else if (treeState.size === 2) {
    //     return List([
    //         Map({
    //             "kpiId": "1",
    //             "position": getInitialPosition()
    //         }),
    //         Map({
    //             "kpiId": "2",
    //             "position": Map({"x": 280, "y": 140})
    //         }),
    //         Map({
    //             "kpiId": "3",
    //             "position": Map({"x": 280, "y": 240})
    //         }),
    //         Map({
    //             "kpiId": "4",
    //             "position": Map({"x": 540, "y": 180})
    //         }),
    //         Map({
    //             "kpiId": "5",
    //             "position": Map({"x": 540, "y": 280})
    //         })
    //     ]);
    // } else {
    //     return List([Map({
    //         "kpiId": "1",
    //         "position": getInitialPosition()
    //     })]);    
    // }
export function getInitialPosition(appState) {
    return Map({x:20, y:200});
}

// export function getNewTreeStateOnDrill(kpiId, appState) {

//     // get initial position from parent node in tree state
//     const treeState = appState.getIn(["tree"]);
//     const nodeState = treeState.filter((node) => {return node.get("kpiId") == kpiId;}).get(0);
//     const initialPosition = nodeState.get("position");
//     // get data from kpi
//     const kpiData = dataUtils.getKPIData("kpiId");
//     const children = kpiData.get("children");
//     // const isDrilled = children.isSubset(treeState.map((node) => {return node.get("kpiId");}));
//     // if (isDrilled) {

//     // }

//     return fromJS([
//     {
//         "kpiId": "1",
//         "parentId": "",
//         "position": {"x": 20, "y": 200}
//     }, {
//         "kpiId": "2",
//         "parentId": "1",
//         "position": {"x": 300, "y": 10}
//     }, {
//         "kpiId": "3",
//         "parentId": "2",
//         "position": {"x": 300, "y": 110}
//     }]);
//     // return fromJS([{
//     //         "kpiId": "1",
//     //         "position": {"x": 20, "y": 200}
//     //     }]);

//     // helper functions
//     function calculatePositionLeft(kpiId, state) {
//         // stub
        
//         return 10 * kpiId;
//     }

//     function calculatePositionRight(kpiId, state) {
//         //stub
//         return 65 * kpiId;
//     }
// }


