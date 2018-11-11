# JAVASCRIPT

## Basic format
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
- JS script is placed within the header, so code is executed when page is loaded.

```javascript
<html>
<head>
    <script type="text/javascript">
    function messaype some Markdown into the email.
Try this: _Hello_ `Markdown` **Here**!
    {
    alert("This alype some Markdown into the email.
Try this: _Hello_ `Markdown` **Here**!called with the onload event")ype some Markdown into the email.
Try this: _Hello_ `Markdown` **Here**!
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
<p>
</p>

</body>
</html>
```


