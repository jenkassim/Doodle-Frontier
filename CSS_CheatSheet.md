# CSS Cheat Sheet
<!-- CSS Cheat Sheet -->

# Table of Contents
=================
* [CSS](#css)
    * [CSS Format](#css-format)
        * [Inline Style](#inline-style)
        * [Internal CSS](#internal-css)
        * [External CSS](#external-css)
* [CSS Workflow](#css-workflow)
        * [Block-level](#block-level)
        * [Inline-level](#inline-level)
    * [CSS Display](#css-display)
* [CSS Selectors](#css-selectors)
    * [CSS Classes Selector](#css-classes-selector)
    * [CSS Id Selector](#css-id-selector)
    * [CSS All Elements Selector](#css-all-elements-selector)
    * [CSS Adjacent Sibling Selector](#css-adjacent-sibling-selector)
    * [CSS Descendants Selector](#css-descendants-selector)
        * [Precedence](#precedence)
* [CSS Styles](#css-styles)
    * [CSS Fonts](#css-fonts)
    * [CSS Icon](#css-icon)
    * [CSS Links](#css-links)
    * [CSS Table Border](#css-table-border)
    * [CSS Box Model](#css-box-model)
    * [CSS Grid](#css-grid)
* [CSS Position](#css-position)
    * [Static](#static)
    * [Relative](#relative)
    * [Fixed](#fixed)
    * [Absolute](#absolute)
    * [Relative   Absolute](#relative--absolute)
    * [Columns absolute](#columns-absolute)
    * [Float](#float)
    * [Clear](#clear)
* [CSS Layout](#css-layout)
    * [Flexbox Layout](#flexbox-layout)
        * [Flex Container(Parent)](#flex-container)
        * [Flex Item(Child)](#flex-item)
* [CSS Preprocessors](#css-preprocessors)
* [CSS Frameworks](#css-frameworks)
* [References](#references)

# CSS
- CSS can be added to HTML elements in 3 ways:
    - Inline - by using the style attribute in HTML elements
    - Internal - by using a style element in the head section
    - External - by using an external CSS file

```html
    <!DOCTYPE html>
    <html>
        <!-- Header with any custom css stylesheet -->
        <head>
            <meta charset="utf-8">
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

- Format of CSS stylesheet {css/style.css}
```css
    /*
    * Comment Style
    */
    style tag{
        property: value;
    }
```

## CSS Format
### Inline Style
- Used to apply a unique style to a `single HTML element` and uses HTML element style attributes
```html
    <h1 style="color:blue;">This is a Blue Heading</h1>
```

### Internal CSS
- Used to define a style for a `single HTML page` and defined in the `<head>` section of HTML page within a `<style>` element
```html
<!DOCTYPE html>
<html>
    <head>
        <style>
            body {
                background-color: powderblue;
            }

            h1 {
                color: blue;
            }

            p {
                color: red;
            }
        </style>
    </head>

    <body></body>
</html>
```

### External CSS
- Used to define the `template` style for multiple HTML pages.
- To use an external style sheet, add a link to it in the `<head>` section of the HTML page:
```html
<!DOCTYPE html>
<html>
    <head>
        /* Link to local styles.css stylesheet */
        <link rel="stylesheet" href="styles.css">

        /* Link to online resources stylesheet */
        <link href="https://fonts.googleapis.com/css?family=Lobster" rel="stylesheet" type="text/css">
    </head>

    <body></body>
</html>
```

# CSS Workflow
- In CSS, everything is a box, either block-level box or inline-level box.
    - `Block Level`  : same column, different rows
    - `Inline Level` : same row, different column

- Child elements will behave as inline formatting context and will not stack up on top of each other. Will be stacked inline (ie same row, different column)

### Block-level
- `<p>` / `<section>` / `<div>` / `<h1> - <h6>` / `<table> <th> <tr> <td> ` / `<footer>`
- Block elements will stack up vertically according to their source order (except tables).
- Individual block elements with take up full width available and stretches right/left.

### Inline-level
- `<span>` / `<em>` / `<b>` / `<img>` / `<a>`
- Do not form new blocks of content. These boxes make up the lines inside a block box.
- Displayed horizontally and fill the width of containing box, wrapping across lines.

## CSS Display
- Each element has a default display style (Block / Inline level) but can be overriden  with `display` property.
- Display property determines box layout behavior.

```css
    div {
        display: inline;
        display: inline-block;
        display: block;
        display: run-in;
        display: none;
    }
```
[^](#table-of-contents)


# CSS Selectors
- Used to target HTML elements to style

## CSS Classes Selector
- Classes are reusable styles which target `groups of elements`.
- `Class` are defined by `.` in the style
- Apply multiple classes to an element by separating each class with a space within its class attribute :
    `class = "class1 class2"`
- Order of class declaration determines precedence. Last declaration will take precedence, overwrites previous.  It doesn't matter which order the classes are listed in the HTML element (only class declaration)

```html
    <head>
        <style>
            .blue-text {
                color: blue;
            }
        </style>

        <h2 class="blue-text">My Blue Header</h2>
    </head>
```

## CSS Id Selector
- Used to define a specific style for `one single element`.
- `Id` are defined by using `#` and should be unique. (Browser won't enforce this but is widely agreed upon best practice).
- `!important` overrides Everything

```html
    <html>
        <style>
            #p01{
                color:blue;
            }
        </style>
        <p id="p01">I am an ID Attribute</p>
    </html>
```

## CSS All Elements Selector
- Used to select all elements.
- Used by `*`
```css
    *{
        color:green;
    }
```

## CSS Adjacent Sibling Selector
- This selects elements that are adjacent to each other. In the example below, the style will be applied to any un-ordered list elements which are placed adjacent to h3 elements.
```css
    h3 + ul {
        border: 3px dotted purple;
    }
```

## CSS Descendants Selector
- Selects elements which are a descendant of another element. This is used for elements within elements. In the example below, it selects anchor tags that are inside a list.
```css
    li a{
        color:black
    }
```

### Precedence
- Order of styles that takes precedence:
```
     In-line
        |
        v
       Id
        |
        v
     Classes
```
- In-line are those within the statement itself

[^](#table-of-contents)

# CSS Styles
## CSS Fonts
- Properties:
    - color
    - font-family
    - font-size

- Also able to link fonts from CDN in header and use directly within html / css stylesheets
```html
    <head>
        <link href="https://fonts.googleapis.com/css?family=Bungee+Shade" rel="stylesheet">
    </head>
```

```html
<!DOCTYPE html>
<html>
    <head>
    <style>
    h1 {
        color: blue;
        font-family: verdana;
        font-size: 300%;
    }
    p  {
        color: red;
        font-family: Helvetica, Sans-Serif;
        font-size: 160%;
    }
    </style>
    </head>
    <body>

    <h1>This is a heading</h1>
    <p>This is a paragraph.</p>

    </body>
</html>
```
## CSS Icon
- Add icons to page using icon library.
- Icons added to any `inline HTML` element
```html
    <head>
        <link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/4.7.0/css/font-awesome.min.css">
    </head>

    <body>
        <i class="fa fa-heart">Text with Icon</i>
    </body>
```

## CSS Links
- Links can be styled with any CSS properties with addition to state of links.
- States of links :
    - a:link - Normal `unvisited` link
    - a:visited - Clicked on `visited` link
    - a:hover - `Moused over` link
    - a:active - Moment link is `clicked on`
```css
    a:hover{
        color: hotpink;
    }
```

## CSS Table Border
- Format table borders and uses `HTML` table tags as selectors.
- Valid selectors `table`, `th`, `td`. `tr` not valid.
```css
    table, th, td{
        border: 1px solid red;
    }

    table{
        width: 100%;
    }

    /* table header */
    th{
        height: 50px;
    }
```

## CSS Box Model
- Box model defines the four elements below and properties defined are `width`, `border`, `padding` and `margin`.
- From outter box to inner box :
    > Margin -> Border -> Padding -> Content

- Border : Outline of content, border properties
- Padding : Spacing between `Content` and `Border` (between element and its border)
- Margin : Spacing between Element's `Border` and surrounding elements
- Outline : Line that is drawn around elements, outside of borders.

```css
    #top{
        width: 200px;

        /* size, type, color */
        border: 4px solid blue;

        /*Top,Right, Bottom, Left*/
        margin: 10px 20px 100px 400px;

        /*Top,Right, Bottom, Left*/
        padding: 200px 100px 200px 100px;
    }
    #bottom{
        border: 4px solid red;
        /*even margins*/
        margin: 200px;
        /*margin: auto;*/
    }
    .green-box {
        background-color: green;
        margin-top: 40px;
        margin-right: 20px;
        margin-bottom: 20px;
        margin-left: 40px;
        outline-style: double;
    }
```

## CSS Grid
- Divide available space for layout into columns and rows using a set of predictable sizing behaviors.
- Grid layout consists of a parent element with one or more child elements.
```html
    <div class="grid-container">
        <div class="grid-item">1</div>
        <div class="grid-item">2</div>
        <div class="grid-item">3</div>
        <div class="grid-item">4</div>
        <div class="grid-item">5</div>
        <div class="grid-item">6</div>
        <div class="grid-item">7</div>
        <div class="grid-item">8</div>
        <div class="grid-item">9</div>
    </div>
```
```css
    .grid-container {
        display: inline-grid;
        grid-template-columns: auto auto auto;
        background-color: #2196F3;
        padding: 10px;

        /* Sets gap between rows */
        /* grid-row-gap: 20px; */

        /* Sets gap between columns */
        /* grid-column-gap: 20px; */
    }

    .grid-item {
        background-color: rgba(255, 255, 255, 0.8);
        border: 1px solid rgba(0, 0, 0, 0.8);
        padding: 20px;
        font-size: 30px;
        text-align: center;

        /* Places grid line item at COLUMNS */
        grid-column-start: 1;
        grid-column-end: 3;

        /* Places grid line item at ROWS */
        grid-row-start: 1;
        grid-row-end: 3;
    }
```
[^](#table-of-contents)

# CSS Position
- Specifies the position method for elements
```css
    div {
        position: static; /* default */
        position: relative;
        position: absolute;
        position: fixed;
        position: sticky;
        position: inherit; /* Not very common */
    }
```
#### Static
- By default in default position. Only specified to forcefully remove positioning that is applied to an element outside your control.

#### Relative
- Move position relative to top/bottom/right/left to where it would initially normally be at.
- For multiple elements within elements, the child element will position itself relative to the position of its parent element.
- Code below moves the div down by 20pixels, left 40pixels
- Other content will not be adjusted to fit into any gap left by the element(initial default position).
```css
    div {
        position:relative;
        top:20px;
        left:-40px;
    }
```
#### Fixed
- Fixed element that does not scroll with the page.
- Shares all rules of an `absolute` position and can stretch the width of element to fit entire page.
- Older browsers (IE) renders `fixed` elements as `static`.
```css
    div {
        position: fixed;
        bottom: 0;
        left: 0;
        right: 0;
    }
```

#### Absolute
- Absolute element is removed from the normal flow (won’t affect or be affected by any other element in the flow - doesn't need to follow any columns or rows stacking)
- Element is removed from initial position and moved to specified absolute position. Other elements on the page will re-positioned into the removed initial position that is now empty.
```css
    div {
        position:absolute;
        top:0;
        right:0;
        width:200px;
    }
```

#### Relative + Absolute
- Used when multiple elements exists within elements and needs to be position in respect to a <u>relative</u> element.
- div-1 element positioned as relative to div-1. Absoulte position of div-1a will be absolute with respect to div-1. Div-1a will only re-position to <u>within</u> div-1 boundaries.
```css
    #div-1 {
        position:relative;
        }
    #div-1a {
        position:absolute;
        top:0;
        right:0;
        width:200px;
        }
```

#### Columns absolute
- Multiple column layout using relative and abs	left: 0;olute positioning.
- Absolute position doesn't take in account the	right: 0; order that elements were defined in HTML. Althought div-1a was defined before div-1}b, but div-1b has left:0 causing it to appear before (on the left) of div-1a
```css
    #div-1 {
        position:relative;
        }
    #div-1a {
        position:absolute;
        top:0;
        right:0;
        width:200px;
        }
    #div-1b {
        position:absolute;
        top:0;
        left:0;
        width:200px;
        }
```

#### Float
- Pushes an element as far as possible to right / left and allow text to wrap around.
```css
    #div-1a {
        float:left;
        width:200px;
        }
```

#### Clear
- Clears the position and causes all other elements to re-position
- This example clears both floats and pushes the rest of the content down the page
```css
    #div-1a {
        float:left;
        width:190px;
        }
    #div-1b {
        float:left;
        width:190px;
        }
    #div-1c {
        clear:both;
        }
```
[^](#table-of-contents)

# CSS Layout
## Flexbox Layout
- Consists of a `flex container` that has `Flex items`.

- A flex container with three flex items.
```html
    <div class="flex container">
        <div>1</div>
        <div>2</div>
        <div>3</div>
    </div>
```

### Flex Container
- Flex container properties :
    - `display: flex;` : enable flexibility
    - `flex-direction` : direction to stack flex items [column / row / column-reverse / row-reverse]
    - `flex-wrap` : whether to wrap items [ wrap / nowrap / wrap-reverse]
    - `flex-flow` : shorthand to combine `flex-direction` & `flex-wrap`
    - `justify-content` : align flex  items [center / flex-start / flex-end / space-around / space-between]
    - `align-items` : Vertical alignment in container [center / flex-start / flex-end / stretch]
    - `align-content` : Align adjacent flex lines of items

```css
    .flex-container {
        /* property to be flexible */
        display: flex;
        flex-direction: column;
        flex-wrap: wrap;
        flex-flow: column wrap;
        justify-content: center;
        align-items: center;
    }
```

### Flex Items
- Flex items properties:
    - `Order` : Order of flex items [individual order #]
    - `flex-grow` : Flex item `grows` larger than other items [Size #]
    - `flex-shrink` : Flex item `shrinks` smaller than other items [Size #]
    - `flex-basis` : Initial length of flex item
    - `flex` :  Shorthand for `flex-grow`, `flex-shrink` & `flex-basis`
    - `align-self` : Alignment for selected item [ center / flex-start / flex-end]

```html
    <div class="flex-container">
        <div style="order: 3">1</div>
        <div style="order: 2">2</div>
        <div style="order: 4">3</div>
        <div style="order: 1">4</div>

        <div style="flex-grow: 1">1</div>
        <div style="flex-shrink: 0">2</div>
        <div style="flex-basis: 200px">3</div>

        <!-- Flex shorthand: not-growable(0), not-shrinkable(0), len(200px) -->
        <div style="flex: 0 0 200px">2</div>
    </div>
```
[^](#table-of-contents)

# CSS Preprocessors
- CSS Preprocessors compiles processed language into plain CSS code.
- Adds syntax such as variables, mixins, functions to reduce code duplication.
- Examples:
    - <a href="http://sass-lang.com/">Sass</a>
    - <a href="http://lesscss.org/">Less</a>
    - <a href="http://stylus-lang.com/">Stylus</a>

[^](#table-of-contents)

# CSS Frameworks
- Lots of available frameworks
    - <a href="http://getbootstrap.com/">Bootstrap</a>
    - <a href="https://html5boilerplate.com/">HTML5 Boilerplate</a>
    - <a href="http://getskeleton.com/">Skeleton</a>
[^](#table-of-contents)

# References
- https://developer.mozilla.org/en-US/docs/Web/CSS
- https://www.w3schools.com/css/default.asp
- https://css-tricks.com/snippets/css/complete-guide-grid/
- https://coolors.co
