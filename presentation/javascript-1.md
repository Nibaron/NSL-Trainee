#  JavaScript

## Table of Contents

1. [Typeof](#typeof)
2. [JavaScript Type Conversion](#javascript-type-conversion)
3. [JavaScript Set](#javascript-set)
4. [JavaScript Map](#javascript-map)
5. [Introduction to JavaScript Dates](#introduction-to-javascript-dates)



# Typeof

JavaScript has several data types, which are broadly divided into two categories: 
- **Primitive Data Types**
-  **Reference (Object) Data Types**.

### 1. **Primitive Data Types**
These are the basic data types in JavaScript, and their values are stored directly.

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

In JavaScript, **Set** and **Map** are two powerful data structures introduced in ECMAScript 6 (ES6) that allow for more efficient handling of unique collections and key-value pairs.

# JavaScript `Set`
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

# JavaScript `Map`
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

### Differences between JavaScript Objects and Maps

| Feature                     | Object                              | Map                           |
|-----------------------------|-------------------------------------|-------------------------------|
| **Iterability**              | Not directly iterable               | Directly iterable              |
| **Size Property**            | Do not have a size property         | Have a size property           |
| **Key Datatype**             | Keys must be Strings (or Symbols)   | Keys can be any datatype       |
| **Key Order**                | Keys are not well ordered           | Keys are ordered by insertion  |
| **Default Keys**             | Have default keys                   | Do not have default keys       |



# Introduction to JavaScript Dates

    -   JavaScript provides the `Date` object for working with dates and times.
    -   A `Date` object represents a single moment in time in a platform-independent format.
    -   It allows for creating, manipulating, and formatting dates and times.


### Creating Date Objects

-   Creating Date Objects

    -   **`new Date()`**: Creates a new `Date` object with the current date and time.
    -   **`new Date(milliseconds)`**: Creates a `Date` object with the number of milliseconds since January 1, 1970.
    -   **`new Date(dateString)`**: Creates a `Date` object from a date string.
    -   **`new Date(year, month, day, hours, minutes, seconds, milliseconds)`**: Creates a `Date` object with specific date and time.
    
    ```js
    let currentDate = new Date();
    let specificDate = new Date('2024-09-15');
    let msDate = new Date(0); // January 1, 1970 
    ```
    



### Common Date Methods

    
    
  -   **Getting Components**:
        -   `.getFullYear()` – Returns the year.
        -   `.getMonth()` – Returns the month (0-11).
        -   `.getDate()` – Returns the day of the month (1-31).
        -   `.getHours()`, `.getMinutes()`, `.getSeconds()`, `.getMilliseconds()` – Time components.
        -   `.getDay()` – Returns the day of the week (0 for Sunday).
  -   **Setting Components**:
        -   `.setFullYear()`, `.setMonth()`, `.setDate()`, etc.
-   **Example**:
    
    ```js
    let date = new Date();
    console.log(date.getFullYear()); // 2024
    console.log(date.getMonth());    // 8 (September, because months are zero-indexed) 
    ```


###  Formatting Dates

-  Formatting Dates
    
    -   JavaScript does not have a built-in date formatting method, but you can use string concatenation or external libraries like **Moment.js** or **Intl.DateTimeFormat**.
    -   **`toISOString()`**: Returns the date as a string in ISO format.
    -   **`toDateString()`**: Returns the date in a human-readable format.
    -   **`toLocaleDateString()`**: Returns the date in the format according to the locale.
-   **Example**:
    
    ```js
    let date = new Date();
    console.log(date.toISOString());       // 2024-09-15T12:00:00.000Z
    console.log(date.toDateString());      // Sun Sep 15 2024
    console.log(date.toLocaleDateString()); // 9/15/2024
    ``` 
    

----------

### Time Zones and UTC


    
  -   **`getUTCFullYear()`**, **`getUTCMonth()`**, etc., return the date in UTC (Coordinated Universal Time).
  -   **`getTimezoneOffset()`**: Returns the difference in minutes between UTC and local time.
  -   **Setting Dates in UTC**:
      -   `.setUTCFullYear()`, `.setUTCMonth()`, etc.

-   **Example**:
    
    ```js
    let date = new Date();
    console.log(date.getUTCFullYear());  // 2024
    console.log(date.getTimezoneOffset()); // -240 (difference in minutes)
    ``` 


### Date Arithmetic

    
-   You can add or subtract time from a date by manipulating its components or using milliseconds.
-   Example: Add days, months, hours, etc., to a date.
-   **Example**:
    
    ```js
    let date = new Date();
    date.setDate(date.getDate() + 5); // Add 5 days
    console.log(date);
    ``` 
    


### Working with Timestamps

    
-   **`Date.now()`**: Returns the current timestamp (number of milliseconds since January 1, 1970).
-   You can convert a date object to a timestamp using `.getTime()`.
-   **Example**:

    ```js
    let timestamp = Date.now();
    console.log(timestamp); // Current timestamp in milliseconds
      
    let date = new Date();
    console.log(date.getTime()); // Timestamp of the current date
    ``` 



# JavaScript For Loop
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