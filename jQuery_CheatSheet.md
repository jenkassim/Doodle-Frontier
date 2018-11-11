# jQuery Cheat Sheet
<!-- jQuery Cheat Sheet -->

- jQuery effects work hand-in-hand with events by allowing you to add animations and otherwise manipulate elements on the page.
- `ready function` will run as soon as browser loads the page (otherwise the code may run before HTML is rendered)
- All jQuery code you write will be wrapped in the below code. jQuery will detect this state of readiness so that code included inside this function will only run once the DOM is ready for JavaScript code to execute.

- Ready function:
    ```javascript
        <script>
        $(document).ready(function(){

        });
        </script>
    ```
- Example:
    ```javascript
    <script>
    $(document).ready(function() {
        $("button").addClass("animated bounce");
        $(".well").addClass("animated shake");
        $("#target3").addClass("animated fadeOut");
        $("button").removeClass("btn-default");
    </script>
    ```
## jQuery functions
|Function| Description | Usage|
|--------|-------------|------|
|`.css()`| Changes CSS of an element| `$("#target1").css("color","red");`|
|`.prop()`| Adjusts properties  of element| `$("#target1").prop("disabled", true);`|
|`.html()`| Adds HTML tags & tags within element. </br>Any prev content within element will be replaced| `$("h3").html("<em>Text</em>);`|
|`.text()`| Alters text without adding tags. </br> Will `Not` evaluate any HTML tags passed and just replace existing content| `$("h3").text("Replaced text");`|
|`.remove()`| Remove HTML element entirely| `$("target").remove();`|
|`.appendTo()`| Selects HTML element and append to another element| `$("target").appendTo("#left");`|
|`.clone()`| Makes a copy of an element| `$("target").clone().appendTo("#right");`|




## <b>Selectors</b>
- Selectors are how we tell jQuery which elements we want to work on.
- To access a selector : `$("selector")`
- Three ways of targeting/selecting elements:
    - By type: `$("button")`
    - By class: `$(".btn")`
    - By id:  `$("#target1")`

##### Common selectors :
- Generally, classes and ids are what you will encounter the most; `Class` to select multiple elements, `Id` to select only one element

##### Selector types:
|Type| Syntax | Description|
|----|--------|------------|
|Wildcard| `$("*")`| Selects every element on the page|
|Current| `$(this)`| Selects the current element being operated on within a function|
|Tag| `$("p")`| Selects every instance of the `<p>` tag|
|Class| `$(".example")`| Selects every element with `example` class|
|Id| `$(#example)`| Selects a single instance of the unique `example` Id|
|Body| `$("body")`| Target the `<body>` element|
|Attribute| `$("[type='text']")`| Selects any element with text applied to the type attribute|
|Pseudo Element| - `$("p:first-of-type")` </br> - `$(".target:nth-child(3)")`| - Selects the first `<p>` </br> - Selects all the nth element of target|

### Element Inheritance
##### Parent
- Every HTML element has a `parent` element which it inherits properties from.
- jQuery function called `parent()` access the parent of whichever selected element.
    ```javascript
        $("#left-well").parent().css("background-color", "blue")
    ```

##### Child
- HTML element with `children` inherits properties from parents elements.
- jQuery function called `children()` access the child of whichever selected element.
    ```javascript
        $("#left-well").children().css("color", "blue")
    ```

### Add / Remove Class Functions
- jQuery library functions can be called using `addClass` with multiple way to select the element:

    ```javascript
    <script>
    $(document).ready(function() {
        $("button").addClass("btn-primary");
        $(".well").addClass("animated shake");
        $("#target3").addClass("animated fadeOut");
        $("button").removeClass("btn-default");
    </script>
    ```

### Change properties of Element
- jQuery has function `.prop()` that allows to adjust the properties of elements.
    ```javascript
        $("button").prop("disabled", true);
        $("#target1").prop("disabled",true);
    ```

### Change CSS of Element
- CSS of an HTML element can directly be changed with jQuery
- Used when there's a generic element of CSS and the styling needs to be changed on certain events (ie click of button / mouse hover over)
- Changing element's CSS properties:
    ```javascript
         $("#target1").css("color", "blue");
    ```

### Change HTML inside an Element
- jQuery function called `.html()` adds HTML tags and text within an element. Any content previously within the element will be completely replaced with this function.
    ```javascript
        $("h3").html("<em>jQuery Playground</em>");
    ```

- jQuery function called `.remove()` removes HTML element entirely.
    ```javascript
        $("#target4").remove();
    ```

### Change Text inside an Element
- jQuery function called `.text()` alters text without adding tags. In other words, this function will not evaluate any HTML tags passed to it, but will instead treat it as the text you want to replace the existing content with.
    ```javascript
        $("h3").text("Re-writing to Hello World");
    ```

### Move Element with appendTo
- jQuery function called `appendTo()` that allows you to select HTML elements and append them to another element.
- <selector>.appendTo<new-location-to-appendto>.
    ```javascript
        $("#target2").appendTo("#right-well");
    ```

### Clone Element
- jQuery function called `clone()` that makes a copy of an element.
    ```javascript
        <selector>.clone().appendTo<new-location-to-appendto>.
        $("#target2").clone().appendTo("#right-well");
    ```