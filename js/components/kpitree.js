import React from "react";

// (function(React, global) {
//
//     if (!global.app) {
//         global.app = {};
//         global.app.functions = {};
//         global.app.components = {};
//         global.app.state = {};
//     }

let KPITree = React.createClass({
    getDefaultProps: function() {
        return {
        };
    },

    render: function() {
        return (
            <div className="KPITree">
                <TreeNode left={10} top={165}/>
                <TreeNode left={300} top={110}/>
                <TreeNode left={300} top={210}/>
            </div>
        );
    }
});

let TreeNode = React.createClass({
    getDefaultProps: function() {
        return {
            top: 50,
            left: 10
        };
    },
    render: function() {
        var nodeStyle = {left: this.props.left, top: this.props.top};
        return (
            <div className="TreeNode" style={nodeStyle}>
                <TreeNodeHeader />
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
                    <TreeNodeDeployBtn />
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
    getInitialState: function() {
        return {deployed: false};
    },
    getDefaultProps: function() {
        return {
            deploy: function(flag) {
                var text = flag ? "deployed" : "not deployed";
                console.log("oh oh " + text);
            }
        };
    },
    handleClick: function() {
        this.props.deploy(this.deployed);
        this.setState({deployed: !this.state.deployed});
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
