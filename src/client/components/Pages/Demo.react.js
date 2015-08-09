import React from "react";

import Tree from "../Tree/Tree.react.js";

class Demo extends React.Component {

    render() {
        const appState = this.props.appState;
        return (
            <Tree appState={ appState }/>
        );
    }

}

Demo.contextTypes = {
    router: React.PropTypes.func
};

Demo.propTypes = {
    appState: React.PropTypes.object.required
};

export default Demo;
