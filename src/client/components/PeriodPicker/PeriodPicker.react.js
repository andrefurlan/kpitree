import React from "react";

let PeriodPicker = React.createClass({
    
    
    onKeyEnter: function(value) {
        this.props.actions.saveEdit(value)
    },
    onInputKeyDown: function(e) {
        switch (e.key) {
            case 'Enter': 
                this.onKeyEnter(e.target.value); break;
            // case 'Escape': this.onKeyEscape(e); break;
        }
    },
    render: function() {
        return (
            <input
                type="text"
                name="datePicker"
                onKeyDown={this.onInputKeyDown}>
            </input>
        );
    }
});

export default PeriodPicker;