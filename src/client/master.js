import React from "react";
import { RouteHandler } from "react-router";
import { AppBar, AppCanvas, IconButton, Menu, Styles } from "material-ui";

import State from "./state";
import initialState from "./initialStateWithFakeData";

let ThemeManager = new Styles.ThemeManager();

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
    getChildContext() {
        return {
            muiTheme: ThemeManager.getCurrentTheme()
        }
    }
    render() {
        return (
            <AppCanvas>
                <AppBar
                    onLeftIconButtonTouchTap={this._onLeftIconButtonTouchTap.bind(this)}
                    title="{title}"
                    zDepth={0}>
                </AppBar>
                <RouteHandler />
            </AppCanvas>
        );
        // return (
        //     <div className="master">
        //         <nav>
        //             <Link to="root">Home</Link>
        //             <Link to="kpitree">KPI Tree</Link>
        //         </nav>
        //         <RouteHandler {...this.state}/>
        //     </div>
        // );
    }

    _onLeftIconButtonTouchTap() {
        window.alert("abra-te cesamo!")
    }

}

Master.contextTypes = {
    router: React.PropTypes.func
};

Master.childContextTypes = {
    muiTheme: React.PropTypes.object
};

export default Master;