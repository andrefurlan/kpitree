import React from "react";
import { DropDownMenu, Styles } from "material-ui";

class PeriodPicker extends React.Component {


    onYearIndexChange(e, key, payload) {
        this.props.actions.changeYear(payload.code, payload.payload);
    }

    onMonthIndexChange(e, key, payload) {
        this.props.actions.changeMonth(payload.code, payload.payload);
    }

    getStyles() {
        return {
            "menu": {
                width: 192,
                height: 56
            },
            "toolbar": {
                paddingLeft: 24,
                paddingRight: 24,
                height: 56,
                backgroundColor: Styles.Colors.amber100
            }
        };
    }

    render() {

        const yearOptions = [
            { payload: "0", text: "2005", code: "2005" },
            { payload: "1", text: "2006", code: "2006" }
        ];

        const monthOptions = [
            { payload: "0", text: "May",  code: "05" },
            { payload: "1", text: "June", code: "06" },
            { payload: "2", text: "July", code: "07" },
            { payload: "3", text: "August", code: "08" },
            { payload: "4", text: "September", code: "09" }
        ];

        const selectedYearIndex = Number(this.props.state.get("indexYear"));
        const selectedMonthIndex = Number(this.props.state.get("indexMonth"));
        const styles = this.getStyles();
        return (
            <div style={ styles.toolbar }>
                <DropDownMenu
                    autoWidth={ false }
                    style={ styles.menu }
                    menuItems={ yearOptions }
                    onChange={ this.onYearIndexChange.bind(this) }
                    selectedIndex={ selectedYearIndex } >
                </DropDownMenu>
                <DropDownMenu
                    autoWidth={ false }
                    style={ styles.menu }
                    menuItems={ monthOptions }
                    onChange={ this.onMonthIndexChange.bind(this) }
                    selectedIndex={ selectedMonthIndex } >
                </DropDownMenu>
            </div>
        );
    }
}

export default PeriodPicker;