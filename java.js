const menuBtn = document.getElementById("menuBtn");

const nav = document.querySelector("nav");

menuBtn.addEventListener("click", function () {

    if (nav.style.display === "flex") {
        nav.style.display = "none";
    } else {
        nav.style.display = "flex";
        nav.style.flexDirection = "column";
        nav.style.position = "absolute";
        nav.style.top = "75px";
        nav.style.right = "0";
        nav.style.background = "white";
        nav.style.padding = "25px";
        nav.style.width = "200px";
        nav.style.boxShadow = "0 10px 30px rgba(0,0,0,0.1)";
    }

});
