const cvs = document.getElementById("snake");
const cntx = cvs.getContext("2d");

// Create Unit
const box = 32;

//Load Images
const ground = new Image();
ground.src = "./images/ground.png";

const foodImg = new Image();
foodImg.src = "./images/food.png";

//Create Snake

let snake = [];
snake[0] ={
    x : 9 * box,
    y : 10 * box
}

//Create food