




var startBtn = document.querySelector("#startBtn");
var highScore = document.querySelector("#highscoreBar");
var mainBody = document.querySelector("#mainbody");
var questionSet = document.querySelector("#questionspace");
var firstpage = document.querySelector("#firstpagecontent");
var ans1Set = document.querySelector("#ans1");
var ans2Set = document.querySelector("#ans2");
var ans3Set = document.querySelector("#ans3");
var ans4Set = document.querySelector("#ans4");
var newBtn = document.getElementById("newbtn");
var toggle1 = document.getElementById("firstQcontent");
var 

newBtn.addEventListener("click", function(event){
    var hide1 = document.getElementById("firstQcontent");
    if (hide1.style.display === "none") {
      hide1.style.display = "block";
    } else {
      hide1.style.display = "none";
    }
  }
);

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

startBtn.addEventListener("click", function(event){
     fillFirstQ()
    });

