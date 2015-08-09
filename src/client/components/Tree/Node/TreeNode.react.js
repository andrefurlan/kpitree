import React from "react";
import immutable from 'immutable';
// for props validation
import NodeActions from "./TreeNode.actions.js";

import TreeNodeHeader from "./TreeNodeHeader.react.js";
import TreeNodeBody from "./TreeNodeBody.react.js";
import * as helpers from "./TreeNode.helpers.js";

import {NODEWIDTH} from "../Tree.constants.js";

//TODO: add this css   color: rgba(0, 0, 0, 0.6); background-color: rgba(255, 255, 255, 0.2)
//      when node is not open. It looks pretty cool

class TreeNode extends React.Component {

    getStyles() {
        return {
            "node": {
                width: NODEWIDTH,
                position: "absolute",
                transition: "all 450ms cubic-bezier(0.23, 1, 0.32, 1) 0ms",
                WebkitTapHighlightColor: "rgba(0,0,0,0)",
                boxShadow: "0 1px 6px rgba(0, 0, 0, 0.12), 0 1px 4px rgba(0, 0, 0, 0.24)",
                borderRadius: "2",
                backgroundColor: "rgb(255, 255, 255)"
            }
        };
    }

    render() {
        const styles = this.getStyles();
        const nodeStyle = this.props.position.merge(styles.node).toJS();
        return (
            <div className="TreeNode" style={nodeStyle}>
                <TreeNodeHeader
                    actions={this.props.actions}
                    kpiId={this.props.kpiId}
                    kpiName={helpers.getKpiName(this.props.data)} />
                <TreeNodeBody
                    actualValue={helpers.getActualValueString(this.props.data)}
                    deltaValue={helpers.getDelta(this.props.data)}
                    flagColor={helpers.getFlagColor(this.props.data)}
                    kpiId={this.props.kpiId}
                    targetValue={helpers.getTargetValueString(this.props.data)} />
            </div>
        );
    }
}

TreeNode.propTypes = {
    actions: React.PropTypes.instanceOf(NodeActions).isRequired,
    data: React.PropTypes.instanceOf(immutable.Map).isRequired,
    kpiId: React.PropTypes.string.isRequired,
    position: React.PropTypes.instanceOf(immutable.Map).isRequired
};

export default TreeNode;
