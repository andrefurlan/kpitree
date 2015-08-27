import React from "react";
import {RouteHandler} from "react-router";
import {AppBar, AppCanvas, LeftNav, Styles} from "material-ui";

import State from "../State.js";
import initialState from "../InitialStateWithFakeData.js";

import '../UglyTheme.css';

let ThemeManager = new Styles.ThemeManager();

class Master extends React.Component {

    constructor() {
        super();
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
            }
        };
    }

    getChildContext() {
        return {
            muiTheme: ThemeManager.getCurrentTheme()
        };
    }

    componentWillMount() {
        ThemeManager.setPalette({accent1Color: Styles.Colors.amber700});
        ThemeManager.setComponentThemes({
            toolBar: {
                height: 10
            }
        });
    }

    render() {
        const style = this.getStyles();
        const menuItems = [
            {route: "home", text: "Home"},
            {route: "demo", text: "Start demo"}
        ];
        const selectedIndex = this._getSelectedIndex.bind(this)(menuItems);
        return (
            <AppCanvas>
                <AppBar
                    onLeftIconButtonTouchTap={this._onLeftIconButtonTouchTap.bind(this)}
                    style={style.appBar}
                    title="KPI Tree"
                    zDepth={0} />
                <LeftNav
                    docked={false}
                    menuItems={menuItems}
                    onChange={this._onLeftNavChange.bind(this)}
                    ref="leftNav"
                    selectedIndex={selectedIndex} />
                <RouteHandler {...this.state} />
            </AppCanvas>
        );
    }

    _getSelectedIndex(menuItems) {
        let currentItem;
        for (let i = menuItems.length - 1; i >= 0; i--) {
            currentItem = menuItems[i];
            if (currentItem.route && this.context.router.isActive(currentItem.route)) {
                return i;
            }
        }
    }

    _onLeftNavChange(e, key, payload) {
        this.context.router.transitionTo(payload.route);
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
