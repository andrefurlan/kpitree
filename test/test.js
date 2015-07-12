"use strict";

var assert = require("assert");
import immutable from "immutable";


import initialState from "./initialStateWithFakeData";
import State from "../src/client/state";
import * as k from "../src/client/components/Tree/Tree.constants";


import * as treeHelpers from "../src/client/components/Tree/Tree.helpers";
describe("treeHelpers", function() {
    
    describe("getNewTreeState", function() {
        const appState = new State(initialState(), function() {return 0});
        it ("should undrill", function() {
            var initialList = immutable.List(["5"]);
            var actual = treeHelpers.getNewTreeState("5", initialList, appState);
            assert(immutable.is(immutable.List([]), actual));
        });
        it ("should drill one node", function() {
            var initialList = immutable.List([]);
            var actual = treeHelpers.getNewTreeState("2", initialList, appState);
            assert(immutable.is(immutable.List(["2"]), actual));
        });
        it ("should drill two nodes", function() {
            var initialList = immutable.List(["2", "4", "6", "13"]);
            var actual = treeHelpers.getNewTreeState("6", initialList, appState);
            assert(immutable.is(immutable.List(["2", "4"]), actual));
        });
        // it ("should drill three nodes", function() {
        //     var actual = treeHelpers.getNewTreeStateOnDrill("1", appState);
        //     assert.equal(actual.size, 3);
        // });
        // it ("should render node '1' on x=TODO", function() {
        //     var newState = treeHelpers.getNewTreeStateOnDrill("1", appState);
        //     var nodeOne = newState.filter((node) => {return node.get("kpiId") === "1";}).get(0);
        //     var actual = nodeOne.getIn(["position", "x"]);
        //     var initialXPosition = treeHelpers.getInitialPosition(appState).get("x");
        //     assert.equal(actual, initialXPosition);
        // });
        // it ("should render node '1' on y=TODO", function() {
        //     var newState = treeHelpers.getNewTreeStateOnDrill("1", appState);
        //     var nodeOne = newState.filter((node) => {return node.get("kpiId") === "1";}).get(0);
        //     var actual = nodeOne.getIn(["position", "y"]);
        //     var initialYPosition = treeHelpers.getInitialPosition(appState).get("y");
        //     assert.equal(actual, initialYPosition);
        // });
        // it ("should render node '2' on correct x", function() {
        //     var newState = treeHelpers.getNewTreeStateOnDrill("1", appState);
        //     var nodeOne = newState.filter((node) => {return node.get("kpiId") === "2";}).get(0);
        //     var actual = nodeOne.getIn(["position", "x"]);
        //     var initialXPosition = treeHelpers.getInitialPosition(appState).get("x");
        //     var expected = initialXPosition + k.nodeWidht + k.nodeHSpacing;
        //     assert.equal(actual, expected);
        // });
        // it ("should render node '2' on correct y", function() {
        //     var newState = treeHelpers.getNewTreeStateOnDrill("1", appState);
        //     var nodeOne = newState.filter((node) => {return node.get("kpiId") === "2";}).get(0);
        //     var actual = nodeOne.getIn(["position", "y"]);
        //     var initialYPosition = treeHelpers.getInitialPosition(appState).get("y");
        //     var expected = ((((3 * k.nodeHeight) + (2 * k.nodeVSpacing)) / 2) + 
        //         (initialYPosition + k.nodeHeight / 2));
        //     assert.equal(actual, expected);
        // });
        // it ("should render node '3' on correct x", function() {
        //     var newState = treeHelpers.getNewTreeStateOnDrill("1", appState);
        //     var nodeOne = newState.filter((node) => {return node.get("kpiId") === "3";}).get(0);
        //     var actual = nodeOne.getIn(["position", "x"]);
        //     var initialXPosition = treeHelpers.getInitialPosition(appState).get("x");
        //     var expected = initialXPosition + k.nodeWidht + k.nodeHSpacing;
        //     assert.equal(actual, expected);
        // });
        // it ("should render node '3' on correct y", function() {
        //     var newState = treeHelpers.getNewTreeStateOnDrill("1", appState);
        //     var nodeOne = newState.filter((node) => {return node.get("kpiId") === "2";}).get(0);
        //     var actual = nodeOne.getIn(["position", "y"]);
        //     var initialYPosition = treeHelpers.getInitialPosition(appState).get("y");
        //     var expected = initialYPosition;
        //     assert.equal(actual, expected);
        // });
        // var tests = ["1", "2", "3", "4", "5"];
        // tests.forEach(function(t) {
        //     var actual = treeHelpers.getNewTreeStateOnDrill(t, appState);
        //     it (t + ": should be a Immutable list", function() {
        //         assert(immutable.List.isList(actual));
        //     });
        //     actual.forEach(function(a, index) {
        //         it (t + " - " + index + ": should have kpiId", function() {
        //            assert(a.get("kpiId"));
        //         });
        //     });
        //     actual.forEach(function(a, index) {
        //         it (t + " - " + index + ": should have position", function() {
        //            assert(a.get("position"));
        //         });
        //     });
        //     actual.forEach(function(a, index) {
        //         it (t + " - " + index + ": should have position x", function() {
        //            assert(a.getIn(["position", "x"]));
        //         });
        //     });
        //     actual.forEach(function(a, index) {
        //         it (t + " - " + index + ": should have position y", function() {
        //            assert(a.getIn(["position", "y"]));
        //         });
        //     });
        // });
    });

});

import * as nodeHelpers from "../src/client/components/Tree/Node/TreeNode.helpers";
describe("nodeHelpers", function() {
    describe("calculateScore", function() {
        describe("up", function () {
            it ("should be 1: actual = 0 | target = 0", function() {
                assert.equal(nodeHelpers.calculateScore(0, 0, "up"), 1);
            });
            it ("should be 1.2: actual > 0 | target = 0", function() {
                assert.equal(nodeHelpers.calculateScore(1, 0, "up"), 1.2);
            });
            it ("should be 0: actual < 0 | target = 0", function() {
                assert.equal(nodeHelpers.calculateScore(-1, 0, "up"), 0);
            });
            it ("should be 0: actual = 0 | target > 0", function() {
                assert.equal(nodeHelpers.calculateScore(0, 1, "up"), 0);
            });
            it ("should be 1.2: actual = 0 | target < 0", function() {
                assert.equal(nodeHelpers.calculateScore(0, -1, "up"), 1.2);
            });
            it ("should be 1: actual = 100 | target = 100", function() {
                assert.equal(nodeHelpers.calculateScore(100, 100, "up"), 1);
            });
            it ("should be 1.1: actual = 110 | target = 100", function() {
                assert.equal(nodeHelpers.calculateScore(110, 100, "up"), 1.1);
            });
            it ("should be 1.2: actual = 140 | target = 100", function() {
                assert.equal(nodeHelpers.calculateScore(140, 100, "up"), 1.2);
            });
            it ("should be 0.9: actual = 90 | target = 100", function() {
                assert.equal(nodeHelpers.calculateScore(90, 100, "up"), 0.9);
            });
            it ("should be 0.8: actual = 60 | target = 100", function() {
                assert.equal(nodeHelpers.calculateScore(60, 100, "up"), 0);
            });
            it ("should be 0.8: actual = -60 | target = 100", function() {
                assert.equal(nodeHelpers.calculateScore(-60, 100, "up"), 0);
            });
            it ("should be 1: actual = -100 | target = -100", function() {
                assert.equal(nodeHelpers.calculateScore(-100, -100, "up"), 1);
            });
            it ("should be 1.1: actual = -110 | target = -100", function() {
                assert.equal(nodeHelpers.calculateScore(-110, -100, "up").toFixed(2), 0.9.toFixed(2));
            });
            it ("should be 1.2: actual = -140 | target = -100", function() {
                assert.equal(nodeHelpers.calculateScore(-140, -100, "up"), 0);
            });
            it ("should be 0.9: actual = -90 | target = -100", function() {
                assert.equal(nodeHelpers.calculateScore(-90, -100, "up").toFixed(2), 1.1.toFixed(2));
            });
            it ("should be 0.8: actual = -60 | target = -100", function() {
                assert.equal(nodeHelpers.calculateScore(-60, -100, "up"), 1.2);
            });
        });
        describe("down", function(){
            it ("should be 1: actual = 0 | target = 0", function() {
                assert.equal(nodeHelpers.calculateScore(0, 0, "down"), 1);
            });   
            it ("should be 0: actual > 0 | target = 0", function() {
                assert.equal(nodeHelpers.calculateScore(1, 0, "down"), 0);
            });
            it ("should be 1.2: actual < 0 | target = 0", function() {
                assert.equal(nodeHelpers.calculateScore(-1, 0, "down"), 1.2);
            });
            it ("should be 1.2: actual = 0 | target > 0", function() {
                assert.equal(nodeHelpers.calculateScore(0, 1, "down"), 1.2);
            });
            it ("should be 0: actual = 0 | target < 0", function() {
                assert.equal(nodeHelpers.calculateScore(0, -1, "down"), 0);
            });
            it ("should be 1: actual = 100 | target = 100", function() {
                assert.equal(nodeHelpers.calculateScore(100, 100, "down"), 1);
            });
            it ("should be 0.9: actual = 110 | target = 100", function() {
                assert.equal(nodeHelpers.calculateScore(110, 100, "down").toFixed(2), 0.9.toFixed(2));
            });
            it ("should be 1.1: actual = 90 | target = 100", function() {
                assert.equal(nodeHelpers.calculateScore(90, 100, "down").toFixed(2), 1.1.toFixed(2));
            });
            it ("should be 1.2: actual = 70 | target = 100", function() {
                assert.equal(nodeHelpers.calculateScore(70, 100, "down").toFixed(2), 1.2.toFixed(2));
            });
            it ("should be 1.2: actual = 140 | target = 100", function() {
                assert.equal(nodeHelpers.calculateScore(140, 100, "down"), 0);
            });
            it ("should be 0: actual = 140 | target = -100", function() {
                assert.equal(nodeHelpers.calculateScore(140, -100, "down"), 0);
            });
            it ("should be 1: actual = -100 | target = -100", function() {
                assert.equal(nodeHelpers.calculateScore(-100, -100, "down"), 1);
            });
            it ("should be 0.9: actual = -90 | target = -100", function() {
                assert.equal(nodeHelpers.calculateScore(-90, -100, "down").toFixed(2), 0.9.toFixed(2));
            });
            it ("should be 1.1: actual = -110 | target = -100", function() {
                assert.equal(nodeHelpers.calculateScore(-110, -100, "down").toFixed(2), 1.1.toFixed(2));
            });
        });
    });
});