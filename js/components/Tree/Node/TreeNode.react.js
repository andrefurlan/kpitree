import React from "react";
import TreeNodeHeader from "./TreeNodeHeader.react";
import TreeNodeBody from "./TreeNodeBody.react";
import * as utils from "./TreeNode.utils";

let TreeNode = React.createClass({

    render: function() {
        const nodeStyle = {left: this.props.left, top: this.props.top};

        return (
            <div className="TreeNode" style={nodeStyle}>
                <TreeNodeHeader 
                    kpiId={this.props.kpiId}
                    kpiName={utils.getKpiName(this.props.data)}
                    actions={this.props.actions}/>
                <TreeNodeBody
                    kpiId={this.props.kpiId}
                    targetValue={utils.getTargetValue(this.props.data)}
                    actualValue={utils.getActualValue(this.props.data)}
                    deltaValue={utils.getDelta(this.props.data)}/>
            </div>
        );
    }
});

export default TreeNode;