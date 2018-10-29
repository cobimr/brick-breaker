import { detectCollision } from "./detectCollision";

export default class Ball {
  constructor(game) {
    this.game = game;

    this.gameWidth = game.gameWidth;
    this.gameHeight = game.gameHeight;

    this.image = document.getElementById("img_ball");
    this.size = 16;

    this.reset();
  }

  reset() {
    this.position = {
      x: 10,
      y: 350
    };
    this.speed = {
      x: 7,
      y: -2
    };
  }

  draw(ctx) {
    // Create new ball
    ctx.drawImage(
      this.image,
      this.position.x,
      this.position.y,
      this.size,
      this.size
    );
  }

  update(deltaTime) {
    this.position.x += this.speed.x;
    this.position.y += this.speed.y;

    // hit wall on left or right
    if (this.position.x + this.size > this.gameWidth || this.position.x < 0) {
      this.speed.x = -this.speed.x;
    }

    // hit wall on top or bottom
    if (this.position.y < 0) {
      this.speed.y = -this.speed.y;
    }

    // bottom of the game
    if (this.position.y + this.size > this.gameHeight) {
      this.game.lives--;
      this.reset();
    }

    if (detectCollision(this, this.game.paddle)) {
      this.speed.y = -this.speed.y;
      this.position.y = this.game.paddle.position.y - this.size;
    }
  }
}