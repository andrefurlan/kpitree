import React from "react";

class TreeNodeBody extends React.Component {
    render() {
        var delta = "\u0394%";
        return (
            <div className="NodeBody">
                <div className="NodeBody-row">
                    <div className="NodeBody-label"> TARGET </div>
                    <div className= "NodeBody-value"> {this.props.targetValue} </div>
                </div>
                <div className="NodeBody-row">
                    <div className= "NodeBody-label"> ACTUAL </div>
                    <div className= "NodeBody-value"> {this.props.actualValue} </div>
                </div>
                <div className="NodeBody-row">
                    <div className= "NodeBody-label"> {delta}</div>
                    <div className= "NodeBody-value-dev"> {this.props.deltaValue} </div>
                    <div className= "NodeBody-flag"> </div>
                </div>
            </div>
        );
    }
}

export default TreeNodeBody;