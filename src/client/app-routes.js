import React from "react";
import Router from "react-router";
import { DefaultRoute, Link, Route, Redirect, RouteHandler } from "react-router";

import Master from "./master";
import KPITreeHandler from "./components/Tree/Tree.react.js";


export const routes = (
    <Route handler={Master} name="master" path="/" >
    	<Route handler={KPITreeHandler} name="kpitree" path="/kpitree" />
    </Route>
);