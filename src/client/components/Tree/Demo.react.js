import React from "react";
import { RouteHandler } from "react-router";
import { Styles } from "material-ui";

import State from "../../state";
import initialState from "../../initialStateWithFakeData";

import Tree from "./Tree.react.js";

class Demo extends React.Component {

    constructor(props) {
        super(props);
        // Set initial state.
        this.state = this.getState();
    }

    update(newState) {
        this.setState(newState);
    }

    getState() {
        const initialAppState = new State(initialState(), this.update.bind(this));
        return { appState: initialAppState };
    }

    render() {
        return (
            <Tree {...this.state} />
        );
    }

}

Demo.contextTypes = {
    router: React.PropTypes.func
};

export default Demo;