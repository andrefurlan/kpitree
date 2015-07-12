import React from "react";

class PeriodPicker extends React.Component {

    onKeyEnter(value) {
        this.props.actions.saveEdit(value);
    }
    onKeyEscape(e) {
        e.target.value = "";
    }
    onInputKeyDown(e) {
        switch (e.key) {
            case 'Enter': 
                this.onKeyEnter(e.target.value);
                break;
            case 'Escape':
                this.onKeyEscape(e);
                break;
        }
    }
    render() {
        return (
            <input
                type="text"
                name="datePicker"
                onKeyDown={this.onInputKeyDown.bind(this)}>
            </input>
        );
    }
}

export default PeriodPicker;