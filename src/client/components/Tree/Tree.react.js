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
            "TreeNode": {
                width: NODEWIDTH,
                position: "absolute",
                transition: "all 450ms cubic-bezier(0.23, 1, 0.32, 1) 0ms",
                WebkitTapHighlightColor: "rgba(0,0,0,0)",
                boxShadow: "0 1px 6px rgba(0, 0, 0, 0.12), 0 1px 4px rgba(0, 0, 0, 0.24)",
                borderRadius: "2",
                backgroundColor: "white"
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
                                const style = node.get("style").merge(styles.TreeNode).toJS();
                                const kpiData = getKPIData(kpiId, appState, true);

                                return <TreeNode
                                    actions = {nodeActions}
                                    appState = {appState}
                                    data = {kpiData}
                                    key = {kpiId}
                                    kpiId = {kpiId}
                                    style = {style}/>;
                            })}

                            {positions.get("connector").map((con) => {
                                return <div className="connector" key={con.get("kpiId")} style={con.get("style").toJS()}>
                                    <div className="connector-parent" style={con.get("parent").toJS()}></div>
                                    <div className="connector-children-row" style={con.get("row").toJS()}>
                                        {con.get("children").map((c) => {
                                            return <div className="connector-children" key={c.get("key")} style={c.get("style").toJS()}></div>
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