import State from "./state";
import initialState from "./initialStateWithFakeData";
import React from "react";
import Router from "react-router";
import {Link, Route, RouteHandler} from "react-router";
import KPITreeHandler from "./components/Tree/Tree.react.js";
import './uglyTheme.css';


let App = React.createClass({
    update: function(newState) {
        this.setState(newState);
    },
    getInitialState: function() {
        const initialAppState = new State(initialState(), this.update);
        return {appState: initialAppState};
    },

    render() {
        return (
            <div className="app">
                <nav>
                    <Link to="app">Home</Link>
                    <Link to="kpitree">KPI Tree</Link>
                </nav>
                <RouteHandler {...this.state}/>
            </div>
        );
    }
});

let routes = (
    <Route handler={App} name="app" path="/" >
      <Route handler={KPITreeHandler} name="kpitree" path="/kpitree" />
    </Route>
);

Router.run(routes, function(Handler) {
    React.render(<Handler/>, document.getElementById("container"));
});
