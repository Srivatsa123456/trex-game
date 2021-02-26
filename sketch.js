var trex, trex_running, trex_collided;
var ground, invisibleGround, groundImage;
var cloud,cloudImage;
var obstacle,obstacleImage



var score;


function preload(){
  trex_running = loadAnimation("trex1.png","trex2.png","trex3.png");
  trex_collided = loadImage("trex_collided.png");
  cloudImage=loadImage("cloud.png")
  groundImage = loadImage("ground2.png");
  obstacleImage=loadImage("obstacle1.png")
 
  
}

function setup() {
  

  createCanvas(600,200)
  
  //create a trex sprite
  trex = createSprite(50,160,20,50);
  trex.addAnimation("running", trex_running);
  trex.scale = 0.5;
  
  //create a ground sprite
  ground = createSprite(200,180,400,20);
  ground.addImage("ground",groundImage);
  ground.x = ground.width /2;
  ground.velocityX = -4;
  
  //creating invisible ground
  invisibleGround = createSprite(200,190,400,10);
  invisibleGround.visible = false;
  
 

  
  //generate random numbers

}

function draw() {
  //set background color
  background("green");
  
  
  console.log(trex.y)
  
  
  
  // jump when the space key is pressed
  if(keyDown("space")&& trex.y >= 100) {
    trex.velocityY = -10;
  }
  
  trex.velocityY = trex.velocityY + 0.8
  
  if (ground.x < 0){
    ground.x = ground.width/2;
  }
  
  //stop trex from falling down
  trex.collide(invisibleGround);
  
  //Spawn Clouds
  spawnClouds()
  spawnObstacle()
  
  drawSprites();
}

//function to spawn the clouds
function spawnClouds(){
 // write your code here 
 if(frameCount%300===0)
  {
  cloud=createSprite(600,50,20,20)
  cloud.addImage("cloud",cloudImage)
  cloud.scale=0.1
  cloud.velocityX=-2
  cloud.y=Math.round(random(30,100))
  cloud.depth=trex.depth;
  trex.depth=trex.depth+1;
  
  }
}

function spawnObstacle(){
  if(frameCount%150===0)
  {
    obstacle=createSprite(100,160,20,20)
    obstacle.addImage("obstacle",obstacleImage)
    obstacle.scale=0.6
    obstacle.velocityX=-2
    obstacle.x=Math.round(random(500,600))
    
  }
}