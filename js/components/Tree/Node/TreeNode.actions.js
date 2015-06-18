export default class NodeActions {

    constructor(appState) {
        this._appState = appState;
    }

    drillNode(kpiId) {
        //stub
        //treat undrill case
        const state = this._appState.get();
        const newTree = state.get("tree").push(kpiId);
        // use cursors, only set the specific part of the state
        const newState = state.set("tree", newTree);
        this._appState.set(newState);
    }

}