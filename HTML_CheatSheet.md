# HTML Cheat Sheet
<!-- HTML Cheat Sheet -->

## Table of Contents
# HTML
- [HTML Basics](#html-basics)
- [The Big Picture](#the-big-picture)
- [HTML Attributes](#html-attributes)
- [HTML Elements](#html-elements)
- [HTML Formatting](#html-formatting)
- [Input Controls](#input-controls)

#### Javascript
- [Javascript Basics](#javascript-basics)
- [Head section](#head-section)
- [Body section](#body-section)
- [Load External Script](#load-external-script)

## HTML Basics
### The Big Picture
- Structure websites with HTML, style them with CSS, and add interactive functionality with JavaScript.

```graph
    project/
        ├── css/
        |   └── style.css
        ├── js/
        |   └── scripts.js
        └── index.html
```
### HTML Barebones Structure
```html
<!DOCTYPE html>
    <html>

        <!-- Header with any custom css stylesheet -->
        <head>
            <title>Basic WebPage Structure</title>
            <link rel="stylesheet" href="css/style.css">
        </head>

        <!-- Body with any external script libraries -->
        <body>
        <script src="https://ajax.googleapis.com/ajax/libs/jquery/3.1.0/jquery.min.js"></script>
        <script src="js/scripts.js"></script>
        </body>

    </html>
```

#### HTML Elements
- An HTML element usually consists of a start tag and end tag, with the content inserted in between:

    ```<tagname>Content goes here...</tagname>```

- In-line styles can be used on any html elements

#### The `<div>` Element
- The `<div>` element is often used as a container for other `HTML elements.` Usually used with a group of elements.
- When used together with CSS, the `<div>` element can be used to style blocks of content:
```html
<div style="background-color:black;color:white;padding:20px;">
  <h2>London</h2>
  <p>London bridge is fallin down.</p>
</div>
```

#### The `<span>` Element
- The `<span>` element is often used as a container for some `text`. Usually used inline with text.
- When used together with CSS, the `<span>` element can be used to style parts of the text:
```html
<h1>My <span style="color:red">Important</span> Heading</h1>
```

## HTML Attributes
- All HTML elements can have attributes
- Attributes provide additional information about an element
- Attributes usually come in name/value pairs like: name="value"
- Complete list : https://developer.mozilla.org/en-US/docs/Web/HTML/Attributes

|Format type| Syntax | Example|
|-----------|--------|--------|
| Highlight | `<mark>Marked</mark> Formating` | <mark>Marked</mark> Formating|
| Text Color| `<p style="color:blue;">Blue </p> Heading` | <p style="color:blue;">Blue</p> Heading |
| Strikethru | `<del>Blue</del> Red` | <del>Blue</del> Red|
| Underlined | `<ins>color</ins>` | <ins>color</ins> |
| Subscript | `Text<sub>Subscripted</sub>` | Text<sub>Subscripted</sub> |
| Superscript | `Text<sup>Superscripted</sup>`| Text<sup>Superscripted</sup>|
| Image | `<img src="img_source.jpg" alt="Alternative text">` | <img src="img_source.jpg" alt="Alternative text"> |
| Image link| `<a href="#"><src="source.jpg" alt="An image with link"></a>`|<a href="#"><src="source.jpg" alt="An image with link"></a> |
| Unordered list | `<ul><li>one</li><li>two</li></ul>`| <ul><li>one</li><li>two</li></ul>|
| Numbered Ordered list| `<ol><li>Red</li><li>Blue</li></ol>`|<ol><li>Red</li><li>Blue</li></ol>|
| Table Header | `<table><theader><td>Hd1</td><td>Hd2</td></theader></table>` | <table><theader><td>Hd1</td><td>Hd2</td></theader></table> |
| Table Col | `<table><tr><td>R1C1</td><td>R1C2</td></tr></table>`| <table><tr><td>R1C1</td><td>R1C2</td></tr></table> |
| Table Row | `<table><tr><td>R1C1</td></tr><tr><td>R2C1</td></tr></table>` | <table><tr><td>R1C1</td></tr><tr><td>R2C1</td></tr></table> |
| Anchor element | `Here's a <a href="#"> link </a>` </br> Make dead link using the Hash Symbol. For when link is unknown | Here's a <a href="#"> link </a>|
| Iframe | Display webpage within webpage </br> `<iframe src="demo.htm" height="35" width="35"></iframe>`| <iframe src="demo.htm" height="35" width="35"></iframe>|

### HTML Input Types
- Mozilla reference <a href="
https://developer.mozilla.org/en-US/docs/Web/HTML/Element/input"> sheet</a>
- W3School reference <a href="https://www.w3schools.com/TAGs/att_input_type.asp">sheet </a>

#### Text input field
- To make a text input field required, add the word required within your input element:

    <input type="password" value="1234">
    <input type="text" placeholder="this is placeholder text">

    ```html
    <input type="password" value="1234">
    <input type="text" placeholder="this is placeholder text">
    ```

#### Radio Button:
- Radio button with only one input selection:
    <label>
        <input type="radio" name="indoor-outdoor"> Indoor
        <input type="radio" name="indoor-outdoor"> Outdoor
    </label>
    ```html
    <label>
        <input type="radio" name="indoor-outdoor"> Indoor
        <input type="radio" name="indoor-outdoor"> Outdoor
    </label>

    ```
#### Checked Box:
- Checked Box with multiple input selection:
    <label>
        <input type="checkbox" name="state"> Full
    </label>
    <label>
        <input type="checkbox" name="state" checked=true> Hungry
    </label>
    ```html
    <label>
        <input type="checkbox" name="state"> Full
    </label>
    <label>
        <input type="checkbox" name="state"> Hungry
    </label>
    ```
- Use the `checked` attribute to set radio / checkbox default

#### Color Selection:
- Able to select color, click on button to select color.

    <input type="color" name="" value="#FFFF00">

    ```html
    <input type="color" name="" value="#FFFF00">
    ```

#### Form Element
- Sends the data from your form to the URL you specified with your form's action attribute.

    <form action="index.html" method="post">
        <input type="text" placeholder="placeholder text">
        <input type="submit" name="options" value="Click Me"></br>
        <input type="email" name="passwd" value="Required">
        <button type="submit">Submit</button>
    </form><br>

    ```html
    <form action="index.html" method="post">
        <input type="text" placeholder="placeholder text">
        <input type="submit" name="options" value="Click Me">

        <input type="email" name="passwd" value="Required">
        <button type="submit">Submit</button>
    </form>
    ```
#### Forms and Validations
- Validate user input in forms.
    <form action="redirect-link.htm" method="get">
        <input type="email" name="useremail" value="">
        <input type="submit" name="" value="Submit">
    </form>

    ```html
    <form action="redirect-link.htm" method="get">
        <input type="email" name="useremail" value="">
        <input type="submit" name="" value="Submit">
    </form>
    ```

- When Submit button is clicked, the value entered will be reflected in the URL.
- If form has no `action` attributes, the value reflected in the URL in format : `index.html?useremail=<email-addr-input>`.
- If form has `action` attributes, when submit button is clicked, the webpage will take the action to redirect to another page. URL reflected in new page: `redirect-link.html/useremail=<email-addr-input>`.

#### Labels
- Label to assign names to specific input types

    <form>
        <input type="email" name="useremail" value="">
        <input type="submit" name="" value="Submit">

    </form>



