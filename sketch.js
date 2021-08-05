var path,boy, leftBoundary,rightBoundary;
var pathImg,boyImg;
var i;

function preload(){
  pathImg = loadImage("landscape.jpg");
  boyImg = loadAnimation("Person Running.png","Person Running.png");
}

function setup(){
  
  createCanvas(400,400);
  
// Moving background
path=createSprite(400,400);
path.addImage(pathImg);
path.velocityX = -4;
path.scale=1.2;

//creating boy running
boy = createSprite(180,340,30,30);
boy.scale=0.2;
boy.addAnimation("JakeRunning",boyImg);
  
// create left Boundary
//leftBoundary=createSprite(0,0,100,800);
//leftBoundary.visible = false;

//create right Boundary
//rightBoundary=createSprite(410,0,100,800);
//rightBoundary.visible = false;
}

function draw() {
  background(0);
  path.velocityX = -4;
  
  // boy moving on Xaxis with mouse
  boy.x = World.mouseX;
  
  edges= createEdgeSprites();
  boy.collide(edges[3]);
  boy.collide(leftBoundary);
  boy.collide(rightBoundary);
  
  //code to reset the background
  if(path.x > 400 ){
    path.x = width/2;
  }
  
  drawSprites();
}
