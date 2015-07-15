import React from "react";

class TreeNodeBody extends React.Component {
    render() {
        const delta = "\u0394%";
        const style = {backgroundColor: this.props.flagColor}
        return (
            <div className="NodeBody">
                <div className="NodeBody-row">
                    <div className="NodeBody-label"> Target </div>
                    <span className= "NodeBody-value"> {this.props.targetValue} </span>
                </div>
                <div className="NodeBody-row">
                    <div className= "NodeBody-label"> Actual </div>
                    <div className= "NodeBody-value"> {this.props.actualValue} </div>
                </div>
                <div className="NodeBody-row">
                    <div className= "NodeBody-label"> {delta}</div>
                    <div className= "NodeBody-value-dev"> {this.props.deltaValue} </div>
                    <div className= "NodeBody-flag" style={style}> </div>
                </div>
            </div>
        );
    }
}

export default TreeNodeBody;