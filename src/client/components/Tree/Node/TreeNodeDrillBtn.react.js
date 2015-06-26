import React from "react";


let TreeNodeDrillBtn = React.createClass({
    handleClick: function() {
        this.props.actions.drillNode(this.props.kpiId);
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

export default TreeNodeDrillBtn;