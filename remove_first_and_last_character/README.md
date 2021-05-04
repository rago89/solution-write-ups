# [Remove First and Last Character]([link-to-challenge](https://www.codewars.com/kata/56bc28ad5bdaeb48760009b0/train/javascript))

```
A function that takes the first and las character of a string, you don't have to be 
worried if the user enter one or two characters.
```

## Syntax

> functionName(`removeChar`, `string`, ...) -> `string`

### Parameters

**str**: `string`

```
describe the parameter
```

### Return Value: `string`

```
The value returned will be a string with the first and las character removed 
```

## Test Cases

```js
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
```

## Use Cases

```
write a minimum of 2 use cases to show this functions behavior.

For data modification, I only find is deleting a word with two character or one spacial case that must be removed first and last letter 

try to find interesting _edge cases_, it's good for you ;)
an edge case is when a function behaves different than you'd expect.
This will help you and others better understand the function.

https://www.geeksforgeeks.org/dont-forget-edge-cases/

deleting Quotes on words
```

```js
const text = "hello";
const textWithoutQuote =  removeChar(text);
console.log(textWithoutQuote); //=> hello 
```

### Strategy

```
 convert the string in an array to apply the array methods to remove the first and last letter 


```

### Implementation

```
  The main goal of this exercise was only remove the first and last character, my first strategy was modify the string
  using the methods split() to convert the string as an array, use the method pop() and  shift() to remove the letters 
  and them concatenate with the method join();

  My second and final strategy was delete the first and las character of any given word, todo that I split the string 
  adding one space to separate as word instead of letters, to modify each element of the array i've created a `for of` loop
  to iterate on each element, convert the string element also  as an array, use the method pop() and  shift() to remove the letters, concatenate with the method join(); and push to a new array.
  
  After creating the new array with elements modified, I filter the array to delete empty spaces if there are

  As last step return the array filtered using the method joint to return the array as string  
```

### Possible Refactors

```
May be try to use the forEach method instead of for loop
also the elements of the array could be split up with the spread operator
```

### References

```
on this one I didn't use web support 
```
---

### Remix

```js
// paste your remixed solution here
const removeChar = (str, arr = [...str]) => {return arr.pop(),arr.shift(),arr.join('')}
```

### Strategy

### Implementation

### Possible Refactors

### Inspired By

```
HYF Belgium content
```

### References

---

## Retrospective

```
Follow strategy and implementation, don't play around, you lose the focus

```
