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
