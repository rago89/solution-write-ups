# [Jaden Casing Strings]([link-to-challenge](https://www.codewars.com/kata/5390bac347d09b7da40006f6/javascript))

```

A function  to convert strings to how they would be written by Jaden Smith. The strings are actual quotes from Jaden Smith, but they are not capitalized in the same way he originally typed them.
```

## Syntax

> toJadenCase() -> `string`

### Parameters

It doesn't have parameters, is a function that is going to be added to the string prototype to be used 
as method of the string

```
use the this keyword to have access to the string
```

### Return Value: `type`

```
Returns a string with the first letter of each word capitalized 
```

## Test Cases

```js
describe("Tests", () => {
  it("test", () => {
var str = "How can mirrors be real if our eyes aren't real";
Test.assertEquals(str.toJadenCase(), "How Can Mirrors Be Real If Our Eyes Aren't Real");

  });
});

```

## Use Cases

```js
// Using headlines 
const headline = 'One more day of extreme heat for East Coast';
const capHeadline = headline.toJadenCase();
console.log(capHeadline) //=> One More Day Of Extreme Heat For East Coast

// song tittles 
const jadenSongTitle = 'cabin fever';
const capTitle = jadenSongTitle.toJadenCase();
console.log(capTitle) //=> Cabin Fever
```
* **Edge cases**

```js
// doesn't work with symbols as first letter
const jadenSongTitle = '"cabin fever"';
const capTitle = jadenSongTitle.toJadenCase();
console.log(capTitle) //=> "cabin Fever"

// doesn't work with numbers as first letter
const jadenSongTitle = '"4cabin fever"';
const capTitle = jadenSongTitle.toJadenCase();
console.log(capTitle) //=> "4cabin Fever"
```

## [Pavel V.]([link-to-user](https://www.codewars.com/users/Pavel%20V.))

```js
String.prototype.toJadenCase = function() {
  return this.split(' ').map(item => item[0].toUpperCase() + item.slice(1)).join(' ')
};
```

### Strategy

```
converts the string as an array and apply array methods in this case 'map' method to iterate and modify each element of the string to uppercase
```

### Implementation

```
Use the split method to convert each word of the string in an array element,
after the split method he use a callback function, using the method map to 
iterate on each element and in each element he access to index 0 that is the first letter
and use the toUpperCase method to capitalize the first letter and them he use the slice
method to paste the rest of the string
ans last restore the string using the join method  

```

### Possible Refactors

```
instead of using map method could be use a for of loop
in the loop we can create an if and else condition to 
modify the items that have as first character a symbol or number
and solve the edge cases 

```

### References

* [MDN web docs](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/String#instance_methods)

---

### Remix

```js
// paste your remixed solution here

String.prototype.toJadenCase = function () {
  const stringSplit = this.split(" ");
  const regexp = /^[\W\d]/;
  let newArray = [];

  for (const element of stringSplit) {
    const stringArray = [...element];
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
```

### Strategy

convert each word of the string in array elements, create to iterate on each word, find characters with a RegExp and set conditions to avoid the symbol or number character and capitalize the letter

### Implementation

Represented by steps:

1. Use the split method to convert the string in array elements,
2. Create a regular expression that search for non character or digits
3. create a variable with an empty array as value, where are going to be stored the new elements modified
4. create a `for of` loop to iterate on each element
5. inside the loop:
   * Create a variable and store inside the element converted as array
   * Set a condition to find in the first character if there is a symbol or number
   * if the condition is true is going to be capitalized the second character using the splice method
   * if the condition is false is going to be capitalized the first character using the splice method  
6. Last step if going to be returned the variable where are stored the new elements and is going to be restored as string using the join method

### Possible Refactors

Not refactors in mind

### Inspired By

```
Behavior Strategy Implementation HYF while doing test of the function I realized that the first strategy wasn't working with the first character as  symbol or number
```

### References

* [Regular expressions from JavaScrip main page](https://javascript.info/regular-expressions)
* [Regex 101](https://regex101.com/)
  
## Retrospective

```
Takes time building this file but helps a lot to understand and planning your code
Worth the time spend and at the end save time
```
