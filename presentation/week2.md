## CSS and Bootstrap 4
## Table of Contents

1. [CSS Selectors](#css-selectors) 
2. [What is Specificity?](#what-is-specificity)
3. [CSS Combinator](#css-combinator)
4. [Pseudo-classes](#what-are-pseudo-classes?)
5. [Pseudo-elements](#what-are-pseudo-elements?)
6. [Bootstrap 4](#bootstrap-4)



## CSS Selectors
CSS is really good at many things, but it’s _really_, really good at two specific things: **selecting elements** and **styling them**.


A selector is simply the element to be styled. But as you write more CSS code, you'll discover that selectors aren't just elements. They could be attributes, pseudo-classes, ids, classes, and descendants.  

According to W3resource, "_CSS selectors select the elements on an HTML page which match patterns described in a selector and style rules adhere to the selector are applied on those selected elements_".
![CSS Syntax, Properties, Selectors, Values](https://cdn.codecoda.com/themes/user/site/default/asset/img/blog/css-syntax-definition.jpg)


### Universal Selector

A universal selector is denoted by the symbol *. It affects every single element on the document tree.

```css
*{ 
  color: purple; 
}
```

### Element Selector

This is the most common selector, and it involves targeting members of a particular element when that element is defined.

```css
p{ 
  font-style: italic; 
}
```

This code targets all paragraphs in a document and changes them to italics.


### Class Selector

Classes are a versatile way to apply styles to multiple elements. By using the `.` selector in CSS, you can target all elements that share the same class.

```html
<p>This is a paragraph</p> 
<p class="red">This is a red text</p>
```

```css
.red { 
  color: red; 
}
```

-   The class `.red` is applied to the second paragraph, making its text red.
-   Any element in the document can have the `.red` class, and they will all receive the same styling.

### ID Selector

IDs are unique identifiers assigned to elements. They should be used only once per page. IDs are targeted in CSS using the `#` selector.

```html
<h4 id="uppercase">This is an uppercase text</h4>
```

```css
#uppercase { 
  text-transform: uppercase; 
}
``` 

-   The ID `#uppercase` is applied to the heading, which makes the text transform to uppercase.
-   Since IDs are unique, the `#uppercase` style will only apply to the element with that specific ID.

### Attribute Selectors

Attribute selectors allow you to style elements based on the presence or value of an attribute.

```html
<a href="https://example.com" target="_blank"> A Link</a>`
```

```css
a[target="_blank"] {
  color: blue;
  text-decoration: underline;
}
``` 

-   The attribute selector `a[target="_blank"]` targets any anchor tag (`<a>`) with a `target` attribute set to `_blank`.
-   This allows you to style links that open in a new tab differently from other links, adding a blue color and underline to them.

### Guess The Background
```html
<!DOCTYPE html>
<html>
<head>
<style>
h2 {
  background-color: yellow;
}

#para{
	background-color: red;
}

.text {
  background-color: blue;
}
</style>
</head>
<body>

<h2 class="text" id="para">Guess My Color ?</h2>


</body>
</html>

```

## What is Specificity?

If there are two or more CSS rules that point to the same element, the selector with the highest specificity value will "win", and its style declaration will be applied to that HTML element.

Think of specificity as a score/rank that determines which style declaration is ultimately applied to an element.

## Specificity Hierarchy

Every CSS selector has its place in the specificity hierarchy.

There are four categories which define the specificity level of a selector:

1.  **Inline styles**  ` <h1 style="color: pink;">`
2.  **IDs**  ` #navbar`
3.  **Classes, pseudo-classes, attribute selectors**  ` .test, :hover, [href]`
4.  **Elements and pseudo-elements**  ` h1, ::before`

## How to Calculate Specificity?

Memorize how to calculate specificity!

Start at 0, add 100 for each ID value, add 10 for each class value (or pseudo-class or attribute selector), add 1 for each element selector or pseudo-element.

| Selector            | Specificity Value | Calculation            |
|---------------------|-------------------|------------------------|
| `*`                 | 0                 | 0                      |
| `p`                 | 1                 | 1                      |
| `.test`             | 10                | 10                     |
| `#demo`             | 100               | 100                    |
| `<p style="color: pink;">` | 1000        | 1000                  |
| `p.test`            | 11                | 1 + 10                 |
| `p#demo`            | 101               | 1 + 100                |
| `p.test1.test2`     | 21                | 1 + 10 + 10            |
| `#navbar p#demo`    | 201               | 100 + 1 + 100          |


-  Example
```css
A: h1  
B: h1#content  
C:  <h1 id="content"  style="color: pink;">Heading</h1>
```
The specificity of A is 1 (one element selector)  
The specificity of B is 101 (one ID reference + one element selector)  
The specificity of C is 1000 (inline styling)

Since the third rule (C) has the highest specificity value (1000), this style declaration will be applied.

## **Equal specificity: the latest rule wins** 
If the same rule is written twice into the external style sheet, then the latest rule wins:

### Example
```css
	h1  {background-color:  yellow;}  
	h1  {background-color:  red;}
```
## can you explain what will be the output color?
```html
<!DOCTYPE html>
<html>
<head>
<style>
	div#a {background-color: green;}
	#a {background-color: yellow;}
	div[id=a] {background-color: blue;}
</style>
</head>
<body>
	<div id="a">This is a div</div>
</body>
</html>
```
it is green. explain now.
## What is !important?

The  `!important`  rule in CSS is used to add more importance to a property/value than normal.

In fact, if you use the  `!important`  rule, it will override ALL previous styling rules for that specific property on that element!
```css
#myid {  
	background-color:  blue;  
}  
  
.myclass {  
	background-color:  gray;  
}  
  
p {  
	background-color:  red  !important;  
}
```

## CSS Combinator

A CSS selector can contain more than one simple selector. Between the simple selectors, we can include a combinator.

There are four different combinators in CSS:

-   descendant selector (space)
-   child selector (>)
-   adjacent sibling selector (+)
-   general sibling selector (~)

## Descendant Selector

The descendant selector matches all elements that are descendants of a specified element.
The following example selects all `<p>` elements inside `<div>` elements:
```html
<!DOCTYPE html>
<html>
<head>
<style>
div p {
  background-color: yellow;
}
</style>
</head>
<body>

<h2>Descendant Selector</h2>

<p>The descendant selector matches all elements that are descendants 
	of a specified element.</p>

<div>
  <p>Paragraph 1 in the div.</p>
  <p>Paragraph 2 in the div.</p>
  <section><p>Paragraph 3 in the div.</p></section>
</div>

<p>Paragraph 4. Not in a div.</p>
<p>Paragraph 5. Not in a div.</p>

</body>
</html>
```
![image](https://github.com/user-attachments/assets/7bf3fb7e-61a5-4d25-baa0-963d81f3b1b7)


## Child Selector (>)

The child selector selects all elements that are the children of a specified element.

The following example selects all <p> elements that are children of a `<div>` element:

```html
<!DOCTYPE html>
<html>
<head>
<style>
div > p {
  background-color: yellow;
}
</style>
</head>
<body>

<h2>Child Selector</h2>

<p>The child selector (>) selects all elements that are the children 
	of a specified element.</p>

<div>
  <p>Paragraph 1 in the div.</p>
  <p>Paragraph 2 in the div.</p>
  <section>
    <!-- not Child but Descendant -->
    <p>Paragraph 3 in the div (inside a section element).</p>
    <h5>h5 in the div (inside a section element).</h5>
    
  </section>
  <p>Paragraph 4 in the div.</p>
</div>

<p>Paragraph 5. Not in a div.</p>
<p>Paragraph 6. Not in a div.</p>

</body>
</html>

```
![image](https://github.com/user-attachments/assets/cde96427-e95f-42f2-9e3f-ec8046bc1512)

## Adjacent Sibling Selector (+)

The adjacent sibling selector is used to select an element that is directly after another specific element.

Sibling elements must have the same parent element, and "adjacent" means "immediately following".

The following example selects the first `<p>` element that are placed immediately after `<div>` elements:

```html
<!DOCTYPE html>
<html>
<head>
<style>
div + p {
  background-color: yellow;
}
</style>
</head>
<body>

<h2>Adjacent Sibling Selector</h2>

<p>The + selector is used to select an element that is directly after another specific element.</p>
<p>The following example selects the first p element that are placed immediately after div elements:</p>

<div>
  <p>Paragraph 1 in the div.</p>
  <p>Paragraph 2 in the div.</p>
</div>

<p>Paragraph 3. After a div.</p>
<p>Paragraph 4. After a div.</p>

<div>
  <p>Paragraph 5 in the div.</p>
  <p>Paragraph 6 in the div.</p>
</div>

<p>Paragraph 7. After a div.</p>
<p>Paragraph 8. After a div.</p>

</body>
</html>
```
![image](https://github.com/user-attachments/assets/c9ce1821-295f-4dca-8a49-87af849838d5)

## General Sibling Selector (~)

The general sibling selector selects all elements that are next siblings of a specified element.

The following example selects all `<p>` elements that are next siblings of `<div>` elements:

```html
<!DOCTYPE html>
<html>
<head>
<style>
div ~ p {
  background-color: yellow;
}
</style>
</head>
<body>

<h2>General Sibling Selector</h2>

<p>The general sibling selector (~) selects all elements that are next siblings of a specified element.</p>

<p>Paragraph 1.</p>

<div>
  <p>Paragraph 2.</p>
</div>

<p>Paragraph 3.</p>
<code>Some code.</code>
<p>Paragraph 4.</p>
<p>Paragraph 5.</p>

</body>
</html>
```
![image](https://github.com/user-attachments/assets/591c4a0f-d413-4c8b-8464-90e21e5bb37a)

## What are Pseudo-classes?

A pseudo-class is used to define a special state of an element.

For example, it can be used to:
-   Style an element when a user mouses over it
-   Style visited and unvisited links differently
-   Style an element when it gets focus


```css
button:hover {
  background-color: yellow; 
  color: red; 
}

input:focus {
  outline: 2px solid blue; 
  background-color: lightgray; 
}
```
![image](https://github.com/user-attachments/assets/373d8b76-ef17-45e3-bea9-4758a83c2c3b)

## What are Pseudo-Elements?

A CSS pseudo-element is used to style specified parts of an element.

For example, it can be used to:

-   Style the first letter, or line, of an element
-   Insert content before, or after, the content of an element

## The ::first-line Pseudo-element

The  `::first-line`  pseudo-element is used to add a special style to the first line of a text.
The following example formats the first line of the text in all <p> elements:

### Example
```html
<!DOCTYPE html>
<html>
<head>
<style>
p::first-line {
  color: #ff0000;
  font-variant: small-caps;
}
</style>
</head>
<body>

<p>You can use the ::first-line pseudo-element to add a special effect to the first line of a text. Some more text. And even more, and more, and more, and more, and more, and more, and more, and more, and more, and more, and more, and more.</p>

</body>
</html>
```
![image](https://github.com/user-attachments/assets/9ac9f2c9-f91b-43e4-911c-20891ac39dfa)

## CSS - The ::before Pseudo-element

The  `::before`  pseudo-element can be used to insert some content before the content of an element.

The following example inserts an image before the content of each `<h1>` element:

```html
<!DOCTYPE html>
<html>
<head>
<style>
h1::before {
  content: url(smiley.gif);
}
</style>
</head>
<body>

<h1>This is a heading</h1>
<p>The ::before pseudo-element inserts content before the content of an element.</p>

<h1>This is a heading</h1>

</body>
</html>
```
![image](https://github.com/user-attachments/assets/1ffec2fe-1ff5-43aa-8aec-0b1bef1e8f5a)

###  All CSS Pseudo Elements

<table class="ws-table-all notranslate">
  <tbody><tr>
    <th style="width:20%">Selector</th>
    <th style="width:20%">Example</th>
    <th>Example description</th>
  </tr>
<tr>
    <td><a href="/cssref/sel_after.asp">::after</a></td>
    <td class="notranslate">p::after</td>
    <td>Insert something after the content of each &lt;p&gt; element</td>
    </tr>
<tr>
    <td><a href="/cssref/sel_before.asp">::before</a></td>
    <td class="notranslate">p::before</td>
    <td>Insert something before the content of each &lt;p&gt; element</td>
    </tr>
<tr>
    <td><a href="/cssref/sel_firstletter.asp">::first-letter</a></td>
    <td class="notranslate">p::first-letter</td>
    <td>Selects the first letter of each &lt;p&gt; element</td>
  </tr>
<tr>
    <td><a href="/cssref/sel_firstline.asp">::first-line</a></td>
    <td class="notranslate">p::first-line</td>
    <td>Selects the first line of each &lt;p&gt; element</td>
  </tr>
<tr>
    <td><a href="/cssref/sel_marker.asp">::marker</a></td>
    <td class="notranslate">::marker</td>
    <td>Selects the markers of list items</td>
  </tr>
<tr>
    <td><a href="/cssref/sel_selection.asp">::selection</a></td>
    <td class="notranslate">p::selection</td>
    <td>Selects the portion of an element that is selected by a user</td>
  </tr>
</tbody></table>



## Bootstrap 4 

Bootstrap 4 introduced several enhancements and new components to improve design flexibility, responsiveness, and overall user experience. Below are the key improvements-
 - **Flexbox**
 -  **Card Component**
 -  **Badges**
 -  **Spinners**
 -  **Utilities**
 -  **Typography** 
 - **Navbar** 
 - **Icons**

## 1. Flexbox Support
Bootstrap 4 uses Flexbox as its default layout module, replacing the float-based layout from previous versions. 
This allows for:
  -   **Flex container**: The parent element that holds the flex items. By setting `display: flex;`, the children of this element become flex items.
-   **Direction**: Flexbox allows you to easily change the direction of your layout using `flex-direction` (e.g., `row`, `column`).
-   **Alignment**: You can align items along the main axis and cross axis using `justify-content`, `align-items`, and `align-self`.
-   **Order**: The `order` property allows you to easily change the order of items without altering the HTML structure.
-   **Flexible sizing**: Items can grow and shrink in relation to their siblings with properties like `flex-grow`, `flex-shrink`, and `flex-basis`.

### CCS flexbox:
```css
.container {
  display: flex;
  justify-content: space-between; /* Evenly distributes items along the main axis */
  align-items: center; /* Centers items along the cross axis */
}

.item {
  flex-grow: 1; /* Items grow to fill available space */
}
```
### Bootstrap 4 flexbox:
  Bootstrap 4 uses Flexbox as its default layout model, providing pre-built classes and components to create responsive designs easily.
  ```css
  <div class="d-flex justify-content-between align-items-center">
  <div class="flex-grow-1">Item 1</div>
  <div>Item 2</div>
  <div>Item 3</div>
</div>
```
## 2. Card Component

The Card component in Bootstrap 4 is a flexible content container that can include headers, footers, images, and more. It replaces panels, wells, and thumbnails from Bootstrap 3.

### Features:

-   **Customizable Content:** Cards can include images, titles, text, and links.
-   **Responsive Layouts:** Cards can be grouped into decks and columns for responsive layouts.
-   **Contextual Backgrounds:** Cards can be styled with different backgrounds and border colors.

### Example:

```html
<div class="container">

  <div class="card" style="width:400px">
    <img class="card-img-top" src="img_avatar1.png" alt="Card image" style="width:100%">
    <div class="card-body">
      <h4 class="card-title">John Doe</h4>
      <p class="card-text">John Doe is an architect and engineer</p>
      <a href="#" class="btn btn-primary">See Profile</a>
    </div>
  </div>
  <br>
  
</div>
```
![image](https://github.com/user-attachments/assets/7b30fe21-a432-4a68-85c6-2e310ac12288)

## 3. Badges

Badges in Bootstrap 4 are used to add small counters or labels next to text or icons.

### Features:

-   **Color Variants:** Badges can be styled with different background colors.
-   **Pill Badges:** Use the `.badge-pill` class for rounded badges.

### Example:

```html
<button type="button"  class="btn btn-primary">  
Messages <span class="badge badge-light">4</span>  
</button>
```
![image](https://github.com/user-attachments/assets/f7507a85-1b7c-497e-8c3e-928e8f6c71a6)


## 4. Spinners

Bootstrap 4 introduced spinners as a lightweight and flexible component for indicating loading states.

### Features:

-   **Built with HTML and CSS:** No JavaScript required.
-   **Customizable Size and Color:** Change the size and color with utility classes.

### Example:

```html
<div class="spinner-border text-primary" role="status">
  <span class="sr-only">Loading...</span>
</div>
```


## 5. Utilities

Bootstrap 4 added numerous utility classes for faster styling and layout adjustments without writing custom CSS.

### Key Utilities:

-   **Spacing:** `.m-3`, `.p-2`, etc., for margin and padding.
-   **Display:** `.d-none`, `.d-block`, `.d-flex`, etc., for controlling element display.
-   **Text:** `.text-center`, `.text-uppercase`, etc., for text alignment and transformation.

### Example:
```html
<div class="text-center p-5 bg-light">
  Centered text with padding and background
</div>
``` 

## 6. Typography

Bootstrap 4 made significant improvements to typography with:

-   **Responsive Font Sizes:** Typography scales more efficiently across devices.
-   **New Headings Classes:** Additional utility classes like `.display-1`, `.display-2`, etc., for larger headings.

### Example:

```html
<h1 class="display-4">Display 4 heading</h1>
<p class="lead">This is a lead paragraph.</p>
``` 
## 7. Navbar

The Navbar in Bootstrap 4 is more flexible and easier to customize.

### Features:

-   **Responsive Behavior:** Automatically collapses into a hamburger menu on smaller screens.
-   **Alignment Options:** Use `.justify-content-center` or `.ml-auto` for aligning navbar content.
-   **Custom Backgrounds:** Change navbar background color using utility classes.

### Example:
```html
<nav class="navbar navbar-expand-lg navbar-light bg-light">
  <a class="navbar-brand" href="#">Navbar</a>
  <button class="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarNav">
    <span class="navbar-toggler-icon"></span>
  </button>
  <div class="collapse navbar-collapse" id="navbarNav">
    <ul class="navbar-nav">
      <li class="nav-item active">
        <a class="nav-link" href="#">Home</a>
      </li>
      <li class="nav-item">
        <a class="nav-link" href="#">Features</a>
      </li>
    </ul>
  </div>
</nav>
``` 
[Try Bootstrap 4 Navbar Collapse Example on W3Schools](https://www.w3schools.com/bootstrap4/tryit.asp?filename=trybs_navbar_collapse)


## 8. Icons

Bootstrap 4 doesn't include its own icon library. However, it's easy to integrate with popular libraries like Font Awesome.

### Example:
```html
<i class="fas fa-cloud"></i>
<i class="fas fa-coffee"></i>
<i class="fas fa-car"></i>
<i class="fas fa-file"></i>
<i class="fas fa-bars"></i>
```
![image](https://github.com/user-attachments/assets/e006c812-cb64-4e54-b73b-d0e6b7a25e9f)

## Conclusion

Bootstrap 4 introduced significant enhancements, making it more powerful and user-friendly compared to its predecessors. The introduction of Flexbox, the card component, and various utilities provides developers with a flexible framework to create responsive and modern web designs efficiently.