import React from "react";
import Router from "react-router";
import { DefaultRoute, Link, Route, Redirect, RouteHandler } from "react-router";

import Master from "./master";
import Tree from "./components/Tree/Tree.react.js";


export const routes = (
    <Route name="root" path="/" handler={Master}>
    	<Route name="kpitree" handler={Tree} />
    </Route>
);