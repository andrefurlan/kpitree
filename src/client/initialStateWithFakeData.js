import immutable from "immutable";

export default function() {
    return {
        tree: [],
        periodPicker: {
            period: "200505"
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
                    orientation: "up",
                    magnitude: "",
                    children: ["2", "3"],
                    dataset: {
                        "200505": {
                            actual: 10000,
                            target: 10004
                        },
                        "200506": {
                            actual: 13000,
                            target: 16000
                        }
                    }
                }, {
                    kpiId: "2",
                    name: "sales",
                    unit: "CND",
                    orientation: "up",
                    children: ["4", "5"],
                    dataset: {
                        "200505": {
                                actual: 100000,
                                target: 100000
                            },
                        "200506": {
                                actual: 130000,
                                target: 160000
                            }
                        }
                }, {
                    kpiId: "3",
                    name: "person",
                    unit: "",
                    orientation: "down",
                    children: ["8", "9", "10", "11", "12"],
                    dataset: {
                        "200505": {
                            actual: 20,
                            target: 10
                        },
                        "200506": {
                            actual: 13,
                            target: 16
                        }
                    }
                }, {
                    kpiId: "4",
                    name: "kpi4",
                    unit: "CND",
                    orientation: "up",
                    children: ["6", "7"],
                    dataset: {
                        "200505": {
                            actual: 100004,
                            target: 400004
                        },
                        "200506": {
                            actual: 130004,
                            target: 160044
                        }
                    }
                }, {
                    kpiId: "5",
                    name: "kpi5",
                    unit: "",
                    orientation: "up",
                    children: [],
                    dataset: {
                        "200505": {
                            actual: 25,
                            target: 15
                        },
                        "200506": {
                            actual: 15,
                            target: 165
                        }
                    }
                }, {
                    kpiId: "6",
                    name: "kpi6",
                    unit: "",
                    orientation: "up",
                    children: ["13"],
                    dataset: {
                        "200505": {
                            actual: 25,
                            target: 15
                        },
                        "200506": {
                            actual: 15,
                            target: 165
                        }
                    }
                }, {
                    kpiId: "7",
                    name: "kpi7",
                    unit: "",
                    children: [],
                    dataset: {
                        "200505": {
                            actual: 25,
                            target: 15
                        },
                        "200506": {
                            actual: 15,
                            target: 165
                        }
                    }
                }, {
                    kpiId: "8",
                    name: "kpi8",
                    unit: "",
                    orientation: "up",
                    children: [],
                    dataset: {
                        "200505": {
                            actual: 0,
                            target: 100
                        },
                        "200506": {
                            actual: 15,
                            target: 165
                        }
                    }
                }, {
                    kpiId: "9",
                    name: "kpi9",
                    unit: "",
                    orientation: "up",
                    children: [],
                    dataset: {
                        "200505": {
                            actual: -80,
                            target: -100
                        },
                        "200506": {
                            actual: 15,
                            target: 165
                        }
                    }
                }, {
                    kpiId: "10",
                    name: "kpi10",
                    unit: "",
                    children: [],
                    dataset: {
                        "200505": {
                            actual: 100000,
                            target: 0.1
                        },
                        "200506": {
                            actual: 15,
                            target: 165
                        }
                    }
                }, {
                    kpiId: "11",
                    name: "kpi11",
                    unit: "",
                    children: [],
                    dataset: {
                        "200505": {
                            actual: 25,
                            target: 15
                        },
                        "200506": {
                            actual: 15,
                            target: 165
                        }
                    }
                }, {
                    kpiId: "12",
                    name: "kpi12",
                    unit: "",
                    children: [],
                    dataset: {
                        "200505": {
                            actual: 25,
                            target: 15
                        },
                        "200506": {
                            actual: 15,
                            target: 165
                        }
                    }
                }, {
                    kpiId: "13",
                    name: "kpi13",
                    unit: "",
                    children: ["14", "15"],
                    dataset: {
                        "200505": {
                            actual: 25,
                            target: 15
                        },
                        "200506": {
                            actual: 15,
                            target: 165
                        }
                    }
                }, {
                    kpiId: "14",
                    name: "kpi14",
                    unit: "",
                    children: [],
                    dataset: {
                        "200505": {
                            actual: 25,
                            target: 15
                        },
                        "200506": {
                            actual: 15,
                            target: 165
                        }
                    }
                }, {
                    kpiId: "15",
                    name: "kpi15",
                    unit: "",
                    children: ["16", "17", "18", "19"],
                    dataset: {
                        "200505": {
                            actual: 15,
                            target: 16
                        },
                        "200506": {
                            actual: 15,
                            target: 16
                        }
                    }
                }, {
                    kpiId: "16",
                    name: "kpi16",
                    unit: "",
                    children: [],
                    dataset: {
                        "200505": {
                            actual: 16,
                            target: 17
                        },
                        "200506": {
                            actual: 16,
                            target: 17
                        }
                    }
                }, {
                    kpiId: "17",
                    name: "kpi17",
                    unit: "",
                    children: [],
                    dataset: {
                        "200505": {
                            actual: 17,
                            target: 15
                        },
                        "200506": {
                            actual: 15,
                            target: 165
                        }
                    }
                }, {
                    kpiId: "18",
                    name: "kpi18",
                    unit: "",
                    children: ["20", "21", "22"],
                    dataset: {
                        "200505": {
                            actual: 25,
                            target: 15
                        },
                        "200506": {
                            actual: 15,
                            target: 165
                        }
                    }
                }, {
                    kpiId: "19",
                    name: "kpi19",
                    unit: "",
                    children: [],
                    dataset: {
                        "200505": {
                            actual: 25,
                            target: 15
                        },
                        "200506": {
                            actual: 15,
                            target: 165
                        }
                    }
                }, {
                    kpiId: "20",
                    name: "kpi20",
                    unit: "",
                    children: ["23", "24", "25", "26"],
                    dataset: {
                        "200505": {
                            actual: 25,
                            target: 15
                        },
                        "200506": {
                            actual: 15,
                            target: 165
                        }
                    }
                }, {
                    kpiId: "21",
                    name: "kpi21",
                    unit: "",
                    children: [],
                    dataset: {
                        "200505": {
                            actual: 25,
                            target: 15
                        },
                        "200506": {
                            actual: 15,
                            target: 165
                        }
                    }
                }, {
                    kpiId: "22",
                    name: "kpi22",
                    unit: "",
                    children: [],
                    dataset: {
                        "200505": {
                            actual: 25,
                            target: 15
                        },
                        "200506": {
                            actual: 15,
                            target: 165
                        }
                    }
                }, {
                    kpiId: "23",
                    name: "kpi23",
                    unit: "",
                    children: ["27", "28", "29", "30"],
                    dataset: {
                        "200505": {
                            actual: 25,
                            target: 15
                        },
                        "200506": {
                            actual: 15,
                            target: 165
                        }
                    }
                }, {
                    kpiId: "24",
                    name: "kpi24",
                    unit: "",
                    children: [],
                    dataset: {
                        "200505": {
                            actual: 25,
                            target: 15
                        },
                        "200506": {
                            actual: 15,
                            target: 165
                        }
                    }
                }, {
                    kpiId: "25",
                    name: "kpi25",
                    unit: "",
                    children: [],
                    dataset: {
                        "200505": {
                            actual: 25,
                            target: 15
                        },
                        "200506": {
                            actual: 15,
                            target: 165
                        }
                    }
                }, {
                    kpiId: "26",
                    name: "kpi26",
                    unit: "",
                    children: [],
                    dataset: {
                        "200505": {
                            actual: 25,
                            target: 15
                        },
                        "200506": {
                            actual: 15,
                            target: 165
                        }
                    }
                }, {
                    kpiId: "27",
                    name: "kpi27",
                    unit: "",
                    children: [],
                    dataset: {
                        "200505": {
                            actual: 25,
                            target: 15
                        },
                        "200506": {
                            actual: 15,
                            target: 165
                        }
                    }
                }, {
                    kpiId: "28",
                    name: "kpi28",
                    unit: "",
                    children: [],
                    dataset: {
                        "200505": {
                            actual: 25,
                            target: 15
                        },
                        "200506": {
                            actual: 15,
                            target: 165
                        }
                    }
                }, {
                    kpiId: "29",
                    name: "kpi29",
                    unit: "",
                    children: [],
                    dataset: {
                        "200505": {
                            actual: 25,
                            target: 15
                        },
                        "200506": {
                            actual: 15,
                            target: 165
                        }
                    }
                }, {
                    kpiId: "30",
                    name: "kpi30",
                    unit: "",
                    children: [],
                    dataset: {
                        "200505": {
                            actual: 25,
                            target: 15
                        },
                        "200506": {
                            actual: 15,
                            target: 165
                        }
                    }
                }
            ]
        }
    };
}
