
export default function() {
    return {
        tree: [{
            kpiId: 1,
            kpiName: "sales/person",
            targetValue: "$10.000,00",
            actualValue: "$10.000,00",
            delta: "100%",
            flag: "green",
            position: {x: 10, y: 65}
        }],
        datePicker: {
            period: 200505
        },
        data: {
            user: "andre",
            kpis: [
                {
                    id: 1,
                    name: "sales/person",
                    unit: "CND",
                    magnitude: "",
                    dataset: [{
                        200505: {
                                actual: 10.000,
                                target: 10.000
                            },
                        200506: {
                                actual: 13.000,
                                target: 16.000
                            }
                        }
                    ]
                }, {
                    id: 2,
                    name: "sales",
                    unit: "CND",
                    dataset: [{
                        200505: {
                                actual: 100.000,
                                target: 100.000
                            },
                        200506: {
                                actual: 130.000,
                                target: 160.000
                            }
                        }
                    ]
                }, {
                    id: 3,
                    name: "person",
                    unit: "",
                    dataset: [{
                        200505: {
                                actual: 20,
                                target: 10
                            },
                        200506: {
                                actual: 13,
                                target: 16
                            }
                        }
                    ]
                }
            ],
            hierarchy: {
                id: 1,
                children: [{
                    id: 2,
                    children: [{
                        id: 4,
                        children: []
                    }, {
                        id: 5,
                        children: []
                    }]}, {
                    id: 3,
                    children: []
                }]
            }
        }
    };
}
