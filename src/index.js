import Game from "./game";

// Get the game screen
let canvas = document.getElementById("gameScreen");
// setup the canvas context to 2D
let ctx = canvas.getContext("2d");

// Set the game width
const GAME_WIDTH = 800;
const GAME_HEIGHT = 600;

// Game Object
let game = new Game(GAME_WIDTH, GAME_HEIGHT);

// Get the last time was
let lastTime = 0;

function gameLoop(timestamp) {
  let deltaTime = timestamp - lastTime;
  lastTime = timestamp;

  // Clear the entire canvas by his width + height
  ctx.clearRect(0, 0, GAME_WIDTH, GAME_HEIGHT);

  game.update(deltaTime);
  game.draw(ctx);

  requestAnimationFrame(gameLoop);
}

// Call gameLoop func
gameLoop();
