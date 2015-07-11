import React from "react";
import TreeNodeDrillBtn from "./TreeNodeDrillBtn.react";

class TreeNodeHeader extends React.Component {
    render() {
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
}

export default TreeNodeHeader;