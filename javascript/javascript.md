#  JavaScript
JavaScript is a lightweight, interpreted, or just-in-time compiled programming language with first-class functions. It is known as the language of the web because it's primarily used for building interactive websites.

## Table of Contents

1. [Data types](#data-types)
2. [JavaScript Type Conversion](#javascript-type-conversion)
3. [JavaScript Variables](#javascript-variables)
4. [JavaScript Array](#javascript-array)
5. [Spread Operator](#spread-operator)
6. [Javascript String](#javascript-string)
7. [JavaScript Iterators](#javascript-iterators)
8. [Set and Map](#set-and-map)
9. [Javascript functions](#javascript-functions)
10. [Classes](#classes)
11. [Javascript Object](#javascript-object)
12. [DOM and BOM](#dom-and-bom)
13. [Versions](#versions)
14. [AJAX](#ajax)
15. [Asynchronous Javascript](#asynchronous-javascript)
16. [Advance JS](#advance-js)
17. [Javascript Good practices](#javascript-good-practices)



# Data types
[🔝](#table-of-contents)

JavaScript has several data types, which are broadly divided into two categories: 
- **Primitive Data Types**
-  **Reference (Object) Data Types**.

### 1. **Primitive Data Types**
These are the basic data types in JavaScript, and their values are stored directly and immutable. 

- **String**: Represents a sequence of characters (text).
  - Example: 
    ```js
    let name = "John";
    ```

- **Number**: Represents both integers and floating-point numbers.
  - Example: 
    ```js
    let age = 25;
    let temperature = 36.5;
    ```

- **Boolean**: Represents a logical value, either `true` or `false`.
  - Example: 
    ```js
    let isAvailable = true;
    ```

- **Undefined**: A variable that has been declared but has not been assigned a value.
  - Example: 
    ```js
    let value;
    console.log(value); // Output: undefined
    ```

- **Null**: Represents an explicitly empty or non-existent value.
  - Example: 
    ```js
    let value = null;
    ```


- **BigInt**: Represents integers with arbitrary precision. Useful for working with very large numbers (introduced in ES11).
  - Example: 
    ```js
    let bigNumber = 1234567890123456789012345678901234567890n;
    ```

### 2. **Reference (Object) Data Types**
These are complex data types and store collections of data or more complex entities. They are accessed by reference rather than directly.

- **Object**: A collection of key-value pairs. It can store multiple values of different data types.
  - Example:
    ```js
    let person = {
      name: "John",
      age: 30,
      isEmployed: true
    };
    ```

- **Array**: A list-like structure that stores multiple values in an ordered manner.
  - Example:
    ```js
    let fruits = ["Apple", "Banana", "Orange"];
    ```

- **Function**: A block of code that performs a specific task.
  - Example:
    ```js
    function greet() {
      console.log("Hello, world!");
    }
    ```

- **Date**: Used to work with dates and times.
  - Example:
    ```js
    let today = new Date();
    ```

- **RegExp**: Regular expressions used for pattern matching.
  - Example:
    ```js
    let regex = /ab+c/;
    ```

### Characteristics of Primitive Types:
- **Immutability**: Once a primitive value is created, it cannot be changed. For example, performing operations on a string or number doesn’t modify the original value; instead, a new value is returned.
  
  Example:
  ```js
  let name = "Nibaron";
  name[0] = "X";  // Doesn't change the string
  console.log(name);  // Output: "Nibaron"
  ```

- **Stored by value**: When assigning a primitive value to another variable, the value is copied, not referenced.

  Example:
  ```js
  let a = 10;
  let b = a;
  b = 20;
  console.log(a);  // Output: 10 (remains unchanged)
  ```


### Characteristics of Non-Primitive Types:
- **Mutability**: Non-primitive values (objects) can be changed after they are created. For example, properties in an object or elements in an array can be modified.

  Example:
  ```js
  let person = { name: "Nibaron", age: 25 };
  person.age = 26;  // Modifies the 'age' property
  console.log(person.age);  // Output: 26
  ```

- **Stored by reference**: When assigning a non-primitive value to another variable, both variables refer to the same object in memory. Changes made to one will affect the other.

  Example:
  ```js
  let a = { name: "Nibaron" };
  let b = a;
  b.name = "Rudra";
  console.log(a.name);  // Output: "Rudra" (both `a` and `b` reference the same object)
  ```

### Example of Declaring Different Data Types:

```js
let name = "Alice"; // String
let age = 28; // Number
let isStudent = false; // Boolean
let address = null; // Null
let score; // Undefined
let bigNumber = 12345678901234567890n; // BigInt

let person = { name: "Alice", age: 28 }; // Object
let colors = ["Red", "Green", "Blue"]; // Array
let today = new Date(); // Date
let regex = /hello/i; // RegExp
```

### Dynamic Typing in JavaScript
JavaScript is a **dynamically typed** language, meaning that the type of a variable is determined at runtime and you can change the type of a variable during execution.

```js
let variable = "Hello"; // String
variable = 42; // Now it's a Number
```

These are the key data types you will work with in JavaScript.

### Difference Between Undefined and Null
undefined and null are equal in value but different in type:

```js
typeof undefined      // undefined
typeof null           // object

null === undefined    // false
null == undefined     // true
```
# JavaScript Type Conversion
[🔝](#table-of-contents)

In JavaScript, **type conversion** refers to changing the type of a value from one data type to another. JavaScript performs type conversion in two ways:

1. **Implicit (Automatic) Conversion**: JavaScript automatically converts data types based on context.
2. **Explicit Conversion**: The developer manually converts the data type using built-in functions.

### 1. **Implicit Type Conversion (Type Coercion)**

JavaScript automatically converts data types during operations. For example, it converts numbers to strings or vice versa depending on the context.

#### Examples:
- **String Conversion in Concatenation**:
  When a number is concatenated with a string, JavaScript converts the number to a string.
  ```js
  let result = 5 + "10"; 
  console.log(result); // Output: "510" (number 5 is converted to string)
  ```

- **Numeric Conversion in Arithmetic Operations**:
  When a string that contains a number is involved in arithmetic operations, JavaScript converts the string to a number.
  ```js
  let result = "5" - 1;
  console.log(result); // Output: 4 (string "5" is converted to number)
  ```

- **Boolean Conversion**:
  JavaScript automatically converts values to `true` or `false` in conditional statements.
  - Values like `0`, `""`, `null`, `undefined`, and `NaN` are converted to `false`.
  - Other values are converted to `true`.
  
  ```js
  if ("") {
    console.log("This won't run"); // Empty string is falsy
  }
  if ("0") {
    console.log("This will run"); // Non-empty string is truthy
  }
  ```

### 2. **Explicit Type Conversion (Type Casting)**

In explicit conversion, the developer uses built-in functions to convert values between different data types.

#### Converting to String:
You can explicitly convert other types to strings using the `String()` function or `.toString()` method.

- Using `String()`:
  ```js
  let num = 123;
  let str = String(num); 
  console.log(str); // Output: "123" (Number to String)
  ```

- Using `.toString()`:
  ```js
  let bool = true;
  let str = bool.toString();
  console.log(str); // Output: "true" (Boolean to String)
  ```

#### Converting to Number:
Use the `Number()`, `parseInt()`, or `parseFloat()` functions to convert strings to numbers.

- Using `Number()`:
  ```js
  let str = "456";
  let num = Number(str);
  console.log(num); // Output: 456 (String to Number)
  ```

- Using `parseInt()` and `parseFloat()`:
  - `parseInt()` converts a string to an integer.
  - `parseFloat()` converts a string to a floating-point number.

  ```js
  let str = "123.45";
  let intNum = parseInt(str);
  let floatNum = parseFloat(str);
  
  console.log(intNum); // Output: 123
  console.log(floatNum); // Output: 123.45
  ```
## Number() vs parseInt()
Both `Number()` and `parseInt()` in JavaScript are used to convert values to numbers, but they work in different ways and are used for different purposes. Here’s a comparison of the two:

### 1. **`Number()`**

- **Purpose**: Converts the entire input to a number (including floating-point numbers).
- **Returns**: A number, or `NaN` if the value cannot be converted.
- **Behavior**: `Number()` tries to convert the entire string or value to a number. It converts various data types like booleans, null, strings, and even empty strings.

#### Example:
```js
console.log(Number("123"));      // Output: 123 (number)
console.log(Number("123.45"));   // Output: 123.45 (number)
console.log(Number("123abc"));   // Output: NaN (Not a Number)
console.log(Number(true));       // Output: 1 (boolean to number)
console.log(Number(false));      // Output: 0 (boolean to number)
console.log(Number(null));       // Output: 0 (null to number)
console.log(Number(undefined));  // Output: NaN (undefined to NaN)
```

### 2. **`parseInt()`**

- **Purpose**: Parses a string and returns an integer.
- **Returns**: An integer, or `NaN` if the value cannot be converted.
- **Behavior**: `parseInt()` reads a string from left to right, stopping at the first character that is not a valid part of a number. It can parse just the integer part of a number, ignoring the decimal portion if present. It also allows for specifying a **radix** (base) for parsing.

#### Example:
```js
console.log(parseInt("123"));       // Output: 123 (integer)
console.log(parseInt("123.45"));    // Output: 123 (only the integer part is parsed)
console.log(parseInt("123abc"));    // Output: 123 (stops parsing at the first non-number character)
console.log(parseInt("abc123"));    // Output: NaN (cannot parse from the start)
console.log(parseInt("10", 2));     // Output: 2 (binary "10" is parsed as 2 in base 2)
```

### Key Differences:

1. **Handling of Floating Point Numbers:**
   - `Number()` will convert the entire value (including decimals) into a number.
   - `parseInt()` only parses the integer part and ignores anything after the decimal point.

   ```js
   Number("123.45");   // Output: 123.45
   parseInt("123.45"); // Output: 123
   ```

2. **Handling Non-Numeric Characters:**
   - `Number()` returns `NaN` if there are any invalid characters in the string.
   - `parseInt()` stops parsing when it encounters a non-numeric character and still returns the parsed part as an integer.

   ```js
   Number("123abc");    // Output: NaN
   parseInt("123abc");  // Output: 123
   ```

3. **Handling of Radix (Base):**
   - `Number()` always assumes a decimal (base 10) number.
   - `parseInt()` can parse numbers in different bases, such as binary, octal, or hexadecimal, if a radix is provided.

   ```js
   parseInt("10", 2);   // Output: 2 (binary to decimal)
   parseInt("10", 8);   // Output: 8 (octal to decimal)
   ```

4. **Empty String:**
   - `Number("")` returns `0`.
   - `parseInt("")` returns `NaN`.

   ```js
   Number("");     // Output: 0
   parseInt("");   // Output: NaN
   ```

5. **Handling Other Data Types:**
   - `Number()` can handle booleans, `null`, and `undefined` and tries to convert them to numbers.
   - `parseInt()` expects a string, and other types will be converted to a string (if possible) before parsing.

   ```js
   Number(true);    // Output: 1
   parseInt(true);  // Output: NaN

   Number(null);    // Output: 0
   parseInt(null);  // Output: NaN
   ```

### Summary:

- Use **`Number()`** when you need to convert an entire string to a number, including floating-point numbers, and want to handle various data types.
- Use **`parseInt()`** when you need to extract the integer part from a string, especially if it includes non-numeric characters, or if you want to parse numbers in a specific radix (like binary, octal, or hexadecimal).

#### Converting to Boolean:
You can convert values to boolean using the `Boolean()` function.

```js
let num = 0;
let bool = Boolean(num);
console.log(bool); // Output: false (0 is falsy)

let str = "Hello";
let boolStr = Boolean(str);
console.log(boolStr); // Output: true (non-empty string is truthy)
```

### Example of Type Conversion

```js
let a = "10";       // String
let b = 20;         // Number

// Implicit conversion
let result1 = a + b;  // "10" + 20 => "1020" (String concatenation)
console.log(result1);

// Explicit conversion
let result2 = Number(a) + b;  // 10 + 20 => 30 (String to Number conversion)
console.log(result2);

// Boolean conversion
let result3 = Boolean("");  // Empty string becomes false
console.log(result3);  // Output: false
```

### Summary of Common Conversion Functions:
- **`String(value)`**: Converts a value to a string.
- **`Number(value)`**: Converts a value to a number.
- **`parseInt(value)`**: Parses a string and returns an integer.
- **`parseFloat(value)`**: Parses a string and returns a floating-point number.
- **`Boolean(value)`**: Converts a value to a boolean.

### Important Notes:
- **Falsy values**: `0`, `""`, `null`, `undefined`, and `NaN` are considered false when converted to boolean.
- **Truthy values**: All other values (including empty objects and arrays) are considered true when converted to boolean.

Type conversion is important to understand in JavaScript, especially because of implicit type coercion, which can sometimes produce unexpected results if not handled carefully.



# JavaScript Variables
[🔝](#table-of-contents)

Variables are Containers for Storing Data.
JavaScript Variables can be declared in 4 ways:

-   Automatically ( `var`)
-   Using  `var`
-   Using  `let`
-   Using  `const`
---

### 1. **`var`**

- **Scope**: `var` is **function-scoped** or **globally-scoped**. This means if you declare a variable using `var` inside a function, it is limited to that function. However, if declared outside a function, it becomes a global variable.
- **Hoisting**: `var` is **hoisted** to the top of its scope, meaning the declaration is processed before the code execution but without its assigned value.
- **Re-declaration**: You can re-declare a variable with `var` in the same scope.

#### Example:
```javascript
function example() {
  var x = 10;
  if (true) {
    var x = 20;  // Same variable as outside the block
    console.log(x);  // Output: 20
  }
  console.log(x);  // Output: 20 (block scope doesn't matter)
}

example();
```

- In this example, `x` inside the `if` block changes the value of `x` in the entire function since `var` is function-scoped.

#### When to use `var`:
- In modern JavaScript, you should **avoid using `var`** because `let` and `const` provide better control over scope.

---

### 2. **`let`**

- **Scope**: `let` is **block-scoped**, meaning it is only accessible within the block where it is defined (a block is a pair of curly braces `{}`).
- **Hoisting**: `let` is hoisted, but it is not initialized until the declaration is encountered in the code (temporal dead zone). This prevents you from using the variable before it's declared.
- **Re-declaration**: You **cannot re-declare** a variable with `let` in the same scope.

#### Example:
```javascript
function example() {
  let x = 10;
  if (true) {
    let x = 20;  // This is a different `x` limited to this block
    console.log(x);  // Output: 20
  }
  console.log(x);  // Output: 10 (the outer `x` is not affected)
}

example();
```

- Here, `x` inside the `if` block is a separate variable from the `x` outside of it, due to block scoping.

#### When to use `let`:
- Use `let` when you expect the value of the variable to change later, or when you need block-scoped behavior.
- Use it in loops (like `for` loops) where the variable's value changes with each iteration.

---

### 3. **`const`**

- **Scope**: `const` is also **block-scoped**, like `let`.
- **Hoisting**: `const` is hoisted but is also subject to the temporal dead zone, so it cannot be used before declaration.
- **Re-declaration**: You cannot re-declare or reassign a `const` variable.
- **Immutability**: While the variable itself cannot be reassigned, **the contents of an object or array declared with `const` can be modified**.

#### Example:
```javascript
const y = 30;
y = 40;  // Error: Assignment to constant variable

const obj = { name: "Alice" };
obj.name = "Bob";  // Allowed, because the object itself is mutable

console.log(obj.name);  // Output: Bob
```

- In this example, you cannot reassign the value of `y`, but you can modify the properties of the object `obj`.

#### When to use `const`:
- Use `const` when you don’t want the variable to be reassigned. It provides the best readability and safety for code that shouldn’t change.
- Use `const` by default for variables whose values won’t change after they are set (e.g., configuration values, fixed lists).

---

### Key Differences:

| Feature            | `var`                  | `let`                  | `const`                |
|--------------------|------------------------|------------------------|------------------------|
| **Scope**          | Function-scoped         | Block-scoped           | Block-scoped           |
| **Re-declaration** | Allowed                | Not allowed            | Not allowed            |
| **Hoisting**       | Hoisted (initialized as `undefined`) | Hoisted (but not initialized) | Hoisted (but not initialized) |
| **Reassignment**   | Allowed                | Allowed                | Not allowed (but objects/arrays can be mutated) |
| **Mutability**     | Mutable                | Mutable                | Immutable (in terms of reassignment) |

---

### General Guidelines:

- **Use `const` by default**. If a variable needs to be reassigned, use `let`.
- **Avoid `var`** entirely, as `let` and `const` offer better block scoping and less error-prone behavior.
- **Use `let`** when you know the value of the variable will change during the program (e.g., loop counters, state values that are modified over time).

# JavaScript Array
[🔝](#table-of-contents)

In JavaScript, an **array** is a data structure used to store multiple values in a single variable. Arrays are ordered collections of items that can hold any type of data: numbers, strings, objects, or even other arrays (nested arrays). Arrays are zero-indexed, meaning the first element has an index of 0.

### Creating Arrays:
There are a few different ways to create an array in JavaScript:

#### 1. **Using Array Literals**:
The most common way to create an array is by using square brackets `[]`.
```javascript
const fruits = ["Apple", "Banana", "Orange"];
```

#### 2. **Using the `Array` Constructor**:
You can also use the `Array` constructor to create an array.
```javascript
const fruits = new Array("Apple", "Banana", "Orange");
```

#### 3. **Empty Arrays**:
```javascript
const emptyArray = [];
```
### 4. **Using `isArray()` to Check for Arrays:**
The `Array.isArray()` method is used to determine if a value is an array. This is useful for checking whether a variable or value is an array, as it can differentiate arrays from other types of objects.

```javascript
const fruits = ["Apple", "Banana", "Orange"];
const notAnArray = { name: "Apple" };

console.log(Array.isArray(fruits));       // Output: true
console.log(Array.isArray(notAnArray));   // Output: false
```

- **`Array.isArray()`** returns `true` if the value is an array, and `false` otherwise.

---

### Accessing Array Elements:
You can access elements in an array by their index. Array indexes start from 0.
```javascript
const fruits = ["Apple", "Banana", "Orange"];
console.log(fruits[0]);  // Output: Apple
console.log(fruits[1]);  // Output: Banana
```

### Modifying Array Elements:
You can modify the value of an array element by assigning a new value to its index.
```javascript
fruits[1] = "Mango";  // Changing "Banana" to "Mango"
console.log(fruits);  // Output: ["Apple", "Mango", "Orange"]
```

---

### Array Methods:
JavaScript arrays come with built-in methods for manipulating arrays. Here are some of the most commonly used methods:

#### 1. **`push()`** – Adds a new element to the end of the array:
```javascript
fruits.push("Pineapple");
console.log(fruits);  // Output: ["Apple", "Mango", "Orange", "Pineapple"]
```

#### 2. **`pop()`** – Removes the last element from the array:
```javascript
fruits.pop();
console.log(fruits);  // Output: ["Apple", "Mango", "Orange"]
```

#### 3. **`unshift()`** – Adds an element to the beginning of the array:
```javascript
fruits.unshift("Strawberry");
console.log(fruits);  // Output: ["Strawberry", "Apple", "Mango", "Orange"]
```

#### 4. **`shift()`** – Removes the first element from the array:
```javascript
fruits.shift();
console.log(fruits);  // Output: ["Apple", "Mango", "Orange"]
```

#### 5. **`concat()`** – Joins two or more arrays:
```javascript
const moreFruits = ["Kiwi", "Pineapple"];
const allFruits = fruits.concat(moreFruits);
console.log(allFruits);  // Output: ["Apple", "Mango", "Orange", "Kiwi", "Pineapple"]
```

#### 6. **`slice()`** – Returns a portion of an array without modifying the original:
```javascript
const citrusFruits = fruits.slice(1, 3);
console.log(citrusFruits);  // Output: ["Mango", "Orange"]
```

#### 7. **`splice()`** – Adds or removes elements from the array:
```javascript
fruits.splice(1, 1, "Grapes", "Peach");  // Removes "Mango" and adds "Grapes" and "Peach"
console.log(fruits);  // Output: ["Apple", "Grapes", "Peach", "Orange"]
```

#### 8. **`forEach()`** – Executes a function for each element in the array:
```javascript
fruits.forEach(fruit => console.log(fruit));
// Output:
// Apple
// Grapes
// Peach
// Orange
```

#### 9. **`map()`** – Creates a new array by applying a function to each element:
```javascript
const lengths = fruits.map(fruit => fruit.length);
console.log(lengths);  // Output: [5, 6, 5, 6]
```

#### 10. **`filter()`** – Creates a new array with elements that pass a condition:
```javascript
const shortFruits = fruits.filter(fruit => fruit.length <= 5);
console.log(shortFruits);  // Output: ["Apple", "Peach"]
```

#### 11. **`find()`** – Returns the first element that matches a condition:
```javascript
const foundFruit = fruits.find(fruit => fruit === "Peach");
console.log(foundFruit);  // Output: Peach
```

#### 12. **`reduce()`** – Reduces the array to a single value:
```javascript
const numbers = [1, 2, 3, 4];
const sum = numbers.reduce((total, num) => total + num, 0);
console.log(sum);  // Output: 10
```
### Array Methods (Continued):

#### 13. **`flat()`** – Flattens a nested array into a single-level array:
```javascript
const nestedArray = [1, [2, 3], [4, [5, 6]]];
const flatArray = nestedArray.flat(2);
console.log(flatArray);  // Output: [1, 2, 3, 4, 5, 6]
```

- The argument specifies the depth to which the array should be flattened. In the above example, `2` flattens two levels deep.

#### 14. **`every()`** – Checks if every element in the array satisfies a condition:
```javascript
const numbers = [1, 2, 3, 4, 5];
const allPositive = numbers.every(num => num > 0);
console.log(allPositive);  // Output: true
```

- Returns `true` if all elements pass the test, otherwise `false`.

#### 15. **`some()`** – Checks if at least one element in the array satisfies a condition:
```javascript
const hasNegative = numbers.some(num => num < 0);
console.log(hasNegative);  // Output: false
```

- Returns `true` if at least one element passes the test, otherwise `false`.

#### 16. **`keys()`** – Returns an array iterator that contains the keys (indices) for each index in the array:
```javascript
const fruits = ["Apple", "Grapes", "Peach", "Orange"];
const keys = fruits.keys();
for (let key of keys) {
  console.log(key);
}
// Output:
// 0
// 1
// 2
// 3
```

- Useful for iterating through the keys (indices) of an array.



#### 17. **`reverse()`** – Reverses the order of elements in the array:
```javascript
const fruits = ["Apple", "Grapes", "Peach", "Orange"];
fruits.reverse();
console.log(fruits);  // Output: ["Orange", "Peach", "Grapes", "Apple"]
```

- This method **mutates** the original array by reversing its order.

---

### Properties of Arrays:

#### 1. **Length**:
The `length` property gives you the number of elements in an array.
```javascript
console.log(fruits.length);  // Output: 4
```

#### 2. **IndexOf**:
Find the index of a particular element in an array.
```javascript
const index = fruits.indexOf("Peach");
console.log(index);  // Output: 2
```

#### 3. **Includes**:
Check if an array contains a specific element.
```javascript
console.log(fruits.includes("Grapes"));  // Output: true
```
---
---
### Sorting Arrays in JavaScript

The **`sort()`** method in JavaScript is used to sort the elements of an array. It can handle both **alphabetic** and **numeric** sorting, but there are some important details to consider when working with numbers.

#### 1. **Alphabetical Sorting** (Default Behavior):
When no compare function is provided, `sort()` sorts array elements as **strings** in **alphabetical order**.
```javascript
const fruits = ["Banana", "Orange", "Apple", "Mango"];
fruits.sort();
console.log(fruits);  // Output: ["Apple", "Banana", "Mango", "Orange"]
```
- **Note:** Even if the array contains numbers, without a compare function, JavaScript will convert them to strings and sort them **lexicographically** (alphabetically by character code).

#### 2. **Numeric Sorting**:
For sorting numbers correctly, you need to pass a **compare function** to the `sort()` method. This function defines the sorting logic.

##### Ascending Order:
```javascript
const numbers = [40, 100, 1, 5, 25, 10];
numbers.sort((a, b) => a - b);
console.log(numbers);  // Output: [1, 5, 10, 25, 40, 100]
```
- **Explanation**: The compare function `(a, b) => a - b` sorts the numbers in ascending order:
  - If the result is negative (`a < b`), `a` comes before `b`.
  - If the result is positive (`a > b`), `b` comes before `a`.

##### Descending Order:
```javascript
numbers.sort((a, b) => b - a);
console.log(numbers);  // Output: [100, 40, 25, 10, 5, 1]
```
- The compare function `(a, b) => b - a` sorts numbers in **descending** order.

---

### Iterating Over Arrays:
You can iterate over arrays in several ways:

#### 1. **`for` loop**:
```javascript
for (let i = 0; i < fruits.length; i++) {
  console.log(fruits[i]);
}
```

#### 2. **`for...of` loop**:
```javascript
for (const fruit of fruits) {
  console.log(fruit);
}
```

#### 3. **`forEach()`**:
```javascript
fruits.forEach(fruit => console.log(fruit));
```

---

### Multidimensional Arrays (Nested Arrays):
Arrays can hold other arrays, which can be useful for working with matrices or tables of data.

```javascript
const matrix = [
  [1, 2, 3],
  [4, 5, 6],
  [7, 8, 9]
];
console.log(matrix[0][1]);  // Output: 2
```

---

### When to Use Arrays:
- Arrays are used when you want to store and work with a list of elements.
- They are particularly useful for ordered collections of items, such as lists of numbers, strings, or objects.

---
# spread operator
[🔝](#table-of-contents)

The **spread operator** (`...`) in JavaScript is a powerful tool for working with arrays and other iterable objects. It allows you to expand elements from an array or object into individual elements or properties. Here's how you can use the spread operator with arrays:

### 1. **Copying Arrays**
You can create a shallow copy of an array using the spread operator:
```javascript
const originalArray = [1, 2, 3, 4];
const copiedArray = [...originalArray];
console.log(copiedArray);  // Output: [1, 2, 3, 4]
```
- **Note:** This creates a shallow copy, so changes to nested objects within the copied array will still affect the original array.

### 2. **Combining Arrays**
The spread operator is useful for merging multiple arrays into one:
```javascript
const array1 = [1, 2, 3];
const array2 = [4, 5, 6];
const combinedArray = [...array1, ...array2];
console.log(combinedArray);  // Output: [1, 2, 3, 4, 5, 6]
```

### 3. **Adding Elements to an Array**
You can use the spread operator to add elements to the beginning or end of an array:
```javascript
const fruits = ["Apple", "Banana"];
const moreFruits = ["Orange", "Mango"];
const allFruits = ["Strawberry", ...fruits, ...moreFruits];
console.log(allFruits);  // Output: ["Strawberry", "Apple", "Banana", "Orange", "Mango"]
```

### 4. **Using Spread Operator with Function Arguments**
You can use the spread operator to pass an array as individual arguments to a function:
```javascript
const numbers = [1, 2, 3, 4];
const sum = (a, b, c, d) => a + b + c + d;
console.log(sum(...numbers));  // Output: 10
```
- Here, `...numbers` spreads the array elements into separate arguments for the `sum` function.

### 5. **Destructuring Arrays**
The spread operator can be used in array destructuring to collect the remaining elements:
```javascript
const [first, second, ...rest] = [1, 2, 3, 4, 5];
console.log(first);  // Output: 1
console.log(second); // Output: 2
console.log(rest);  // Output: [3, 4, 5]
```

### 6. **Flattening Arrays**
If you have nested arrays, you can use the spread operator to flatten them:
```javascript
const nestedArray = [1, [2, 3], [4, [5, 6]]];
const flatArray = [].concat(...nestedArray);
console.log(flatArray);  // Output: [1, 2, 3, [4, [5, 6]]]
```
- For deep flattening, consider using `flat()` method introduced in ES2019.

### Summary
The spread operator (`...`) provides a convenient way to work with arrays, including copying, merging, and manipulating array elements, as well as handling function arguments and destructuring. It simplifies many common tasks in JavaScript and enhances code readability.

# Javascript String
[🔝](#table-of-contents)


### 1. **What is a String?**

In JavaScript, a string is a sequence of characters enclosed in single (`' '`), double (`" "`), or backticks (\` \`).

Example:
```js
let str1 = 'Hello World';
let str2 = "Hello World";
let str3 = `Hello World`; // Template literals
```

### 2. **String Properties**

- **`length`**: This property returns the length of a string.

```js
let str = 'JavaScript';
console.log(str.length); // Output: 10
```

### 3. **String Methods**

JavaScript provides numerous built-in methods for string manipulation.

#### 3.1. **Finding and Extracting Substrings**

- **`indexOf()`**: Returns the index of the first occurrence of a substring. Returns `-1` if not found.
```js
let str = "Hello, world!";
console.log(str.indexOf('world')); // Output: 7
```

- **`lastIndexOf()`**: Returns the last occurrence of a substring.
```js
let str = "Hello, world, hello!";
console.log(str.lastIndexOf('hello')); // Output: 13
```

- **`includes()`**: Checks if a string contains a substring.
```js
let str = "JavaScript";
console.log(str.includes("Script")); // Output: true
```

- **`startsWith()`** and **`endsWith()`**: Check if a string starts or ends with a specific substring.
```js
let str = "JavaScript";
console.log(str.startsWith("Java")); // true
console.log(str.endsWith("Script")); // true
```

#### 3.2. **Extracting Substrings**

- **`slice()`**: Extracts a part of a string and returns it as a new string.
```js
let str = "JavaScript";
console.log(str.slice(0, 4)); // Output: "Java"
```

- **`substring()`**: Similar to `slice()`, but doesn’t accept negative indices.
```js
let str = "JavaScript";
console.log(str.substring(0, 4)); // Output: "Java"
```

- **`substr()`**: Similar to `slice()`, but the second parameter specifies the length of the extracted part (deprecated, prefer `slice()`).
```js
let str = "JavaScript";
console.log(str.substr(4, 6)); // Output: "Script"
```

#### 3.3. **Changing Case**

- **`toUpperCase()`**: Converts all characters to uppercase.
```js
let str = "hello";
console.log(str.toUpperCase()); // Output: "HELLO"
```

- **`toLowerCase()`**: Converts all characters to lowercase.
```js
let str = "HELLO";
console.log(str.toLowerCase()); // Output: "hello"
```

#### 3.4. **Replacing Parts of a String**

- **`replace()`**: Replaces a specified value with another in a string. By default, replaces the first occurrence.
```js
let str = "Hello World";
console.log(str.replace("World", "JavaScript")); // Output: "Hello JavaScript"
```

- **`replaceAll()`**: Replaces all occurrences of a substring (introduced in ES2021).
```js
let str = "apple, apple, apple";
console.log(str.replaceAll("apple", "orange")); // Output: "orange, orange, orange"
```

#### 3.5. **Trimming**

- **`trim()`**: Removes whitespace from both sides of a string.
```js
let str = "   Hello World   ";
console.log(str.trim()); // Output: "Hello World"
```

- **`trimStart()`** / **`trimEnd()`**: Removes whitespace from the start or end of a string.
```js
let str = "   Hello World   ";
console.log(str.trimStart()); // Output: "Hello World   "
console.log(str.trimEnd());   // Output: "   Hello World"
```

#### 3.6. **Splitting Strings**

- **`split()`**: Splits a string into an array of substrings.
```js
let str = "apple, banana, cherry";
let arr = str.split(", ");
console.log(arr); // Output: ["apple", "banana", "cherry"]
```

### 4. **Template Literals (ES6)**

Template literals are strings enclosed in backticks (\` \`) that allow for embedded expressions and multiline strings.

- **Interpolation**: You can embed expressions inside `${}` within template literals.
```js
let name = "Nibaron";
let greeting = `Hello, ${name}!`;
console.log(greeting); // Output: "Hello, Nibaron!"
```

- **Multiline Strings**: Template literals allow for easy creation of multiline strings.
```js
let multilineStr = `This is
a multiline
string.`;
console.log(multilineStr);
```

### 5. **Escaping Characters**

Some characters in JavaScript strings have special meanings, so they need to be escaped using a backslash (`\`).

```js
let str = 'It\'s a great day!';
console.log(str); // Output: It's a great day!
```

Common escaped characters:
- `\'` for single quote
- `\"` for double quote
- `\\` for backslash
- `\n` for new line
- `\t` for tab

### 6. **String Iteration and Character Access**

- **Accessing Characters**: You can access individual characters using bracket notation or `charAt()`.
```js
let str = "Hello";
console.log(str[0]);    // Output: "H"
console.log(str.charAt(0)); // Output: "H"
```

- **Iterating Through a String**: You can use a `for...of` loop to iterate over characters in a string.
```js
let str = "Hello";
for (let char of str) {
    console.log(char);
}
```

### 7. **Advanced Techniques**

#### 7.1. **Using Regular Expressions**

Strings can be manipulated using **regular expressions** (RegExp).

- **Test for a Match**:
```js
let str = "I love JavaScript";
let pattern = /love/;
console.log(pattern.test(str)); // Output: true
```

- **Find Match(es)**:
```js
let str = "JavaScript is awesome. JavaScript is powerful.";
let pattern = /JavaScript/g;
console.log(str.match(pattern)); // Output: ["JavaScript", "JavaScript"]
```

- **Replace Using RegExp**:
```js
let str = "123-456-789";
let newStr = str.replace(/\d/g, "X");
console.log(newStr); // Output: "XXX-XXX-XXX"
```

#### 7.2. **String Padding**

- **`padStart()`**: Pads the string at the beginning.
```js
let str = "5";
console.log(str.padStart(3, "0")); // Output: "005"
```

- **`padEnd()`**: Pads the string at the end.
```js
let str = "5";
console.log(str.padEnd(3, "0")); // Output: "500"
```

### 8. **String Immutability**

Strings in JavaScript are **immutable**, which means once a string is created, it cannot be changed. Instead, you create new strings when modifying them.

```js
let str = "Hello";
str[0] = "J"; // This will not change the string
console.log(str); // Output: "Hello"
```

To modify a string, you create a new one:

```js
let newStr = "J" + str.slice(1);
console.log(newStr); // Output: "Jello"
```





# JavaScript Iterators
[🔝](#table-of-contents)

Let's go over the different types of loops and array methods in JavaScript, step by step:

### 1. **`for` Loop**
The `for` loop is used to execute a block of code a specific number of times. It consists of three parts: initialization, condition, and update.

**Syntax**:
```javascript
for (initialization; condition; update) {
    // Code to be executed
}
```

**Example**:
```javascript
for (let i = 0; i < 5; i++) {
    console.log(i);
}
```
In this example, the loop runs five times, printing numbers from 0 to 4.

---

### 2. **`for...in` Loop**
The `for...in` loop is used to iterate over `the keys (or properties or index)` of an object or the indices of an array.



**Example**:
```javascript
const arr = [10, 20, 30];
for (let key in arr) {
    console.log(`index:${key}, value:${arr[key]}`);
}

OUTPUT:
index:0, value:10
index:1, value:20
index:2, value:30

const obj = { a: 1, b: 2, c: 3 };
for (let key in obj) {
    console.log(key, obj[key]);
}

OUTPUT:
a 1
b 2
c 3  
```

### 3. **`for...of` Loop**
The `for...of` loop is used to iterate over iterable objects like arrays, strings, or sets. It allows direct access to the values.


**Example**:
```javascript
const arr = [10, 20, 30];
for (let value of arr) {
    console.log(value);
}
```
In this example, the loop iterates over the array values and prints `10`, `20`, and `30`.

```js
const name = "W3Schools";

for (const x of name) {
  console.log(x);
}
```

---

### 4. **`while` Loop**
The `while` loop continues executing a block of code as long as a specified condition is `true`.

**Syntax**:
```javascript
while (condition) {
    // Code to be executed
}
```

**Example**:
```javascript
let i = 0;
while (i < 5) {
    console.log(i);
    i++;
}
```
Here, the loop prints numbers from `0` to `4` and stops when `i` equals `5`.

---

### 5. **`break`**
The `break` statement is used to exit a loop prematurely when a certain condition is met.

**Syntax**:
```javascript
if (condition) {
    break;
}
```

**Example**:
```javascript
for (let i = 0; i < 10; i++) {
    if (i === 5) {
        break;
    }
    console.log(i);
}
```
This loop prints `0` to `4` and then stops when `i` equals `5` because of the `break` statement.

---

### 6. **`map()`**
The `map()` method creates a new array by applying a function to each element in the original array. It does **not** modify the original array.

**Syntax**:
```javascript
const newArray = array.map(function(element, index, array) {
    // Return a new value for the new array
});
```

**Example**:
```javascript
const numbers = [1, 2, 3, 4];
const doubled = numbers.map(num => num * 2);
console.log(doubled); // [2, 4, 6, 8]
```

---

### 7. **`filter()`**
The `filter()` method creates a new array containing elements that pass a specified condition. Like `map()`, it doesn't change the original array.

**Syntax**:
```javascript
const newArray = array.filter(function(element, index, array) {
    // Return true if the element should be in the new array
});
```

**Example**:
```javascript
const numbers = [1, 2, 3, 4];
const evens = numbers.filter(num => num % 2 === 0);
console.log(evens); // [2, 4]
```

---

### 8. **`forEach()`**
The `forEach()` method executes a function once for each array element. Unlike `map()` and `filter()`, it doesn't return a new array.

**Syntax**:
```javascript
array.forEach(function(element, index, array) {
    // Code to be executed for each element
});
```

**Example**:
```javascript
const numbers = [1, 2, 3, 4];
numbers.forEach(num => console.log(num));
```
This prints `1`, `2`, `3`, and `4` to the console but doesn't return a new array.

---

These loops and array methods are essential in JavaScript, offering flexibility for iterating over data, processing collections, and controlling loop execution.

# Set and Map
[🔝](#table-of-contents)

## JavaScript `Set`
A **Set** is a collection of **unique values**. Unlike arrays, Sets do not allow duplicate values, and they provide a faster way to check for the existence of a value in the collection.

#### Key Features of `Set`:
- Stores only **unique values**.
- The order of elements is based on insertion order.
- Elements in a `Set` can be of any type (primitive or object).

#### Common Methods and Properties:
- **`new Set()`**: Creates a new Set.
- **`.add(value)`**: Adds a new value to the Set.
- **`.has(value)`**: Returns `true` if the value exists in the Set, otherwise `false`.
- **`.delete(value)`**: Removes a value from the Set.
- **`.size`**: Returns the number of elements in the Set.
- **`.clear()`**: Removes all elements from the Set.
- **`.forEach()`**: Iterates over Set elements.

#### Example of `Set`:

```js
// Creating a Set
let mySet = new Set();

//create with initialized list
const letters = new Set(["a","b","c"]);

// Adding values to the Set
mySet.add(1);
mySet.add(2);
mySet.add(2);  // Duplicate value, won't be added
mySet.add('Hello');

// Checking if a value exists
console.log(mySet.has(1));  // Output: true
console.log(mySet.has(3));  // Output: false

// Deleting a value
mySet.delete(2);
console.log(mySet.has(2));  // Output: false

// Iterating over Set
mySet.forEach(value => {
  console.log(value);
});

// Set size
console.log(mySet.size);  // Output: 2

// Clear the Set
mySet.clear();
console.log(mySet.size);  // Output: 0
```

## JavaScript `Map`
A **Map** is a collection of **key-value pairs** where keys can be of any type (including objects, functions, and primitives). This makes Maps more flexible than objects, where keys are usually strings or symbols.

#### Key Features of `Map`:
- Stores **key-value pairs**.
- **Keys** in a Map can be of any data type (objects, functions, primitives).
- Maps preserve the order of elements (insertion order).
- More efficient for adding and removing key-value pairs than plain objects.

#### Common Methods and Properties:
- **`new Map()`**: Creates a new Map.
- **`.set(key, value)`**: Adds or updates an element in the Map.
- **`.get(key)`**: Returns the value associated with the key.
- **`.has(key)`**: Returns `true` if the key exists in the Map.
- **`.delete(key)`**: Removes an element from the Map by key.
- **`.size`**: Returns the number of key-value pairs.
- **`.clear()`**: Removes all elements from the Map.
- **`.forEach()`**: Iterates over key-value pairs.

#### Example of `Map`:

```js
// Creating a Map
let myMap = new Map();

//create with initialized list
const fruits = new Map([
  ["apples", 500],
  ["bananas", 300],
  ["oranges", 200]
]);

// Adding key-value pairs to the Map
myMap.set('name', 'John');
myMap.set('age', 30);
myMap.set('isEmployed', true);

// Accessing values
console.log(myMap.get('name')); // Output: John
console.log(myMap.get('age'));  // Output: 30

// Checking if a key exists
console.log(myMap.has('age'));  // Output: true
console.log(myMap.has('salary'));  // Output: false

// Deleting a key-value pair
myMap.delete('age');
console.log(myMap.has('age'));  // Output: false

// Map size
console.log(myMap.size);  // Output: 2

// Iterating over a Map
myMap.forEach((value, key) => {
  console.log(`${key}: ${value}`);
});

// Clear the Map
myMap.clear();
console.log(myMap.size);  // Output: 0
```

### **Differences Between `Set` and `Map`:**

| Feature               | `Set`                          | `Map`                                 |
|-----------------------|---------------------------------|---------------------------------------|
| **Data Structure**     | Collection of unique values    | Collection of key-value pairs         |
| **Key-Value Pairs**    | No, only stores values         | Yes, stores key-value pairs           |
| **Unique Values**      | All values must be unique      | Keys must be unique                  |
| **Key Type**           | Not applicable (only values)   | Keys can be any type (object, array, etc.) |
| **Accessing Values**   | No direct access to values     | Can access values using `.get(key)`   |
| **Iteration Order**    | Insertion order                | Insertion order                      |

### When to Use:
- **Use `Set`** when you need to store unique values and check for the presence of a value efficiently.
- **Use `Map`** when you need to store key-value pairs, especially when keys can be other data types (not just strings).

Both `Set` and `Map` are versatile and can be used for different use cases where unique values or key-value pair storage is needed.


# Javascript functions
[🔝](#table-of-contents)

A **function** is a block of code designed to perform a particular task. You can think of it as a subprogram that can be executed whenever it is called (or invoked).

### 1. **Creating/Declaring a Function**

There are several ways to define a function in JavaScript, including:

####  **Function Declaration**
This is the most common way to define a function. A function declaration defines a named function and is hoisted (i.e., it can be called before the declaration appears in the code).

```javascript
function functionName(parameters) {
    // code to be executed
}
```

- `functionName`: The name you give to the function.
- `parameters`: Values (arguments) passed into the function.
- The function body contains the logic to be executed.

Example:

```javascript
function greet(name) {
    return 'Hello, ' + name;
}

console.log(greet('Nibaron')); // Output: Hello, Nibaron
```

#### **Function Expression**
A function expression defines a function inside an expression. Unlike function declarations, function expressions are not hoisted, so you cannot call them before they are defined.

```javascript
const functionName = function(parameters) {
    // code to be executed
};
```

Example:

```javascript
const square = function(number) {
    return number * number;
};

console.log(square(5)); // Output: 25
```

#### **Arrow Functions (ES6)**
Arrow functions provide a shorter syntax and lexically bind the `this` keyword. They are commonly used for simple functions and callbacks.

```javascript
const functionName = (parameters) => {
    // code to be executed
};
```

If the function has only one statement, and that statement is returning a value, you can omit the `return` keyword and the curly braces:

```javascript
const square = number => number * number;

console.log(square(5)); // Output: 25
```

### 3. **Parameters and Arguments**

Functions can take **parameters** (placeholders) that are replaced by **arguments** when the function is called. You can pass multiple parameters to a function.

```javascript
function add(a, b) {
    return a + b;
}

console.log(add(3, 4)); // Output: 7
```

#### Default Parameters
ES6 introduced default parameters, allowing you to define default values for function parameters if no value is passed.

```javascript
function multiply(a, b = 2) {
    return a * b;
}

console.log(multiply(3)); // Output: 6
```


### 4. **Anonymous Functions**

Anonymous functions are functions without a name. They are often used as arguments for other functions, such as callbacks.

```javascript
setTimeout(function() {
    console.log('Hello, World!');
}, 1000);
```

### 5. **Immediately Invoked Function Expression (IIFE)**

An **IIFE** is a function that runs as soon as it is defined. It helps create a private scope and avoid polluting the global namespace.

```javascript
(function() {
    console.log('This is an IIFE');
})();
```

### 6. **Higher-Order Functions**

A **higher-order function** is a function that can take other functions as arguments or return a function.

Example:

```javascript
function sayHello() {
    return function() {
        console.log('Hello!');
    };
}

const greeting = sayHello();
greeting(); // Output: Hello!
```

### 7. **Callback Functions**

A **callback** is a function passed into another function as an argument. Callbacks are used for asynchronous operations like handling responses from a server.

Example using a `setTimeout`:

```javascript
function displayMessage(message) {
    console.log(message);
}

setTimeout(function() {
    displayMessage('Hello after 3 seconds');
}, 3000);
```

### 8. **Rest Parameters (ES6)**

Rest parameters allow a function to accept an indefinite number of arguments as an array.

```javascript
function sum(...numbers) {
    return numbers.reduce((acc, curr) => acc + curr, 0);
}

console.log(sum(1, 2, 3, 4)); // Output: 10
```

### 9. **Spread Operator (ES6)**

The spread operator can be used to pass elements of an array as individual arguments to a function.

```javascript
const numbers = [1, 2, 3, 4];
console.log(Math.max(...numbers)); // Output: 4
```

### 10. **Pure Functions**

A **pure function** always produces the same output for the same input and has no side effects.

```javascript
function add(a, b) {
    return a + b; // Always the same output for given inputs
}
```

### 11. `call()`
- **Purpose**: Immediately invokes the function, with the first argument being the value for `this` and subsequent arguments passed individually.
  
```javascript
const person = {
    firstName: 'Nibaron',
    lastName: 'Kumar',
};

function greet(greeting, punctuation) {
    console.log(`${greeting}, ${this.firstName} ${this.lastName}${punctuation}`);
}

// Using call to set `this`
greet.call(person, 'Hello', '!');
```

#### Explanation:
- `greet.call(person, 'Hello', '!')` sets `this` to the `person` object and passes `'Hello'` and `'!'` as arguments to the `greet` function.
- The output would be: `Hello, Nibaron Kumar!`

### use case
Borrowing methods from one object to another, where the method is not directly available.
```js
const person1 = {
    firstName: 'Nibaron',
    lastName: 'Kumar',
    getFullName() {
        return `${this.firstName} ${this.lastName}`;
    }
};

const person2 = {
    firstName: 'Rudra',
    lastName: 'Sarkar'
};

// Using `call()` to borrow the method from `person1`
console.log(person1.getFullName.call(person2)); // Output: Rudra Sarkar
```

---

### 12. `apply()`
- **Purpose**: Similar to `call()`, but arguments are passed as an array.
  
```javascript
const person = {
    firstName: 'Nibaron',
    lastName: 'Kumar',
};

function greet(greeting, punctuation) {
    console.log(`${greeting}, ${this.firstName} ${this.lastName}${punctuation}`);
}

// Using apply to set `this` and pass arguments as an array
greet.apply(person, ['Hi', '!!']);
```

#### Explanation:
- `greet.apply(person, ['Hi', '!!'])` sets `this` to the `person` object and passes `'Hi'` and `'!!'` as arguments in an array.
- The output would be: `Hi, Nibaron Kumar!!`

---

### 13. `bind()`
- **Purpose**: Does not immediately invoke the function. Instead, it returns a new function with the `this` value set to the specified object. You can call the new function later.

```javascript
const person = {
    firstName: 'Nibaron',
    lastName: 'Kumar',
};

function greet(greeting, punctuation) {
    console.log(`${greeting}, ${this.firstName} ${this.lastName}${punctuation}`);
}

// Using bind to create a new function with `this` bound to `person`
const greetPerson = greet.bind(person, 'Greetings', '!!!');

// Now we can call the new function later
greetPerson();
```

#### Explanation:
- `greet.bind(person, 'Greetings', '!!!')` returns a new function `greetPerson`, where `this` is bound to the `person` object and `'Greetings'` and `'!!!'` are passed as arguments.
- When `greetPerson()` is called, the output is: `Greetings, Nibaron Kumar!!!`

---

### Summary:
- **`call()`**: Immediately calls the function, passing arguments individually.
- **`apply()`**: Immediately calls the function, passing arguments as an array.
- **`bind()`**: Returns a new function with the context bound to the provided object, but doesn't call it immediately.



# Classes
[🔝](#table-of-contents)

JavaScript introduced the `class` syntax in ECMAScript 6 (ES6) to offer a cleaner and more understandable way to work with objects and inheritance compared to the traditional prototype-based inheritance.

### 1. **What is a Class?**

A class is a blueprint for creating objects. It can contain properties and methods to be shared by the objects it creates.

#### Basic Syntax:
```js
class ClassName {
  constructor(property1, property2) {
    this.property1 = property1;
    this.property2 = property2;
  }

  method1() {
    console.log('Method 1 executed');
  }

  method2() {
    console.log('Method 2 executed');
  }
}
```

#### Example:
```js
class Car {
  constructor(brand, model) {
    this.brand = brand;
    this.model = model;
  }

  startEngine() {
    console.log(`${this.brand} ${this.model} engine started!`);
  }
}

let myCar = new Car("Toyota", "Corolla");
myCar.startEngine(); // Output: "Toyota Corolla engine started!"
```

### 2. **Class Constructor**

The `constructor` method is a special method that is used to initialize an object's properties when a new object is created.

- **Constructor Example**:
```js
class Person {
  constructor(name, age) {
    this.name = name;
    this.age = age;
  }

  introduce() {
    console.log(`Hello, my name is ${this.name} and I'm ${this.age} years old.`);
  }
}

let person1 = new Person("Nibaron", 25);
person1.introduce(); // Output: "Hello, my name is Nibaron and I'm 25 years old."
```

### 3. **Adding Methods to a Class**

Methods can be added inside the class declaration, and they are automatically added to the prototype of the class. This ensures that they are shared across instances, saving memory.

#### Example:
```js
class Animal {
  constructor(name) {
    this.name = name;
  }

  speak() {
    console.log(`${this.name} makes a sound.`);
  }
}

let dog = new Animal('Dog');
dog.speak(); // Output: "Dog makes a sound."
```

### 4. **Inheritance**

Classes can inherit from other classes using the `extends` keyword. This allows the child class to inherit properties and methods from the parent class.

#### Example:
```js
class Animal {
  constructor(name) {
    this.name = name;
  }

  speak() {
    console.log(`${this.name} makes a sound.`);
  }
}

class Dog extends Animal {
  constructor(name, breed) {
    super(name); // Calls the constructor of the parent class
    this.breed = breed;
  }

  bark() {
    console.log(`${this.name} barks!`);
  }
}

let myDog = new Dog('Rex', 'Golden Retriever');
myDog.speak(); // Output: "Rex makes a sound."
myDog.bark();  // Output: "Rex barks!"
```

### 5. **Overriding Methods**

The child class can override methods from the parent class.

#### Example:
```js
class Animal {
  constructor(name) {
    this.name = name;
  }

  speak() {
    console.log(`${this.name} makes a sound.`);
  }
}

class Cat extends Animal {
  speak() {
    console.log(`${this.name} meows.`);
  }
}

let myCat = new Cat('Whiskers');
myCat.speak(); // Output: "Whiskers meows."
```

### 6. **Getters and Setters**

Getters and setters allow you to define object properties that are computed or controlled when being accessed or set.

#### Example:
```js
class Rectangle {
  constructor(height, width) {
    this.height = height;
    this.width = width;
  }

  get area() {
    return this.height * this.width;
  }

  set area(value) {
    console.log("You cannot set the area directly!");
  }
}

let myRectangle = new Rectangle(5, 10);
console.log(myRectangle.area); // Output: 50
myRectangle.area = 100;        // Output: "You cannot set the area directly!"
```

### 7. **Static Methods**

Static methods are called on the class itself, not on instances of the class. These methods are often used for utility functions.

#### Example:
```js
class Calculator {
  static add(a, b) {
    return a + b;
  }
}

console.log(Calculator.add(5, 3)); // Output: 8
```

### 8. **Private Properties and Methods (ES2022)**

JavaScript introduced the concept of private properties and methods, which are prefixed with a `#`. These are not accessible outside the class.

#### Example:
```js
class BankAccount {
  #balance = 0;

  deposit(amount) {
    this.#balance += amount;
  }

  getBalance() {
    return this.#balance;
  }
}

let myAccount = new BankAccount();
myAccount.deposit(100);
console.log(myAccount.getBalance()); // Output: 100
console.log(myAccount.#balance); // Error: Private field '#balance' must be declared in an enclosing class
```

### 9. **Class Fields (Public Fields)**

Public fields can be declared outside the constructor and assigned default values. These properties are set directly on the instance.

#### Example:
```js
class User {
  name = "Anonymous";
  age = 0;

  introduce() {
    console.log(`Hi, I'm ${this.name} and I'm ${this.age} years old.`);
  }
}

let user1 = new User();
user1.introduce(); // Output: "Hi, I'm Anonymous and I'm 0 years old."
```

### 10. **Example: A Practical Use Case**

Let's create a simple class structure to demonstrate how you can combine multiple features of classes.

```js
class Product {
  constructor(name, price) {
    this.name = name;
    this.price = price;
  }

  details() {
    return `Product: ${this.name}, Price: $${this.price}`;
  }
}

class DiscountProduct extends Product {
  constructor(name, price, discount) {
    super(name, price);
    this.discount = discount;
  }

  details() {
    const discountedPrice = this.price - (this.price * this.discount) / 100;
    return `Product: ${this.name}, Price after discount: $${discountedPrice}`;
  }
}

let regularProduct = new Product("Phone", 600);
let discountedProduct = new DiscountProduct("Laptop", 1000, 10);

console.log(regularProduct.details()); // Output: "Product: Phone, Price: $600"
console.log(discountedProduct.details()); // Output: "Product: Laptop, Price after discount: $900"
```

### 11. **Summary**

- **Classes**: A blueprint for creating objects.
- **Constructor**: A special method for initializing an object’s properties.
- **Methods**: Functions defined inside a class to be shared by all instances.
- **Inheritance**: Allows a class to inherit properties and methods from another class.
- **Getters/Setters**: Control how properties are accessed and modified.
- **Static Methods**: Utility methods defined on the class itself.
- **Private Fields**: Properties and methods accessible only within the class.

---

# Javascript Object
[🔝](#table-of-contents)

In JavaScript, an **object** is a collection of properties, where each property consists of a key-value pair. Objects allow you to group related data and functions (called methods in the context of objects) together.

### Defining an Object

You can define an object using object literals or the `new Object()` constructor.

#### 1. **Object Literal Syntax**

This is the most common way to define an object in JavaScript:

```javascript
let person = {
  firstName: "John",
  lastName: "Doe",
  age: 30,
  gender: "male",
  fullName: function() {
    return this.firstName + " " + this.lastName;
  }
};
```

- **Keys**: `firstName`, `lastName`, `age`, `gender`, `fullName` are keys (properties or methods).
- **Values**: `"John"`, `"Doe"`, `30`, `"male"`, and the function are the corresponding values.

#### 2. **Using the `new Object()` Constructor**

An alternative way to create an object is by using the `new Object()` constructor.

```javascript
let person = new Object();
person.firstName = "John";
person.lastName = "Doe";
person.age = 30;
person.gender = "male";
person.fullName = function() {
  return this.firstName + " " + this.lastName;
};
```

### Accessing Object Properties

You can access object properties using **dot notation** or **bracket notation**.

#### 1. **Dot Notation**

```javascript
console.log(person.firstName); // Outputs: John
console.log(person.fullName()); // Outputs: John Doe
```

#### 2. **Bracket Notation**

```javascript
console.log(person["firstName"]); // Outputs: John
```

- Use bracket notation when the property name is stored in a variable or when the property name has spaces or special characters.

### Modifying Object Properties

You can add, modify, or delete properties from an object.

#### 1. **Adding/Modifying a Property**

```javascript
person.nationality = "American"; // Adding a new property
person.age = 31; // Modifying an existing property
```

#### 2. **Deleting a Property**

```javascript
delete person.age;
console.log(person.age); // Outputs: undefined
```

### Looping Through Object Properties

You can use the `for...in` loop to iterate over all properties of an object.

```javascript
for (let key in person) {
  console.log(key + ": " + person[key]);
}
```

### Nested Objects

An object can contain other objects.

```javascript
let employee = {
  name: "Alice",
  position: "Developer",
  address: {
    street: "123 Main St",
    city: "New York",
    country: "USA"
  }
};

console.log(employee.address.city); // Outputs: New York
```

### Methods in Objects

A **method** is a function associated with an object. You can define methods inside an object to perform actions on that object’s data.

```javascript
let car = {
  make: "Toyota",
  model: "Corolla",
  year: 2022,
  getCarInfo: function() {
    return this.year + " " + this.make + " " + this.model;
  }
};

console.log(car.getCarInfo()); // Outputs: 2022 Toyota Corolla
```

### Objects as Function Parameters

Objects can be passed as parameters to functions.

```javascript
function greet(person) {
  return "Hello, " + person.firstName + " " + person.lastName;
}

console.log(greet({ firstName: "Jane", lastName: "Doe" })); // Outputs: Hello, Jane Doe
```

### JavaScript `this` Keyword

In the context of an object, the `this` keyword refers to the current object.

```javascript
let person = {
  firstName: "John",
  lastName: "Doe",
  fullName: function() {
    return this.firstName + " " + this.lastName;
  }
};

console.log(person.fullName()); // Outputs: John Doe
```

### JavaScript Object Methods

JavaScript provides many built-in object methods to work with objects:

- **`Object.keys()`**: Returns an array of a given object’s own property names.
  ```javascript
  console.log(Object.keys(person)); // Outputs: ["firstName", "lastName", "fullName"]
  ```

- **`Object.values()`**: Returns an array of the values of the object’s own properties.
  ```javascript
  console.log(Object.values(person)); // Outputs: ["John", "Doe", function...]
  ```

- **`Object.assign()`**: Copies the values of all enumerable properties from one or more source objects to a target object.
  ```javascript
  let person2 = Object.assign({}, person);
  ```

- **`Object.entries()`**: Returns an array of a given object’s key-value pairs.
  ```javascript
  console.log(Object.entries(person)); // Outputs: [["firstName", "John"], ["lastName", "Doe"], ...]
  ```


# DOM and BOM


# Versions

# AJAX
[🔝](#table-of-contents)

AJAX is a developer's dream, because you can:

- Read data from a web server - after the page has loaded
- Update a web page without reloading the page
- Send data to a web server - in the background

![AJAX Example](https://www.w3schools.com/js/pic_ajax.gif)

**AJAX** (Asynchronous JavaScript and XML) is a set of web development techniques that allows web applications to send and receive data from a server asynchronously, without having to reload the entire web page. This improves the user experience by making web applications faster and more responsive. AJAX can be used with a variety of technologies, not just XML — JSON is more commonly used today.

### 1. **How AJAX Works**

AJAX allows for asynchronous communication between the browser and the server. Here's how a typical AJAX request works:

1. A user action triggers an event (like clicking a button or loading the page).
2. JavaScript creates an `XMLHttpRequest` object.
3. The `XMLHttpRequest` object sends an asynchronous request to the server (often to an API endpoint).
4. The server processes the request and sends back a response (data in formats like JSON, XML, or HTML).
5. JavaScript processes the server response and updates the webpage dynamically, without reloading.

### 2. **AJAX with `XMLHttpRequest` Object**

Before `fetch` and other modern APIs, AJAX was typically implemented using the `XMLHttpRequest` object.

#### Example of `XMLHttpRequest` for AJAX:

```javascript
// 1. Create an instance of XMLHttpRequest
const xhr = new XMLHttpRequest();

// 2. Define what happens when the request is ready
xhr.onreadystatechange = function() {
    if (xhr.readyState === 4 && xhr.status === 200) {
        // 4: Request finished and response is ready
        // 200: OK
        console.log(xhr.responseText); // Handle the response here (JSON, XML, etc.)
    }
};

// 3. Open the request (GET/POST, URL, and async)
xhr.open('GET', 'https://jsonplaceholder.typicode.com/posts', true);

// 4. Send the request
xhr.send();
```

<table class="ws-table-all notranslate"> 
  <tbody><tr>
    <th style="width:20%">Property</th>
    <th>Description</th>
  </tr>  
  <tr>
    <td>onreadystatechange</td>
    <td>Defines a function to be called when the readyState property changes</td>
  </tr>
  <tr>
    <td>readyState</td>
    <td>Holds the status of the XMLHttpRequest. <br>
 0: request not initialized <br>
 1: server connection established<br>
 2: request received <br>
 3: processing request <br>
 4: request finished and response is ready</td>
  </tr>
  <tr>
    <td>status</td>
    <td>200: "OK"<br>403: "Forbidden"<br>
 404: "Page not found"<br>For a complete list go to the
    <a href="/tags/ref_httpmessages.asp">Http Messages Reference</a></td>
  </tr>
  <tr>
    <td>statusText</td>
    <td>Returns the status-text (e.g. "OK" or "Not Found")</td>
  </tr>
</tbody></table>

#### Explanation:
- `xhr.onreadystatechange`: This function is called when the request's state changes.
- `xhr.readyState`: This property defines the state of the request. When it’s `4`, the request is finished.
- `xhr.status`: A code like `200` means success.
- `xhr.responseText`: The server's response in text format (JSON, XML, HTML).

### 3. **AJAX with `fetch()` (Modern Approach)**

The `fetch()` API is a modern alternative to `XMLHttpRequest` for handling AJAX requests. It’s simpler and returns a **Promise**, which allows better handling of asynchronous operations.

#### Basic Example of `fetch()`:

```javascript
fetch('https://jsonplaceholder.typicode.com/posts')
    .then(response => response.json()) // Parse JSON data
    .then(data => {
        console.log(data); // Handle the response data
    })
    .catch(error => {
        console.error('Error:', error); // Handle any errors
    });
```

#### Explanation:
- `fetch()` returns a **Promise**. When the request completes, it resolves with a `Response` object.
- `response.json()` is used to parse the response as JSON.
- `.then()` handles the resolved promise, and `.catch()` handles any errors.



### 4. **AJAX Request Methods**

Here are some of the common HTTP methods used in AJAX requests:

- **GET**: Used to request data from the server.
- **POST**: Used to send data to the server (e.g., form submissions).
- **PUT**: Used to update data on the server.
- **DELETE**: Used to delete data from the server.

#### Example of POST request using `fetch()`:

```javascript
const postData = async () => {
    const newPost = {
        title: 'foo',
        body: 'bar',
        userId: 1,
    };

    const response = await fetch('https://jsonplaceholder.typicode.com/posts', {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json'
        },
        body: JSON.stringify(newPost)
    });

    const data = await response.json();
    console.log(data); // Handle the response
};

postData();
```

### 5. **AJAX Responses**

AJAX responses can be in various formats:
- **JSON**: Commonly used format for exchanging data.
- **XML**: The traditional format, but less commonly used today.
- **HTML**: For inserting directly into web pages.
- **Plain Text**: For simple text responses.

Example of handling JSON response:

```javascript
fetch('https://jsonplaceholder.typicode.com/posts')
    .then(response => response.json()) // Parse the JSON response
    .then(data => {
        console.log(data); // Access the data
    });
```

### 6. **Handling Errors in AJAX**

It is crucial to handle errors in AJAX requests, such as network issues or a failure in the API.

```javascript
fetch('https://jsonplaceholder.typicode.com/posts')
    .then(response => {
        if (!response.ok) {
            throw new Error('Network response was not ok ' + response.statusText);
        }
        return response.json();
    })
    .then(data => console.log(data))
    .catch(error => console.error('There was a problem with the fetch operation:', error));
```


###  **AJAX Advantages**

- **No Page Reload**: It allows you to update parts of a page without reloading the whole page.
- **Asynchronous**: Improves user experience by allowing other interactions while data is being fetched.
- **Faster Interaction**: Only the necessary data is requested and displayed, making the web app faster and more efficient.

###  **AJAX Disadvantages**

- **Requires JavaScript**: If the user disables JavaScript, AJAX won’t work.
- **Security Concerns**: Because AJAX involves sending and receiving data from a server, it can expose certain vulnerabilities if not handled securely.
- **Complexity**: Asynchronous code can be more challenging to write and manage.

---

# Asynchronous Javascript
# Advance JS

# Javascript Good practices
[🔝](#table-of-contents)

Writing clean and maintainable JavaScript code is crucial for readability, debugging, collaboration, and long-term maintainability. Here are some best practices for writing good JavaScript code:

### 1. **Use Descriptive and Consistent Naming Conventions**
   - Use meaningful and descriptive names for variables and functions.
   - Use camelCase for variable and function names (`myVariableName`).
   - Use PascalCase for class names (`MyClass`).
   - Use `const` and `let` appropriately, rather than `var`.

**Example**:
```javascript
// Bad
let x = 10;
function foo() {}

// Good
const maxUserCount = 10;
function getUserDetails() {}
```

### 2. **Prefer `const` and `let` Over `var`**
   - Use `const` for variables that won’t change, and `let` for variables that can change. Avoid using `var` as it has function scope and can lead to unexpected behavior.
   
**Example**:
```javascript
// Avoid
var name = 'John';

// Good
const name = 'John'; // Use `const` when the value won’t change
let age = 25; // Use `let` when the value can change
```

### 3. **Keep Functions Small and Focused**
   - Each function should do one thing and do it well. Large functions are harder to understand and maintain. Break down complex functions into smaller ones.

**Example**:
```javascript
// Bad
function createUser(name, age, location, email, isActive) {
    // a lot of code here
}

// Good
function createUser(name, age, location) {
    return { name, age, location };
}

function activateUser(user) {
    user.isActive = true;
    return user;
}
```

### 4. **Avoid Repetition (DRY - Don't Repeat Yourself)**
   - Repeating the same logic or code is inefficient and error-prone. Instead, encapsulate logic in functions or utilities that can be reused.

**Example**:
```javascript
// Bad
function calculateTax(price) {
    return price * 0.15;
}

function calculateDiscount(price) {
    return price * 0.1;
}

// Good
function calculatePercentage(price, percentage) {
    return price * (percentage / 100);
}
```

### 5. **Use Template Literals for String Concatenation**
   - Instead of concatenating strings with `+`, use template literals, which are more readable and support multi-line strings.

**Example**:
```javascript
// Bad
const greeting = 'Hello, ' + name + '!';

// Good
const greeting = `Hello, ${name}!`;
```

### 6. **Handle Errors Gracefully with `try...catch`**
   - Always anticipate possible errors, especially when dealing with external data (API requests, file operations) and handle them gracefully.

**Example**:
```javascript
try {
    const data = fetchData();
    console.log(data);
} catch (error) {
    console.error('Error fetching data:', error);
}
```

### 7. **Use Arrow Functions Where Appropriate**
   - Use arrow functions (`=>`) for shorter function syntax, especially for inline callbacks, and to avoid binding issues with `this`.

**Example**:
```javascript
// Bad
function add(a, b) {
    return a + b;
}

// Good
const add = (a, b) => a + b;
```

### 8. **Avoid Magic Numbers and Strings**
   - Magic numbers (or strings) are arbitrary values directly used in code. Use constants instead to improve readability and make future changes easier.

**Example**:
```javascript
// Bad
if (user.age > 18) {
    // some logic
}

// Good
const MIN_ADULT_AGE = 18;
if (user.age > MIN_ADULT_AGE) {
    // some logic
}
```

### 9. **Comment Wisely**
   - Write comments to explain why something is done, not how. Code should be self-explanatory. Avoid redundant or excessive comments.

**Example**:
```javascript
// Bad
// Increment i by 1
i++;

// Good
// Fetch user details from the API
const userDetails = await getUserDetails();
```

### 10. **Use `map()`, `filter()`, and `reduce()` Instead of Loops**
   - Modern array methods (`map()`, `filter()`, `reduce()`, etc.) are more expressive and readable than `for` loops for common data operations.

**Example**:
```javascript
// Bad
let doubled = [];
for (let i = 0; i < numbers.length; i++) {
    doubled.push(numbers[i] * 2);
}

// Good
const doubled = numbers.map(num => num * 2);
```

### 11. **Write Modular Code (Avoid Long Files)**
   - Keep your files short and focused. Organize your code into modules, classes, or functions to maintain separation of concerns.

**Example**:
```javascript
// Modular Approach
// utils.js
export function add(a, b) {
    return a + b;
}

// main.js
import { add } from './utils.js';
console.log(add(2, 3));
```

### 12. **Consistent Formatting (Use Linters/Formatters)**
   - Use a consistent style for indentation, spacing, and braces. Tools like Prettier or ESLint can help enforce consistency across the codebase.

**Example**:
```javascript
// Bad
function test(){console.log("Hello")}

// Good
function test() {
    console.log("Hello");
}
```

### 13. **Use Default Parameters**
   - Set default values for function parameters to make your code more robust and prevent unexpected `undefined` values.

**Example**:
```javascript
// Bad
function greet(name) {
    const greeting = name ? name : 'Guest';
    console.log(`Hello, ${greeting}`);
}

// Good
function greet(name = 'Guest') {
    console.log(`Hello, ${name}`);
}
```

### 14. **Use `===` Instead of `==`**
   - Use strict equality (`===`) to avoid issues with type coercion that occur with loose equality (`==`).

**Example**:
```javascript
// Bad
if (value == '10') {
    // some logic
}

// Good
if (value === 10) {
    // some logic
}
```

### 15. **Avoid Global Variables**
   - Minimize the use of global variables to avoid naming conflicts and ensure the code is encapsulated. Use modules or closures to keep scope local.

---

By following these clean code practices, you'll make your JavaScript code easier to read, maintain, and debug.