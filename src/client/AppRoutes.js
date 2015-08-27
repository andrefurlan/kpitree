/*eslint no-unused-vars:0*/
import React from "react";

import {DefaultRoute, Route} from "react-router";

import Master from "./components/Master.react.js";
import Home from "./components/Pages/Home.react.js";
import Demo from "./components/Pages/Demo.react.js";

export const routes = (
    <Route handler={Master} name="root" path="/">
        <DefaultRoute handler={Home} name="home" />
        <Route handler={Demo} name="demo" />
    </Route>
);
