alert("JavaScript is Connected!");

// Welcome Message

function welcome(){

    alert("Welcome to our AI Medical Treatment Project!");

}



// Show Diseases (Loop + Array)

function showDiseases(){

    let diseases = [

        "Cancer",
        "Heart Disease",
        "Diabetes",
        "Brain Disorders",
        "Lung Disease"

    ];

    let text = "<h3>Diseases where AI helps doctors:</h3>";

    for(let i=0;i<diseases.length;i++){

        text += (i+1) + ". " + diseases[i] + "<br>";

    }

    document.getElementById("demo").innerHTML = text;

}



// If-Else Statement

function checkAge(){

    let age = prompt("Please enter your age:");

    if(age >= 18){

        alert("You are an adult.");

    }

    else{

        alert("You are under 18.");

    }

}



// Countries (Array + Loop)

function showCountries(){

    let countries = [

        "United States",
        "Canada",
        "United Kingdom",
        "India",
        "Japan"

    ];

    let text = "<h3>Countries Using AI in Healthcare:</h3>";

    for(let i=0;i<countries.length;i++){

        text += countries[i] + "<br>";

    }

    document.getElementById("countries").innerHTML = text;

}



// Hospitals

function showHospitals(){

    let hospitals = [

        "AIIMS New Delhi",
        "Apollo Hospitals",
        "Fortis Hospital",
        "Max Healthcare",
        "Manipal Hospitals"

    ];

    let text = "<h3>Famous Hospitals in India:</h3>";

    for(let i=0;i<hospitals.length;i++){

        text += hospitals[i] + "<br>";

    }

    document.getElementById("hospitals").innerHTML = text;

}



// India Fact

function indiaQuiz(){

    document.getElementById("fact").innerHTML =
    "AI is helping improve healthcare services in India by supporting diagnosis, telemedicine, and hospital management.";

}



// Healthcare Fact

function healthFact(){

    let facts = [

        "AI can detect diseases earlier.",
        "AI helps doctors analyze X-rays.",
        "AI supports robotic surgery.",
        "AI reduces medical errors.",
        "AI improves patient care."

    ];

    let random = Math.floor(Math.random()*facts.length);

    document.getElementById("fact").innerHTML = facts[random];

}



// Quiz Question 1

function question1(){

    let answer = document.getElementsByName("q1");

    for(let i=0;i<answer.length;i++){

        if(answer[i].checked){

            if(answer[i].value=="A"){

                document.getElementById("answer1").innerHTML="✅ Correct!";

            }

            else{

                document.getElementById("answer1").innerHTML="❌ Wrong Answer";

            }

        }

    }

}



// Quiz Question 2

function question2(){

    let answer = document.getElementsByName("q2");

    for(let i=0;i<answer.length;i++){

        if(answer[i].checked){

            if(answer[i].value=="A"){

                document.getElementById("answer2").innerHTML="✅ Correct!";

            }

            else{

                document.getElementById("answer2").innerHTML="❌ Wrong Answer";

            }

        }

    }

}



// Quiz Question 3

function question3(){

    let answer = document.getElementsByName("q3");

    for(let i=0;i<answer.length;i++){

        if(answer[i].checked){

            if(answer[i].value=="B"){

                document.getElementById("answer3").innerHTML="✅ Correct!";

            }

            else{

                document.getElementById("answer3").innerHTML="❌ Wrong Answer";

            }

        }

    }

}



// Quiz Question 4

function question4(){

    let answer = document.getElementsByName("q4");

    for(let i=0;i<answer.length;i++){

        if(answer[i].checked){

            if(answer[i].value=="A"){

                document.getElementById("answer4").innerHTML="✅ Correct!";

            }

            else{

                document.getElementById("answer4").innerHTML="❌ Wrong Answer";

            }

        }

    }

}



// Quiz Question 5

function question5(){

    let answer = document.getElementsByName("q5");

    for(let i=0;i<answer.length;i++){

        if(answer[i].checked){

            if(answer[i].value=="A"){

                document.getElementById("answer5").innerHTML="✅ Correct!";

            }

            else{

                document.getElementById("answer5").innerHTML="❌ Wrong Answer";

            }

        }

    }

}