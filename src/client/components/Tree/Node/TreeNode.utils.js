

export function getKpiName(data) {
    return data.get("name");
}

export function getTargetValue(data) {
    //TODO: add currency and number formatting
    return data.getIn(["values", "target"]);
}

export function getActualValue(data) {
    //TODO: add currency and number formatting
    return data.getIn(["values", "actual"]);;
}

export function getDelta(data) {
    //stub
    // TODO: this function should take in consideration the kpi direction,
    // zero values, ect...
    let delta = getActualValue(data) / getTargetValue(data) * 100;
    delta = +delta.toFixed(2);
    return delta+"%";
}

export function getColour(data) {
    //stub
    // TODO
    return "rbg(0, 102, 0)";
}
