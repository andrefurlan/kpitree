import React from "react";
import TreeNodeDeployBtn from "./TreeNodeDeployBtn";

let TreeNodeHeader = React.createClass({
    render: function() {
        return (
            <div className="NodeHeader">
                <div className="NodeHeader-name">
                    <span> {this.props.kpiName} </span>
                </div>
                <div className="NodeHeader-button">
                    <TreeNodeDeployBtn
                        appState={this.props.appState}
                        kpiId={this.props.kpiId}
                        deployFn={this.props.deployFn}/>
                </div>
            </div>
        );
    }
});

export default TreeNodeHeader;