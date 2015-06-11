import React from "react";
import {deployNode} from "../actions";

let TreeNodeDeployBtn = React.createClass({
    handleClick: function() {
        deployNode(this.props.appState, this.props.kpiId);
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

export default TreeNodeDeployBtn;