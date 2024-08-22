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
