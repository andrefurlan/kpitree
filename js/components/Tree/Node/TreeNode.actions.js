import {getNewTreeState} from "../Tree.utils";

export default class NodeActions {

    constructor(appState) {
        this._appState = appState;
    }

    // Invariant: Deployed nodes are ordered
    drillNode(kpiId) {
        const state = this._appState.get();
        const treeState = state.get("tree");
        
        const newTreeState = getNewTreeState(kpiId, treeState, this._appState);

        console.log(newTreeState.toJS());
        // use cursors, only set the specific part of the state
        const newState = state.set("tree", newTreeState);
        this._appState.set(newState);

    }
}