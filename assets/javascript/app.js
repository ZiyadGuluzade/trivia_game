$(document).ready(function(){




var correct = 0;
var incorrect = 0;
var unanswered = 0;



function start() {
    document.getElementById("questions").style.visibility = "visible";
    
}



 function check() {
     document.getElementById("results").style.visibility = "visible";
     
 }


if (question1 == "Boston Celtics") {
    correct++;
} else {
    incorrect++;
}

if (question2 == "Kareem Abdul-Jabbar") {
    correct++;
} else {
    incorrect++;
}

if (question3 == "28 meters") {
    correct++;
} else {
    incorrect++;
}
if (question4 == "Chicago Bulls") {
    correct++;
} else {
    incorrect++;
}

if (question5 == "1996") {
    correct++;
} else {
    incorrect++;
}

if (question6 == "3.05 meters") {
    correct++;
} else {
    incorrect++;
}

if (question7 == "Demar DeRozan") {
    correct++;
} else {
    incorrect++;
}

if (question8 == "ScotiaBank Arena") {
    correct++;
} else {
    incorrect++;
}

if (question9 == "Steve Kerr") {
    correct++;
} else {
    incorrect++;
}

if (question10 == "Ray Allen") {
    correct++;
} else {
    incorrect++;
}

if (counter == 0) {
    check();
}

if ()

var counter = 120;
var interval = setInterval(function(){
    counter--;
    if (counter == 0) {
        check();
    }
})

});

