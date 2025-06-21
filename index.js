// var randomNumber1=Math.floor(Math.random()*6)+1;
// var randomDiceImage="dice" + randomNumber1+".png";
// var randomImageSource1="images"+randomDiceImage;
// var image1=document.querySelectorAll(img)[0];
// image1.setAttribute
// document.getElementsByName("img")[0].setAttribute("src","images/dice"+randomNumber1+"png");
// document.getElementsByName("img")[0].setAttribute("src","images/dice"+randomNumber2+"png");
// document.querySelectorAll("img") [0].setAttribute("src",randomImageSource1);

// var randomNumber2=Math.floor(Math.random()*6)+1;
// var randomDiceImage2="dice" + randomNumber2+".png";
// var randomImageSource2="images"+randomDiceImage2;
// document.querySelectorAll("img") [0].setAttribute("src",randomImageSource1);

// if(randomNumber1>randomNumber2){
//     document.querySelector("#a").innerHTML="🚩 Play 1 Wins!";
// }
// else if(randomNumber2>randomNumber1){
//     document.querySelector("#b").innerHTML="🚩 Play 2 Wins!";
// }
// else{
//     document.querySelector("#b").innerHTML="Draw!";
// }

var r1=Math.floor(Math.random()*6)+1;
var r2=Math.floor(Math.random()*6)+1;
document.getElementsByTagName("img")[0].setAttribute("src","images/dice"+r1+".png");
document.getElementsByTagName("img")[1].setAttribute("src","images/dice"+r2+".png");
document.getElementsByTagName("h1")[0].textContent=r1===r2 ? " 🚩draw 🚩": r1>r2 ? '🚩player1 wins':'player2 wins🚩';