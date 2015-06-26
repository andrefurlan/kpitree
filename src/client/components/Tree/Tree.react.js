import React from "react";

import TreeNode from "./Node/TreeNode.react";
import NodeActions from "./Node/TreeNode.actions";

import { getNodePositions } from "./Tree.utils";
import { getKPIData } from "../../dataUtils";


let KpiTree = React.createClass({

    render: function() {
        const appState = this.props.appState;
        // the tree state is just a array of deployed kpis
        const positions = getNodePositions(appState);
        const nodeActions = new NodeActions(appState);

        return (
            <section className="KPITreeContainer">
                <div className="KPITree">
                    {positions.map((node) => {
                        const kpiId = node.get("kpiId");
                        const left = node.getIn(["position", "x"]);
                        const top = node.getIn(["position", "y"]);
                        const kpiData = getKPIData(kpiId, appState, true);

                        return <TreeNode
                            actions = {nodeActions}
                            appState = {appState}
                            data = {kpiData}
                            key = {kpiId}
                            kpiId = {kpiId}
                            left = {left}
                            top = {top}/>;
                    })}
                </div>
            </section>
        );
    }
});

export default KpiTree;