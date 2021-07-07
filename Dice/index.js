let randomNumber1 = Math.floor(Math.random() * 6) + 1; //1-6

let randomDiseImage = "image/dice" + randomNumber1 + ".png"; //dice1.png - dise6.png

let randomImageSource = "image/" + randomDiseImage; //images/dice1.png - images/dice6.png

let image1 = document.querySelectorAll("img")[0];

image1.setAttribute("src", randomImageSource);

let randomNumber2 = Math.floor(Math.random() * 6) + 1; //1-6

let randomImageSource2 = "image/dice" + randomNumber2 + ".png"; //dice1.png - dise6.png

document.querySelectorAll("img")[1].setAttribute("src", randomImageSource2);


if (randomNumber1 > randomNumber2){
    document.querySelector("h1").innerHTML = "Play 1 Wins!";
}
else if(randomNumber2  > randomNumber1){
    document.querySelector("h1").innerHTML = "Play 2 Wins!";

}else {
    document.querySelector("h1").innerHTML = "Draw";

}
