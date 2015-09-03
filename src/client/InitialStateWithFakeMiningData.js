
export default function() {
    return {
        tree: [],
        kpiDetails: {
            toggle: false
        },
        periodPicker: {
            month: "05",  // this is not necessary, eventually it should be only the index
            year: "2005",
            indexMonth: "4",
            indexYear: "0"
        },
        data: {
            user: "andre",
            datasetName: "test",
            rootKPI: "1",
            kpis: [
                {
                    kpiId: "1",
                    name: "Opex/Oz",
                    unit: "CND",
                    orientation: "down",
                    magnitude: "",
                    children: ["2", "60"],
                    dataset: {
                        "200505": {
                            actual: 100,
                            target: 100
                        },
                        "200506": {
                            actual: 100,
                            target: 100
                        }
                    }
                }, {
                    kpiId: "2",
                    name: "Opex",
                    unit: "CND",
                    orientation: "down",
                    children: ["3", "59"],
                    dataset: {
                        "200505": {
                                actual: 100,
                                target: 100
                            },
                        "200506": {
                                actual: 100,
                                target: 100
                            }
                        }
                }, {
                    kpiId: "3",
                    name: "Opex",
                    unit: "R$",
                    orientation: "down",
                    children: ["4", "7", "10", "14", "17", "20", "23", "26", "29", "32", "35", "53", "54", "55", "56", "57", "58", ],
                    dataset: {
                        "200505": {
                            actual: 100,
                            target: 100
                        },
                        "200506": {
                            actual: 100,
                            target: 100
                        }
                    }
                }, {
                    kpiId: "4",
                    name: "Grinding Media",
                    unit: "CND",
                    orientation: "down",
                    children: ["5", "6"],
                    dataset: {
                        "200505": {
                            actual: 100,
                            target: 100
                        },
                        "200506": {
                            actual: 100,
                            target: 100
                        }
                    }
                }, {
                    kpiId: "5",
                    name: "P1 - Grinding Media",
                    unit: "",
                    orientation: "down",
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
                    name: "P2 - Grinding Media",
                    unit: "",
                    orientation: "down",
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
                    kpiId: "7",
                    name: "Electrical Energy",
                    unit: "",
                    children: ["8", "9"],
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
                    name: "P1 - Electrical Energy",
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
                    name: "P2 - Electrical Energy",
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
                    name: "Labour Work",
                    unit: "",
                    orientation: "up",
                    children: ["11", "12", "13"],
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
                    name: "Salaries-Regular",
                    unit: "",
                    orientation: "down",
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
                    name: "Overtime-Salary",
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
                    kpiId: "13",
                    name: "Others",
                    unit: "",
                    orientation: "down",
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
                    kpiId: "14",
                    name: "Collectors",
                    unit: "",
                    orientation: "up",
                    children: ["15", "16"],
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
                    name: "P1 - Collectors",
                    unit: "",
                    orientation: "up",
                    children: [],
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
                    name: "P2 - Collectors",
                    unit: "",
                    orientation: "up",
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
                    name: "Frother",
                    unit: "",
                    orientation: "up",
                    children: ["18", "19"],
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
                    name: "P1 - Frother",
                    unit: "",
                    orientation: "down",
                    children: [],
                    dataset: {
                        "200505": {
                            actual: 25,
                            target: 10
                        },
                        "200506": {
                            actual: 15,
                            target: 165
                        }
                    }
                }, {
                    kpiId: "19",
                    name: "P2 - Frother",
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
                    kpiId: "20",
                    name: "Cyanide",
                    unit: "",
                    orientation: "up",
                    children: ["21", "22"],
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
                    name: "P1 - Cyanide",
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
                    kpiId: "22",
                    name: "P2 - Cyanide",
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
                    kpiId: "23",
                    name: "Reagents",
                    unit: "",
                    orientation: "up",
                    children: ["24", "25"],
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
                    name: "P1 - Reagents",
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
                    kpiId: "25",
                    name: "P2 - Reagents",
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
                    kpiId: "26",
                    name: "Operation Materials",
                    unit: "",
                    orientation: "up",
                    children: ["27", "28"],
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
                    name: "P1 - Operation Materials",
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
                    kpiId: "28",
                    name: "P2 - Operation Materials",
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
                    kpiId: "29",
                    name: "Fuel and Lubricants",
                    unit: "",
                    orientation: "up",
                    children: ["30", "31"],
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
                    name: "P1 - Fuel and Lubricants",
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
                    kpiId: "31",
                    name: "P2 - Fuel and Lubricants",
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
                    kpiId: "32",
                    name: "Spars. & Maint. Mater.",
                    unit: "",
                    orientation: "up",
                    children: ["33", "34"],
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
                    kpiId: "33",
                    name: "P1 - Spars. & Maint. Mater.",
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
                    kpiId: "34",
                    name: "P2 - Spars. & Maint. Mater.",
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
                    kpiId: "35",
                    name: "Contracted Services",
                    unit: "",
                    orientation: "up",
                    children: ["36", "41", "45", "46", "47", "48", "49", "50", "51", "52"],
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
                    kpiId: "36",
                    name: "Operation",
                    unit: "",
                    orientation: "up",
                    children: ["37", "38", "39", "40"],
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
                    kpiId: "37",
                    name: "Mining",
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
                    kpiId: "38",
                    name: "Process",
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
                    kpiId: "39",
                    name: "Tech. Services",
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
                    kpiId: "40",
                    name: "Projects Services",
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
                    kpiId: "41",
                    name: "Maintenance",
                    unit: "",
                    orientation: "up",
                    children: ["42", "43", "44"],
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
                    kpiId: "42",
                    name: "Planning & Reliability",
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
                    kpiId: "43",
                    name: "Industrial Maint.",
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
                    kpiId: "44",
                    name: "HME Maint.",
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
                    kpiId: "45",
                    name: "Tailing Dam",
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
                    kpiId: "46",
                    name: "Human Resources",
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
                    kpiId: "47",
                    name: "Strategy Manag.",
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
                    kpiId: "48",
                    name: "Community",
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
                    kpiId: "49",
                    name: "HSE",
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
                    kpiId: "50",
                    name: "Land & Shared Serv.",
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
                    kpiId: "51",
                    name: "Tax Site",
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
                    kpiId: "52",
                    name: "Administration",
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
                    kpiId: "53",
                    name: "General Expenses",
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
                    kpiId: "54",
                    name: "Results",
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
                    kpiId: "55",
                    name: "Ref. and Transport",
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
                    kpiId: "56",
                    name: "Royalties & Sales taxes",
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
                    kpiId: "57",
                    name: "Stock Variation",
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
                    kpiId: "58",
                    name: "Hedge",
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
                    kpiId: "59",
                    name: "R$/USD",
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
                    kpiId: "60",
                    name: "Equivalent Ounces",
                    unit: "",
                    orientation: "up",
                    children: ["61", "139", "142", "143", "148"],
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
                    kpiId: "61",
                    name: "Throughtput",
                    unit: "",
                    orientation: "up",
                    children: ["62", "97"],
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
                    kpiId: "62",
                    name: "Throughtput P1",
                    unit: "",
                    orientation: "up",
                    children: ["63", "96"],
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
                    kpiId: "63",
                    name: "Ore & Waste Mined",
                    unit: "",
                    orientation: "up",
                    children: ["64", "93"],
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
                    kpiId: "64",
                    name: "Productivity",
                    unit: "",
                    orientation: "up",
                    children: ["65", "72", "79", "86"],
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
                    kpiId: "65",
                    name: "Utilization Dozers",
                    unit: "",
                    orientation: "up",
                    children: ["66", "69"],
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
                    kpiId: "66",
                    name: "Efective Utilization",
                    unit: "",
                    orientation: "up",
                    children: ["67", "68"],
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
                    kpiId: "67",
                    name: "Water Tank Truck",
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
                    kpiId: "68",
                    name: "Aux. Services",
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
                    kpiId: "69",
                    name: "Availability",
                    unit: "",
                    orientation: "up",
                    children: ["70", "71"],
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
                    kpiId: "70",
                    name: "MTTR",
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
                    kpiId: "71",
                    name: "MTBF",
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
                    kpiId: "72",
                    name: "Utilization 777",
                    unit: "",
                    orientation: "up",
                    children: ["73", "76"],
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
                    kpiId: "73",
                    name: "Efective Utilization",
                    unit: "",
                    orientation: "up",
                    children: ["74", "75"],
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
                    kpiId: "74",
                    name: "Water Tank Truck",
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
                    kpiId: "75",
                    name: "Aux. Services",
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
                    kpiId: "76",
                    name: "Availability",
                    unit: "",
                    orientation: "up",
                    children: ["77", "78"],
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
                    kpiId: "77",
                    name: "MTTR",
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
                    kpiId: "78",
                    name: "MTBF",
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
                    kpiId: "79",
                    name: "Utilization 992",
                    unit: "",
                    orientation: "up",
                    children: ["80", "83"],
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
                    kpiId: "80",
                    name: "Efective Utilization",
                    unit: "",
                    orientation: "up",
                    children: ["81", "82"],
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
                    kpiId: "81",
                    name: "Water Tank Truck",
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
                    kpiId: "82",
                    name: "Aux. Services",
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
                    kpiId: "83",
                    name: "Availability",
                    unit: "",
                    orientation: "up",
                    children: ["84", "85"],
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
                    kpiId: "84",
                    name: "MTTR",
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
                    kpiId: "85",
                    name: "MTBF",
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
                    kpiId: "86",
                    name: "Utilization Patrol",
                    unit: "",
                    orientation: "up",
                    children: ["87", "90"],
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
                    kpiId: "87",
                    name: "Efective Utilization",
                    unit: "",
                    orientation: "up",
                    children: ["88", "89"],
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
                    kpiId: "88",
                    name: "Water Tank Truck",
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
                    kpiId: "89",
                    name: "Aux. Services",
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
                    kpiId: "90",
                    name: "Availability",
                    unit: "",
                    orientation: "up",
                    children: ["91", "92"],
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
                    kpiId: "91",
                    name: "MTTR",
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
                    kpiId: "92",
                    name: "MTBF",
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
                    kpiId: "93",
                    name: "Blasted Material",
                    unit: "",
                    orientation: "up",
                    children: ["94", "95"],
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
                    kpiId: "94",
                    name: "Drilled Material",
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
                    kpiId: "95",
                    name: "Efec. Util. Drill",
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
                    kpiId: "96",
                    name: "% Waste/Total Mined",
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
                    kpiId: "97",
                    name: "Throughtput P2",
                    unit: "",
                    orientation: "up",
                    children: ["98", "138"],
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
                    kpiId: "98",
                    name: "Ore & Waste Mined",
                    unit: "",
                    orientation: "up",
                    children: ["99", "135"],
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
                    kpiId: "99",
                    name: "Productivity",
                    unit: "",
                    orientation: "up",
                    children: ["100", "107", "114", "121", "128"],
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
                    kpiId: "100",
                    name: "Utilization 994",
                    unit: "",
                    orientation: "up",
                    children: ["101", "104"],
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
                    kpiId: "101",
                    name: "Efective Utilization",
                    unit: "",
                    orientation: "up",
                    children: ["102", "103"],
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
                    kpiId: "102",
                    name: "Water Tank Truck",
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
                    kpiId: "103",
                    name: "Aux. Services",
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
                    kpiId: "104",
                    name: "Availability",
                    unit: "",
                    orientation: "up",
                    children: ["105", "106"],
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
                    kpiId: "105",
                    name: "MTTR",
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
                    kpiId: "106",
                    name: "MTBF",
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
                    kpiId: "107",
                    name: "Utilization Dozers",
                    unit: "",
                    orientation: "up",
                    children: ["108", "111"],
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
                    kpiId: "108",
                    name: "Efective Utilization",
                    unit: "",
                    orientation: "up",
                    children: ["109", "110"],
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
                    kpiId: "109",
                    name: "Water Tank Truck",
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
                    kpiId: "110",
                    name: "Aux. Services",
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
                    kpiId: "111",
                    name: "Availability",
                    unit: "",
                    orientation: "up",
                    children: ["112", "113"],
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
                    kpiId: "112",
                    name: "MTTR",
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
                    kpiId: "113",
                    name: "MTBF",
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
                    kpiId: "114",
                    name: "Utilization Shover",
                    unit: "",
                    orientation: "up",
                    children: ["115", "118"],
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
                    kpiId: "115",
                    name: "Efective Utilization",
                    unit: "",
                    orientation: "up",
                    children: ["116", "117"],
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
                    kpiId: "116",
                    name: "Water Tank Truck",
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
                    kpiId: "117",
                    name: "Aux. Services",
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
                    kpiId: "118",
                    name: "Availability",
                    unit: "",
                    orientation: "up",
                    children: ["119", "120"],
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
                    kpiId: "119",
                    name: "MTTR",
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
                    kpiId: "120",
                    name: "MTBF",
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
                    kpiId: "121",
                    name: "Utilization 793",
                    unit: "",
                    orientation: "up",
                    children: ["122", "125"],
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
                    kpiId: "122",
                    name: "Efective Utilization",
                    unit: "",
                    orientation: "up",
                    children: ["123", "124"],
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
                    kpiId: "123",
                    name: "Water Tank Truck",
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
                    kpiId: "124",
                    name: "Aux. Services",
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
                    kpiId: "125",
                    name: "Availability",
                    unit: "",
                    orientation: "up",
                    children: ["126", "127"],
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
                    kpiId: "126",
                    name: "MTTR",
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
                    kpiId: "127",
                    name: "MTBF",
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
                    kpiId: "128",
                    name: "Utilization Patrol",
                    unit: "",
                    orientation: "up",
                    children: ["129", "132"],
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
                    kpiId: "129",
                    name: "Efective Utilization",
                    unit: "",
                    orientation: "up",
                    children: ["130", "131"],
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
                    kpiId: "130",
                    name: "Water Tank Truck",
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
                    kpiId: "131",
                    name: "Aux. Services",
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
                    kpiId: "132",
                    name: "Availability",
                    unit: "",
                    orientation: "up",
                    children: ["133", "134"],
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
                    kpiId: "133",
                    name: "MTTR",
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
                    kpiId: "134",
                    name: "MTBF",
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
                    kpiId: "135",
                    name: "Blasted Material",
                    unit: "",
                    orientation: "up",
                    children: ["136", "137"],
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
                    kpiId: "136",
                    name: "Drilled Material",
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
                    kpiId: "137",
                    name: "Efec. Util. Drill",
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
                    kpiId: "138",
                    name: "% Waste/Total Mined",
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
                    kpiId: "139",
                    name: "Gold Back Grade",
                    unit: "",
                    orientation: "up",
                    children: ["140", "141"],
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
                    kpiId: "140",
                    name: "Gold Back Grade P1",
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
                    kpiId: "141",
                    name: "Gold Back Grade P2",
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
                    kpiId: "142",
                    name: "Crushing Throughput",
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
                    kpiId: "143",
                    name: "Mill Throughput",
                    unit: "",
                    orientation: "up",
                    children: ["144", "145"],
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
                    kpiId: "144",
                    name: "Work Index",
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
                    kpiId: "145",
                    name: "Availability",
                    unit: "",
                    orientation: "up",
                    children: ["146", "147"],
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
                    kpiId: "146",
                    name: "MTTR",
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
                    kpiId: "147",
                    name: "MTBF",
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
                    kpiId: "148",
                    name: "Global Recovery",
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
                }
            ]
        }
    };
}
