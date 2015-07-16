import React from "react";
import { DropDownMenu, Styles } from "material-ui";

class PeriodPicker extends React.Component {


    onIndexChange(e, key, payload) {
        this.props.actions.saveEdit(payload.code, payload.payload-1);
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

        const filterOptions = [
            { payload: "1", text: "05/2005", code: "200505" },
            { payload: "2", text: "06/2005", code: "200506" },
            { payload: "3", text: "07/2005", code: "200507" }
        ];

        const selectedIndex = Number(this.props.state.get("index"));
        const styles = this.getStyles();
        return (
            <div style={ styles.toolbar }>
                <DropDownMenu
                    autoWidth={ false }
                    style={ styles.menu }
                    menuItems={ filterOptions }
                    onChange={ this.onIndexChange.bind(this) }
                    selectedIndex={ selectedIndex } >
                </DropDownMenu>
            </div>
        );
    }
}

export default PeriodPicker;