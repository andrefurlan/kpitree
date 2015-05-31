
import React from "react";
import Router from "react-router";
import {Link, Route, RouteHandler} from "react-router";

import KPITreeHandler from "./components/kpitree.js";

let App = React.createClass({
    render() {
        return (
            <div className="nav">
                <Link to="app">Home</Link>
                <Link to="kpitree">KPI Tree</Link>
                <RouteHandler/>
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
