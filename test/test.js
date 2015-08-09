"use strict";

const assert = require("assert");
import immutable from "immutable";

import initialState from "./initialStateWithFakeData";
import State from "../src/client/State";

import * as treeHelpers from "../src/client/components/Tree/Tree.helpers";
describe("treeHelpers", function() {

    describe("getNewTreeState", function() {
        const appState = new State(initialState(), function() {return 0; });
        it("should undrill", function() {
            const initialList = immutable.List(["5"]);
            let actual = treeHelpers.getNewTreeState("5", initialList, appState);
            assert(immutable.is(immutable.List([]), actual));
        });
        it("should drill one node", function() {
            let initialList = immutable.List([]);
            let actual = treeHelpers.getNewTreeState("2", initialList, appState);
            assert(immutable.is(immutable.List(["2"]), actual));
        });
        it("should drill two nodes", function() {
            let initialList = immutable.List(["2", "4", "6", "13"]);
            let actual = treeHelpers.getNewTreeState("6", initialList, appState);
            assert(immutable.is(immutable.List(["2", "4"]), actual));
        });
    });

});

import * as nodeHelpers from "../src/client/components/Tree/Node/TreeNode.helpers";
describe("nodeHelpers", function() {
    describe("calculateScore", function() {
        describe("up", function() {
            it("should be 1: actual = 0 | target = 0", function() {
                assert.equal(nodeHelpers.calculateScore(0, 0, "up"), 1);
            });
            it("should be 1.2: actual > 0 | target = 0", function() {
                assert.equal(nodeHelpers.calculateScore(1, 0, "up"), 1.2);
            });
            it("should be 0: actual < 0 | target = 0", function() {
                assert.equal(nodeHelpers.calculateScore(-1, 0, "up"), 0);
            });
            it("should be 0: actual = 0 | target > 0", function() {
                assert.equal(nodeHelpers.calculateScore(0, 1, "up"), 0);
            });
            it("should be 1.2: actual = 0 | target < 0", function() {
                assert.equal(nodeHelpers.calculateScore(0, -1, "up"), 1.2);
            });
            it("should be 1: actual = 100 | target = 100", function() {
                assert.equal(nodeHelpers.calculateScore(100, 100, "up"), 1);
            });
            it("should be 1.1: actual = 110 | target = 100", function() {
                assert.equal(nodeHelpers.calculateScore(110, 100, "up"), 1.1);
            });
            it("should be 1.2: actual = 140 | target = 100", function() {
                assert.equal(nodeHelpers.calculateScore(140, 100, "up"), 1.2);
            });
            it("should be 0.9: actual = 90 | target = 100", function() {
                assert.equal(nodeHelpers.calculateScore(90, 100, "up"), 0.9);
            });
            it("should be 0.8: actual = 60 | target = 100", function() {
                assert.equal(nodeHelpers.calculateScore(60, 100, "up"), 0);
            });
            it("should be 0.8: actual = -60 | target = 100", function() {
                assert.equal(nodeHelpers.calculateScore(-60, 100, "up"), 0);
            });
            it("should be 1: actual = -100 | target = -100", function() {
                assert.equal(nodeHelpers.calculateScore(-100, -100, "up"), 1);
            });
            it("should be 1.1: actual = -110 | target = -100", function() {
                assert.equal(nodeHelpers.calculateScore(-110, -100, "up").toFixed(2), 0.9.toFixed(2));
            });
            it("should be 1.2: actual = -140 | target = -100", function() {
                assert.equal(nodeHelpers.calculateScore(-140, -100, "up"), 0);
            });
            it("should be 0.9: actual = -90 | target = -100", function() {
                assert.equal(nodeHelpers.calculateScore(-90, -100, "up").toFixed(2), 1.1.toFixed(2));
            });
            it("should be 0.8: actual = -60 | target = -100", function() {
                assert.equal(nodeHelpers.calculateScore(-60, -100, "up"), 1.2);
            });
        });
        describe("down", function() {
            it("should be 1: actual = 0 | target = 0", function() {
                assert.equal(nodeHelpers.calculateScore(0, 0, "down"), 1);
            });
            it("should be 0: actual > 0 | target = 0", function() {
                assert.equal(nodeHelpers.calculateScore(1, 0, "down"), 0);
            });
            it("should be 1.2: actual < 0 | target = 0", function() {
                assert.equal(nodeHelpers.calculateScore(-1, 0, "down"), 1.2);
            });
            it("should be 1.2: actual = 0 | target > 0", function() {
                assert.equal(nodeHelpers.calculateScore(0, 1, "down"), 1.2);
            });
            it("should be 0: actual = 0 | target < 0", function() {
                assert.equal(nodeHelpers.calculateScore(0, -1, "down"), 0);
            });
            it("should be 1: actual = 100 | target = 100", function() {
                assert.equal(nodeHelpers.calculateScore(100, 100, "down"), 1);
            });
            it("should be 0.9: actual = 110 | target = 100", function() {
                assert.equal(nodeHelpers.calculateScore(110, 100, "down").toFixed(2), 0.9.toFixed(2));
            });
            it("should be 1.1: actual = 90 | target = 100", function() {
                assert.equal(nodeHelpers.calculateScore(90, 100, "down").toFixed(2), 1.1.toFixed(2));
            });
            it("should be 1.2: actual = 70 | target = 100", function() {
                assert.equal(nodeHelpers.calculateScore(70, 100, "down").toFixed(2), 1.2.toFixed(2));
            });
            it("should be 1.2: actual = 140 | target = 100", function() {
                assert.equal(nodeHelpers.calculateScore(140, 100, "down"), 0);
            });
            it("should be 0: actual = 140 | target = -100", function() {
                assert.equal(nodeHelpers.calculateScore(140, -100, "down"), 0);
            });
            it("should be 1: actual = -100 | target = -100", function() {
                assert.equal(nodeHelpers.calculateScore(-100, -100, "down"), 1);
            });
            it("should be 0.9: actual = -90 | target = -100", function() {
                assert.equal(nodeHelpers.calculateScore(-90, -100, "down").toFixed(2), 0.9.toFixed(2));
            });
            it("should be 1.1: actual = -110 | target = -100", function() {
                assert.equal(nodeHelpers.calculateScore(-110, -100, "down").toFixed(2), 1.1.toFixed(2));
            });
        });
    });
});
