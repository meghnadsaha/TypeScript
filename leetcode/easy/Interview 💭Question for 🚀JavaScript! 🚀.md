# Interview 💭Question for 🚀JavaScript! 🚀



- [How to Filter an Object by Key in JavaScript](https://stackabuse.com/) 

- [Guide to JavaScript's filter() Method](https://stackabuse.com/guide-to-javascripts-filter-method/)

- [Filter an Object by Key in Javascript? ](https://www.stechies.com/filter-object-key-javascript/)

- https://github.com/sudheerj/javascript-interview-questions

- [ES6](https://www.mygreatlearning.com/blog/es6-interview-questions/) 

## Group an array of objects by a key

To group an array of objects by a specific key, you can use the `Array.reduce()` method to create a new object where the keys represent the unique values of the specified key, and the corresponding values are arrays containing the objects that have that key value. Here's an example of how you can achieve this:

```javascript
function groupBy(arr, key) {
  return arr.reduce((grouped, obj) => {
    const keyValue = obj[key];
    if (!grouped[keyValue]) {
      grouped[keyValue] = [];
    }
    grouped[keyValue].push(obj);
    return grouped;
  }, {});
}

// Example usage:
const people = [
  { id: 1, name: 'John', age: 30 },
  { id: 2, name: 'Jane', age: 25 },
  { id: 3, name: 'Bob', age: 35 },
  { id: 4, name: 'Alice', age: 30 },
];

const groupedByAge = groupBy(people, 'age');
console.log(groupedByAge);
```

Here's an alternative solution using TypeScript to group an array of objects by a key:

```typescript
type Person = {
  id: number;
  name: string;
  age: number;
};

function groupBy<T extends Record<string, any>>(arr: T[], key: keyof T): Record<T[keyof T], T[]> {
  return arr.reduce((grouped, obj) => {
    const keyValue = obj[key];
    if (!grouped[keyValue]) {
      grouped[keyValue] = [];
    }
    grouped[keyValue].push(obj);
    return grouped;
  }, {} as Record<T[keyof T], T[]>);
}

// Example usage:
const people: Person[] = [
  { id: 1, name: 'John', age: 30 },
  { id: 2, name: 'Jane', age: 25 },
  { id: 3, name: 'Bob', age: 35 },
  { id: 4, name: 'Alice', age: 30 },
];

const groupedByAge = groupBy(people, 'age');
console.log(groupedByAge);
```

Output:

```
{
  30: [
    { id: 1, name: 'John', age: 30 },
    { id: 4, name: 'Alice', age: 30 }
  ],
  25: [
    { id: 2, name: 'Jane', age: 25 }
  ],
  35: [
    { id: 3, name: 'Bob', age: 35 }
  ]
}
```

In this TypeScript version, we define the type `Person` to represent the shape of the objects in the array. The `groupBy` function now uses TypeScript generics to ensure that the `arr` parameter is an array of objects (`T[]`) and the `key` parameter is a valid key of the object type `T` (`keyof T`). The return type of the function is `Record<T[keyof T], T[]>`, indicating that the resulting grouped object will have keys of the same type as the values of the specified key and values of an array of objects (`T[]`).

The rest of the implementation remains the same as the previous JavaScript version. TypeScript will perform type checking to ensure that the function is used correctly and that the output is of the expected type.

## Return the median of an array
Sure! Here's an alternative solution to calculate the median of an array in TypeScript without modifying the original array:

```typescript
function calculateMedian(arr: number[]): number | null {
  const sortedArr = arr.slice().sort((a, b) => a - b);
  const middleIndex = Math.floor(sortedArr.length / 2);

  return sortedArr.length === 0
    ? null
    : sortedArr.length % 2 === 1
    ? sortedArr[middleIndex]
    : (sortedArr[middleIndex - 1] + sortedArr[middleIndex]) / 2;
}

// Example usage:
const numbers = [5, 2, 7, 1, 6, 3, 4];
console.log(calculateMedian(numbers)); // Output: 4
```

In this alternative solution, the `calculateMedian` function works similarly to the previous solution. It creates a sorted copy of the original array using `arr.slice().sort((a, b) => a - b)`, calculates the `middleIndex`, and then calculates and returns the median accordingly.

The main difference is that this version uses a conditional (ternary) operator to check if the array is empty and return `null`, making the code more concise.

The ternary operator `condition ? exprIfTrue : exprIfFalse` is used to evaluate a condition (`condition`). If the condition is true, it returns `exprIfTrue`; otherwise, it returns `exprIfFalse`. In this case, we use the ternary operator to check if the array is empty. If it is, we return `null`. Otherwise, we proceed to calculate the median in the same way as the previous solution.

Both solutions achieve the same result but have slight differences in their implementation styles. You can choose the one that you find more readable and concise.


## Return the mode of an array
To calculate the mode of an array (i.e., the most frequently occurring element) in TypeScript, you can create a function that iterates through the array and keeps track of the frequency of each element. Then, find the element with the highest frequency and return it as the mode.

Here's one way to implement it:

```typescript
function calculateMode(arr: number[]): number | null {
  if (arr.length === 0) {
    return null; // Mode is not defined for an empty array
  }

  const frequencyMap: Map<number, number> = new Map();

  for (const num of arr) {
    const count = frequencyMap.get(num) || 0;
    frequencyMap.set(num, count + 1);
  }

  let maxFrequency = 0;
  let mode: number | null = null;

  frequencyMap.forEach((frequency, num) => {
    if (frequency > maxFrequency) {
      maxFrequency = frequency;
      mode = num;
    }
  });

  return mode;
}

// Example usage:
const numbers = [5, 2, 7, 1, 6, 3, 4, 5, 7, 5];
console.log(calculateMode(numbers)); // Output: 5
```

In this example, the `calculateMode` function takes an array of numbers as input and returns the mode as a number. If the array is empty, it returns `null` since the mode is not defined for an empty array.

The function first creates a `frequencyMap` using a `Map` to keep track of the frequency of each element in the array. It iterates through the array and updates the frequency count for each element in the map.

Next, it finds the element with the highest frequency by iterating over the `frequencyMap`. If a frequency is higher than the current `maxFrequency`, it updates `maxFrequency` and sets the `mode` to the corresponding number.

Finally, the function returns the `mode`, which represents the mode of the array (i.e., the most frequently occurring element). If multiple elements have the same highest frequency, the function will return the first one encountered during iteration.

##  Create an array of n length using the spread operator and `Array.from`

We can create an array of length `n` using the spread operator and `Array.from()` in the following way:

Using the spread operator:

```typescript
function createArrayUsingSpread(n: number): number[] {
  const arr = [...Array(n).keys()];
  return arr;
}

// Example usage:
const n = 5;
const result = createArrayUsingSpread(n);
console.log(result); // Output: [0, 1, 2, 3, 4]
```

Using `Array.from()`:

```typescript
function createArrayUsingArrayFrom(n: number): number[] {
  const arr = Array.from({ length: n }, (_, index) => index);
  return arr;
}

// Example usage:
const n = 5;
const result = createArrayUsingArrayFrom(n);
console.log(result); // Output: [0, 1, 2, 3, 4]
```

Both methods achieve the same result, creating an array of length `n` filled with consecutive numbers starting from 0 to `n-1`.

- Using the spread operator: `[...Array(n).keys()]` creates an array of length `n` using the `Array()` constructor, then spreads the array elements using the spread operator `[...]`.
- Using `Array.from()`: `Array.from({ length: n }, (_, index) => index)` creates an array of length `n` using `Array.from()`, and the second argument of `Array.from()` is a mapping function that fills the array with consecutive numbers starting from 0 to `n-1`.

Both approaches are straightforward and are commonly used to create arrays of specific lengths in JavaScript and TypeScript.

## Get the last element of an array using destructuring

To get the last element of an array using destructuring, you can use the following syntax:

```typescript
function getLastElement(arr: any[]): any | undefined {
  const [lastElement] = arr.slice(-1);
  return lastElement;
}

// Example usage:
const numbers = [1, 2, 3, 4, 5];
const lastElement = getLastElement(numbers);
console.log(lastElement); // Output: 5
```

In this example, the `getLastElement` function takes an array `arr` as input and returns the last element of the array. It does so using array destructuring.

Here's how it works:

1. `arr.slice(-1)` extracts the last element of the array using the negative index `-1`. The `slice` method creates a new array containing the last element of the original array.
2. `[lastElement]` uses array destructuring to extract the first (and only) element from the new array created by `arr.slice(-1)`. The value is then assigned to the variable `lastElement`.

Please note that if the input array is empty, `getLastElement` will return `undefined`, as there is no last element in an empty array. This behavior is consistent with array destructuring, where attempting to destructure an empty array results in an undefined value for the variable.


## Remove falsy values from an array

To remove falsy values (e.g., `false`, `0`, `''`, `null`, `undefined`, and `NaN`) from an array, you can use the `Array.filter()` method. The `Array.filter()` method creates a new array containing only the elements that satisfy a given condition. In this case, we want to keep only the truthy values in the array.

Here's how you can remove falsy values from an array:

```typescript
function removeFalsyValues(arr: any[]): any[] {
  return arr.filter((value) => Boolean(value));
}

// Example usage:
const originalArray = [1, 0, false, '', null, undefined, 2, NaN, 3];
const filteredArray = removeFalsyValues(originalArray);
console.log(filteredArray); // Output: [1, 2, 3]
```

In this example, the `removeFalsyValues` function takes an array `arr` as input and returns a new array with all falsy values removed.

The `Array.filter()` method is used with a callback function that takes each element (`value`) of the array as an argument. The `Boolean(value)` converts each `value` to a boolean, removing any falsy values (since `Boolean(falsyValue)` returns `false`). Only the truthy values pass the filter condition and are kept in the new array.

The resulting `filteredArray` contains only the truthy values from the original array. The original array remains unchanged, as `filter()` does not modify the original array but creates a new one with the filtered elements.

## Convert an array of strings to numbers
To convert an array of strings to an array of numbers in TypeScript, you can use the `Array.map()` method along with the `Number()` constructor or the unary plus operator (`+`) to convert each string element to a number. Here are both approaches:

Using `Array.map()` and `Number()` constructor:

```typescript
function convertToNumbers(arr: string[]): number[] {
  return arr.map((str) => Number(str));
}

// Example usage:
const stringArray = ["1", "2", "3", "4", "5"];
const numberArray = convertToNumbers(stringArray);
console.log(numberArray); // Output: [1, 2, 3, 4, 5]
```

Using `Array.map()` and the unary plus operator (`+`):

```typescript
function convertToNumbers(arr: string[]): number[] {
  return arr.map((str) => +str);
}

// Example usage:
const stringArray = ["1", "2", "3", "4", "5"];
const numberArray = convertToNumbers(stringArray);
console.log(numberArray); // Output: [1, 2, 3, 4, 5]
```

## Return an object with keys and values flipped
To return an object with keys and values flipped (swapped), you can use `Object.entries()` along with `Array.reduce()` to create a new object with the flipped key-value pairs. Here's how you can achieve it:

```typescript
function flipObjectKeysAndValues(obj: Record<string, any>): Record<any, string> {
  return Object.entries(obj).reduce((flipped, [key, value]) => {
    flipped[value] = key;
    return flipped;
  }, {});
}

// Example usage:
const originalObject = { a: 1, b: 2, c: 3 };
const flippedObject = flipObjectKeysAndValues(originalObject);
console.log(flippedObject); // Output: { '1': 'a', '2': 'b', '3': 'c' }
```

In this example, the `flipObjectKeysAndValues` function takes an object `obj` as input and returns a new object with keys and values flipped. The function uses `Object.entries(obj)` to obtain an array of `[key, value]` pairs from the original object. Then, `Array.reduce()` is used to iterate through each pair and build the new object with the flipped key-value pairs.

In the `reduce()` callback function, `flipped` represents the new object being constructed. For each pair `[key, value]`, the callback assigns `flipped[value] = key`, effectively swapping the key and value in the new object.

Finally, the resulting `flipped` object is returned with keys and values flipped from the original object. Please note that if the original object has non-unique values, only the last occurrence of each value will be kept in the resulting object.

Sure! Here's an alternative way to return an object with keys and values flipped using `Object.fromEntries()` and `Object.entries()`:

```typescript
function flipObjectKeysAndValues(obj: Record<string, any>): Record<any, string> {
  return Object.fromEntries(Object.entries(obj).map(([key, value]) => [value, key]));
}

// Example usage:
const originalObject = { a: 1, b: 2, c: 3 };
const flippedObject = flipObjectKeysAndValues(originalObject);
console.log(flippedObject); // Output: { '1': 'a', '2': 'b', '3': 'c' }
```

In this version, we use `Object.entries(obj)` to obtain an array of `[key, value]` pairs from the original object. We then use `Array.map()` to iterate through each pair and create a new array with the flipped key-value pairs. The order of the elements in each pair is swapped, `[value, key]`, which effectively flips the keys and values.

Finally, we use `Object.fromEntries()` to convert the array of flipped pairs back into an object with the keys and values flipped.

Both approaches achieve the same result, creating a new object with keys and values flipped from the original object. Choose the one you find more concise and readable.



## Return an object with only certain keys

To return an object with only certain keys from an original object, you can use a function that filters out the desired keys and constructs a new object with those keys and their corresponding values. Here's one way to achieve this:

```typescript
function pickKeys(obj: Record<string, any>, keysToPick: string[]): Record<string, any> {
  return keysToPick.reduce((pickedObj, key) => {
    if (obj.hasOwnProperty(key)) {
      pickedObj[key] = obj[key];
    }
    return pickedObj;
  }, {});
}

// Example usage:
const originalObject = { a: 1, b: 2, c: 3, d: 4 };
const keysToPick = ['b', 'c', 'e'];
const pickedObject = pickKeys(originalObject, keysToPick);
console.log(pickedObject); // Output: { b: 2, c: 3 }
```

In this example, the `pickKeys` function takes two parameters: the original object `obj` and an array `keysToPick` containing the keys that you want to include in the resulting object.

The function uses the `Array.reduce()` method to iterate through the `keysToPick` array. For each key, it checks if the original object contains that key using `obj.hasOwnProperty(key)`. If the key is present in the original object, it adds it to the new object `pickedObj` along with its corresponding value.

The resulting `pickedObj` is the object containing only the specified keys and their values from the original object.

Please note that if any of the keys specified in `keysToPick` are not present in the original object, they will be ignored in the resulting object. Additionally, the function returns a new object, and the original object remains unchanged.

## Return an object with only unique values
To return an object with only unique values from an original object, you can create a function that iterates through the original object, keeps track of the unique values, and constructs a new object with those unique values as keys. Here's how you can achieve this:

```typescript
function getUniqueValuesObject(obj: Record<string, any>): Record<string, any> {
  const uniqueValuesSet = new Set();
  const uniqueValuesObject: Record<string, any> = {};

  for (const key in obj) {
    if (obj.hasOwnProperty(key)) {
      const value = obj[key];
      if (!uniqueValuesSet.has(value)) {
        uniqueValuesSet.add(value);
        uniqueValuesObject[key] = value;
      }
    }
  }

  return uniqueValuesObject;
}

// Example usage:
const originalObject = { a: 1, b: 2, c: 1, d: 3, e: 2 };
const uniqueValuesObject = getUniqueValuesObject(originalObject);
console.log(uniqueValuesObject); // Output: { a: 1, b: 2, d: 3 }
```

In this example, the `getUniqueValuesObject` function takes an object `obj` as input and returns a new object containing only the unique values from the original object.

We use a `Set` called `uniqueValuesSet` to keep track of the unique values encountered while iterating through the original object. The `uniqueValuesObject` object will store the unique values as keys.

The `for...in` loop iterates through each key in the original object, and for each key, we check if the value associated with it is not already present in the `uniqueValuesSet`. If it's unique, we add it to the set and add it to the `uniqueValuesObject` with the same key.

The resulting `uniqueValuesObject` will contain only the unique values from the original object as keys. Please note that the function does not maintain the original order of the keys from the input object since JavaScript objects do not guarantee key order. If maintaining order is crucial, you may consider using an array to store the unique values in order.
Certainly! Here are some coding questions related to `Array.prototype` in JavaScript:

1. **Sum of Array Elements**:
   Write a function that calculates the sum of all elements in an array.

   ```javascript
   Array.prototype.sum = function () {
     return this.reduce((acc, curr) => acc + curr, 0);
   };

   const numbers = [1, 2, 3, 4, 5];
   console.log(numbers.sum()); // Output: 15
   ```

2. **Filter Even Numbers**:
   Write a function that filters out all even numbers from an array.

   ```javascript
   Array.prototype.filterEven = function () {
     return this.filter((num) => num % 2 === 0);
   };

   const numbers = [1, 2, 3, 4, 5];
   console.log(numbers.filterEven()); // Output: [2, 4]
   ```

3. **Map and Square**:
   Write a function that squares each element of the array.

   ```javascript
   Array.prototype.square = function () {
     return this.map((num) => num * num);
   };

   const numbers = [1, 2, 3, 4, 5];
   console.log(numbers.square()); // Output: [1, 4, 9, 16, 25]
   ```

4. **Find the First Occurrence**:
   Write a function that finds the index of the first occurrence of a given element in the array.

   ```javascript
   Array.prototype.findIndex = function (element) {
     return this.indexOf(element);
   };

   const fruits = ["apple", "banana", "orange", "apple", "grape"];
   console.log(fruits.findIndex("apple")); // Output: 0
   ```

5. **Check if All Elements Meet a Condition**:
   Write a function that checks if all elements of the array satisfy a given condition.

   ```javascript
   Array.prototype.allMatch = function (conditionFunc) {
     return this.every(conditionFunc);
   };

   const numbers = [2, 4, 6, 8, 10];
   const allEven = numbers.allMatch((num) => num % 2 === 0);
   console.log(allEven); // Output: true
   ```

6. **Flatten Nested Arrays**:
   Write a function that flattens a nested array into a single-level array.

   ```javascript
   Array.prototype.flatten = function () {
     return this.reduce((acc, curr) => acc.concat(curr), []);
   };

   const nestedArray = [[1, 2], [3, 4], [5, 6]];
   console.log(nestedArray.flatten()); // Output: [1, 2, 3, 4, 5, 6]
   ```

7. **Remove Duplicates from Array**:
   Write a function that removes duplicates from an array.

   ```javascript
   Array.prototype.removeDuplicates = function () {
     return [...new Set(this)];
   };

   const numbersWithDuplicates = [1, 2, 2, 3, 4, 4, 5];
   console.log(numbersWithDuplicates.removeDuplicates()); // Output: [1, 2, 3, 4, 5]
   ```

8. **Find Maximum Element**:
   Write a function that finds the maximum element in an array.

   ```javascript
   Array.prototype.findMax = function () {
     return Math.max(...this);
   };

   const numbers = [10, 5, 7, 15, 3];
   console.log(numbers.findMax()); // Output: 15
   ```

Remember, while extending the `Array.prototype` can be useful for learning purposes, it's generally not recommended to modify native objects like `Array.prototype` in production code to avoid conflicts with other libraries and potential unintended behavior.
