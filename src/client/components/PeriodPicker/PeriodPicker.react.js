import React from "react";
import { DropDownMenu, ToolbarSeparator, Styles } from "material-ui";

class PeriodPicker extends React.Component {

    onYearIndexChange(e, key, payload) {
        this.props.actions.changeYear(payload.code, payload.payload);
    }

    onMonthIndexChange(e, key, payload) {
        this.props.actions.changeMonth(payload.code, payload.payload);
    }

    getStyles() {
        return {
            "menuYear": {
                width: 100,
                height: 32
            },
            "menuMonth": {
                width: 152,
                height: 32,
                paddingLeft: 30
            },
            "toolbar": {
                paddingLeft: 24,
                paddingRight: 24,
                height: 32,
                backgroundColor: "white"
                // borderBottom: "solid 1px"
            },
            "icon": {
                fill: Styles.Colors.grey600,
                right: 0,
                top: 1
            },
            "underline": {
                borderColor: Styles.Colors.grey600,
                width: 100,
                margin: "-1px 0px"
            },
            "underlineMonth": {
                borderColor: Styles.Colors.grey600,
                width: 122,
                margin: "-1px 0px"
            },
            "menuItem": {
                paddingLeft: 14
            },
            "label": {
                color: Styles.Colors.grey600,
                // height: 36,
                lineHeight: 2,
                paddingLeft: 14
            },
            "separator": {
                height: 16,
                // marginBottom: 8,
                // marginTop: 8,
                // width: 0,
                // borderRight: "solid 1px",
                borderRightColor: Styles.Colors.grey600
                // position: "relative",
                // display: "inline-block",
                // paddingLeft: 30
            }
        };
    }

    render() {

        const yearOptions = [
            { payload: "0", text: "2005", code: "2005" },
            { payload: "1", text: "2006", code: "2006" }
        ];

        const monthOptions = [
            { payload: "0", text: "January",   code: "01" },
            { payload: "1", text: "February",  code: "02" },
            { payload: "2", text: "March",     code: "03" },
            { payload: "3", text: "April",     code: "04" },
            { payload: "4", text: "May",       code: "05" },
            { payload: "5", text: "June",      code: "06" },
            { payload: "6", text: "July",      code: "07" },
            { payload: "7", text: "August",    code: "08" },
            { payload: "8", text: "September", code: "09" },
            { payload: "9", text: "October",   code: "10" },
            { payload: "10", text: "November",  code: "11" },
            { payload: "11", text: "December",  code: "12" }
        ];

        const selectedYearIndex = Number(this.props.state.get("indexYear"));
        const selectedMonthIndex = Number(this.props.state.get("indexMonth"));
        const styles = this.getStyles();

        return (
            <div style={ styles.toolbar }>
                <DropDownMenu
                    autoWidth={ false }
                    style={ styles.menuYear }
                    menuItemStyle={ styles.menuItem }
                    iconStyle={ styles.icon }
                    underlineStyle={ styles.underline }
                    labelStyle={ styles.label }
                    menuItems={ yearOptions }
                    onChange={ this.onYearIndexChange.bind(this) }
                    selectedIndex={ selectedYearIndex } >
                </DropDownMenu>
                <DropDownMenu
                    autoWidth={ false }
                    style={ styles.menuMonth }
                    menuItemStyle={ styles.menuItem }
                    iconStyle={ styles.icon }
                    underlineStyle={ styles.underlineMonth }
                    labelStyle={ styles.label }
                    menuItems={ monthOptions }
                    onChange={ this.onMonthIndexChange.bind(this) }
                    selectedIndex={ selectedMonthIndex } >
                </DropDownMenu>
            </div>
        );
    }
}

PeriodPicker.contextTypes = {
    muiTheme: React.PropTypes.object,
}

export default PeriodPicker;