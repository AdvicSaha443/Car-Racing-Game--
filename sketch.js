var car, carimg;
var trackimg;
var mud, mudimg;
var gameState;
var button1;
var mudGroup;

function preload() {
  carimg = loadImage("car1.png");
  trackimg = loadImage("track.jpg");
  mudimg = loadImage("mud-.png");
}
function setup() {
  createCanvas(750,800);
  car = createSprite(350, 250);
  car.addImage(carimg);

  button1 = createButton("Start");
  button1.position(350, 250);

  mudGroup = new Group();

  gameState = "start";

}

function draw() {
  background(0);
  image(trackimg, 0, -7000, 0, 0);

  console.log(gameState);

  if (gameState === "start") {
    textSize(50);
    text("Car Racing Game", 200, 300);

    button1.mousePressed(function(){
      gameState = "play";
    });
  }

  if (gameState === "play") {
    button1.hide();

    if (keyDown("up")) {
      car.y-=10;
    }
    if(keyDown("left")) {
      car.x-=10;
    }
    
    if(keyDown("right")) {
      car.x+=10;
    }
  }

   if (mudGroup.isTouching(car)) {
     gameState = "end2";
   }

   if (gameState === "end2") {
     car.velocityY = 0;
     text("YOU LOSE!", 200, 250);
   }

    //car.y-=10;


   camera.position.y = car.y;

  drawSprites();
  spawnMud();
  text(mouseX+","+mouseY, mouseX, mouseY);
}

function spawnMud() {
if (keyDown("up")) {
 if (frameCount % 50 === 0) {
  mud = createSprite(random(50, 750), car.y-500, 5, 5);
  mud.addImage(mudimg);
  mud.scale = 0.4;
  mudGroup.add(mud);
  //mud.velocityY = 10;
 }
}
}