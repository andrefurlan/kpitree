import React from "react";
import Router from "react-router";
import injectTapEventPlugin from "react-tap-event-plugin";

import { routes } from "./AppRoutes";

window.React = React;

//Needed for onTouchTap
//Can go away when react 1.0 release
//Check this repo:
//https://github.com/zilverline/react-tap-event-plugin
injectTapEventPlugin();

Router.create({
    routes: routes,
    scrollBehavior: Router.ScrollToTopBehavior
})
.run(function (Handler) {
    React.render(<Handler/>, document.getElementById("container"));
});
