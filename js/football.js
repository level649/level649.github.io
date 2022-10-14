window.onload = function () {
    var box1 = document.getElementById("box1");
    var box2 = document.getElementById("box2");
    var box3 = document.getElementById("box3");
    var box4 = document.getElementById("box4");
    var box5 = document.getElementById("box5");
    var box6 = document.getElementById("box6");
    var box7 = document.getElementById("box7");
    var box8 = document.getElementById("box8");
    var box9 = document.getElementById("box9");
    var box10 = document.getElementById("box10");
    var box11 = document.getElementById("box11");
    function drag(obj) {
        obj.onmousedown = function (event) {
            event = event || window.event;
            var ol = event.clientX - obj.offsetLeft;
            var ot = event.clientY - obj.offsetTop;
            document.onmousemove = function (event) {
                event = event || window.event;
                var left = event.clientX - ol;
                var top = event.clientY - ot;
                obj.style.left = left + "px";
                obj.style.top = top + "px";


            };
            document.onmouseup = function () {
                document.onmousemove = null;
                document.onmouseup = null;


            };
            return false;
        };
    }
    drag(box1);
    drag(box2);
    drag(box3);
    drag(box4);
    drag(box5);
    drag(box6);
    drag(box7);
    drag(box8);
    drag(box9);
    drag(box10);
    drag(box11);
}