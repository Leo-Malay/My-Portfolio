// This functions changes the color of Page heading every 3 sec.
var num = 0;

function color_my_name() {
    color_ls = [
        "#f4f802",
        "#02f89a",
        "#02f0f8",
        "#0281f8",
        "#b41df0",
        "#f80254",
        "#ffffff",
    ];
    setInterval(function () {
        document.getElementById("title").style.color = color_ls[num];
        num = num + 1;
        if (num >= 7) {
            num = num - 7;
        }
        if (screen.width <= 1000) {
            window.location.replace("./warn.html"); //path to your mobile site
        }
    }, 1200);
}
