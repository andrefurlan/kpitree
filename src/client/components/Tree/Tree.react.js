import React from "react";

import TreeNode from "./Node/TreeNode.react";
import NodeActions from "./Node/TreeNode.actions";

import PeriodPicker from "../PeriodPicker/PeriodPicker.react.js";
import PeriodPickerActions from "../PeriodPicker/PeriodPicker.actions.js";

import { getElementsPositions } from "./Tree.utils";
import { getKPIData } from "../../dataUtils";


let KpiTree = React.createClass({

    render: function() {
        const appState = this.props.appState;
        // the tree state is just a array of deployed kpis
        const positions = getElementsPositions(appState);
        const nodeActions = new NodeActions(appState);
        const periodPickerActions = new PeriodPickerActions(appState);

        return (
            <section className="KPITreeContainer">
                <PeriodPicker
                    actions = {periodPickerActions}>
                </PeriodPicker>
                <div className="KPITree">
                    {positions.get("node").map((node) => {
                        const kpiId = node.get("kpiId");
                        const style = node.get("style").toJS();
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
            </section>
        );
    }
});

export default KpiTree;