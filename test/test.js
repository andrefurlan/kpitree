"use strict";

var assert = require("assert");
import immutable from "immutable";

import * as treeUtils from "../js/treeUtils";
import initialState from "./initialStateWithFakeData";
import State from "../js/state";
import * as k from "../js/components/treeConstants";

describe("treeUtils", function() {
    
    describe("getNewTreeStateOnDrill", function() {
        const appState = new State(initialState()).get();
        it ("should do nothing", function() {
            var actual = treeUtils.getNewTreeStateOnDrill("3", appState);
            var expected = appState.get("tree");
            assert.deepEqual(actual, expected);
        });
        it ("should drill one node", function() {
            var actual = treeUtils.getNewTreeStateOnDrill("2", appState);
            assert.equal(actual.size, 1);
        });
        it ("should drill two nodes", function() {
            var actual = treeUtils.getNewTreeStateOnDrill("4", appState);
            assert.equal(actual.size, 2);
        });
        it ("should drill three nodes", function() {
            var actual = treeUtils.getNewTreeStateOnDrill("1", appState);
            assert.equal(actual.size, 3);
        });
        it ("should render node '1' on x=TODO", function() {
            var newState = treeUtils.getNewTreeStateOnDrill("1", appState);
            var nodeOne = newState.filter((node) => {return node.get("kpiId") === "1";}).get(0);
            var actual = nodeOne.getIn(["position", "x"]);
            var initialXPosition = treeUtils.getInitialPosition(appState).get("x");
            assert.equal(actual, initialXPosition);
        });
        it ("should render node '1' on y=TODO", function() {
            var newState = treeUtils.getNewTreeStateOnDrill("1", appState);
            var nodeOne = newState.filter((node) => {return node.get("kpiId") === "1";}).get(0);
            var actual = nodeOne.getIn(["position", "y"]);
            var initialYPosition = treeUtils.getInitialPosition(appState).get("y");
            assert.equal(actual, initialYPosition);
        });
        it ("should render node '2' on correct x", function() {
            var newState = treeUtils.getNewTreeStateOnDrill("1", appState);
            var nodeOne = newState.filter((node) => {return node.get("kpiId") === "2";}).get(0);
            var actual = nodeOne.getIn(["position", "x"]);
            var initialXPosition = treeUtils.getInitialPosition(appState).get("x");
            var expected = initialXPosition + k.nodeWidht + k.nodeHSpacing;
            assert.equal(actual, expected);
        });
        it ("should render node '2' on correct y", function() {
            var newState = treeUtils.getNewTreeStateOnDrill("1", appState);
            var nodeOne = newState.filter((node) => {return node.get("kpiId") === "2";}).get(0);
            var actual = nodeOne.getIn(["position", "y"]);
            var initialYPosition = treeUtils.getInitialPosition(appState).get("y");
            var expected = ((((3 * k.nodeHeight) + (2 * k.nodeVSpacing)) / 2) + 
                (initialYPosition + k.nodeHeight / 2));
            assert.equal(actual, expected);
        });
        it ("should render node '3' on correct x", function() {
            var newState = treeUtils.getNewTreeStateOnDrill("1", appState);
            var nodeOne = newState.filter((node) => {return node.get("kpiId") === "3";}).get(0);
            var actual = nodeOne.getIn(["position", "x"]);
            var initialXPosition = treeUtils.getInitialPosition(appState).get("x");
            var expected = initialXPosition + k.nodeWidht + k.nodeHSpacing;
            assert.equal(actual, expected);
        });
        it ("should render node '3' on correct y", function() {
            var newState = treeUtils.getNewTreeStateOnDrill("1", appState);
            var nodeOne = newState.filter((node) => {return node.get("kpiId") === "2";}).get(0);
            var actual = nodeOne.getIn(["position", "y"]);
            var initialYPosition = treeUtils.getInitialPosition(appState).get("y");
            var expected = initialYPosition;
            assert.equal(actual, expected);
        });
        var tests = ["1", "2", "3", "4", "5"];
        tests.forEach(function(t) {
            var actual = treeUtils.getNewTreeStateOnDrill(t, appState);
            it (t + ": should be a Immutable list", function() {
                assert(immutable.List.isList(actual));
            });
            actual.forEach(function(a, index) {
                it (t + " - " + index + ": should have kpiId", function() {
                   assert(a.get("kpiId"));
                });
            });
            actual.forEach(function(a, index) {
                it (t + " - " + index + ": should have position", function() {
                   assert(a.get("position"));
                });
            });
            actual.forEach(function(a, index) {
                it (t + " - " + index + ": should have position x", function() {
                   assert(a.getIn(["position", "x"]));
                });
            });
            actual.forEach(function(a, index) {
                it (t + " - " + index + ": should have position y", function() {
                   assert(a.getIn(["position", "y"]));
                });
            });
        });
    });
});
