import React from "react";
import Tree from "./Tree.react.js";

// for props validation
import State from "../../State.js";

class TreeContainer extends React.Component {

    getStyles() {
        return {
            "KPITreeContainer": {
                height: "calc(100% - 32px)",
                width: "100%",
                overflow: "auto"
            },
            "scrollContainer": {
                height: "100%",
                width: "100%",
                position: "relative",
                overflow: "auto"
            }
        };
    }

    render() {
        const appState = this.props.appState;
        const styles = this.getStyles();
        return (
            <div ref="KPITreeContainer" style={styles.KPITreeContainer} >
                <div style={styles.scrollContainer}>
                    <Tree appState={appState}/>
                </div>
            </div>
        );
    }
}

TreeContainer.propTypes = {
    appState: React.PropTypes.instanceOf(State).isRequired
};

export default TreeContainer;
