import {Map, List, fromJS} from "immutable";
import * as k from "./Tree.constants";
import * as dataUtils from "../../dataUtils";

export function getNodePositions(appState) {
    //stub
    const treeState = appState.getIn(["tree"]);
    if (treeState.size) {
        return List([
            Map({
                "kpiId": "1",
                "position": getInitialPosition()
            }),
            Map({
                "kpiId": "2",
                "position": Map({"x": 300, "y": 120})
            }),
            Map({
                "kpiId": "3",
                "position": Map({"x": 300, "y": 240})
            })
        ]);
    } else {
        return List([Map({
            "kpiId": "1",
            "position": getInitialPosition()
        })]);    
    }
}

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


