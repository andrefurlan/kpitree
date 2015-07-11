// import {getNewTreeState} from "../Tree.utils";
import { Map } from "immutable";

export default class PeriodPickerActions {

    constructor(appState) {
        this._appState = appState;
    }

    // Invariant: Deployed nodes are ordered
    saveEdit(value) {
        const state = this._appState.get();
        const perioPickerState = Map({"period": value});
        // use cursors, only set the specific part of the state
        const newState = state.set("periodPicker", perioPickerState);
        this._appState.set(newState);

    }
}