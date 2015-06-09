import React from "react";
import {deployNode} from "../actions";
let KPITree = React.createClass({

    render: function() {
        var appState = this.props.appState;
        var treeState = appState.get().get("tree");
        return (
            <div className="KPITree">
                {treeState.map(function(node) {
                    return <TreeNode
                        appState={appState}
                        key={node.get("kpiId")}
                        left={node.getIn(["position", "x"])}
                        top={node.getIn(["position", "y"])}/>;
                })}
            </div>
        );
    }
});

let TreeNode = React.createClass({

    render: function() {
        var nodeStyle = {left: this.props.left, top: this.props.top};
        return (
            <div className="TreeNode" style={nodeStyle}>
                <TreeNodeHeader appState={this.props.appState}/>
                <TreeNodeBody />
            </div>
        );
    }
});

let TreeNodeHeader = React.createClass({
    render: function() {
        return (
            <div className="NodeHeader">
                <div className="NodeHeader-name">
                    <span> header </span>
                </div>
                <div className="NodeHeader-button">
                    <TreeNodeDeployBtn appState={this.props.appState}/>
                </div>
            </div>
        );
    }
});

let TreeNodeBody = React.createClass({
    render: function() {
        var delta = "\u0394%";
        return (
            <div className="NodeBody">
                <div className="NodeBody-row">
                    <div className="NodeBody-label"> TARGET </div>
                    <div className= "NodeBody-value"> 0.0 </div>
                </div>
                <div className="NodeBody-row">
                    <div className= "NodeBody-label"> ACTUAL </div>
                    <div className= "NodeBody-value"> 0.0 </div>
                </div>
                <div className="NodeBody-row">
                    <div className= "NodeBody-label"> {delta}</div>
                    <div className= "NodeBody-value-dev"> - </div>
                    <div className= "NodeBody-flag"> </div>
                </div>
            </div>
        );
    }
});

let TreeNodeDeployBtn = React.createClass({
    handleClick: function() {
        deployNode(this.props.appState);
    },
    render: function() {
        var symbol = ">";
        return (
            <button onClick={this.handleClick}>
                {symbol}
            </button>
        );
    }
});

export default KPITree;
    // global.app.components.KPITree = KPITree;
    // global.app.components.TreeNode = TreeNode;
    // global.app.components.TreeNodeBody = TreeNodeBody;
    // global.app.components.TreeNodeHeader = TreeNodeHeader;
    // global.app.components.TreeNodeDeployBtn = TreeNodeDeployBtn;

// })(window.React, window);
