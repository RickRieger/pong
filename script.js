// Size of the game area (in px)
const GAME_AREA_WIDTH = 700;
const GAME_AREA_HEIGHT = 500;

// Size of the paddles (in px)
const PADDLE_HEIGHT = 100;
const PADDLE_WIDTH = 20;

// Size of the ball (in px)
const BALL_SIZE = 20;

// Get the computer paddle element
const computerPaddle = document.querySelector('.computer-paddle');

// Get the ball element
const ball = document.querySelector('.ball')

//  ball x and y position and velocity
let ballXPosition = 0;
let ballYPosition = 0;
let ballXVelocity = 3;
let ballYVelocity = 1;

// Initial computer paddle y-position and y-velocity
let computerPaddleYPosition = 0;
let computerPaddleYVelocity = 2;



// Update the pong world
function update() {

    if (computerPaddleYVelocity === -2 && computerPaddleYPosition <= 0){
        computerPaddleYVelocity = 2;
    }
    else if (computerPaddleYPosition >= (GAME_AREA_HEIGHT - PADDLE_HEIGHT)){
        computerPaddleYVelocity = -2
    }


    // Update the computer paddle's position

    computerPaddleYPosition = computerPaddleYPosition + computerPaddleYVelocity;

    // if (computerPaddleYPosition === GAME_AREA_HEIGHT - PADDLE_HEIGHT){
    //     computerPaddleYPosition = computerPaddleYPosition - computerPaddleYVelocity;
    // }
   console.log(computerPaddleYPosition);
    // Update the ball's position
    ballXPosition = ballXPosition + ballXVelocity;
    ballYPosition = ballYPosition + ballYVelocity;

    // If the computer paddle goes off the edge of the screen, bring it back
    // computerPaddleYPosition = computerPaddleYPosition % (GAME_AREA_HEIGHT - PADDLE_HEIGHT);
    ballXPosition = ballXPosition % (GAME_AREA_WIDTH - BALL_SIZE)
    ballYPosition = ballYPosition % (GAME_AREA_HEIGHT - BALL_SIZE)



    // Apply the y-position 
    computerPaddle.style.top = `${computerPaddleYPosition}px`;
    ball.style.left = `${ballXPosition}px`;
    ball.style.top = `${ballYPosition}px`;
}

// Call the update() function everytime the browser is ready to re-render
function loop() {
    update();
    window.requestAnimationFrame(loop);
}
window.requestAnimationFrame(loop);