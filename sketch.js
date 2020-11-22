var fixedRect, movingRect;

function setup() {
  createCanvas(1200,800);
  fixedRect = createSprite(600, 400, 50, 80);
  fixedRect.shapeColor = "green";
  fixedRect.debug = true;

  movingRect = createSprite(1000,400,80,30);
  movingRect.shapeColor = "green";
  movingRect.debug = true;
  movingRect.velocityX=-2;

  rect3=createSprite(200,400,50,80);
  rect3.shapeColor = "green";
  rect3.debug = true;

  rect4=createSprite(400,400,50,80);
  rect4.shapeColor = "green";
  rect4.debug = true;

  rect5=createSprite(800,400,50,80);
  rect5.shapeColor = "green";
  rect5.debug = true;

}

function draw() {
  background(0,0,0);  
 // movingRect.x = World.mouseX;
 // movingRect.y = World.mouseY;

 if( isTouching(movingRect,rect4) ){
  movingRect.shapeColor = "red";
  rect4.shapeColor = "red";
 } 
else{
  movingRect.shapeColor = "green";
  rect4.shapeColor = "green";
}
bounceOff(movingRect,rect5);
  drawSprites();
}











