export default class Paddle {
  constructor(game) {
    this.gameWidth = game.gameWidth;
    this.gameHeight = game.gameHeight;

    // When a paddle obj is created
    this.width = 150;
    this.height = 20;

    this.maxSpeed = 8;
    this.speed = 0;

    // Set the position of the paddle
    this.position = {
      // At the center of the screen
      x: this.gameWidth / 2 - this.width / 2,
      // At the bottom width 10px space
      y: this.gameHeight - this.height - 10
    };
  }

  // moveLeft method
  moveLeft() {
    this.speed = -this.maxSpeed;
  }
  // moveRigth method
  moveRigth() {
    this.speed = this.maxSpeed;
  }
  // stop the paddle
  stop() {
    this.speed = 0;
  }

  // Draw the paddle method
  draw(ctx) {
    ctx.fillStyle = "#0ff";
    ctx.fillRect(this.position.x, this.position.y, this.width, this.height);
  }

  // Update the paddle method
  update(deltaTime) {
    if (!deltaTime) return;

    // Update the speed
    this.position.x += this.speed;

    // To prevent the paddle is go outside left of canvas
    if (this.position.x < 0) this.position.x = 0;
    // To prevent the paddle is go outside right of canvas
    if (this.position.x + this.width > this.gameWidth) {
      this.position.x = this.gameWidth - this.width;
    }
  }
}
