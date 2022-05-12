class Player {
  constructor(pos, long, larg) {
    this.pos = pos;
    this.long = long;
    this.larg = larg;
    this.vel = 0;
    this.marbles = [];
    this.shoots = 0;
  }
  update() {
    this.display();
    this.move();
    //  this.shoot();
  }
  display() {
    rect(this.pos.x, this.pos.y, this.larg, this.long);
  }
  move() {
    if (keyIsPressed === true) {
      if (keyCode === LEFT_ARROW && this.pos.x > this.long * 2) {
        this.vel = -2;
        this.pos.x += this.vel;
      } else if (keyCode === RIGHT_ARROW && this.pos.x < 600 - this.long * 2) {
        this.vel = +2;
        this.pos.x += this.vel;
      }
    }
  }
  shoot() {
    this.marbles[this.shoots].shooted = true;
    this.shoots += 1;
  }
}
