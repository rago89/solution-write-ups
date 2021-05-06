/*
2 functions is copied from codewards 
function 'repearStr' accepts all type of values even is they are not strings
JS cast the variable because 'str' has as value an empty string
and with the addition operator it cast the variable 's' and concatenates 

Second function with the repeat method doesn't allow any type different than string
*/

/*------------RomanSemenyuk-----------------*/
function repeatStr(n, s) {
  var str = "";
  for (var i = 0; i < n; i++) str += s;
  return str;
}

/*----------My own--------------------------*/
const myRepeatStr = (n, s) => s.repeat(n);

for (const solution of [repeatStr, myRepeatStr]) {
  describe(solution.name + ": test repeat strings", () => {
    describe("basic tests", () => {
      it("passing a symbol", () => {
        expect(solution(3, "*")).toEqual("***");
      });
      it("passing another symbol", () => {
        expect(solution(5, "#")).toEqual("#####");
      });
      it("passing two letters word", () => {
        expect(solution(2, "ha")).toEqual("haha");
      });
    });
    describe("passing phrases", () => {
      it("passing 3 words phrase", () => {
        expect(solution(5, "wish the best! ")).toEqual(
          "wish the best! wish the best! wish the best! wish the best! wish the best! "
        );
      });
      it("passing two words phrase", () => {
        expect(solution(2, "Good bye ")).toEqual("Good bye Good bye ");
      });
      it("passing numbers as string", () => {
        expect(solution(2, "123")).toEqual("123123");
      });
    });
    describe("passing primitive types", () => {
      it("passing boolean true", () => {
        expect(solution(5, true)).toEqual("truetruetruetruetrue");
      });
      it("passing number", () => {
        expect(solution(3, 5)).toEqual("555");
      });
      it("passing undefined", () => {
        expect(solution(2, undefined)).toEqual("undefinedundefined");
      });
      it("passing null", () => {
        expect(solution(4, null)).toEqual("nullnullnullnull");
      });
    });
  });
}
