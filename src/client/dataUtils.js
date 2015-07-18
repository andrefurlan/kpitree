/*  This file has util functions for dealing with KPI data.
 *  Every time a function need information related to the KPI data,
 *  it should use a function from this file. In the future, when KPI
 *  is in a database, the functions in this file need to make the
 *  calls to the database and get the data and cache it in the
 *  app state.
 */

export function getKPIData(kpiId, appState, hasValues) {
    const state = appState.get();
    const kpi = state.getIn(["data", "kpis"]).filter((kpi) => {
        return kpi.get("kpiId") === kpiId;
    }).get(0);
    if (hasValues) {
        const periodCode = state.getIn(["periodPicker", "year"]) + state.getIn(["periodPicker", "month"]);
        const data = kpi.set("values", kpi.getIn(["dataset", periodCode]));
        return data.delete("dataset");
    } else {
        return kpi;
    }
}

export function getRootKPI(appState) {
    const state = appState.get();
    return state.getIn(["data", "rootKPI"]);
}

export function getKPIChildren(kpiId, appState) {
    return getKPIData(kpiId, appState).get("children");
}
