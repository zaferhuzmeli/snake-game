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
let food = {
    x : Math.floor(Math.random()*17+1) * box,
    y : Math.floor(Math.random()*15+3) * box
}

// Create Score

let Score = 0;

// Drawing eveything

function draw() {
    cntx.drawImage(ground,0,0);

    for(let i=0;i < snake.length; i++){
        cntx.fillStyle = (i == 0)? "green" : "white";
        cntx.fillRect(snake[i].x,snake[i].y,box,box);

        cntx.strokeStyle = (i == 0)? "green" : "white";
        cntx.fillRect(snake[i].x,snake[i].y,box,box);
    }
}

// Call draw function every 100 ms

let game = setInterval(draw,100);