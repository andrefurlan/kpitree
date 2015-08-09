import React from "react";

// for props validation
import State from "../../State.js";

import TreeNode from "./Node/TreeNode.react.js";
import NodeActions from "./Node/TreeNode.actions.js";
import { MINBOTTOM, MINTOP, MINRIGHT } from "./Tree.constants.js";

import { getElementsPositions } from "./Tree.helpers.js";
import { getKPIData } from "../../DataHelpers.js";

class KpiTree extends React.Component {

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
            },
            "KPITree": {
                height: "110%",
                width: "110%",
                position: "relative"
            },
            "connector": {
                position: "absolute",
                display: "flex"
            },
            "connectorParent": {
                borderTop: "solid 1px #d9d9d9",
                position: "relative",
                height: 1
            },
            "connectorChildren": {
                borderBottom: "solid 1px #d9d9d9",
                height: 1,
                position: "relative"
            },
            "connectorRow": {
                borderLeft: "solid 1px #d9d9d9"
            }
        };
    }

    render() {
        const appState = this.props.appState;
        // the tree state is just a array of deployed kpis
        const positions = getElementsPositions(appState);
        const nodeActions = new NodeActions(appState);

        const styles = this.getStyles();
        styles.KPITree.height = (positions.get("bottom") - positions.get("top")) + MINBOTTOM + MINTOP;
        styles.KPITree.width = (positions.get("right") + MINRIGHT);
        // TODO: refactor this urgently!

        return (
                <div ref="KPITreeContainer" style={ styles.KPITreeContainer }>
                    <div style={ styles.scrollContainer }>
                        <div ref="KPITree" style={ styles.KPITree }>
                            {positions.get("node").map((node) => {
                                const kpiId = node.get("kpiId");
                                const position = node.get("style");
                                const kpiData = getKPIData(kpiId, appState, true);

                                return (<TreeNode
                                    actions = {nodeActions}
                                    data = {kpiData}
                                    key = {kpiId}
                                    kpiId = {kpiId}
                                    position = {position}/>
                                );
                            })}

                            {positions.get("connector").map((con) => {
                                const connectorStyle = con.get("style").merge(styles.connector).toJS();
                                const parentConStyle = con.get("parent").merge(styles.connectorParent).toJS();
                                const rowConStyle = con.get("row").merge(styles.connectorRow).toJS();
                                return (<div key={con.get("kpiId")} style={ connectorStyle }>
                                    <div style={ parentConStyle } />
                                    <div style={ rowConStyle }>
                                        {con.get("children").map((c) => {
                                            const childrenConStyle = c.get("style").merge(styles.connectorChildren).toJS();
                                            return (<div key={ c.get("key") } style={ childrenConStyle } />);
                                        })}
                                    </div>
                                </div>);
                            })}
                        </div>
                    </div>
                </div>
        );
    }
}

KpiTree.propTypes = {
    appState: React.PropTypes.instanceOf(State).isRequired
};

export default KpiTree;
