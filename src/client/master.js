import State from "./state";
import initialState from "./initialStateWithFakeData";
import React from "react";
import { Link, Route, RouteHandler } from "react-router";

class Master extends React.Component {
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
        return {appState: initialAppState};
    }

    render() {
        return (
            <div className="master">
                <nav>
                    <Link to="master">Home</Link>
                    <Link to="kpitree">KPI Tree</Link>
                </nav>
                <RouteHandler {...this.state}/>
            </div>
        );
    }
}

export default Master;