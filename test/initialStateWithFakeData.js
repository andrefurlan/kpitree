import immutable from "immutable";

export default function() {
    return {
        tree: [{
            kpiId: "1",
            position: {x: 20, y: 200}
        }],
        datePicker: {
            period: 200505
        },
        data: {
            user: "andre",
            datasetName: "test",
            rootKPI: "1",
            kpis: [
                {
                    kpiId: "1",
                    name: "sales/person",
                    unit: "CND",
                    magnitude: "",
                    children: ["2", "3", "4"],
                    dataset: {
                        200505: {
                            actual: 10.000,
                            target: 10.000
                        },
                        200506: {
                            actual: 13.000,
                            target: 16.000
                        }
                    }
                }, {
                    kpiId: "2",
                    name: "sales",
                    unit: "CND",
                    children: ["5"],
                    dataset: {
                        200505: {
                                actual: 100.000,
                                target: 100.000
                            },
                        200506: {
                                actual: 130.000,
                                target: 160.000
                            }
                        }
                }, {
                    kpiId: "3",
                    name: "person",
                    unit: "",
                    children: [],
                    dataset: {
                        200505: {
                            actual: 20,
                            target: 10
                        },
                        200506: {
                            actual: 13,
                            target: 16
                        }
                    }
                }, {
                    kpiId: "4",
                    name: "kpi4",
                    unit: "CND",
                    children: ["3", "5"],
                    dataset: {
                        200505: {
                            actual: 100.004,
                            target: 400.004
                        },
                        200506: {
                            actual: 130.004,
                            target: 160.044
                        }
                    }
                }, {
                    kpiId: "5",
                    name: "kpi5",
                    unit: "",
                    children: [],
                    dataset: {
                        200505: {
                            actual: 25,
                            target: 15
                        },
                        200506: {
                            actual: 15,
                            target: 165
                        }
                    }
                }
            ]
        }
    };
}
