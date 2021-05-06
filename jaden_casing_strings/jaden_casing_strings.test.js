"use strict";

/*
test create to show the behavior on different scenarios
function created by Pavel V.
*/

String.prototype.toJadenCase = function () {
  return this.split(" ")
    .map((item) => item[0].toUpperCase() + item.slice(1))
    .join(" ");
};

describe(" Uppercase the first letter of a word", () => {
  describe("passing symple words", () => {
    it("An empty string", () => {
      let str = "";
      expect(str.toJadenCase()).toEqual("");
    });
    it("A simple name", () => {
      let str = "rafael";
      expect(str.toJadenCase()).toEqual("Rafael");
    });
    it("A word in quotes", () => {
      let str = '"hello"';
      expect(str.toJadenCase()).toEqual('"Hello"');
    });
    it("A number at the beggining of the word", () => {
      let str = '"1hello"';
      expect(str.toJadenCase()).toEqual('"1Hello"');
    });
  });
  describe("passing phrases", () => {
    it("A Jade's phrase", () => {
      let str = "how can mirrors be real if our eyes aren't real";
      expect(str.toJadenCase()).toEqual(
        "How Can Mirrors Be Real If Our Eyes Aren't Real"
      );
    });
    it("the phrase in quotes", () => {
      let str = '"how can mirrors be real if our eyes aren\'t real"';
      expect(str.toJadenCase()).toEqual(
        '"How Can Mirrors Be Real If Our Eyes Aren\'t Real"'
      );
    });
  });
});
