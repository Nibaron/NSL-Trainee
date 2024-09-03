## CSS Selectors & Properties
CSS is really good at many things, but it’s _really_, really good at two specific things: **selecting elements** and **styling them**.

## CSS SELECTORS

A selector is simply the element to be styled. But as you write more CSS code, you'll discover that selectors aren't just elements. They could be attributes, pseudo-classes, ids, classes, and descendants.  

According to W3resource, "_CSS selectors select the elements on an HTML page which match patterns described in a selector and style rules adhere to the selector are applied on those selected elements_".
![CSS Syntaxt, Properties, Selectors, Values](https://cdn.codecoda.com/themes/user/site/default/asset/img/blog/css-syntax-definition.jpg)


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


###  **Class Selector**

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

###  **ID Selector**

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

###  **Attribute Selectors**

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
**OUTPUT:**

![image](https://github.com/user-attachments/assets/23a03370-83ca-4c3e-ab95-b74c68791d03)

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

## Anchor Pseudo-classes

Links can be displayed in different ways:
```css
/* unvisited link */  
a:link {  
color:  #FF0000;  
}  
  
/* visited link */  
a:visited {  
color:  #00FF00;  
}  
  
/* mouse over link */  
a:hover {  
color:  #FF00FF;  
}  
  
/* selected link */  
a:active {  
color:  #0000FF;  
}
```
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