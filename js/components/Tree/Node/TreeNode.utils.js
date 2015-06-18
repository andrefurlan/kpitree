import {Map, List, fromJS} from "immutable";

export function getKpiName(data) {
    // stub
    // return "sales/person";
    return data.get("name");
}

export function getTargetValue(data) {
    //stub
    return "$10.000,00";
}

export function getActualValue(data) {
    //stub
    return "$20.000,00";
}

export function getDelta(data) {
    //stub
    return "100%";
}

export function getColour(data) {
    //stub
    return "rbg(0, 102, 0)";
}
