import React from "react";

// for props validation
import NodeActions from "./TreeNode.actions.js";

import {FlatButton, FontIcon} from "material-ui";

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
        const styles = this.getStyles();
        return (
            <FlatButton
                onClick={this.handleClick.bind(this)}
                style={styles.button}>
                <FontIcon
                    className="material-icons"
                    style={styles.icon}> chevron_right
                </FontIcon>
            </FlatButton>
        );
    }
}

TreeNodeDrillBtn.propTypes = {
    actions: React.PropTypes.instanceOf(NodeActions).isRequired,
    kpiId: React.PropTypes.string.isRequired
};
