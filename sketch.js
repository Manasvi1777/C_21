var fixedRect, movingRect;
var o1,o2,o3,o4;

function setup() {
  createCanvas(1200,800);
  fixedRect = createSprite(600, 400, 50, 80);
  fixedRect.shapeColor = "green";
  fixedRect.debug = true;
  movingRect = createSprite(400,200,80,30);
  movingRect.shapeColor = "green";
  movingRect.debug = true;


  o1 = createSprite(1000,170,20,20);
  o1.shapeColor="blue";
  o2 = createSprite(100,170,20,20);
  o2.shapeColor="orange";
  o3 = createSprite(100,70,20,20);
  o3.shapeColor="green";
  o4 = createSprite(100,700,20,20);
  o4.shapeColor="yellow";

  o2.velocityX=5;
  o1.velocityX=-5; 

  o3.velocityY=5;
  o4.velocityY=-5
}

function draw() {
  background(0,0,0);  
  movingRect.x = World.mouseX;
  movingRect.y = World.mouseY;

  bounceOff(o2,o1);
  bounceOff(o3,o4);

  if(isTouching(movingRect,o2))                                 
  {
    movingRect.shapeColor = "red";
    o2.shapeColor = "red";
  }
 else
 {
  movingRect.shapeColor = "green";
  o2.shapeColor = "orange";
 }
 
  drawSprites();
}

