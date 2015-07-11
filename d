[1mdiff --git a/src/client/app.js b/src/client/app.js[m
[1mindex 7b4a5bd..8971caa 100644[m
[1m--- a/src/client/app.js[m
[1m+++ b/src/client/app.js[m
[36m@@ -6,7 +6,6 @@[m [mimport {Link, Route, RouteHandler} from "react-router";[m
 import KPITreeHandler from "./components/Tree/Tree.react.js";[m
 import './uglyTheme.css';[m
 [m
[31m-[m
 let App = React.createClass({[m
     update: function(newState) {[m
         this.setState(newState);[m
[36m@@ -16,7 +15,8 @@[m [mlet App = React.createClass({[m
         return {appState: initialAppState};[m
     },[m
 [m
[31m-    render() {[m
[32m+[m[32m    render: function() {[m
[32m+[m
         return ([m
             <div className="app">[m
                 <nav>[m
[1mdiff --git a/src/client/components/Tree/Node/TreeNode.react.js b/src/client/components/Tree/Node/TreeNode.react.js[m
[1mindex ca7230f..5aa664c 100644[m
[1m--- a/src/client/components/Tree/Node/TreeNode.react.js[m
[1m+++ b/src/client/components/Tree/Node/TreeNode.react.js[m
[36m@@ -6,10 +6,9 @@[m [mimport * as utils from "./TreeNode.utils";[m
 let TreeNode = React.createClass({[m
 [m
     render: function() {[m
[31m-        const nodeStyle = {left: this.props.left, top: this.props.top};[m
 [m
         return ([m
[31m-            <div className="TreeNode" style={nodeStyle}>[m
[32m+[m[32m            <div className="TreeNode" style={this.props.style}>[m
                 <TreeNodeHeader [m
                     kpiId={this.props.kpiId}[m
                     kpiName={utils.getKpiName(this.props.data)}[m
[1mdiff --git a/src/client/components/Tree/Tree.react.js b/src/client/components/Tree/Tree.react.js[m
[1mindex 88c0b6b..993e644 100644[m
[1m--- a/src/client/components/Tree/Tree.react.js[m
[1m+++ b/src/client/components/Tree/Tree.react.js[m
[36m@@ -3,7 +3,10 @@[m [mimport React from "react";[m
 import TreeNode from "./Node/TreeNode.react";[m
 import NodeActions from "./Node/TreeNode.actions";[m
 [m
[31m-import { getNodePositions } from "./Tree.utils";[m
[32m+[m[32mimport PeriodPicker from "../PeriodPicker/PeriodPicker.react.js";[m
[32m+[m[32mimport PeriodPickerActions from "../PeriodPicker/PeriodPicker.actions.js";[m
[32m+[m
[32m+[m[32mimport { getElementsPositions } from "./Tree.utils";[m
 import { getKPIData } from "../../dataUtils";[m
 [m
 [m
[36m@@ -12,16 +15,19 @@[m [mlet KpiTree = React.createClass({[m
     render: function() {[m
         const appState = this.props.appState;[m
         // the tree state is just a array of deployed kpis[m
[31m-        const positions = getNodePositions(appState);[m
[32m+[m[32m        const positions = getElementsPositions(appState);[m
         const nodeActions = new NodeActions(appState);[m
[32m+[m[32m        const periodPickerActions = new PeriodPickerActions(appState);[m
 [m
         return ([m
             <section className="KPITreeContainer">[m
[32m+[m[32m                <PeriodPicker[m
[32m+[m[32m                    actions = {periodPickerActions}>[m
[32m+[m[32m                </PeriodPicker>[m
                 <div className="KPITree">[m
[31m-                    {positions.map((node) => {[m
[32m+[m[32m                    {positions.get("node").map((node) => {[m
                         const kpiId = node.get("kpiId");[m
[31m-                        const left = node.getIn(["position", "x"]);[m
[31m-                        const top = node.getIn(["position", "y"]);[m
[32m+[m[32m                        const style = node.get("style").toJS();[m
                         const kpiData = getKPIData(kpiId, appState, true);[m
 [m
                         return <TreeNode[m
[36m@@ -30,8 +36,18 @@[m [mlet KpiTree = React.createClass({[m
                             data = {kpiData}[m
                             key = {kpiId}[m
                             kpiId = {kpiId}[m
[31m-                            left = {left}[m
[31m-                            top = {top}/>;[m
[32m+[m[32m                            style = {style}/>;[m
[32m+[m[32m                    })}[m
[32m+[m
[32m+[m[32m                    {positions.get("connector").map((con) => {[m
[32m+[m[32m                        return <div className="connector" key={con.get("kpiId")} style={con.get("style").toJS()}>[m
[32m+[m[32m                            <div className="connector-parent" style={con.get("parent").toJS()}></div>[m
[32m+[m[32m                            <div className="connector-children-row" style={con.get("row").toJS()}>[m
[32m+[m[32m                                {con.get("children").map((c) => {[m
[32m+[m[32m                                    return <div className="connector-children" key={c.get("key")} style={c.get("style").toJS()}></div>[m
[32m+[m[32m                                })}[m
[32m+[m[32m                            </div>[m
[32m+[m[32m                        </div>[m
                     })}[m
                 </div>[m
             </section>[m
[1mdiff --git a/src/client/components/Tree/Tree.utils.js b/src/client/components/Tree/Tree.utils.js[m
[1mindex 53ba9a8..556f2fe 100644[m
[1m--- a/src/client/components/Tree/Tree.utils.js[m
[1m+++ b/src/client/components/Tree/Tree.utils.js[m
[36m@@ -5,51 +5,84 @@[m [mimport { MINTOP, NODEHEIGHT, NODEWIDTH, NODEHSPACING, NODEVSPACING, NODEHPADDING[m
 import { getKPIChildren, getRootKPI } from "../../dataUtils";[m
 [m
 [m
[31m-export function getNodePositions(appState) {[m
[32m+[m[32mexport function getElementsPositions(appState) {[m
     // get the list of all drill down nodes[m
     const treeState = appState.getIn(["tree"]);[m
     [m
     // initialize with the root[m
[31m-    let positions = List([Map({[m
[32m+[m[32m    let nodePositions = List([Map({[m
         "kpiId": getRootKPI(appState),[m
[31m-        "position": getInitialPosition()[m
[32m+[m[32m        "style": getInitialPosition()[m
     })]);[m
[32m+[m
[32m+[m[32m    let connectorPositions = List();[m
     [m
     // base case, list is empty, show only root[m
     if (treeState.size === 0) {[m
[31m-        return positions;[m
[32m+[m[32m        return Map({[m
[32m+[m[32m            node: nodePositions,[m
[32m+[m[32m            connector: connectorPositions[m
[32m+[m[32m        });[m
     }[m
     let min = Infinity;[m
     // loop the state getting the children and computing their position[m
     treeState.forEach((parentId) => {[m
         let children = getKPIChildren(parentId, appState);[m
[31m-        const parentPosition = positions.filter((pos) => {[m
[31m-            return pos.get("kpiId") === parentId;[m
[31m-        }).get(0).get("position");[m
[31m-        children.forEach((kpiId, childrenIndex, children) => {[m
[31m-            const position = computePosition(kpiId, childrenIndex, children.size, parentPosition);[m
[31m-            min = Math.min(min, position.getIn(["position", "y"]));[m
[31m-            positions = positions.push(position);[m
[31m-        });[m
[32m+[m[32m        const parentPosition = nodePositions.filter(pos =>[m
[32m+[m[32m            pos.get("kpiId") === parentId[m
[32m+[m[32m        ).get(0).get("style");[m
[32m+[m[32m        if (children.size) {[m
[32m+[m[32m            let connPos = computeConnPos(parentId, children.size, parentPosition);[m
[32m+[m
[32m+[m[32m            children.forEach((kpiId, childrenIndex, children) => {[m
[32m+[m[32m                const nodePosition = computeNodePosition(kpiId, childrenIndex, children.size, parentPosition);[m
[32m+[m[32m                min = Math.min(min, nodePosition.getIn(["style", "top"]));[m
[32m+[m[32m                nodePositions = nodePositions.push(nodePosition);[m
[32m+[m[32m                // insert position of each connector children[m
[32m+[m[32m                connPos = connPos.update("children", children =>[m[41m [m
[32m+[m[32m                    children.withMutations(children => children.push(Map({[m
[32m+[m[32m                        "key": kpiId,[m[41m [m
[32m+[m[32m                        "style": Map({"top": childrenIndex*109, "width": 15, "left": -1})[m
[32m+[m[32m                    })))[m
[32m+[m[32m                );[m
[32m+[m[32m            });[m
[32m+[m
[32m+[m[32m            connectorPositions = connectorPositions.push(connPos);[m
[32m+[m[32m        }[m
[32m+[m[32m    });[m
[32m+[m[32m    return Map({[m
[32m+[m[32m        node: applyOffset(nodePositions, min),[m
[32m+[m[32m        connector: applyOffset(connectorPositions, min)[m
     });[m
[31m-    return applyOffset(positions, min);[m
 [m
[31m-    function computePosition(kpiId, index, numSiblings, parentPosition) {[m
[31m-        const x = parentPosition.get("x") + NODEWIDTH + NODEHSPACING;[m
[32m+[m[32m    function computeNodePosition(kpiId, index, numSiblings, parentPosition) {[m
[32m+[m[32m        const left = parentPosition.get("left") + NODEWIDTH + NODEHSPACING;[m
         const height = ((numSiblings * NODEHEIGHT) + ((numSiblings - 1) * NODEVSPACING));[m
[31m-        const top = ((parentPosition.get("y") + NODEHEIGHT / 2) - (height / 2));[m
[31m-        const y = top + (index * (NODEHEIGHT + NODEVSPACING));[m
[32m+[m[32m        const topMost = ((parentPosition.get("top") + NODEHEIGHT / 2) - (height / 2));[m
[32m+[m[32m        const top = topMost + (index * (NODEHEIGHT + NODEVSPACING));[m
         return Map({[m
             "kpiId": kpiId,[m
[31m-            "position": Map({"x": x, "y": y})[m
[32m+[m[32m            "style": Map({"left": left, "top": top})[m
[32m+[m[32m        });[m
[32m+[m[32m    }[m
[32m+[m
[32m+[m[32m    function computeConnPos(kpiId, numSiblings, parentPosition) {[m
[32m+[m[32m        const height = ((numSiblings * NODEHEIGHT) + ((numSiblings - 1) * NODEVSPACING));[m
[32m+[m[32m        const topMost = ((parentPosition.get("top") + NODEHEIGHT / 2) - (height / 2));[m
[32m+[m[32m        return Map({[m
[32m+[m[32m            "key": kpiId,[m
[32m+[m[32m            "style": Map({"top": ((parentPosition.get("top") + NODEHEIGHT / 2) - (height / 2) + NODEHEIGHT/2), "left": parentPosition.get("left") + NODEWIDTH}),[m
[32m+[m[32m            "parent": Map({"top": height/2 - NODEHEIGHT/2, "width": 15}),[m
[32m+[m[32m            "row": Map({"height": height - NODEHEIGHT}),[m
[32m+[m[32m            "children": List()[m
         });[m
     }[m
 [m
     function applyOffset(positions, min) {[m
         return positions.map(function(p) {[m
[31m-            return p.updateIn(["position", "y"], function(y) {[m
[32m+[m[32m            return p.updateIn(["style", "top"], function(top) {[m
                 const offset = min < MINTOP ? (-1*min)+MINTOP : 0;[m
[31m-                return y + offset;[m
[32m+[m[32m                return top + offset;[m
             });[m
         });        [m
     }[m
[36m@@ -79,5 +112,5 @@[m [mexport function getNewTreeState(kpiId, treeState, appState) {[m
 }[m
 [m
 export function getInitialPosition(appState) {[m
[31m-    return Map({x:20, y:200});[m
[32m+[m[32m    return Map({left:20, top:200});[m
 }[m
\ No newline at end of file[m
[1mdiff --git a/src/client/initialStateWithFakeData.js b/src/client/initialStateWithFakeData.js[m
[1mindex d2275c7..bfb46c7 100644[m
[1m--- a/src/client/initialStateWithFakeData.js[m
[1m+++ b/src/client/initialStateWithFakeData.js[m
[36m@@ -31,7 +31,7 @@[m [mexport default function() {[m
                     kpiId: "2",[m
                     name: "sales",[m
                     unit: "CND",[m
[31m-                    children: ["4", "5", "6", "7"],[m
[32m+[m[32m                    children: ["4", "5"],[m
                     dataset: {[m
                         "200505": {[m
                                 actual: 100.000,[m
[36m@@ -61,7 +61,7 @@[m [mexport default function() {[m
                     kpiId: "4",[m
                     name: "kpi4",[m
                     unit: "CND",[m
[31m-                    children: [],[m
[32m+[m[32m                    children: ["6", "7"],[m
                     dataset: {[m
                         "200505": {[m
                             actual: 100.004,[m
[36m@@ -91,7 +91,7 @@[m [mexport default function() {[m
                     kpiId: "6",[m
                     name: "kpi6",[m
                     unit: "",[m
[31m-                    children: [],[m
[32m+[m[32m                    children: ["13"],[m
                     dataset: {[m
                         "200505": {[m
                             actual: 25,[m
[36m@@ -192,6 +192,276 @@[m [mexport default function() {[m
                             target: 165[m
                         }[m
                     }[m
[32m+[m[32m                }, {[m
[32m+[m[32m                    kpiId: "13",[m
[32m+[m[32m                    name: "kpi13",[m
[32m+[m[32m                    unit: "",[m
[32m+[m[32m                    children: ["14", "15"],[m
[32m+[m[32m                    dataset: {[m
[32m+[m[32m                        "200505": {[m
[32m+[m[32m                            actual: 25,[m
[32m+[m[32m                            target: 15[m
[32m+[m[32m                        },[m
[32m+[m[32m                        "200506": {[m
[32m+[m[32m                            actual: 15,[m
[32m+[m[32m                            target: 165[m
[32m+[m[32m                        }[m
[32m+[m[32m                    }[m
[32m+[m[32m                }, {[m
[32m+[m[32m                    kpiId: "14",[m
[32m+[m[32m                    name: "kpi14",[m
[32m+[m[32m                    unit: "",[m
[32m+[m[32m                    children: [],[m
[32m+[m[32m                    dataset: {[m
[32m+[m[32m                        "200505": {[m
[32m+[m[32m                            actual: 25,[m
[32m+[m[32m                            target: 15[m
[32m+[m[32m                        },[m
[32m+[m[32m                        "200506": {[m
[32m+[m[32m                            actual: 15,[m
[32m+[m[32m                            target: 165[m
[32m+[m[32m                        }[m
[32m+[m[32m                    }[m
[32m+[m[32m                }, {[m
[32m+[m[32m                    kpiId: "15",[m
[32m+[m[32m                    name: "kpi15",[m
[32m+[m[32m                    unit: "",[m
[32m+[m[32m                    children: ["16", "17", "18", "19"],[m
[32m+[m[32m                    dataset: {[m
[32m+[m[32m                        "200505": {[m
[32m+[m[32m                            actual: 15,[m
[32m+[m[32m                            target: 16[m
[32m+[m[32m                        },[m
[32m+[m[32m                        "200506": {[m
[32m+[m[32m                            actual: 15,[m
[32m+[m[32m                            target: 16[m
[32m+[m[32m                        }[m
[32m+[m[32m                    }[m
[32m+[m[32m                }, {[m
[32m+[m[32m                    kpiId: "16",[m
[32m+[m[32m                    name: "kpi16",[m
[32m+[m[32m                    unit: "",[m
[32m+[m[32m                    children: [],[m
[32m+[m[32m                    dataset: {[m
[32m+[m[32m                        "200505": {[m
[32m+[m[32m                            actual: 16,[m
[32m+[m[32m                            target: 17[m
[32m+[m[32m                        },[m
[32m+[m[32m                        "200506": {[m
[32m+[m[32m                            actual: 16,[m
[32m+[m[32m                            target: 17[m
[32m+[m[32m                        }[m
[32m+[m[32m                    }[m
[32m+[m[32m                }, {[m
[32m+[m[32m                    kpiId: "17",[m
[32m+[m[32m                    name: "kpi17",[m
[32m+[m[32m                    unit: "",[m
[32m+[m[32m                    children: [],[m
[32m+[m[32m                    dataset: {[m
[32m+[m[32m                        "200505": {[m
[32m+[m[32m                            actual: 17,[m
[32m+[m[32m                            target: 15[m
[32m+[m[32m                        },[m
[32m+[m[32m                        "200506": {[m
[32m+[m[32m                            actual: 15,[m
[32m+[m[32m                            target: 165[m
[32m+[m[32m                        }[m
[32m+[m[32m                    }[m
[32m+[m[32m                }, {[m
[32m+[m[32m                    kpiId: "18",[m
[32m+[m[32m                    name: "kpi18",[m
[32m+[m[32m                    unit: "",[m
[32m+[m[32m                    children: ["20", "21", "22"],[m
[32m+[m[32m                    dataset: {[m
[32m+[m[32m                        "200505": {[m
[32m+[m[32m                            actual: 25,[m
[32m+[m[32m                            target: 15[m
[32m+[m[32m                        },[m
[32m+[m[32m                        "200506": {[m
[32m+[m[32m                            actual: 15,[m
[32m+[m[32m                            target: 165[m
[32m+[m[32m                        }[m
[32m+[m[32m                    }[m
[32m+[m[32m                }, {[m
[32m+[m[32m                    kpiId: "19",[m
[32m+[m[32m                    name: "kpi19",[m
[32m+[m[32m                    unit: "",[m
[32m+[m[32m                    children: [],[m
[32m+[m[32m                    dataset: {[m
[32m+[m[32m                        "200505": {[m
[32m+[m[32m                            actual: 25,[m
[32m+[m[32m                            target: 15[m
[32m+[m[32m                        },[m
[32m+[m[32m                        "200506": {[m
[32m+[m[32m                            actual: 15,[m
[32m+[m[32m                            target: 165[m
[32m+[m[32m                        }[m
[32m+[m[32m                    }[m
[32m+[m[32m                }, {[m
[32m+[m[32m                    kpiId: "20",[m
[32m+[m[32m                    name: "kpi20",[m
[32m+[m[32m                    unit: "",[m
[32m+[m[32m                    children: ["23", "24", "25", "26"],[m
[32m+[m[32m                    dataset: {[m
[32m+[m[32m                        "200505": {[m
[32m+[m[32m                            actual: 25,[m
[32m+[m[32m                            target: 15[m
[32m+[m[32m                        },[m
[32m+[m[32m                        "200506": {[m
[32m+[m[32m                            actual: 15,[m
[32m+[m[32m                            target: 165[m
[32m+[m[32m                        }[m
[32m+[m[32m                    }[m
[32m+[m[32m                }, {[m
[32m+[m[32m                    kpiId: "21",[m
[32m+[m[32m                    name: "kpi21",[m
[32m+[m[32m                    unit: "",[m
[32m+[m[32m                    children: [],[m
[32m+[m[32m                    dataset: {[m
[32m+[m[32m                        "200505": {[m
[32m+[m[32m                            actual: 25,[m
[32m+[m[32m                            target: 15[m
[32m+[m[32m                        },[m
[32m+[m[32m                        "200506": {[m
[32m+[m[32m                            actual: 15,[m
[32m+[m[32m                            target: 165[m
[32m+[m[32m                        }[m
[32m+[m[32m                    }[m
[32m+[m[32m                }, {[m
[32m+[m[32m                    kpiId: "22",[m
[32m+[m[32m                    name: "kpi22",[m
[32m+[m[32m                    unit: "",[m
[32m+[m[32m                    children: [],[m
[32m+[m[32m                    dataset: {[m
[32m+[m[32m                        "200505": {[m
[32m+[m[32m                            actual: 25,[m
[32m+[m[32m                            target: 15[m
[32m+[m[32m                        },[m
[32m+[m[32m                        "200506": {[m
[32m+[m[32m                            actual: 15,[m
[32m+[m[32m                            target: 165[m
[32m+[m[32m                        }[m
[32m+[m[32m                    }[m
[32m+[m[32m                }, {[m
[32m+[m[32m                    kpiId: "23",[m
[32m+[m[32m                    name: "kpi23",[m
[32m+[m[32m                    unit: "",[m
[32m+[m[32m                    children: ["27", "28", "29", "30"],[m
[32m+[m[32m                    dataset: {[m
[32m+[m[32m                        "200505": {[m
[32m+[m[32m                            actual: 25,[m
[32m+[m[32m                            target: 15[m
[32m+[m[32m                        },[m
[32m+[m[32m                        "200506": {[m
[32m+[m[32m                            actual: 15,[m
[32m+[m[32m                            target: 165[m
[32m+[m[32m                        }[m
[32m+[m[32m                    }[m
[32m+[m[32m                }, {[m
[32m+[m[32m                    kpiId: "24",[m
[32m+[m[32m                    name: "kpi24",[m
[32m+[m[32m                    unit: "",[m
[32m+[m[32m                    children: [],[m
[32m+[m[32m                    dataset: {[m
[32m+[m[32m                        "200505": {[m
[32m+[m[32m                            actual: 25,[m
[32m+[m[32m                            target: 15[m
[32m+[m[32m                        },[m
[32m+[m[32m                        "200506": {[m
[32m+[m[32m                            actual: 15,[m
[32m+[m[32m                            target: 165[m
[32m+[m[32m                        }[m
[32m+[m[32m                    }[m
[32m+[m[32m                }, {[m
[32m+[m[32m                    kpiId: "25",[m
[32m+[m[32m                    name: "kpi25",[m
[32m+[m[32m                    unit: "",[m
[32m+[m[32m                    children: [],[m
[32m+[m[32m                    dataset: {[m
[32m+[m[32m                        "200505": {[m
[32m+[m[32m                            actual: 25,[m
[32m+[m[32m                            target: 15[m
[32m+[m[32m                        },[m
[32m+[m[32m                        "200506": {[m
[32m+[m[32m                            actual: 15,[m
[32m+[m[32m                            target: 165[m
[32m+[m[32m                        }[m
[32m+[m[32m                    }[m
[32m+[m[32m                }, {[m
[32m+[m[32m                    kpiId: "26",[m
[32m+[m[32m                    name: "kpi26",[m
[32m+[m[32m                    unit: "",[m
[32m+[m[32m                    children: [],[m
[32m+[m[32m                    dataset: {[m
[32m+[m[32m                        "200505": {[m
[32m+[m[32m                            actual: 25,[m
[32m+[m[32m                            target: 15[m
[32m+[m[32m                        },[m
[32m+[m[32m                        "200506": {[m
[32m+[m[32m                            actual: 15,[m
[32m+[m[32m                            target: 165[m
[32m+[m[32m                        }[m
[32m+[m[32m                    }[m
[32m+[m[32m                }, {[m
[32m+[m[32m                    kpiId: "27",[m
[32m+[m[32m                    name: "kpi27",[m
[32m+[m[32m                    unit: "",[m
[32m+[m[32m                    children: [],[m
[32m+[m[32m                    dataset: {[m
[32m+[m[32m                        "200505": {[m
[32m+[m[32m                            actual: 25,[m
[32m+[m[32m                            target: 15[m
[32m+[m[32m                        },[m
[32m+[m[32m                        "200506": {[m
[32m+[m[32m                            actual: 15,[m
[32m+[m[32m                            target: 165[m
[32m+[m[32m                        }[m
[32m+[m[32m                    }[m
[32m+[m[32m                }, {[m
[32m+[m[32m                    kpiId: "28",[m
[32m+[m[32m                    name: "kpi28",[m
[32m+[m[32m                    unit: "",[m
[32m+[m[32m                    children: [],[m
[32m+[m[32m                    dataset: {[m
[32m+[m[32m                        "200505"