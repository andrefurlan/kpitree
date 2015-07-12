import React from "react";
import TreeNodeHeader from "./TreeNodeHeader.react";
import TreeNodeBody from "./TreeNodeBody.react";
import * as helpers from "./TreeNode.helpers";

class TreeNode extends React.Component {

    render() {
        return (
            <div className="TreeNode" style={this.props.style}>
                <TreeNodeHeader 
                    kpiId={this.props.kpiId}
                    kpiName={helpers.getKpiName(this.props.data)}
                    actions={this.props.actions}/>
                <TreeNodeBody
                    kpiId={this.props.kpiId}
                    targetValue={helpers.getTargetValue(this.props.data)}
                    actualValue={helpers.getActualValue(this.props.data)}
                    deltaValue={helpers.getDelta(this.props.data)}
                    flagColor={helpers.getFlagColor(this.props.data)}/>
            </div>
        );
    }
}

export default TreeNode;