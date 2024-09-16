#  JavaScript

## Table of Contents

1. [Typeof](#typeof)
2. [What is Specificity?](#what-is-specificity)



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
# JavaScript  Type Conversion
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