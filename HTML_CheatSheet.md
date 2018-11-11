# HTML Cheat Sheet
<!-- HTML Cheat Sheet -->

## Table of Contents
#### HTML
- [HTML Basics](#html-basics)
- [The Whole Picture](#the-whole-picture)
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

### HTML Barebones Structure
```
<!DOCTYPE html>
<html>


    <head>
     <h2 class="blue-text">CatPhotoApp</h2>
     <title>My First HTML</title>
        <meta charset="UTF-8">
    </head>

    <body>

    <h1>My First Heading</h1>
    <h2 style="color:blue">In-line header style</h2>
    <p style="font-family:courier;">My first Style paragraph.</p>

    <a href="https://www.w3schools.com">This is a link</a>

    <!-- HTML Attributes -->
    <img src="w3schools.jpg" alt="W3Schools.com" width="104" height="142">

    <hr>
    Here is a horizontal line
    <hr>

    </body>
</html>
```

### <u>The Whole Picture</u>
    project/
        ├── css/
        |   └── style.css
        ├── js/
        |   └── scripts.js
        └── index.html

- Structure websites with HTML, style them with CSS, and add interactive functionality with JavaScript.

    ```
    <html>

        <!-- Header with any custom css stylesheet -->
        <head>
            <title>jQuery Demo</title>
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

#### HTML Attributes
- All HTML elements can have attributes
- Attributes provide additional information about an element
- Attributes usually come in name/value pairs like: name="value"


#### The `<div>` Element
- The `<div>` element is often used as a container for other HTML elements.
- The `<div>` element has no required attributes, but both style and class are common.
- When used together with CSS, the `<div>` element can be used to style blocks of content:
```
<div style="background-color:black;color:white;padding:20px;">
  <h2>London</h2>
  <p>London bridge is fallin down.</p>
</div>
```
```
<div class="silver-background">
    <p>We are silvers</p>
</div>
```

#### The `<span>` Element
- The `<span>` element is often used as a container for some text.
- The `<span>` element has no required attributes, but both style and class are common.
- When used together with CSS, the `<span>` element can be used to style parts of the text:
```
<h1>My <span style="color:red">Important</span> Heading</h1>
```

#### HTML Formatting

- <u>highlight:</u>
    <p>HTML <mark>Marked</mark> Formatting</p>

    `<p>HTML <mark>Marked</mark> Formatting</p>`

    <p style="color:blue;">This is a Blue Heading</p>

    `<p>HTML <p style="color:blue;">This is a Blue Heading</p>`


- <u>strikethru</u>:
    <p>My favorite color is <del>blue</del> red.</p>

    `<p>My favorite color is <del>blue</del> red.</p>`


- <u>underline:</u>
    <p>My favorite <ins>color</ins> is red.</p>

    `<p>My favorite <ins>color</ins> is red.</p>
    `

- <u>subscript:</u>
    <p>This is <sub>subscripted</sub> text.</p>

    `<p>This is <sub>subscripted</sub> text.</p>
    `

- <u>superscript:</u>
    <p>This is <sup>superscripted</sup> text.</p>

    `<p>This is <sup>superscripted</sup> text.</p>`

- <u>Image format:</u>

    `<img src="img_source.jpg" alt="Alternative text">`
    - Make image a clickable link:

    `<a href="#"><img class="smaller-image thick-green-border" src="source.jpg" alt="A cute orange cat lying on its back. "></a>`

- <u>Table format:</u>

    `<tr>`This is a row tag`</tr>`<br>
    `<td>`This is a column / cell tag`</td>`

    ```
    <table style="width:100%">
    <tr>
        <th>Firstname</th>
    </tr>
    <tr>
        <td>Jill</td>
    </tr>
    </table>
    ```

- <u>Anchor element:</u>
    <p>Here's a <a href="http://freecodecamp.org"> link to Free Code Camp</a> for you to follow.</p>

    `<p>Here's a <a href="http://freecodecamp.org"> link to Free Code Camp</a> for you to follow.</p>`

    - Make Dead Links using the Hash Symbol
(Sometimes you want to add a elements to your website before you know where they will link.)

    ` <p>Click here for <a href=#>cat photos</a>.</p> `


- <u>Iframe :</u> Display webpage within webpage

    `<iframe src="demo_iframe.htm" height="200" width="300" style="border:2px solid grey;"></iframe>`

- <u>Bullet Unordered List:</u>
    ```
    <ul>
        <li>milk</li>
        <li>cheese</li>
    </ul>
    ```

- <u>Number Ordered List:</u>
    ```
    <ol>
        <li>Garfield</li>
        <li>Sylvester</li>
    </ol>
    ```


### <b><u>Input</b></u>
#### Text input field:<br>
- To make a text input field required, add the word required within your input element: <br>
    `<input type="text" required>`

    <input type="text" placeholder="this is placeholder text"><br>
    `<input type="text" placeholder="this is placeholder text">`

#### Radio Button:<br>
- Radio button with only one input selection:
    <label>
        <input type="radio" name="indoor-outdoor"> Indoor
        <input type="radio" name="indoor-outdoor"> Outdoor
    </label>
    ```
    <label>
        <input type="radio" name="indoor-outdoor"> Indoor
        <input type="radio" name="indoor-outdoor"> Outdoor
    </label>

    ```
#### Checked Box:<br>
- Checked Box with multiple input selection:
    <label>
        <input type="checkbox" name="state"> Full
    </label>
    <label>
        <input type="checkbox" name="state" checked=true> Hungry
    </label>
    ```
    <label>
        <input type="checkbox" name="state"> Full
    </label>
    <label>
        <input type="checkbox" name="state"> Hungry
    </label>
    ```
- Use the `checked` attribute to set radio / checkbox default

#### Form Element
- Sends the data from your form to the URL you specified with your form's action attribute.


    <form action="/submit-cat-photo">
        <input type="text" placeholder="placeholder text">
        <button type="submit">Submit</button>
    </form><br>

    ```
    <form action="/submit-cat-photo">
        <input type="text" placeholder="placeholder text">
        <button type="submit">Submit</button>
    </form>
    ```

## <b><u>Javascript</u></b>
### Basics
- The `<script>` tag is used to define a client-side script and either contains scripting statements, or it points to an external script file through the src attribute.

    ```
    <html>
        <body>
        <script type="text/javascript">
        document.write("Hello World!")
        </script>
        </body>
    </html>
    ```


- To select an HTML element, JavaScript very often use the `document.getElementById(id) method.`

- Change HTML elements via `getElementById`
    ```
    document.getElementById("demo").innerHTML = "Hello JavaScript!";
    document.getElementById("demo").style.fontSize = "25px";
    document.getElementById("demo").style.color = "red";
    document.getElementById("demo").style.backgroundColor = "yellow";
    document.getElementById("image").src = "picture.gif";
    ```
### Head section
- Javascript is placed IN the header, so there's a pop up before the page gets loaded (Scripts that contain functions go in the head section of the document. Then we can be sure that the script is loaded before the function is called.)
```
<html>
    <head>
        <script type="text/javascript">
        function message()
        {
            alert("This alert box was called with the onload event")
        }
        </script>
    </head>

    <body onload="message()">
    </body>
</html>
```

### Body section
- Javascript is placed after the header, so it is considered a normal text on a page. (Execute a script that is placed in the body section)
```
<html>
<head>
</head>

<body>
    <script type="text/javascript">
        document.write("This message is written when the page loads")
    </script>
</body>
</html>
```

### Load external script
- Definition on how to load javascript from external script:
```
<html>
<head>
</head>

<body>
    <script src="xxx.js">
    </script>

    <p>The actual script is in an external script file called "xxx.js".</p>

</body>
</html>
```

#### More References
- https://github.com/dypsilon/frontend-dev-bookmarks/blob/master/workflow/javascript-tools.md



