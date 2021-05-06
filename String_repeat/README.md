# [String repeat]([link-to-challenge](https://www.codewars.com/kata/57a0e5c372292dd76d000d7e/train/javascript))

```
A function that repeats a string the number of times desired
```

## Syntax

> repeatStr(`number`, `string`) -> `string`

### Parameters

**n**: `number`
**s**: `string`

```
**n**: `number`
A parameter that is going to receive as argument the number of times that is going to be repeated the string

**s**: `string`
A parameter that is going to receive as argument a string that is going to be repeated
```

### Return Value: `string`

```
Is a string with the number of times repeated
```

## Test Cases

```js
for (const solution of [
  repeatStr,
   myRepeatStr
   ]) {
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
```

## Use Cases

```js
write a minimum of 2 use cases to show this functions behavior.
 
// In a lottery game when the winner reach 3 letters
const wordRepeated = 'trebol';
const numberOfTimeToBeRepeated = 3;
const output = repeatStr(numberOfTimeToBeRepeated, wordRepeated); 
console.log(output) // => `treboltreboltrebol`;

// Send multiple time wishes to a person
const wishToSend = 'wish the best! '
const timesToBeRepeated = 5;
const output = repeatStr(timesToBeRepeated, wishToSend);
console.log(output) // => `wish the best! wish the best! wish the best! wish the best! wish the best! `;


try to find interesting _edge cases_, it's good for you ;)
an edge case is when a function behaves different than you'd expect.
This will help you and others better understand the function.


https://www.geeksforgeeks.org/dont-forget-edge-cases/


// passing 0 number of repetitions it returns nothing
const wishToSend = 'wish the best! '
const timesToBeRepeated = 0;
const output = repeatStr(timesToBeRepeated, wishToSend);
console.log(output) // => '';

// passing a primitive value
const wishToSend = undefined;
const timesToBeRepeated = 2;
const output = repeatStr(timesToBeRepeated, wishToSend);
console.log(output) // => 'undefinedundefined';
```
<!-- copy this section for every solution you study -->

## [RomanSemenyuk]([link-to-user](https://www.codewars.com/users/RomanSemenyuk))

```js
// paste their solution here
function repeatStr (n, s) {
var str = "";
for(var i=0; i < n; i++)
  str+=s;
  return str;
}

```

### Strategy

```
He creates a for loop to iterate the number of times desired to be repeated the string and make the concatenation
```

### Implementation

```
Create a function with the name 'repeatStr' with two parameters one is the number of repetitions and the second is the string to be repeated
Creates a variable named 'str' with the value of empty string where is going to be stored the concatenation
create a for loop setting in the condition the number of repetitions
inside of the loop each time that the loop iterates 'str' is going to be added the parameter 's'
when the condition is false in the loop is going to return 'str'
```

### Possible Refactors

```

  `while` loop instead of a for loop

```

### References

this help me to find a shorter way to build the function

[MDN]](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/String/repeat)


### Remix

```js
// paste your remixed solution here
const repeatStr = (n, s) => s.repeat(n);
```

### Strategy
use an arrow function and the repeat method as statement
### Implementation
create the arrow function named repeatStr and call the method repeat on the parameter s and pass the number of repetitions in the method
### Possible Refactors
use another method like map or forEach and make it behave similar to the RomanSemenyuk function
### Inspired By

```
codewards examples 
always HYF Belgium
```

### References

[MDN]](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/String/repeat)

## Retrospective

```
write any notes to help you review this exercise later, and to help others' study it.

this might include:

- good ideas to use later in your own code
- less good ideas to avoid in your own code
- new vocabulary you learned
- the most important thing(s) you learned
- something that you still don't understand but want to keep studying
- something that surprised you
- tricks you will want to remember and use later
```
