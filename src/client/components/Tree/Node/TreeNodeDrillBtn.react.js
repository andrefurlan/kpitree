import React from "react";

export default class TreeNodeDrillBtn extends React.Component {
    handleClick() {
        this.props.actions.drillNode(this.props.kpiId);
    }
    render() {
        var symbol = ">";
        return (
            <button onClick={this.handleClick.bind(this)}>
                {symbol}
            </button>
        );
    }
}