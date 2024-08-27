**css** 
-   CSS stands for Cascading Style Sheets
-   CSS describes how HTML elements are to be displayed on screen, paper, or in other media
-   CSS saves a lot of work. It can control the layout of multiple web pages all at once
-   External stylesheets are stored in CSS files

## CSS Selector
<table className="ws-table-all notranslate">
      <thead>
        <tr>
          <th style={{ width: '20%' }}>Selector</th>
          <th style={{ width: '20%' }}>Example</th>
          <th>Example description</th>
        </tr>
      </thead>
      <tbody>
        <tr>
          <td><a href="/cssref/sel_id.asp">#<i>id</i></a></td>
          <td className="notranslate">#firstname</td>
          <td>Selects the element with id="firstname"</td>
        </tr>
        <tr>
          <td><a href="/cssref/sel_class.asp">.<i>class</i></a></td>
          <td className="notranslate">.intro</td>
          <td>Selects all elements with class="intro"</td>
        </tr>
        <tr>
          <td><em><a href="../cssref/sel_element_class.asp">element.class</a></em></td>
          <td className="notranslate">p.intro</td>
          <td>Selects only &lt;p&gt; elements with class="intro"</td>
        </tr>
        <tr>
          <td><a href="/cssref/sel_all.asp">*</a></td>
          <td className="notranslate">*</td>
          <td>Selects all elements</td>
        </tr>
        <tr>
          <td><i><a href="/cssref/sel_element.asp">element</a></i></td>
          <td className="notranslate">p</td>
          <td>Selects all &lt;p&gt; elements</td>
        </tr>
        <tr>
          <td><i><a href="/cssref/sel_element_comma.asp">element,element,..</a></i></td>
          <td className="notranslate">div, p</td>
          <td>Selects all &lt;div&gt; elements and all &lt;p&gt; elements</td>
        </tr>
      </tbody>
    </table>

    ### background
    In these section, you will learn about the following CSS background properties:

-   `background-color`
-   `background-image`
-   `background-repeat`
-   `background-attachment`
-   `background-position`
-   `background`  (shorthand property)

# background repeat

# background attachment

# shorten
shorten the code, it is also possible to specify all the background properties in one single property. This is called a shorthand property.

Instead of writing:
```css
body  {  
background-color:  #ffffff;  
background-image:  url("img_tree.png");  
background-repeat:  no-repeat;  
background-position:  right top;  
}
```
You can use the shorthand property  `background`:

### Example

Use the shorthand property to set the background properties in one declaration:
```css
body  {  
	background:  #ffffff url("img_tree.png") no-repeat right top;  
}
```

## Generic Font Families

In CSS there are five generic font families:

1.  **Serif**  fonts have a small stroke at the edges of each letter. They create a sense of formality and elegance.
2.  **Sans-serif**  fonts have clean lines (no small strokes attached). They create a modern and minimalistic look.
3.  **Monospace**  fonts - here all the letters have the same fixed width. They create a mechanical look.
4.  **Cursive**  fonts imitate human handwriting.
5.  **Fantasy**  fonts are decorative/playful fonts.


## Responsive Font
```css
font-size: 10vw;
 //10% of the window size
 ```

 ## CSS layout- The display Property

The `display` property is the most important CSS property for controlling layout.The  `display`  property is used to specify how an element is shown on a web page.

Every HTML element has a default display value, depending on what type of element it is. The default display value for most elements is  `block`  or  `inline`.



## width and max-width


As mentioned in the previous chapter; a block-level element always takes up the full width available (stretches out to the left and right as far as it can).

Setting the  `width`  of a block-level element will prevent it from stretching out to the edges of its container. Then, you can set the margins to auto, to horizontally center the element within its container. The element will take up the specified width, and the remaining space will be split equally between the two margins:

This `<div>` element has a width of 500px, and margin set to auto.

  

**Note:**  The problem with the  `<div>`  above occurs when the browser window is smaller than the width of the element. The browser then adds a horizontal scrollbar to the page.

Using  `max-width`  instead, in this situation, will improve the browser's handling of small windows. This is important when making a site usable on small devices:

This `<div>` element has a max-width of 500px, and margin set to auto.

  

**Tip:**  Resize the browser window to less than 500px wide, to see the difference between the two divs!

Here is an example of the two divs above:
```css
div.ex1  {  
	width:  500px;  
	margin:  auto;  
	border:  3px solid #73AD21;  
}  
  
div.ex2  {  
	max-width:  500px;  
	margin:  auto;  
	border:  3px solid #73AD21;  
}
```

## Z index
The  `z-index`  property specifies the stack order of an element (which element should be placed in front of, or behind, the others).

An element can have a positive or negative stack order:
Because the image has a z-index of -1, it will be placed behind the text.

Note: z-index only works on positioned elements (position: absolute, position: relative, position: fixed, or position: sticky) and flex items (elements that are direct children of display: flex elements).


```css
img {
  position: absolute;
  left: 0px;
  top: 0px;
  z-index: -1;
}
```

<p>An element with greater stack order is always above an element with a lower stack order.</p>
```html
<!DOCTYPE html>
<html>
<head>
<style>
.container {
  position: relative;
}

.black-box {
  position: relative;
  z-index: 1;
  border: 2px solid black;
  height: 100px;
  margin: 30px;
}

.gray-box {
  position: absolute;
  z-index: 3; /* gray box will be above both green and black box */
  background: lightgray;
  height: 60px;  
  width: 70%;
  left: 50px;
  top: 50px;
}

.green-box {
  position: absolute;
  z-index: 2; /* green box will be above black box */
  background: lightgreen;
  width: 35%;
  left: 270px;
  top: -15px;
  height: 100px;
}
</style>
</head>
<body>

<h1>Z-index Example</h1>

<p>An element with greater stack order is always above an element with a lower stack order.</p>

<div class="container">
  <div class="black-box">Black box (z-index: 1)</div>
  <div class="gray-box">Gray box (z-index: 3)</div>
  <div class="green-box">Green box (z-index: 2)</div>
</div>

</body>
</html>
```


## Without z-index

If two positioned elements overlap each other without a  `z-index`  specified, the element defined  **last in the HTML code**  will be shown on top.

## float left right
```css
<!DOCTYPE html>
<html>
<head>
<style>
body{
 text-align: justify;
}
img {
  float: right;
  
}
</style>
</head>
<body>

<h2>Float Right</h2>


<p><img src="pineapple.jpg" alt="Pineapple" style="width:170px;height:170px;margin-left:15px;">
Lorem ipsum dolor sit amet, consectetur adipiscing elit. Phasellus imperdiet, nulla et dictum interdum, nisi lorem egestas odio, vitae scelerisque enim ligula venenatis dolor. Maecenas nisl est, ultrices nec congue eget, auctor vitae massa. Fusce luctus vestibulum augue ut aliquet. Mauris ante ligula, facilisis sed ornare eu, lobortis in odio. Praesent convallis urna a lacus interdum ut hendrerit risus congue. Nunc sagittis dictum nisi, sed ullamcorper ipsum dignissim ac. In at libero sed nunc venenatis imperdiet sed ornare turpis. Donec vitae dui eget tellus gravida venenatis. Integer fringilla congue eros non fermentum. Sed dapibus pulvinar nibh tempor porta. Cras ac leo purus. Mauris quis diam velit.</p>

</body>
</html>
```
![image](https://github.com/user-attachments/assets/7e90e023-1106-43bd-95b1-2a36aacda759)

## The clear Property

When we use the  `float`  property, and we want the next element below (not on right or left), we will have to use the  `clear`  property.

The  `clear`  property specifies what should happen with the element that is next to a floating element.

## CSS Combinator

A CSS selector can contain more than one simple selector. Between the simple selectors, we can include a combinator.

There are four different combinators in CSS:

-   descendant selector (space)
-   child selector (>)
-   adjacent sibling selector (+)
-   general sibling selector (~)


A CSS selector can contain more than one simple selector. Between the simple selectors, we can include a combinator.

There are four different combinators in CSS:

-   descendant selector (space)
-   child selector (>)
-   adjacent sibling selector (+)
-   general sibling selector (~)
## Descendant Selector

The descendant selector matches all elements that are descendants of a specified element.
The following example selects all <p> elements inside <div> elements:
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

The following example selects the first <p> element that are placed immediately after <div> elements:

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

The following example selects all <p> elements that are next siblings of <div> elements:
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
```html
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

## CSS Dropdown

Create a dropdown box that appears when the user moves the mouse over an element.

```html
<!DOCTYPE html>
<html>
<head>
<style>
.dropdown {
  position: relative;
  display: inline-block;
}

.dropdown-content {
  display: none;
  position: absolute;
  background-color: #f9f9f9;
  min-width: 160px;
  box-shadow: 0px 8px 16px 0px rgba(0,0,0,0.2);
  z-index: 1;
}

.dropdown:hover .dropdown-content {
  display: block;
}

.desc {
  padding: 15px;
  text-align: center;
}
</style>
</head>
<body>

<h2>Dropdown Image</h2>
<p>Move the mouse over the image below to open the dropdown content.</p>

<div class="dropdown">
  <img src="img_5terre.jpg" alt="Cinque Terre" width="100" height="50">
  <div class="dropdown-content">
  <img src="img_5terre.jpg" alt="Cinque Terre" width="300" height="200">
  <div class="desc">Beautiful Cinque Terre</div>
  </div>
</div>

</body>
</html>
```
![image](https://github.com/user-attachments/assets/a3724a51-c524-4254-b88f-320ac6698008)

## CSS Dropdown

Create a dropdown box that appears when the user moves the mouse over an element.

```html
<!DOCTYPE html>
<html>
<head>
<style>
.dropdown {
  position: relative;
  display: inline-block;
}

.dropdown-content {
  display: none;
  position: absolute;
  background-color: #f9f9f9;
  min-width: 160px;
  box-shadow: 0px 8px 16px 0px rgba(0,0,0,0.2);
  z-index: 1;
}

.dropdown:hover .dropdown-content {
  display: block;
}

.desc {
  padding: 15px;
  text-align: center;
}
</style>
</head>
<body>

<h2>Dropdown Image</h2>
<p>Move the mouse over the image below to open the dropdown content.</p>

<div class="dropdown">
  <img src="img_5terre.jpg" alt="Cinque Terre" width="100" height="50">
  <div class="dropdown-content">
  <img src="img_5terre.jpg" alt="Cinque Terre" width="300" height="200">
  <div class="desc">Beautiful Cinque Terre</div>
  </div>
</div>

</body>
</html>
```
![image](https://github.com/user-attachments/assets/a3724a51-c524-4254-b88f-320ac6698008)
## Image Gallery

The following image gallery is created with CSS:
```html
<!DOCTYPE html>
<html>
<head>
<style>

div.gallery {
  border: 1px solid #ccc;
}

div.gallery:hover {
  border: 1px solid #777;
  transform:scale(1.1);
  box-shadow: 0px 0px 15px 5px rgba(0,0,0,0.5);
  
}

div.gallery img {
  width: 100%;
  height: auto;
}

div.desc {
  padding: 15px;
  text-align: center;
}

* {
  box-sizing: border-box;
}

.responsive {
  padding: 0 6px;
  float: left;
  width: 24.99999%;
}

@media only screen and (max-width: 700px) {
  .responsive {
    width: 49.99999%;
    margin: 6px 0;
  }
}

@media only screen and (max-width: 500px) {
  .responsive {
    width: 100%;
  }
}

.clearfix:after {
  content: "";
  display: table;
  clear: both;
}
</style>
</head>
<body>

<h2>Responsive Image Gallery</h2>

<h4>Resize the browser window to see the effect.</h4>

<div class="responsive">
  <div class="gallery">
    <a target="_blank" href="img_5terre.jpg">
      <img src="img_5terre.jpg" alt="Cinque Terre" width="600" height="400">
    </a>
    <div class="desc">Add a description of the image here</div>
  </div>
</div>


<div class="responsive">
  <div class="gallery">
    <a target="_blank" href="img_forest.jpg">
      <img src="img_forest.jpg" alt="Forest" width="600" height="400">
    </a>
    <div class="desc">Add a description of the image here</div>
  </div>
</div>

<div class="responsive">
  <div class="gallery">
    <a target="_blank" href="img_lights.jpg">
      <img src="img_lights.jpg" alt="Northern Lights" width="600" height="400">
    </a>
    <div class="desc">Add a description of the image here</div>
  </div>
</div>

<div class="responsive">
  <div class="gallery">
    <a target="_blank" href="img_mountains.jpg">
      <img src="img_mountains.jpg" alt="Mountains" width="600" height="400">
    </a>
    <div class="desc">Add a description of the image here</div>
  </div>
</div>

<div class="clearfix"></div>

<div style="padding:6px;">
  <p>This example use media queries to re-arrange the images on different screen sizes: for screens larger than 700px wide, it will show four images side by side, for screens smaller than 700px, it will show two images side by side. For screens smaller than 500px, the images will stack vertically (100%).</p>
  <p>You will learn more about media queries and responsive web design later in our CSS Tutorial.</p>
</div>

</body>
</html>
```
## on windows
![image](https://github.com/user-attachments/assets/a8d6933b-9c94-467f-b8e1-9db7e47961e7)

## on Tablet
![image](https://github.com/user-attachments/assets/d493abf9-9067-4939-a254-d77e0d7f2437)

## on Mobile
![image](https://github.com/user-attachments/assets/bc9b5bc8-6b9b-4a15-a8aa-55d61559ad1d)


## CSS [attribute] Selector

The  `[attribute]`  selector is used to select elements with a specified attribute.

The following example selects all `<a>` elements with a target attribute:
```css
a[target]  {  
	background-color:  yellow;  
}
```
for more visit: https://www.w3schools.com/css/css_attribute_selectors.asp



## What is Specificity?

If there are two or more CSS rules that point to the same element, the selector with the highest specificity value will "win", and its style declaration will be applied to that HTML element.

Think of specificity as a score/rank that determines which style declaration is ultimately applied to an element.
In this example, we have used the "p" element as selector, and specified a red color for this element. The text will be red:
```html
<html>  
<head>  
<style>  
	p  {color:  red;}  
</style>  
</head>  
	<body>  
		<p>Hello World!</p>  
	</body>  
</html>
```

In this example, we have added a class selector (named "test"), and specified a green color for this class. The text will now be green (even though we have specified a red color for the element selector "p"). This is because the class selector is given higher priority:
```html
<html>  
<head>  
<style>  
	.test  {color:  green;}  
	p  {color:  red;}  
</style>  
</head>  
<body>  
	<p class="test">Hello World!</p>  
</body>  
</html>
```
In this example, we have added an inline style for the "p" element. The text will now be pink, because the inline style is given the highest priority:
```html
<html>  
<head>  
<style>  
	#demo  {color:  blue;}  
	.test  {color:  green;}  
	p  {color:  red;}  
</style>  
</head>  
<body>  
	<p id="demo"  class="test"  style="color: pink;">Hello World!</p>  
</body>  
</html>
```
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
| `p`                 | 1                 | 1                      |
| `p.test`            | 11                | 1 + 10                 |
| `p#demo`            | 101               | 1 + 100                |
| `<p style="color: pink;">` | 1000        | 1000                   |
| `#demo`             | 100               | 100                    |
| `.test`             | 10                | 10                     |
| `p.test1.test2`     | 21                | 1 + 10 + 10            |
| `#navbar p#demo`    | 201               | 100 + 1 + 100          |
| `*`                 | 0                 | 0 (the universal selector is ignored) |

-  Example
```
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
```html
h1  {background-color:  yellow;}  
h1  {background-color:  red;}
```
## can you explain what will be the output color?
```
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
```html
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

# CSS Math Functions
The CSS math functions allow mathematical expressions to be used as property values. Here, we will explain the `calc()`, `max()` and `min()` functions.
### calc
```css
#div1 {  
	position:  absolute;  
	left:  50px;  
	width:  calc(100% - 100px);  
	border:  1px solid black;  
	background-color:  yellow;  
	padding:  5px;  
}
```
### max
Use `max()` to set the width of #div1 to whichever value is largest, `50% or 300px`
```css
#div1  {  
	background-color:  yellow;  
	height:  100px;  
	width:  max(50%, 300px);  
}
```
### min
The `min()` function uses the smallest value, from a comma-separated list of values, as the property value.
```css
#div1 {  
	background-color:  yellow;  
	height:  100px;  
	width:  min(50%, 300px);  
}
```
## Hero Image

You could also use different background properties on a `<div>` to create a hero image (a large image with text), and place it where you want.

```html
<!DOCTYPE html>
<html>
<head>
<meta name="viewport" content="width=device-width, initial-scale=1">
<style>
body {
  margin: 0;
  font-family: Arial, Helvetica, sans-serif;
}

.hero-image {
  background: url(img_man.jpg) no-repeat center; 
  background-size: cover;
  height: 500px;
  position: relative;
}

.hero-text {
  text-align: center;
  position: absolute;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
  color: white;
}
</style>
</head>
<body>

<div class="hero-image">
  <div class="hero-text">
    <h1 style="font-size:50px">I am John Doe</h1>
    <h3>And I'm a Photographer</h3>
    <button>Hire me</button>
  </div>
</div>

<p>Page content..</p>
<p>Note that this technique will also make the image responsive: Resize the browser window to see the effect.</p>

</body>
</html>
```
![image](https://github.com/user-attachments/assets/d5d01ad7-27c4-4936-b06f-491033d4a775)

# CSS  The object-fit Property
The CSS `object-fit` property is used to specify how an <img> or <video> should be resized to fit its container.
This property tells the content to fill the container in a variety of ways; such as "preserve that aspect ratio" or "stretch up and take up as much space as possible".

Look at the following image from Paris. This image is 400 pixels wide and 300 pixels high:

![Paris](https://www.w3schools.com/css/paris.jpg)

However, if we style the image above to be half its width (200 pixels) and same height (300 pixels), it will look like this:

<img src="https://www.w3schools.com/css/paris.jpg" alt="Paris" width="200px" height="300px">
<br>
Here, we used `object-fit: fill;` as it is default. the image is resized to fill the given dimension. If necessary, the image will be stretched or squished to fit:
```css
img {  
width:  200px;  
height:  300px;  
object-fit:  fill;  
}
```
## Using object-fit: cover;

If we use  `object-fit: cover;`  the image keeps its aspect ratio and fills the given dimension. The image will be clipped to fit:

```css
<!DOCTYPE html>
<html>
<head>
<style>
img {
  width: 200px;
  height: 300px;
  object-fit: cover;
}
</style>
</head>
<body>

<h2>Using object-fit: cover</h2>

<img src="paris.jpg" alt="Paris" width="400" height="300">

</body>
</html>
```

![image](https://github.com/user-attachments/assets/d0353b26-cc2f-4dfd-80be-759e6fc049ec)


