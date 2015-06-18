export default class NodeActions {

    constructor(appState) {
        this._appState = appState;
    }

    // Invariant: Deployed nodes are ordered
    drillNode(kpiId) {
        const state = this._appState.get();
        const treeState = state.get("tree");
        const index = treeState.findIndex((id) => {return id === kpiId;});
        let newTree;
        if (index === -1) {
            // drill down the kpi
            newTree = treeState.push(kpiId);
        } else {
            // drill up the kpi. Close all the nodes down from the node with kpiID
            newTree = treeState.splice(index, treeState.size - index);
        }
        console.log(newTree.toJS());
        // use cursors, only set the specific part of the state
        const newState = state.set("tree", newTree);
        this._appState.set(newState);
    }

}