import React from "react";
import { FlatButton, FontIcon, Styles } from "material-ui";

export default class TreeNodeDrillBtn extends React.Component {
    handleClick() {
        this.props.actions.drillNode(this.props.kpiId);
    }

    getStyles() {
        return {
            "button": {
                minHeight: "100%",
                minWidth: "100%",
                lineHeight: 0
            },
            "icon": {
                fontSize: 20,
                verticalAlign: "middle"
            }
        };
    }
    render() {
        var symbol = ">";
        var styles = this.getStyles();
        return (
            <FlatButton
                style={ styles.button }
                onClick={ this.handleClick.bind(this) } >
                <FontIcon style={ styles.icon } className="material-icons">chevron_right</FontIcon>
            </FlatButton>
        );
    }
}