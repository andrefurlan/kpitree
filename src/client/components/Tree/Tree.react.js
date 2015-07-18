import React from "react";

const ReactCSSTransitionGroup = React.addons.CSSTransitionGroup;

import { Toolbar, ToolbarGroup, Styles } from "material-ui";

import TreeNode from "./Node/TreeNode.react";
import NodeActions from "./Node/TreeNode.actions";
import { NODEWIDTH, MINBOTTOM, MINTOP, MINRIGHT, MINLEFT } from "./Tree.constants.js";

import PeriodPicker from "../PeriodPicker/PeriodPicker.react";
import PeriodPickerActions from "../PeriodPicker/PeriodPicker.actions";

import { getElementsPositions } from "./Tree.helpers";
import { getKPIData } from "../../dataUtils";

class KpiTree extends React.Component {

    getStyles() {
        return {
            "demo": {
                height: "100%",
                width: "100%",
                paddingTop: "64",
                backgroundColor: Styles.Colors.grey50,
                overflow: "auto"
            },
            "KPITreeContainer": {
                height: "calc(100% - 56px)",
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
        }
    }

    render() {
        const appState = this.props.appState;
        // the tree state is just a array of deployed kpis
        const positions = getElementsPositions(appState);
        const nodeActions = new NodeActions(appState);
        
        const periodPickerActions = new PeriodPickerActions(appState);
        const periodPickerState = appState.getIn(["periodPicker"]);

        const styles = this.getStyles();
        styles.KPITree.height = (positions.get("bottom") - positions.get("top")) + MINBOTTOM + MINTOP;
        styles.KPITree.width = (positions.get("right") + MINRIGHT);
        // TODO: period picker

        return (
            <div ref="demo" style={ styles.demo }>
                <PeriodPicker
                    ref="PeriodPicker"
                    actions={ periodPickerActions }
                    state={ periodPickerState }>
                </PeriodPicker>
                <div ref="KPITreeContainer" style={ styles.KPITreeContainer }>
                    <div style={ styles.scrollContainer }>
                        <div ref="KPITree" style={ styles.KPITree }>
                            {positions.get("node").map((node) => {
                                const kpiId = node.get("kpiId");
                                const position = node.get("style");
                                const kpiData = getKPIData(kpiId, appState, true);

                                return <TreeNode
                                    actions = {nodeActions}
                                    appState = {appState}
                                    data = {kpiData}
                                    key = {kpiId}
                                    kpiId = {kpiId}
                                    position = {position}/>;
                            })}

                            {positions.get("connector").map((con) => {
                                const connectorStyle = con.get("style").merge(styles.connector).toJS();
                                const parentConStyle = con.get("parent").merge(styles.connectorParent).toJS();
                                const rowConStyle = con.get("row").merge(styles.connectorRow).toJS();
                                return <div className="connector" key={con.get("kpiId")} style={ connectorStyle }>
                                    <div className="connector-parent" style={ parentConStyle }></div>
                                    <div className="connector-children-row" style={ rowConStyle }>
                                        {con.get("children").map((c) => {
                                            const childrenConStyle = c.get("style").merge(styles.connectorChildren).toJS();
                                            return <div className="connector-children" key={c.get("key")} style={ childrenConStyle }></div>
                                        })}
                                    </div>
                                </div>
                            })}
                        </div>
                    </div>
                </div>
            </div>
        );
    }
}

export default KpiTree;