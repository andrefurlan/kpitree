import {getDeployedNodeState} from "./functions"

export function deployNode(appState, kpiId) {
    var state = appState.get();
    var newTree = getDeployedNodeState(state, kpiId);
    appState.set(state.set("tree", newTree), "tree");
}