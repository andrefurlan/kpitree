import {getNewTreeState} from "../Tree.helpers.js";

export default class NodeActions {

    constructor(appState) {
        this._appState = appState;
    }

    // Invariant: Deployed nodes are ordered
    drillNode(kpiId) {
        const state = this._appState;
        const treeCursor = state.cursor(['tree']);

        treeCursor(treeState => {
            return getNewTreeState(kpiId, treeState, state);
        });
    }
}

