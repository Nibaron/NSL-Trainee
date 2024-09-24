#  JavaScript
JavaScript is a lightweight, interpreted, or just-in-time compiled programming language with first-class functions. It is known as the language of the web because it's primarily used for building interactive websites.


## Table of Contents

1. [Data types](#data-types)
2. [JavaScript Type Conversion](#javascript-type-conversion)
3. [JavaScript Variables](#javascript-variables)
5. [spread operator](#spread-operator)
7. [JavaScript Iterators](#javascript-iterators)
8. [Set and Map](#set-and-map)
9. [Javascript functions](#javascript-functions)
11. [Javascript Object](#javascript-object)
12. [AJAX](#ajax)


# Data types

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


### Dynamic Typing in JavaScript
JavaScript is a **dynamically typed** language, meaning that the type of a variable is determined at runtime and you can change the type of a variable during execution.

```js
let variable = "Hello"; // String
variable = 42; // Now it's a Number
```

### Difference Between Undefined and Null
undefined and null are equal in value but different in type:

```js
typeof undefined      // undefined
typeof null           // object

/* value equality */
null == undefined     // true

/* strick equality */
null === undefined    // false

```
# JavaScript Type Conversion
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

### Important Notes:
- **Falsy values**: `0`, `""`, `null`, `undefined`, and `NaN` are considered false when converted to boolean.
- **Truthy values**: All other values (including empty objects and arrays) are considered true when converted to boolean.



# JavaScript  Variables
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

# spread operator

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

# JavaScript Iterators
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
const doubled = numbers.map(function(num) {
  return num * 2;
});
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
const evens = numbers.filter(function(num) {
  return num % 2 === 0;
});
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
numbers.forEach(function(num) {
  console.log(num);
});
```
This prints `1`, `2`, `3`, and `4` to the console but doesn't return a new array.

---

These loops and array methods are essential in JavaScript, offering flexibility for iterating over data, processing collections, and controlling loop execution.

# Set and Map
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

### 4. **Return Statement**

The `return` statement is used to return a value from a function. Once a function reaches a `return` statement, it stops executing further code inside the function.

```javascript
function subtract(a, b) {
    return a - b;
}

console.log(subtract(10, 4)); // Output: 6
```

If no `return` statement is used, the function returns `undefined`.

### 5. **Function Invocation (Calling a Function)**

To **invoke** a function means to call it so that its code is executed. You call a function using parentheses.

```javascript
functionName(arguments);
```

Example:

```javascript
function greet() {
    return 'Hello';
}

console.log(greet()); // Output: Hello
```

### 6. **Function Scope**

JavaScript has function scope, meaning variables declared inside a function are not accessible outside of it.

```javascript
function myFunction() {
    let x = 5; // x is local to the function
    console.log(x);
}

console.log(x); // Error: x is not defined
```

### 7. **Anonymous Functions**

Anonymous functions are functions without a name. They are often used as arguments for other functions, such as callbacks.

```javascript
setTimeout(function() {
    console.log('Hello, World!');
}, 1000);
```

### 8. **Immediately Invoked Function Expression (IIFE)**

An **IIFE** is a function that runs as soon as it is defined. It helps create a private scope and avoid polluting the global namespace.

```javascript
(function() {
    console.log('This is an IIFE');
})();
```

### 9. **Higher-Order Functions**

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

### 10. **Callback Functions**

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

### 11. **Closures**

A **closure** is created when a function remembers its lexical environment, allowing it to access variables from its outer scope even after that scope has returned.

```javascript
function outerFunction() {
    let outerVariable = 'I am outside!';

    function innerFunction() {
        console.log(outerVariable); // It still has access to the outerVariable
    }

    return innerFunction;
}

const innerFunc = outerFunction();
innerFunc(); // Output: I am outside!
```

### 12. **Recursion**

Recursion is a technique where a function calls itself in order to solve a problem.

```javascript
function factorial(n) {
    if (n === 0) {
        return 1;
    }
    return n * factorial(n - 1);
}

console.log(factorial(5)); // Output: 120
```

### 13. **Rest Parameters (ES6)**

Rest parameters allow a function to accept an indefinite number of arguments as an array.

```javascript
function sum(...numbers) {
    return numbers.reduce((acc, curr) => acc + curr, 0);
}

console.log(sum(1, 2, 3, 4)); // Output: 10
```

### 14. **Spread Operator (ES6)**

The spread operator can be used to pass elements of an array as individual arguments to a function.

```javascript
const numbers = [1, 2, 3, 4];
console.log(Math.max(...numbers)); // Output: 4
```

### 15. **Arrow Functions vs. Regular Functions (Lexical `this`)**

Arrow functions differ from regular functions in how they treat the `this` keyword. In regular functions, `this` refers to the object that called the function, while in arrow functions, `this` is lexically bound to the surrounding context.

```javascript
function regularFunction() {
    console.log(this); // The context depends on how the function is called
}

const arrowFunction = () => {
    console.log(this); // `this` is the surrounding context where the function is defined
};
```

### 16. **Function Constructor**

JavaScript functions can also be created using the `Function` constructor, but this method is rarely used due to potential security and performance issues.

```javascript
const add = new Function('a', 'b', 'return a + b');
console.log(add(2, 3)); // Output: 5
```

### 17. **Pure Functions**

A **pure function** always produces the same output for the same input and has no side effects.

```javascript
function add(a, b) {
    return a + b; // Always the same output for given inputs
}
```

### 18. **Function Properties (Methods)**

Functions are objects in JavaScript, so they can have properties and methods, like `.length` (number of parameters) and `.name` (function name).

```javascript
function example(a, b) {}
console.log(example.length); // Output: 2
```

---

These are the foundational details of functions in JavaScript, giving you flexibility to write modular, reusable, and maintainable code. Let me know if you'd like more details or examples!



# Javascript Object
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

# AJAX
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

### 4. **AJAX with jQuery**

Before `fetch()`, jQuery was commonly used to simplify AJAX calls with its `$.ajax()` method or shorthand methods like `$.get()` and `$.post()`.

#### Example using jQuery's `$.get()`:

```javascript
$.get('https://jsonplaceholder.typicode.com/posts', function(data) {
    console.log(data); // Handle the response data
});
```

#### Example using jQuery's `$.ajax()`:

```javascript
$.ajax({
    url: 'https://jsonplaceholder.typicode.com/posts',
    method: 'GET',
    success: function(data) {
        console.log(data); // Handle the response data
    },
    error: function(err) {
        console.error('Error:', err); // Handle any errors
    }
});
```

### 5. **AJAX with `async/await` (with `fetch()`)**

Using `async` and `await`, we can write asynchronous AJAX requests in a cleaner and more synchronous-looking way.

#### Example with `async/await`:

```javascript
async function getData() {
    try {
        const response = await fetch('https://jsonplaceholder.typicode.com/posts');
        const data = await response.json(); // Parse JSON
        console.log(data); // Handle the data
    } catch (error) {
        console.error('Error:', error); // Handle any errors
    }
}

getData();
```

#### Explanation:
- `async` makes the function return a **Promise**.
- `await` pauses the function execution until the **Promise** is resolved (i.e., when the data has been fetched).

### 6. **AJAX Request Methods**

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

### 7. **AJAX Responses**

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

### 8. **Handling Errors in AJAX**

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


### 9. **AJAX Advantages**

- **No Page Reload**: It allows you to update parts of a page without reloading the whole page.
- **Asynchronous**: Improves user experience by allowing other interactions while data is being fetched.
- **Faster Interaction**: Only the necessary data is requested and displayed, making the web app faster and more efficient.

### 11. **AJAX Disadvantages**

- **Requires JavaScript**: If the user disables JavaScript, AJAX won’t work.
- **Security Concerns**: Because AJAX involves sending and receiving data from a server, it can expose certain vulnerabilities if not handled securely.
- **Complexity**: Asynchronous code can be more challenging to write and manage.

---
