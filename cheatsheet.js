$(document).ready(function() {
    $("#trigger").click(function() {
    $("#demo").html("Hello, World!");
    });

    $(".pops").click(function() {
        $(".overlay").toggle();
    });


});