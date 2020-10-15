// This functions changes the color of Page heading every 3 sec.
var num = 0;

function color_my_name() {
    color_ls = ["#CC2B5E","#C22D64","#B72F69","#AC316E","#A13373","#963579","#8B377E","#863881","#803983","#753A88",
                "#753A88","#803983","#863881","#8B377E","#963579","#A13373","#AC316E","#B72F69","#C22D64","#CC2B5E"];
    setInterval(function () {
        document.getElementById("page_head_title").style.color = color_ls[num];
        num = num + 1;
        if (num >= 20) {
            num = num - 20;
        }
    }, 200);
}