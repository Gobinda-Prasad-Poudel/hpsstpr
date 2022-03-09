var icon = document.getElementById("icon");
var main = document.getElementById("main");
icon.innerHTML = "";

icon.onclick = function () {
    main.classList.toggle("dark-mode");
    if (main.classList.contains("dark-mode")) {
        icon.classList = ("fas fa-sun");

    }
    else {
        icon.classList = ("fas fa-moon");

    }
};

/*-----------------For Sticky Navbar----------------------*/
var navbar = document.querySelector("nav");
var menu = document.querySelector(".lists");
var menuVertical = document.querySelector("#navlists");

window.onscroll = function () {
    navbar.classList.toggle("sticky", window.scrollY > 0)
    menuVertical.classList.toggle("sticky-2", window.scrollY > 0)
};

/*------------------------------For Copyright Text-------------------*/
var date = new Date().getFullYear();
document.getElementById("copyright-text").innerHTML = "Copy Right &copy; 2022-" + date + " By Hamro Pahunch Secondary School <br>Privacy And Policy Terms Of Use ";


/*---------------'Teacher'--------For Impost Slide
'level':"secondaryS,r-----------------------*/
const swiper = new Swiper('.swiper', {
    // Optional parameters
    loop: true,

    // If we need pagination
    pagination: {
        el: '.swiper-pagination',
        clickable: true,
    },

    // Navigation arrows
    navigation: {
        nextEl: '.swiper-button-next',
        prevEl: '.swiper-button-prev',
    }


});



/*------------------- For MEnu Icon Or Hamburger Icon -----------------------------*/
var menu = document.getElementById("menu-icon-hmburger");
var lists = document.getElementById("navlists");
lists.style.top = "-250px";
menu.onclick = function () {
    menu.classList.toggle("openmenu");

    if (lists.style.top == "-250px") {
        lists.style.display = "block";
        lists.style.top = "0";


    }
    else {

        lists.style.display = "none";
        lists.style.top = "-250px";

    }


};
