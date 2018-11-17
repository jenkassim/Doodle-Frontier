# JAVASCRIPT

# Basic format
- The `<script>` tag is used to define a client-side script and either contains scripting statements, or it points to an external script file through the src attribute.

```javascript
<html>
    <body>
        <script type="text/javascript">
        document.write("Hello World!")
        </script>
    </body>
</html>
```

## Head section
- JS script is placed within the header, so code is executed  page is loaded.

```javascript
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
## Body section
- JS script is placed after the header (within body), so it is considered as a normal text on a page.

```javascript
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

## External script
- JS code is placed in external script
- The actual script is in an external script file called "xxx.js".
```javascript
<html>
    <head>
    </head>
    <body>

        <script src="xxx.js">
        </script>
    </body>
</html>
```

# HTML Elements
- To select a HTML element, Javascript very often uses `document.getElementById(id)` method.

- Change HTML element via `getElementById`
```javascript
    document.getElementById("demo").innerHTML = "Hello JavaScript!";
    document.getElementById("demo").style.fontSize = "25px";
    document.getElementById("demo").style.color = "red";
    document.getElementById("demo").style.backgroundColor = "yellow";
    document.getElementById("image").src = "picture.gif";
```

#### More References
- https://github.com/dypsilon/frontend-dev-bookmarks/blob/master/workflow/javascript-tools.md
