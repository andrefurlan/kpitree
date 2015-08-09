export default class PeriodPickerActions {

    constructor(appState) {
        this._appState = appState;
    }

    changeYear(yearCode, index) {
        const periodPickerCursor = this._appState.cursor(['periodPicker']);

        periodPickerCursor(periodPickerState => {
            return periodPickerState
                .updateIn(["year"], value => yearCode)
                .updateIn(["indexYear"], value => index);
        });
    }

    changeMonth(monthCode, index) {
        const periodPickerCursor = this._appState.cursor(['periodPicker']);

        periodPickerCursor(periodPickerState => {
            return periodPickerState
                .updateIn(["month"], value => monthCode)
                .updateIn(["indexMonth"], value => index);
        });
    }
}
