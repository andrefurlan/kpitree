import React from "react";

// for props validation
import State from "../../State.js";

import Connector from "./Connector.react.js";
import TreeNode from "./Node/TreeNode.react.js";
import NodeActions from "./Node/TreeNode.actions.js";

import {
    MINBOTTOM,
    MINRIGHT,
    MINTOP
} from "./Tree.constants.js";

import {
    getNodeMetadata,
    getConnectorMetadata
} from "./Tree.helpers.js";

import {
    getKPIData
} from "../../DataHelpers.js";

class KpiTree extends React.Component {

    getStyles() {
        return {
            "KPITree": {
                height: "1000px",
                width: "110%",
                position: "relative"
            }
        };
    }

    render() {
        const appState = this.props.appState;
        // the tree state is just a array of deployed kpis
        const nodesMetadata = getNodeMetadata(appState);
        const connectorsMetadata = getConnectorMetadata(appState);
        const nodeActions = new NodeActions(appState);

        const styles = this.getStyles();
        // TODO: fix this height and width
        // styles.KPITree.height = (nodesMetadata.get("bottom") - nodesMetadata.get("top")) + MINBOTTOM + MINTOP;
        styles.KPITree.width = (nodesMetadata.get("right") + MINRIGHT);
        // TODO: refactor this urgently!
        return (
            <div ref="KPITree" style={styles.KPITree}>
                {nodesMetadata.get("node").map((node) => {
                    const kpiId = node.get("kpiId");
                    const position = node.get("style");
                    const kpiData = getKPIData(kpiId, appState, true);

                    return (
                        <TreeNode
                            actions = {nodeActions}
                            data = {kpiData}
                            key = {kpiId}
                            kpiId = {kpiId}
                            position = {position}/>
                    );
                })}

                {connectorsMetadata.get("connector").map((con) => {
                    return (
                        <Connector
                            children={con.get("children")}
                            connectorStyle={con.get("style")}
                            key={con.get("key")}
                            parentConStyle={con.get("parent")}
                            rowConStyle={con.get("row")} />
                    );
                })}
            </div>
        );
    }
}

KpiTree.propTypes = {
    appState: React.PropTypes.instanceOf(State).isRequired
};

export default KpiTree;
