import React from "react";
import * as treeUtils from "./Tree.utils";
import * as dataUtils from "../../dataUtils";
import TreeNode from "./Node/TreeNode.react";
import NodeActions from "./Node/TreeNode.actions";

let KpiTree = React.createClass({

    render: function() {
        const appState = this.props.appState;
        // the tree state is just a array of deployed kpis
        const positions = treeUtils.getNodePositions(appState);
        const nodeActions = new NodeActions(appState);

        return (
            <div className="KPITree">
                {positions.map((node) => {
                    const kpiId = node.get("kpiId");
                    const left = node.getIn(["position", "x"]);
                    const top = node.getIn(["position", "y"]);
                    const kpiData = dataUtils.getKPIData(kpiId, appState);

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
        );
    }
});

export default KpiTree;