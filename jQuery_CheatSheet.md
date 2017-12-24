<!--
    jQuery Cheat Sheet
-->

# Javascript & jQuery
- jQuery effects work hand-in-hand with events by allowing you to add animations and otherwise manipulate elements on the page.
- All jQuery code you write will be wrapped in the below code. jQuery will detect this state of readiness so that code included inside this function will only run once the DOM is ready for JavaScript code to execute.
    ```
    <script>
      $(document).ready(function(){

      });
    </script>
    ```
```
<script>
  $(document).ready(function() {
    $("button").addClass("animated bounce");
    $(".well").addClaAll jQuery code you write will be wrapped in the above code. jQuery will detect this state of readiness so that code included inside this function will only run once the DOM is ready for JavaScript code to execute. ss("animated shake");
    $("#target3").addClass("animated fadeOut");
    $("button").removeClass("btn-default");
</script>
```

### <b>Selectors</b>
- Selectors are how we tell jQuery which elements we want to work on.
- To access a selector : `$("selector")`
- Three ways of targeting/selecting elements:
    - By type: `$("button")`
    - By class: `$(".btn")`
    - By id:  `$("#target1")`

Common selectors :
Generally, classes and ids are what you will encounter the most — classes when you want to select multiple elements, and ids when you want to select only one.

- `$("*")` - Wildcard: selects every element on the page.
- `$(this)` - Current: selects the current element being operated on within a function.
- `$("p")` - Tag: selects every instance of the `<p>` tag.
- `$(".example")` - Class: selects every element that has the example class applied to it.
- `$("#example")` - Id: selects a single instance of the unique example id.
- `$("[type='text']")` - Attribute: selects any element with text applied to the type attribute.
- `$("p:first-of-type")` - Pseudo Element: selects the first `<p>`.