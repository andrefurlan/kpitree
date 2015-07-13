import React from "react";
import Router from "react-router";
import { routes } from "./app-routes";
import Master from "./master";
import './uglyTheme.css';


// Router.run(routes, function(Handler) {
//     React.render(<Handler/>, document.getElementById("container"));
// });

Router.create({
    routes: routes,
    scrollBehavior: Router.ScrollToTopBehavior
})
.run(function (Handler) {
    React.render(<Handler/>, document.getElementById("container"));
});