const cvs = document.getElementById("snake");
const cntx = cvs.getContext("2d");

// Create Unit
const box = 32;

//Load Images
const ground = new Image();
ground.src = "./assets/images/ground.png";

const foodImg = new Image();
foodImg.src = "./assets/images/food.png";

// load audio files

let dead = new Audio();
let eat = new Audio();
let up = new Audio();
let right = new Audio();
let left = new Audio();
let down = new Audio();

dead.src = "audio/dead.mp3";
eat.src = "audio/eat.mp3";
up.src = "audio/up.mp3";
right.src = "audio/right.mp3";
left.src = "audio/left.mp3";
down.src = "audio/down.mp3";

//Create Snake

let snake = [];
snake[0] = {
    x: 9 * box,
    y: 10 * box
}

//Create food
let food = {
    x: Math.floor(Math.random() * 17 + 1) * box,
    y: Math.floor(Math.random() * 15 + 3) * box
}

// Create Score

let Score = 0;


// Create control of the snake

document.addEventListener("keydown", direction);

function direction(e){
    let key = e.keyCode;
    if( key == 37 && d != "RIGHT"){
        left.play();
        d = "LEFT";
    }else if(key == 38 && d != "DOWN"){
        d = "UP";
        up.play();
    }else if(key == 39 && d != "LEFT"){
        d = "RIGHT";
        right.play();
    }else if(key == 40 && d != "UP"){
        d = "DOWN";
        down.play();
    }
}

// Drawing eveything

function draw() {
    cntx.drawImage(ground, 0, 0);

    for (let i = 0; i < snake.length; i++) {
        cntx.fillStyle = (i == 0) ? "green" : "white";
        cntx.fillRect(snake[i].x, snake[i].y, box, box);

        cntx.strokeStyle = "red";
        cntx.strokeRect(snake[i].x, snake[i].y, box, box);
    }

    cntx.drawImage(foodImg, food.x, food.y);

    // OLD Head Position
    let snakeX = snake[0].x;
    let snakeY = snake[0].y;


    //Which Direction
    if (d = "LEFT") snakeX -= box;
    if (d = "UP") snakeY -= box;
    if (d = "RIGHT") snakeX += box;
    if (d = "DOWN") snakeY += box;

    // if snake eats foot
    if (snakeX == food.x && snakeY == snakeY) {
        score++;
        food = {
            x: Math.floor(Math.random() * 17 + 1) * box,
            y: Math.floor(Math.random() * 15 + 3) * box
        }
    } else {
        //remove tail
        snake.pop();
    }



    // add new Head

    let newHead = {
        x: snakeX,
        y: snakeY
    }

        // game over
    
        if(snakeX < box || snakeX > 17 * box || snakeY < 3*box || snakeY > 17*box || collision(newHead,snake)){
            clearInterval(game);
            dead.play();
        }

    snake.unshift(newHead);

    cntx.fillStyle = " white";
    cntx.font = "45px Changa one";
    cntx.fillText(Score, 2 * box, 1.6 * box);
}

// Call draw function every 100 ms

let game = setInterval(draw, 100);