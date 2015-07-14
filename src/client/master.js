import React from "react";
import { RouteHandler } from "react-router";
import { AppBar, AppCanvas, LeftNav, IconButton, Menu, Paper, RaisedButton, Styles } from "material-ui";

import State from "./state";
import initialState from "./initialStateWithFakeData";

import './uglyTheme.css';

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

    getStyles() {
        return {
            appBar: {
                backgroundColor: Styles.Colors.amber500
            },
            middle: {
                width: "100%",
                height: "100%",
                paddingTop: "64",
                paddingBottom: "30",
                backgroundColor: Styles.Colors.grey50,
                textAlign: "center"
            },
            description: {
                paddingTop: "30",
                paddingBottom: "50",
                backgroundColor: Styles.Colors.amber500,
            },
            button: {
                marginTop: "100",
                marginBottom: "50"
            },
            footer: {
                width: "100%",
                height: "100",
                paddingTop: "80",
                paddingBottom: "90",
                backgroundColor: Styles.Colors.grey900
            }
        };
    }

    getChildContext() {
        return {
            muiTheme: ThemeManager.getCurrentTheme()
        }
    }
    render() {
        const style = this.getStyles();
        const clickHandle = function(e) {window.alert("Start demo")};
        const menuItems = [
            { route: 'kpitree', text: 'Start demo' }
        ];
        return (
            <AppCanvas style={style.canvas}>
                <AppBar
                    onLeftIconButtonTouchTap={this._onLeftIconButtonTouchTap.bind(this)}
                    style={style.appBar}
                    title="KPI Tree"
                    zDepth={0}>
                </AppBar>
                <LeftNav ref="leftNav" docked={false} menuItems={menuItems} />
                <RouteHandler />
                <div style={style.middle}>
                    <div style={style.description}>
                        <h2>
                            Small app to analyze KPI performance using a tree diagram
                        </h2>
                        <RaisedButton label="Demo" onClick={clickHandle} style={style.button} />
                    </div>
                    <div>
                        <p>
                            This is work in progress, but it will eventually be really cool
                        </p>
                    </div>
                </div>
            </AppCanvas>
        );
    }

    _onLeftIconButtonTouchTap() {
        this.refs.leftNav.toggle();
    }

}

Master.contextTypes = {
    router: React.PropTypes.func
};

Master.childContextTypes = {
    muiTheme: React.PropTypes.object
};

export default Master;