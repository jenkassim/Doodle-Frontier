# CSS Cheat Sheet
<!-- CSS Cheat Sheet -->

# CSS
- CSS can be added to HTML elements in 3 ways:
    - Inline - by using the style attribute in HTML elements
    - Internal - by using a style element in the head section
    - External - by using an external CSS file

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

### CSS Fonts
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

### CSS Border
- The CSS border property defines a border around an HTML element:
```
p {
    border: 1px solid powderblue;
}

```

### CSS Padding
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
### CSS Margin
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

## <b><u>Bootstrap</b></u>
- To use bootstrap, add the following : </br>
` <link rel="stylesheet" href="https://maxcdn.bootstrapcdn.com/bootstrap/4.0.0-beta.2/css/bootstrap.min.css" integrity="sha384-PsH8R72JQ3SOdhVi3uxftmaW6Vc51MKb0q5P2rRUpPvrszuE4W1povHYgTpBfshb" crossorigin="anonymous"> `

- Types of div:
    - `Class` Container : will have padding up to max width
    - `Class` Container-fluid : will fill up space to max width

- Bootstrap uses a responsive grid system, which makes it easy to put elements into rows and specify each element's relative width. Most of Bootstrap's classes can be applied to a div element.
    `<div class="container-fluid">`

- Uses rows & columns to control layout.
- Max columns is 12 in a single row. If no of columns > 12, the 13th item will appear below.

- For debugging, use a container well to see dimension
` <div class="well"></div>`

```
  <div class="row">
    <div class="col-xs-8">
      <h2 class="text-center">CatPhotoApp</h2>
    </div>
    <div class="col-xs-4">
      <img class="img-responsive thick-green-border" src="https://bit.ly/fcc-relaxing-cat" alt="A cute orange cat lying on its back. ">
    </div>
  </div>
```

### Bootstrap Font Awesome</br>
- Include Bootstrap lib : </br>
` <link rel="stylesheet" href="//maxcdn.bootstrapcdn.com/font-awesome/4.5.0/css/font-awesome.min.css"/>`

#### Icon
- Add the Font Awesome classes to the i element to turn it into an icon, for example:</br>
` <i class="fa fa-info-circle"></i> `

```
<div class="col-xs-4">
    <button class="btn btn-block btn-primary">
    <i class="fa fa-thumbs-up">Like</i>
    </button>
</div>
```
