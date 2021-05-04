"use strict";

/*
 a function thar delete the first and last character of one or more words in a string
 remove first and last character of every word of the text
 remove everything that is as first and last character
 @param str, receive as argument any string
*/

function removeChar(str) {
  //You got this!
  const arr = str.split(" ");
  let newArray = [];
  for (const element of arr) {
    const elementToSplit = [...element];
    elementToSplit.shift();
    elementToSplit.pop();
    newArray.push(elementToSplit.join(""));
  }
  const denseArray = newArray.filter((x) => x !== "");
  return denseArray.join(" ");
}

for (const solution of [removeChar]) {
  describe(solution.name + ": Remove first and last character", () => {
    describe(
      solution.name +
        ": should delete the first and last character of a string ",
      () => {
        it("passing an empty string", () => {
          expect(solution("")).toEqual("");
        });
        it("passing a word", () => {
          expect(solution("Hello")).toEqual("ell");
        });
        it("passing another word", () => {
          expect(solution("parallelepiped")).toEqual("arallelepipe");
        });
        it("passing a word with a symbol at the beginning", () => {
          expect(solution("$money")).toEqual("mone");
        });
        it("passing a word with a symbol at the end", () => {
          expect(solution("happy!")).toEqual("appy");
        });
        it("passing a number at the beginning and end", () => {
          expect(solution("1or2")).toEqual("or");
        });
        it("passing only two characters", () => {
          expect(solution("my")).toEqual("");
        });
      }
    );
    describe(
      solution.name +
        ": should delete the first and last character of each word of a phrase",
      () => {
        it("passing a number at the beg", () => {
          expect(solution("my name is Rafael Andres")).toEqual("am afae ndre");
        });
        it("passing numbers and letters", () => {
          expect(
            solution("I won the 1rst one jackpot of 1.000.000 euros")
          ).toEqual("o h rs n ackpo .000.00 uro");
        });
        it("passing punctuation signs", () => {
          expect(solution("JavaScript is The best!")).toEqual("avaScrip h est");
        });
      }
    );
  });
}
