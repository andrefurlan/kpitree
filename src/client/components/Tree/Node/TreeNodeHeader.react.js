import React from "react";

// for props validation
import NodeActions from "./TreeNode.actions.js";

class TreeNodeHeader extends React.Component {

    getStyles() {
        return {
            "root": {
                display: "flex",
                borderBottom: "solid 1px #d9d9d9"
            },
            "name": {
                width: "100%",
                paddingLeft: 5,
                fontWeight: 500,
                fontSize: 15,
                whiteSpace: "nowrap",
                overflow: "hidden",
                textOverflow: "ellipsis"
            },
            "button": {
                width: "18%"
            }
        };
    }

    render() {
        const styles = this.getStyles();
        return (
            <div style={styles.root}>
                <div style={styles.name}>
                    <span> {this.props.kpiName} </span>
                </div>
            </div>
        );
    }
}

TreeNodeHeader.propTypes = {
    actions: React.PropTypes.instanceOf(NodeActions).isRequired,
    kpiId: React.PropTypes.string.isRequired,
    kpiName: React.PropTypes.string
};

export default TreeNodeHeader;
