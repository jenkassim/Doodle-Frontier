# CSS Cheat Sheet
<!-- CSS Cheat Sheet -->

Table of Contents
=================

   * [CSS Cheat Sheet](#css-cheat-sheet)
   * [CSS Workflow](#css-workflow)
         * [Block-level](#block-level)
         * [Inline-level](#inline-level)
   * [CSS Preprocessors](#css-preprocessors)
   * [CSS Frameworks](#css-frameworks)
   * [CSS Styles](#css-styles)
      * [Inline Style](#inline-style)
      * [Internal CSS](#internal-css)
      * [External CSS](#external-css)
      * [CSS Classes](#css-classes)
      * [CSS Id Attributes](#css-id-attributes)
      * [CSS Fonts](#css-fonts)
      * [CSS Border](#css-border)
      * [CSS Padding](#css-padding)
      * [CSS Margin](#css-margin)
      * [CSS Display](#css-display)
      * [CSS Position](#css-position)
            * [Static](#static)
            * [Relative](#relative)
            * [Absolute](#absolute)
               * [Relative   Absolute](#relative--absolute)
               * [Columns absolute](#columns-absolute)
               * [Float](#float)
               * [Clear](#clear)
            * [Fixed](#fixed)
            * [Inherit](#inherit)


# CSS
- CSS can be added to HTML elements in 3 ways:
    - Inline - by using the style attribute in HTML elements
    - Internal - by using a style element in the head section
    - External - by using an external CSS file

# CSS Workflow
- In CSS, everything is a box, either block-level box or inline-level box.

>
- Block Level  : same column, different rows
- Inline Level : same row, different column
>

- Child elements will behave as inline formatting context and will not stack up on top of each other. Will be stacked inline (ie same row, different column)

### Block-level
- `<p>` / `<section>` / `<div>` / `<h1>` / `<tr>`
- Rendered vertically according to their source order (except tables)
- Normal flow : Expand to fill available width of its containing element.

### Inline-level
- `<span>` / `<em>` / `<b>`
- Do not form new blocks of content. These boxes make up the lines inside a block box.
- Displayed horizontally and fill the width of containing box, wrapping across lines.


# CSS Preprocessors
- CSS Preprocessors compiles processed language into plain CSS code.
- Adds syntax such as variables, mixins, functions to reduce code duplication.
- Examples:
    - <a href="http://sass-lang.com/">Sass</a>
    - <a href="http://lesscss.org/">Less</a>
    - <a href="http://stylus-lang.com/">Stylus</a>

# CSS Frameworks
- Lots of available frameworks
    - <a href="http://getbootstrap.com/">Bootstrap</a>
    - <a href="https://html5boilerplate.com/">HTML5 Boilerplate</a>
    - <a href="http://getskeleton.com/">Skeleton</a>

# CSS Styles
## Inline Style
- An inline CSS is used to apply a unique style to a single HTML element.
- An inline CSS uses the style attribute of an HTML element.
```
<h1 style="color:blue;">This is a Blue Heading</h1>
```

## Internal CSS
- An internal CSS is used to define a style for a single HTML page.

- An internal CSS is defined in the <head> section of an HTML page, within a `<style>` element:
```
<!DOCTYPE html>
<html>
    <head>
        <style>
        body {background-color: powderblue;}
        h1   {color: blue;}
        p    {color: red;}
        </style>
    </head>

    <body>
        <h1>This is a heading</h1>
        <p>This is a paragraph.</p>
    </body>
</html>
```

## External CSS
- An external style sheet is used to define the template style for multiple HTML pages.

- To use an external style sheet, add a link to it in the `<head>` section of the HTML page:
```
<!DOCTYPE html>
<html>
    <head>
        <link rel="stylesheet" href="styles.css">

        <link href="https://fonts.googleapis.com/css?family=Lobster" rel="stylesheet" type="text/css">

    </head>

    <body>
        <h1>This is a heading</h1>
        <p>This is a paragraph.</p>
    </body>
</html>
```

## CSS Classes
- Classes are reusable styles that can be added to HTML elements.
- Classes are defined by `.` in the style
- In HTML the class are called using identifier `class`
- Apply multiple classes to an element by separating each class with a space within its class attribute :
    `class= "class1 class2"`
- Order of class declaration determines precedence. Last declaration will take precedence, overwrites previous.  It doesn't matter which order the classes are listed in the HTML element (only class declaration)

```
<head>
<style>
  .blue-text {
    color: blue;
  }
</style>

<h2 class="blue-text">My Blue Header</h2>

</head>
```


## CSS Id Attributes
- To define a specific style for one special element then define a style for the element using  `#`
- Id attributes should be unique. Browsers won't enforce this, but it is a widely agreed upon best practice.
- Id always takes precedence over classes
- In-line styles > Id > Classes (In-line are those within the statement itself)
- `!important` overrides Everything
- Good to use when you need to assign a 'variable'/identification to some styles

```
<head>
<style>

    #p01{
        color:blue;
    }
</style>

    <p id="p01">I am an ID Attribute</p>

</head>
```
## CSS Grid
- Provides a mechanism for authors to divide available space for lay out into columns and rows using a set of predictable sizing behaviors.
- https://css-tricks.com/snippets/css/complete-guide-grid/


## CSS Fonts
- Properties:
    - color
    - font-family
    - font-size
```
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

## CSS Border
- The CSS border property defines a border around an HTML element:
```
p {
    border: 1px solid powderblue;
}

```

## CSS Padding
- An element's padding controls the amount of space between the element and its border.
- Able to control the padding of an element on all four sides with padding-top, padding-right, padding-bottom, and padding-left properties.
- Clockwise Notation : <br>
    `padding: top right bottom left` <br>
    `padding: 10px 20px 10px 20px;`
```
p {
    border: 1px solid powderblue;
    padding: 30px;
}

h2 {
    padding-top: 40px;
    padding-right: 20px;
    padding-bottom: 20px;
    padding-left: 40px;
}

```
- Clockwise Notation : <br>
    `padding: top right bottom left` <br>
    `padding: 10px 20px 10px 20px;`

## CSS Margin
- An element's margin controls the amount of space between an element's border and surrounding elements.
- If you set an element's margin to a negative value, the element will grow larger.
- Able to control the margin of an element on all four sides with margin-top, margin-right, margin-bottom, and margin-left properties.
- Clockwise Notation : <br>
    `margin: top right bottom left` <br>
    `margin: 10px 20px 10px 20px;`
```
  p {
    border: 1px solid powderblue;
    margin: 50px;
  }

  .green-box {
    background-color: green;
    margin-top: 40px;
    margin-right: 20px;
    margin-bottom: 20px;
    margin-left: 40px;
  }
```

## CSS Display
- Display property determines box behavior
```
div {
	display: inline;
	display: inline-block;
	display: block;
	display: run-in;
	display: none;
}
```
```
div {
  display: table;
  display: inline-table; /* like a table inside an inline-block */
  display: table-cell;
  display: table-column;
  display: table-colgroup;
  display: table-header-group;
  display: table-row-group;
  display: table-footer-group;
  display: table-row;
  display: table-caption;
}
```

## CSS Position
> Boxes in the normal flow belong to a formatting context, which may be block or inline, but not both simultaneously. Block boxes participate in a block formatting context. Inline boxes participate in an inline formatting context
> Normal flow as a law similar to the law of gravity. The normal flow of the document is how your elements stack one on top of each other, from the top down, in the order in which they appear in your markup.

[http://www.barelyfitz.com/screencast/html-training/css/positioning]
- Allows up to 5 values
```
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
- For simple, single-column layouts where each elements sits on top of the next one.
```
#div-1 {
 position:static;
}
```

#### Relative
- Move position relative to top/bottom/right/left to where it would initially normally be at.
- For multiple elements within elements, the child element will position itself relative to the position of its parent element.
- Code below moves the div down by 20pixels, left 40pixels
- After re-positioning the element, the original position would still be occupied with the element (although not visible- will have a blank space). Other elements in the page will not move into the original (blank space) position and just remain in its position
```
#div-1 {
 position:relative;
 top:20px;
 left:-40px;
}
```

#### Absolute
- Absolute element is removed from the normal flow (won’t affect or be affected by any other element in the flow - doesn't need to follow any columns or rows stacking)
- Element is removed from initial position and <u>moved</u> to specified absolute position. Other elements on the page will re-positioned into the removed initial position that is now empty.
```
#div-1a {
 position:absolute;
 top:0;
 right:0;
 width:200px;
}
```

##### Relative + Absolute
- Used when multiple elements exists within elements and needs to be position in respect to a <u>relative</u> element.
- div-1 element positioned as relative to div-1. Absoulte position of div-1a will be absolute with respect to div-1. Div-1a will only re-position to <u>within</u> div-1 boundaries.
```
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

##### Columns absolute
- Multiple column layout using relative and absolute positioning.
- Absolute position doesn't take in account the order that elements were defined in HTML. Althought div-1a was defined before div-1b, but div-1b has left:0 causing it to appear before (on the left) of div-1a
```
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

##### Float
- Pushes an element as far as possible to right / left and allow text to wrap around.
```
#div-1a {
 float:left;
 width:200px;
}
```

##### Clear
- Clears the position and causes all other elements to re-position
- This example clears both floats and pushes the rest of the content down the page
```
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

#### Fixed
- Fixed element that does not scroll with the page.
- Shares all rules of an `absolute` position and can stretch the width of element to fit entire page.
- Older browsers (IE) renders `fixed` elements as `static`.
```
#box_2 {
	position: fixed;
	bottom: 0;
	left: 0;
	right: 0;
}
```

#### Inherit
- Inherits value of its parents' values (default is the `static` value)


https://github.com/vasanthk/css-refresher-notes#floats
## CSS Floats
https://designshack.net/articles/css/everything-you-never-knew-about-css-floats/
http://alistapart.com/article/css-floats-101

## CSS Selectors
