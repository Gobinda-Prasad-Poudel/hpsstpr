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




    var holidayDetailInfo1 = " Holiday Name= " +"<b>" + holidayName +"</b>" + "<br>" + "Holiday Date In B.S(Bikram Sambat) =" + holidayDateInBs + "<br>" + "Holiday Date In A.D(Anno Domini)= " + holidayDateInAd + "<br>" + "Holiday Status =" + holidayStatus + "<br>" + "<br>";
    document.getElementById("holidayDetailInfo").innerHTML += "<p>" + holidayDetailInfo1 + "</p>";
    
    
}

/*------------------------- For Teacher Names -----------------------*/

var teacherInformation = [

    {
        'name': 'DR Bhandari',
        'post': 'Principal',
        'level': "Secondary",
        'contact':'9845678910',
        'subjects': ['Maths', 'Science', 'Computer Science']

    },

    {
        'name': 'Shiva Pun',
        'post': 'Vice-Principle',
        'level': "Secondary",
        'contact':'9845678910',
        'subjects': ['Maths', 'Science', 'Computer Science']

    },

    {
        'name': 'Tilak Kalathoki',
        'post': 'Welfare Officer',
        'level': "Secondary",
        'contact':'9845678910',
        'subjects': ['Maths', 'Science', 'Computer Science']

    },

    {
        'name': 'Minraj Bhandari',
        'post': 'Secondary Level Coodinator',
        'level': "Secondary",
        'contact':'9845678910',
        'subjects': ['Maths', 'Science', 'Computer Science']

    },

    {
        'name': 'Navraj Sharma',
        'post': 'Teacher',
        'level': "Secondary",
        'contact':'9845678910',
        'subjects': ['Maths', 'Science', 'Computer Science']

    },

    {
        'name': 'Sandesh Bhandari',
        'post': 'Teacher',
        'level': "Secondary",
        'contact':'9845678910',
        'subjects': ['Maths', 'Science', 'Computer Science']

    },

    {
        'name': 'Saif Siddiqui',
        'post': 'Teacher',
        'level': "Secondary",
        'contact':'9845678910',
        'subjects': ['Maths', 'Science', 'Computer Science']

    },

    {
        'name': 'Minraj Bhandari',
        'post': 'Teacher',
        'level': "Secondary",
        'contact':'9845678910',
        'subjects': ['Maths', 'Science', 'Computer Science']

    },

    {
        'name': 'Minraj Bhandari',
        'post': 'Teacher',
        'level': "Secondary",
        'contact':'9845678910',
        'subjects': ['Maths', 'Science', 'Computer Science']

    },

    {
        'name': 'Minraj Bhandari',
        'post': 'Teacher',
        'level': "Secondary",
        'contact':'9845678910',
        'subjects': ['Maths', 'Science', 'Computer Science']

    },

    {
        'name': 'Minraj Bhandari',
        'post': 'Teacher',
        'level': "Secondary",
        'contact':'9845678910',
        'subjects': ['Maths', 'Science', 'Computer Science']

    },

    {
        'name': 'Minraj Bhandari',
        'post': 'Teacher',
        'level': "Secondary",
        'contact':'9845678910',
        'subjects': ['Maths', 'Science', 'Computer Science']

    },

    {
        'name': 'Minraj Bhandari',
        'post': 'Teacher',
        'level': "Secondary",
        'contact':'9845678910',
        'subjects': ['Maths', 'Science', 'Computer Science']

    },

    {
        'name': 'Minraj Bhandari',
        'post': 'Teacher',
        'level': "Secondary",
        'contact':'9845678910',
        'subjects': ['Maths', 'Science', 'Computer Science']

    }

];



for (var a = 0; a < teacherInformation.length; a++) {
    var teacherName = teacherInformation[a]['name'];
    var teacherPost = teacherInformation[a]['post'];
    var teacherLevel = teacherInformation[a]['level'];
    var teacherContact = teacherInformation[a]['contact'];
    /* var teacherSubject=teacherInformation[a]['subjects']; */




    var teacherDetailInfo1 = "Teacher Name= " + teacherName + "<br>" + "Post =" + teacherPost + "<br>" + "Teacher Level= " + teacherLevel + "<br>"+"Conatct Number =" +teacherContact+ "<br>"+ "<br>"/* +"<br>"+teachersubjects */;
    document.getElementById("teacher").innerHTML += "<p>" + teacherDetailInfo1 + "</p>";
    /*  for(var b=0; b<teacherSubject.length; b++){
         var teachersubjects = teacherSubject[b];
     } */

    //console.log(teacherDetailInfo);

};
