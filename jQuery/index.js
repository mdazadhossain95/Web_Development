
$("button").click(function () {
    $("h1").css("color", "purple");

});

$(document).click(function (event) {
    $("h1").text(event.key);

});

