"use strict";

var assert = require("assert");
var immutable = require("immutable");
// var testFunctions = require("../js/functions");





// example tests

import {sum, pi} from "../js/TestFunctions";
describe("testFunctions", function(){
    describe("sum", function(){
        it("should return 4", function(){
            var res = sum(2, 2);
            assert.equal(res, 4);
        });
    });
    describe("pi", function(){
        it("should return 3.14...", function() {
            assert.equal(pi, 3.141593);
        });
    });
});

function add() {
  return Array.prototype.slice.call(arguments).reduce(function(prev, curr) {
    return prev + curr;
  }, 0);
}

describe("add()", function() {
  before(function() {
    // ...
  });
  var tests = [
    {args: [1, 2], expected: 3},
    {args: [1, 2, 3], expected: 6},
    {args: [1, 2, 3, 4], expected: 10}
  ];

  tests.forEach(function(t) {
    it("correctly adds " + t.args.length + " args", function() {
      var res = add.apply(null, t.args);
      assert.strictEqual(res, t.expected);
    });
  });
});
