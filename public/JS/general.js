var body = document.getElementById("Page");
var header = document.getElementById("header");
var footer = document.getElementById("footer");
var head = document.getElementById("head");
var active = document.getElementById("active");
var inactive = document.getElementById("inactive");
var main = document.querySelectorAll("[id='main']");
var desc = document.querySelectorAll("[id='desc']");
var square = document.querySelectorAll("[id='square']");
var rectangle = document.querySelectorAll("[id='rectangle']");
var circle = document.querySelectorAll("[id='circle']");
var brick = document.querySelectorAll("[id='brick']");
var brick_half = document.querySelectorAll("[id='brick_half']");
function set_theme(num) {
    if (num == 1) {
        var color1 = "#101820FF";
        var color2 = "#FEE715FF";
    } else if (num == 2) {
        var color1 = "#EEA47FFF";
        var color2 = "#00539CFF";
    } else if (num == 3) {
        var color1 = "#00203FFF";
        var color2 = "#ADEFD1FF";
    }
    body.style.backgroundColor = color1;
    header.style.backgroundColor = color1;
    header.style.borderColor = color1;
    footer.style.backgroundColor = color1;
    active.style.backgroundColor = color2;
    active.style.color = color1;
    inactive.style.color = color2;
    head.style.color = color2;
    for (var i = 0; i < main.length; i++) main[i].style.color = color2;
    for (var i = 0; i < desc.length; i++) desc[i].style.color = color2;
    for (var i = 0; i < square.length; i++)
        square[i].style.backgroundColor = color2;
    for (var i = 0; i < rectangle.length; i++)
        rectangle[i].style.backgroundColor = color2;
    for (var i = 0; i < circle.length; i++)
        circle[i].style.backgroundColor = color2;
    for (var i = 0; i < brick.length; i++)
        brick[i].style.backgroundColor = color2;
    for (var i = 0; i < brick_half.length; i++)
        brick_half[i].style.backgroundColor = color2;
    console.log("Color Changed!");
}
