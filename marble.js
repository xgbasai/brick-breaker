class Marble {
  constructor(pos, size, speedVector, dammage) {
    this.pos = pos;
    this.size = size;
    this.speedVector = speedVector;
    this.dammage = dammage;
    this.shooted = false;
  }

  update() {
    if (this.shooted) {
      this.move();
      this.bounce();
      this.display();
    }
  }

  display() {
    circle(this.pos.x, this.pos.y, this.size);
  }
  move() {
    this.pos.add(this.speedVector);
  }
  bounce() {}
}
