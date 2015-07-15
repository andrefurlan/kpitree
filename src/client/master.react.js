import React from "react";
import { RouteHandler } from "react-router";
import { AppBar, AppCanvas, LeftNav, RaisedButton, Styles } from "material-ui";

import './uglyTheme.css';

let ThemeManager = new Styles.ThemeManager();

class Master extends React.Component {

    constructor() {
        super();
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
        }
    }

    render() {
        const style = this.getStyles();
        const menuItems = [
            { route: 'home', text: 'Home' },
            { route: 'demo', text: 'Start demo' }
        ];
        const selectedIndex = this._getSelectedIndex.bind(this)(menuItems);
        return (
            <AppCanvas>
                <AppBar
                    onLeftIconButtonTouchTap={ this._onLeftIconButtonTouchTap.bind(this) }
                    style={ style.appBar }
                    title="KPI Tree"
                    zDepth={0} />
                <LeftNav
                    ref="leftNav"
                    docked={ false }
                    menuItems={ menuItems }
                    selectedIndex={selectedIndex}
                    onChange={ this._onLeftNavChange.bind(this) } />
                <RouteHandler />
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