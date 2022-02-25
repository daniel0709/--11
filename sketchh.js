var path,boy
var pathImg,boyImg
var gameState = "play"

function preload(){
  pathImg = loadImage("path.png");
  boyImg = loadAnimation("Runner-1.png","Runner-2.png");
}

function setup(){
  
  createCanvas(400,600);

path=createSprite(200,200);
path.addImage(pathImg);
path.velocityY = 4;


boy = createSprite(70,580,20,20);
boy.scale=0.08;
boy.addImage(boyImg);

}

function draw() {
  drawSprites()


  if(gameState===play){
  background(0);
  boy.x = World.mouseX;
  }

  edges = createEdgeSprites();
  boy.collide(edges);
  

  if(path.y > 400 ){
    path.y = height/2;
  }

   boy.x=200;
   boy.y=300;
   boy.scale=0.6;
}