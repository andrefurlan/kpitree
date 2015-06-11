import {getDeployedNodeState} from "./treeUtils"

export function deployNode(appState, kpiId) {
    var state = appState.get();
    var newTree = getDeployedNodeState(kpiId, state);
    appState.set(state.set("tree", newTree), "tree");
}