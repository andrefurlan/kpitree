import React from "react";
import Router from "react-router";
import { DefaultRoute, Link, Route, Redirect, RouteHandler } from "react-router";

import Master from "./master.react.js";
import Home from "./components/HomePage/home.react.js";
import Demo from "./components/Tree/Demo.react.js";


export const routes = (
    <Route name="root" path="/" handler={Master}>
    	<Route name="home" handler={Home} />
    	<DefaultRoute name="demo" handler={Demo} />
    </Route>
);