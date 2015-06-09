import immutable from "immutable";

export function sum(x, y) {
    return x + y;
}

export var pi = 3.141593;

export function getDeployedNodeState(appState, kpiId) {
    return immutable.fromJS([
        {
            kpiId: 1,
            kpiName: "sales/person",
            targetValue: "$10.000,00",
            actualValue: "$10.000,00",
            delta: "100%",
            flag: "green",
            position: {x: 10, y: 65}
        }, {
            kpiId: 2,
            kpiName: "sales",
            targetValue: "$200.000,00",
            actualValue: "$100.000,00",
            delta: "200%",
            flag: "green",
            position: {x: 300, y: 10}
        }, {
            kpiId: 3,
            kpiName: "persons",
            targetValue: "10",
            actualValue: "20",
            delta: "200%",
            flag: "red",
            position: {x: 300, y: 110}
        }]);
}
