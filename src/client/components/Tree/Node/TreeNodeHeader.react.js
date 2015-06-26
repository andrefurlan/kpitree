import React from "react";
import TreeNodeDrillBtn from "./TreeNodeDrillBtn.react";

let TreeNodeHeader = React.createClass({
    render: function() {
        return (
            <div className="NodeHeader">
                <div className="NodeHeader-name">
                    <span> {this.props.kpiName} </span>
                </div>
                <div className="NodeHeader-button">
                    <TreeNodeDrillBtn
                        kpiId={this.props.kpiId}
                        actions={this.props.actions}/>
                </div>
            </div>
        );
    }
});

export default TreeNodeHeader;