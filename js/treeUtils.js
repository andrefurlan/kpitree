import immutable from "immutable";

export function getKpiName(kpiId, data) {
    // stub
    return "sales/person";
}

export function getPositionLeft(kpiId, data) {
    // stub
    return 10 * kpiId;
}

export function getPositionRight(kpiId, data) {
    //stub
    return 65 * kpiId;
}

export function getTargetValue(kpiId, period, data) {
    //stub
    return "$10.000,00";
}

export function getActualValue(kpiId, period, data) {
    //stub
    return "$20.000,00";
}

export function getDelta(kpiId, period, data) {
    //stub
    return "100%";
}

export function getColour(kpiId, period, data) {
    //stub
    return "rbg(0, 102, 0)";
}

export function getDeployedNodeState(appState, kpiId) {
    return immutable.fromJS([
        {
            kpiId: 1,
            kpiName: "sales/person",
            targetValue: "$10.000,00",
            actualValue: "$10.000,00",
            delta: "100%",
            colour: "green",
            position: {x: 10, y: 65}
        }, {
            kpiId: 2,
            kpiName: "sales",
            targetValue: "$200.000,00",
            actualValue: "$100.000,00",
            delta: "200%",
            colour: "green",
            position: {x: 300, y: 10}
        }, {
            kpiId: 3,
            kpiName: "persons",
            targetValue: "10",
            actualValue: "20",
            delta: "200%",
            colour: "red",
            position: {x: 300, y: 110}
        }]);
}
