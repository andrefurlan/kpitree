

export function getKpiName(data) {
    return data.get("name");
}

export function getTargetValue(data) {
    //TODO: add currency and number formatting
    return Number(data.getIn(["values", "target"]));
}

export function getActualValue(data) {
    //TODO: add currency and number formatting
    return Number(data.getIn(["values", "actual"]));
}

export function getTargetValueString(data) {
    //TODO: add currency and number formatting
    const targetValue = data.getIn(["values", "target"]);
    return targetValue ? targetValue.toLocaleString() : "-";
}

export function getActualValueString(data) {
    //TODO: add currency and number formatting
    const targetValue = data.getIn(["values", "actual"]);
    return targetValue ? targetValue.toLocaleString() : "-";
}

export function getOrientation(data) {
    //stub
    return data.get("orientation") || "up";
}

export function getDelta(data) {
    const actual = getActualValue(data);
    const target = getTargetValue(data);
    let delta = 0;
    if (target === 0) {return "-";}
    delta = actual / target -1;
    if (delta > 5) {return 500.0.toFixed(1) + "%" + "+";}
    if (delta < -5) {return 500.0.toFixed(1) + "%" + "-";}
    return (delta * 100).toFixed(1) + "%";
}

export function calculateScore(actual, target, orientation) {
    let deviation = 1;
    if (orientation === "up") {
        if (target > 0) {
            deviation = dev(actual, target, 1);
            if (deviation > 1.2) {
                return 1.2;
            } else if (deviation < 0.8) {
                return 0;
            } else {
                return deviation;
            }
        } else if (target < 0) {
            deviation = dev(actual, target, 2);
            if (deviation > 1.20) {
                return 1.2;
            } else if (deviation < 0.8) {
                return 0;
            } else {
                return deviation;
            }
        } else if (target === 0 && actual !== 0) {
            if (actual > 0) {
                return 1.2;
            } else {
                return 0;
            }
        } else {
            return 1;
        }
    } else if (orientation === "down") {
        if (target > 0) {
            deviation = dev(actual, target, 3);
            if (deviation > 1.20) {
                return 1.2;
            } else if (deviation < 0.8) {
                return 0;
            } else {
                return deviation;
            }
        } else if (target < 0) {
            deviation = dev(actual, target, 4);
            if (deviation > 1.2) {
                return 1.2;
            } else if (deviation < 0.8) {
                return 0;
            } else {
                return deviation;
            }
        } else if (target === 0 && actual !== 0) {
            if (actual > 0) {
                return 0;
            } else {
                return 1.2;
            }
        } else {
            return 1;
        }
    } else {
        return 1;
        // todo: implement interval
    }
    return 1;

    function dev(actual, target, caseNumber) {
        let result = 0;
        switch (caseNumber) {
            case 1:
                result = actual / target;
                break;
            case 2:
                result = (actual / target - 2) * -1;
                break;
            case 3:
                result = (actual / target - 1) * -1 + 1;
                break;
            case 4:
                result = (((actual / target - 1) * -1 + 1) - 2) * -1;
                break;
        }
        return result;
    }
}

export function getFlagColor(data) {
    const score = calculateScore(getActualValue(data), getTargetValue(data), getOrientation(data));

    if (score >= 1) {
        return "rgb(0,202,0)";
    }
    if (score < 0.95) {
        return "rgb(255,0,0)";
    }

    return "rgb(255,255,0)";
}
