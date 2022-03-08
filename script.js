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

/*-----------------For Sticky Navbar----------------------*/
var navbar = document.querySelector("nav");
var menu = document.querySelector(".lists");

window.onscroll = function () {
    navbar.classList.toggle("sticky", window.scrollY > 0)
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

/*-------------------- For Holiday --------------------------*/

var holiday = [

    {
        'name': 'Holi',
        'date-in-bs': '2078-12-4',
        'date-in-ad': "2022-04-04",
        'holiday-status': "Yes"

    },

    {
        'name': 'Holi',
        'date-in-bs': '2078-12-4',
        'date-in-ad': "2022-04-04",
        'holiday-status': "Yes"

    },

    {
        'name': 'Holi',
        'date-in-bs': '2078-12-4',
        'date-in-ad': "2022-04-04",
        'holiday-status': "Yes"

    },

    {
        'name': 'Holi',
        'date-in-bs': '2078-12-4',
        'date-in-ad': "2022-04-04",
        'holiday-status': "Yes"

    },

    {
        'name': 'Holi',
        'date-in-bs': '2078-12-4',
        'date-in-ad': "2022-04-04",
        'holiday-status': "Yes"

    },

    {
        'name': 'Holi',
        'date-in-bs': '2078-12-4',
        'date-in-ad': "2022-04-04",
        'holiday-status': "Yes"

    },

    {
        'name': 'Holi',
        'date-in-bs': '2078-12-4',
        'date-in-ad': "2022-04-04",
        'holiday-status': "Yes"

    },

    {
        'name': 'Holi',
        'date-in-bs': '2078-12-4',
        'date-in-ad': "2022-04-04",
        'holiday-status': "Yes"

    },

    {
        'name': 'Holi',
        'date-in-bs': '2078-12-4',
        'date-in-ad': "2022-04-04",
        'holiday-status': "Yes"

    },

    {
        'name': 'Holi',
        'date-in-bs': '2078-12-4',
        'date-in-ad': "2022-04-04",
        'holiday-status': "Yes"

    }

];

for (var b = 0; b < holiday.length; b++) {
    var holidayName = holiday[b]['name'];
    var holidayDateInBs = holiday[b]['date-in-bs'];
    var holidayDateInAd = holiday[b]['date-in-ad'];
    var holidayStatus = holiday[b]['holiday-status'];
    /* var teacherSubject=teacherInformation[a]['subjects']; */




    var holidayDetailInfo = " Holiday Name= " + holidayName + "<br>" + "Holiday Date In B.S(Bikram Sambat) =" + holidayDateInBs + "<br>" + "Holiday Date In A.D(Anno Domini)= " + holidayDateInAd + "<br>" + "Holiday Status =" + holidayStatus + "<br>" + "<br>";
    document.getElementById("holidayDetailInfo").innerHTML += "<p>" + holidayDetailInfo + "</p>";


}

/*------------------------- For Teacher Names -----------------------*/

var teacherInformation = [

    {
        'name': 'DR Bhandari',
        'post': 'Principal',
        'level': "Secondary",
        'subjects': ['Maths', 'Science', 'Computer Science']

    },

    {
        'name': 'Shiva Pun',
        'post': 'Vice-Principle',
        'level': "Secondary",
        'subjects': ['Maths', 'Science', 'Computer Science']

    },

    {
        'name': 'Tilak Kalathoki',
        'post': 'Welfare Officer',
        'level': "Secondary",
        'subjects': ['Maths', 'Science', 'Computer Science']

    },

    {
        'name': 'Minraj Bhandari',
        'post': 'Secondary Level Coodinator',
        'level': "Secondary",
        'subjects': ['Maths', 'Science', 'Computer Science']

    },

    {
        'name': 'Navraj Sharma',
        'post': 'Teacher',
        'level': "Secondary",
        'subjects': ['Maths', 'Science', 'Computer Science']

    },

    {
        'name': 'Sandesh Bhandari',
        'post': 'Teacher',
        'level': "Secondary",
        'subjects': ['Maths', 'Science', 'Computer Science']

    },

    {
        'name': 'Saif Siddiqui',
        'post': 'Teacher',
        'level': "Secondary",
        'subjects': ['Maths', 'Science', 'Computer Science']

    },

    {
        'name': 'Minraj Bhandari',
        'post': 'Teacher',
        'level': "Secondary",
        'subjects': ['Maths', 'Science', 'Computer Science']

    },

    {
        'name': 'Minraj Bhandari',
        'post': 'Teacher',
        'level': "Secondary",
        'subjects': ['Maths', 'Science', 'Computer Science']

    },

    {
        'name': 'Minraj Bhandari',
        'post': 'Teacher',
        'level': "Secondary",
        'subjects': ['Maths', 'Science', 'Computer Science']

    },

    {
        'name': 'Minraj Bhandari',
        'post': 'Teacher',
        'level': "Secondary",
        'subjects': ['Maths', 'Science', 'Computer Science']

    },

    {
        'name': 'Minraj Bhandari',
        'post': 'Teacher',
        'level': "Secondary",
        'subjects': ['Maths', 'Science', 'Computer Science']

    },

    {
        'name': 'Minraj Bhandari',
        'post': 'Teacher',
        'level': "Secondary",
        'subjects': ['Maths', 'Science', 'Computer Science']

    },

    {
        'name': 'Minraj Bhandari',
        'post': 'Teacher',
        'level': "Secondary",
        'subjects': ['Maths', 'Science', 'Computer Science']

    }

];



for (var a = 0; a < teacherInformation.length; a++) {
    var teacherName = teacherInformation[a]['name'];
    var teacherPost = teacherInformation[a]['post'];
    var teacherLevel = teacherInformation[a]['level'];
    /* var teacherSubject=teacherInformation[a]['subjects']; */




    var teacherDetailInfo = "Teacher Name= " + teacherName + "<br>" + "Post =" + teacherPost + "<br>" + "Teacher Level= " + teacherLevel + "<br>" + "<br>"/* +"<br>"+teachersubjects */;
    document.getElementById("teacher").innerHTML += "<p>" + teacherDetailInfo + "</p>";
    /*  for(var b=0; b<teacherSubject.length; b++){
         var teachersubjects = teacherSubject[b];
     } */

    //console.log(teacherDetailInfo);

}