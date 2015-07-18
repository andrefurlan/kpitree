export default class PeriodPickerActions {

    constructor(appState) {
        this._appState = appState;
    }

    changeYear(yearCode, index) {
        const state = this._appState.get();
        let periodPickerState = state.get("periodPicker").updateIn(["year"], value => yearCode);
        periodPickerState = periodPickerState.updateIn(["indexYear"], value => index);
        // use cursors, only set the specific part of the state
        const newState = state.set("periodPicker", periodPickerState);
        this._appState.set(newState);
    }

    changeMonth(monthCode, index) {
        const state = this._appState.get();
        let periodPickerState = state.get("periodPicker").updateIn(["month"], value => monthCode);
        periodPickerState = periodPickerState.updateIn(["indexMonth"], value => index);
        // use cursors, only set the specific part of the state
        const newState = state.set("periodPicker", periodPickerState);
        this._appState.set(newState);

    }
}
