import React from "react";
import * as treeUtils from "../treeUtils";
import TreeNode from "./TreeNode";

let KpiTree = React.createClass({

    render: function() {
        const appState = this.props.appState;
        const treeState = appState.getIn(["tree"]);
        const data = appState.getIn(["data"]);
        const period = appState.getIn(["dataPicker", "period"]);
        // TODO: define the action here and pass is down via props or
        //       pass down the appState and let the component import
        //       the action????
        return (
            <div className="KPITree">
                {treeState.map((node) => {
                    const kpiId = node.get("kpiId");
                    const kpiName =  treeUtils.getKpiName(kpiId, data);
                    const left = treeUtils.getPositionLeft(kpiId, data);
                    const right = treeUtils.getPositionRight(kpiId, data);
                    const targetValue = treeUtils.getTargetValue(kpiId, period, data);
                    const actualValue = treeUtils.getActualValue(kpiId, period, data);
                    const delta = treeUtils.getDelta(kpiId, period, data);
                    const colour = treeUtils.getColour(kpiId, period, data);

                    return <TreeNode
                        appState={appState}
                        key={kpiId}
                        kpiId={kpiId}
                        kpiName={kpiName}
                        targetValue={targetValue}
                        actualValue={actualValue}
                        deltaValue={delta}
                        left={left}
                        top={top}/>;
                })}
            </div>
        );
    }
});

export default KpiTree;