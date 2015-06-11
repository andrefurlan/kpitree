import React from "react";
import TreeNodeHeader from "./TreeNodeHeader";
import TreeNodeBody from "./TreeNodeBody";

let TreeNode = React.createClass({

    render: function() {
        var nodeStyle = {left: this.props.left, top: this.props.top};
        return (
            <div className="TreeNode" style={nodeStyle}>
                <TreeNodeHeader 
                	appState={this.props.appState}
                	kpiId={this.props.kpiId}
                    kpiName={this.props.kpiName}/>
                <TreeNodeBody
                    appState={this.props.appState}
                    kpiId={this.props.kpiId}
                    targetValue={this.props.targetValue}
                    actualValue={this.props.targetValue}
                    deltaValue={this.props.deltaValue}/>
            </div>
        );
    }
});

export default TreeNode;