let player;

function setup() {
  createCanvas(600, 600);
  player = new Player(createVector(300, 500), 25, 100);
  for (let index = 0; index < 5; index++) {
    player.marbles.push(new Marble(player.pos, 10, createVector(0, -1), 1));
  }
}

function draw() {
  background(100);
  rectMode(CENTER);
  player.update();
  text(player.marbles.length, 100, 100);
  player.marbles.forEach((marble) => marble.update());
}
function keyPressed() {
  if (keyCode === UP_ARROW) {
    //player.shoot();
  }
}
