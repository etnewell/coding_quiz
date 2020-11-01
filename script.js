





var prevScore = document.querySelector("#prevScoreBar");
var mainBody = document.querySelector("#mainbody");
var questionSet = document.querySelector("#questionspace");
var firstPage = document.querySelector("#firstpagecontent");
var allQuestions = document.querySelector("#allQuestions");
var scorePage = document.querySelector("#scorePage");
// var ans1Set = document.querySelector("#ans1");
// var ans2Set = document.querySelector("#ans2");
// var ans3Set = document.querySelector("#ans3");
// var ans4Set = document.querySelector("#ans4");

var startBtn = document.querySelector("#startBtn");
var q1btn = document.querySelectorAll(".ansbuttons1");
var q2btn = document.querySelectorAll(".ansbuttons2");
var q3btn = document.querySelectorAll(".ansbuttons3");
var q4btn = document.querySelectorAll(".ansbuttons4");
var q5btn = document.querySelectorAll(".ansbuttons5");
var resetBtn = document.getElementById("reset");

var q1btnAry = Array.prototype.slice.call(q1btn);
var q2btnAry = Array.prototype.slice.call(q2btn);
var q3btnAry = Array.prototype.slice.call(q3btn);
var q4btnAry = Array.prototype.slice.call(q4btn);
var q5btnAry = Array.prototype.slice.call(q5btn);

var firstQ = document.getElementById("firstQcontent");
var secondQ = document.getElementById("secondQcontent");
var thirdQ = document.getElementById("thirdQcontent");
var fourthQ = document.getElementById("fourthQcontent");
var fifthQ = document.getElementById("fifthQcontent");

var toggle1 = document.querySelector(".ansbuttons1");
var toggle2 = document.querySelector(".ansbuttons2");
var toggle3 = document.querySelector(".ansbuttons3");

// var submitListen = document.getElementById("submitBtn");
// var initInput = document.getElementById("initialInput").text;

// submitListen.addEventListener("click", function(){

// console.log(initInput);
//     localStorage.setItem(initInput, correctCount);

// });

var timerCount = "";
var correctCount = 0;
var incorrectCount = 0;

var initialAry = [];
var scores = [];

var scoreList = document.getElementById('scoreDisplay');
var initList = document.getElementById('initDisplay');


firstQ.style.display = "none";
secondQ.style.display = "none";
thirdQ.style.display = "none";
fourthQ.style.display = "none";
fifthQ.style.display = "none";
scorePage.style.display = "none";




// Hide/show function declaration
var hide1show2 = function(){

    if (secondQ.style.display === "none") {
        secondQ.style.display = "block";
    } else {
        secondQ.style.display = "none";
    }
    if (firstQ.style.display === "none") {
        firstQ.style.display = "block";
    } else {
        firstQ.style.display = "none";
    }
  };

 var hide2show3 = function(){
    if (thirdQ.style.display === "none") {
        thirdQ.style.display = "block";
    } else {
        thirdQ.style.display = "none";
    }
    if (secondQ.style.display === "none") {
        secondQ.style.display = "block";
    } else {
        secondQ.style.display = "none";
    }
  };

  var hide3show4 = function(){
    if (fourthQ.style.display === "none") {
        fourthQ.style.display = "block";
    } else {
        fourthQ.style.display = "none";
    }
    if (thirdQ.style.display === "none") {
        thirdQ.style.display = "block";
    } else {
        thirdQ.style.display = "none";
    }
  };
 
  var hide4show5 = function(){
    if (fifthQ.style.display === "none") {
        fifthQ.style.display = "block";
    } else {
        fifthQ.style.display = "none";
    }
    if (fourthQ.style.display === "none") {
        fourthQ.style.display = "block";
    } else {
        fourthQ.style.display = "none";
    }
  };

  var hide5showScore = function(){
    if (scorePage.style.display === "none") {
        scorePage.style.display = "block";
    } else {
        scorePage.style.display = "none";
    }
    if (fifthQ.style.display === "none") {
        fifthQ.style.display = "block";
    } else {
        fifthQ.style.display = "none";
    }
  };

  var hideFirstPage= function(){
    if (firstPage.style.display === "none") {
        firstPage.style.display = "block";
    } else {
        firstPage.style.display = "none";
    }
};

var hideScoreShowFirst = function(){
    if (firstPage.style.display === "none") {
        firstPage.style.display = "block";
    } else {
        firstPage.style.display = "none";
    }
    if (scorePage.style.display === "none") {
        scorePage.style.display = "block";
    } else {
        scorePage.style.display = "none";
    }
};

 
// Question hiders/showers
startBtn.addEventListener("click", function(event){

    if (firstQ.style.display === "none") {
        firstQ.style.display = "block";
    } else {
        firstQ.style.display = "none";
    }
    hideFirstPage()
  }
);

q1btnAry.forEach(function(elem){

    elem.addEventListener("click", function(){
hide1show2()
    });
  });

q2btnAry.forEach(function(elem){

    elem.addEventListener("click", function(){
hide2show3()
    });
  });   

q3btnAry.forEach(function(elem){

    elem.addEventListener("click", function(){
hide3show4()
    });
  }); 

q4btnAry.forEach(function(elem){

    elem.addEventListener("click", function(){
    hide4show5(); 
    });

  });   

q5btnAry.forEach(function(elem){

    elem.addEventListener("click", function(){
    hide5showScore();
    var initialInput = prompt("What are your initials?");
    scores.push(correctCount); 
    initialAry.push(initialInput);

        var li = document.createElement('li');
        li.textContent = correctCount;
        scoreList.appendChild(li);


        var li = document.createElement('li');
        li.textContent = initialInput;
        initList.appendChild(li);

    
    
    });

  });  

resetBtn.addEventListener("click", function(){
    hideScoreShowFirst()
    correctCount =0;
  });


var scoreList = document.getElementById('scoreDisplay');
scores.forEach(function (scores) {
    var li = document.createElement('li');
    li.textContent = scores;
    scoreList.appendChild(li);
})




// var localStorKey = function(){
//     for (var i = 0; i < localStorage.length; i++){
//         localStorage.getItem(localStorage.key(i));
//      }
// };
// var localStorKeyAry = function(){[localStorKey()]};

// var localStorVal = function(){
//     for (var i = 0; i < localStorage.length; i++){
//         localStorage.getItem(localStorKeyAry[i]);
//      }
// };
// var localStorValAry = function(){[localStorVal()]};

// Question checks
// Question 1 check
document.getElementById("1a1").addEventListener("click", function(){
    correctCount++
    console.log(correctCount);
})  
document.getElementById("1a2").addEventListener("click", function(){
    incorrectCount++
    console.log(incorrectCount);
})  
document.getElementById("1a3").addEventListener("click", function(){
    incorrectCount++
    console.log(incorrectCount);
})  
document.getElementById("1a4").addEventListener("click", function(){
    incorrectCount++
    console.log(incorrectCount);
})  

// Question 2 check
document.getElementById("2a1").addEventListener("click", function(){
    incorrectCount++
    console.log(incorrectCount);
})  
document.getElementById("2a2").addEventListener("click", function(){
    correctCount++
    console.log(correctCount);
})  
document.getElementById("2a3").addEventListener("click", function(){
    incorrectCount++
    console.log(incorrectCount);
})  
document.getElementById("2a4").addEventListener("click", function(){
    incorrectCount++
    console.log(incorrectCount);
})  

// Question 3 check
document.getElementById("3a1").addEventListener("click", function(){
    incorrectCount++
    console.log(incorrectCount);
})  
document.getElementById("3a2").addEventListener("click", function(){
    incorrectCount++
    console.log(incorrectCount);
})  
document.getElementById("3a3").addEventListener("click", function(){
    correctCount++
    console.log(correctCount);

})  
document.getElementById("3a4").addEventListener("click", function(){
    incorrectCount++
    console.log(incorrectCount);
})  

// Question 4 check
document.getElementById("4a1").addEventListener("click", function(){

    incorrectCount++
    console.log(incorrectCount);
})  
document.getElementById("4a2").addEventListener("click", function(){
    incorrectCount++
    console.log(incorrectCount);
})  
document.getElementById("4a3").addEventListener("click", function(){
    correctCount++
    console.log(correctCount);
})  
document.getElementById("4a4").addEventListener("click", function(){
    incorrectCount++
    console.log(incorrectCount);
})  

// Question 5 check
document.getElementById("5a1").addEventListener("click", function(){
    incorrectCount++
    console.log(incorrectCount);
})  
document.getElementById("5a2").addEventListener("click", function(){
    incorrectCount++
    console.log(incorrectCount);
})  
document.getElementById("5a3").addEventListener("click", function(){
    incorrectCount++
    console.log(incorrectCount);
})  
document.getElementById("5a4").addEventListener("click", function(){
    correctCount++
    console.log(correctCount);

})  

// console.log(correctCount);
// console.log(incorrectCount);
// q2btn.addEventListener("click", function(event){
//     hide2show3()
// });   








//     if (secondQ.style.display === "none") {
//         secondQ.style.display = "block";
//     } else {
//         secondQ.style.display = "none";
//     }
//     if (firstQ.style.display === "none") {
//         firstQ.style.display = "block";
//     } else {
//         firstQ.style.display = "none";
//     }


// var fillFirstQ = function() {
//     firstpage.innerHTML = ""
//     questionSet.innerHTML = "<p>first question</p>";
//     ans1Set.innerHTML = "<btn type='btn'>first ans<btn>";
//     ans2Set.innerHTML = "<btn type='btn'>second ans<btn>";
//     ans3Set.innerHTML = "<btn type='btn'>third ans<btn>";
//     ans4Set.innerHTML = "<btn type='btn'>fourth ans<btn>";
// // mainBody.innerHTML(
// //     "<p>First Question</p><btn>"
// // )
// };
// var fillSecondQ = function(){
//     firstpage.innerHTML = ""
//     questionSet.innerHTML = "<p>second question</p>";
//     ans1Set.innerHTML = "<btn type='btn'>first ans<btn>";
//     ans2Set.innerHTML = "<btn type='btn'>second ans<btn>";
//     ans3Set.innerHTML = "<btn type='btn'>third ans<btn>";
//     ans4Set.innerHTML = "<btn type='btn'>fourth ans<btn>";
// };

// var fillThirdQ = function(){
//     firstpage.innerHTML = ""
//     questionSet.innerHTML = "<p>third question</p>";
//     ans1Set.innerHTML = "<button type='btn'>first ans<button>";
//     ans2Set.innerHTML = "<button type='btn'>second ans<button>";
//     ans3Set.innerHTML = "<button type='btn'>third ans<button>";
//     ans4Set.innerHTML = "<button type='btn'>fourth ans<button>";
// }

// var fillFourthQ = function(){
//     firstpage.innerHTML = ""
//     questionSet.innerHTML = "<p>fourth question</p>";
//     ans1Set.innerHTML = "<btn type='btn'>first ans<btn>";
//     ans2Set.innerHTML = "<btn type='btn'>second ans<btn>";
//     ans3Set.innerHTML = "<btn type='btn'>third ans<btn>";
//     ans4Set.innerHTML = "<btn type='btn'>fourth ans<btn>";
// }

// var fillFifthQ = function(){
//     firstpage.innerHTML = ""
//     questionSet.innerHTML = "<p>Fifth question</p>";
//     ans1Set.innerHTML = "<btn type='btn'>first ans<btn>";
//     ans2Set.innerHTML = "<btn type='btn'>second ans<btn>";
//     ans3Set.innerHTML = "<btn type='btn'>third ans<btn>";
//     ans4Set.innerHTML = "<btn type='btn'>fourth ans<btn>";
// }
// console.log(startBtn.innerHTML)



