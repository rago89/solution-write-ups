"use strict";
/*
 I Created a function passing all the edge cases shown in the function of Pavel V.
*/
String.prototype.rago89ToJadenCase = function () {
  const stringSplit = this.split(" ");
  const regexp = /^[\W\d]/;
  let newArray = [];

  for (const element of stringSplit) {
    const stringArray = [...element];
    if (element === "") break;

    if (element.search(regexp) !== -1) {
      stringArray.splice(1, 1, element[1].toUpperCase());
      newArray.push(stringArray.join(""));
    } else {
      stringArray.splice(0, 1, element[0].toUpperCase());
      newArray.push(stringArray.join(""));
    }
  }
  return newArray.join(" ");
};

describe(" Uppercase the first letter of a word", () => {
  describe("passing symple words", () => {
    it("An empty string", () => {
      let str = "";
      expect(str.rago89ToJadenCase()).toEqual("");
    });
    it("A simple name", () => {
      let str = "rafael";
      expect(str.rago89ToJadenCase()).toEqual("Rafael");
    });
    it("A word in quotes", () => {
      let str = '"hello"';
      expect(str.rago89ToJadenCase()).toEqual('"Hello"');
    });
    it("A number at the beggining of the word", () => {
      let str = "1hello";
      expect(str.rago89ToJadenCase()).toEqual("1Hello");
    });
  });
  describe("passing phrases", () => {
    it("A Jade's phrase", () => {
      let str = "how can mirrors be real if our eyes aren't real";
      expect(str.rago89ToJadenCase()).toEqual(
        "How Can Mirrors Be Real If Our Eyes Aren't Real"
      );
    });
    it("the phrase in quotes", () => {
      let str = '"how can mirrors be real if our eyes aren\'t real"';
      expect(str.rago89ToJadenCase()).toEqual(
        '"How Can Mirrors Be Real If Our Eyes Aren\'t Real"'
      );
    });
  });
});
