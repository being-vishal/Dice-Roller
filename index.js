var ranNum1 = Math.floor(Math.random()*6)+1;
var img = "images/dice"+ranNum1 + ".png";
var image1 = document.querySelectorAll("img")[0];
image1.setAttribute("src" , img);


var ranNum2 =  Math.floor(Math.random()*6)+1;
var img2 = "images/dice"+ ranNum2 + ".png";
document.querySelectorAll("img")[1].setAttribute("src" , img2);


if(ranNum1 > ranNum2){
  document.querySelector("h1").innerHTML = "🚩Player 1 Wins";
}else if(ranNum1 < ranNum2){
  document.querySelector("h1").innerHTML = "🚩Player 2 Wins";
}else{
  document.querySelector("h1").innerHTML = "🚩DRAW🚩";
}
