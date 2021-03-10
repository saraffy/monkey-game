
var monkey , monkey_running
var banana ,bananaImage, obstacle, obstacleImage
var foodGroup, obstacleGroup
var score
var ground

var score

function preload(){
  
  
  monkey_running =            loadAnimation("sprite_0.png","sprite_1.png","sprite_2.png","sprite_3.png","sprite_4.png","sprite_5.png","sprite_6.png","sprite_7.png","sprite_8.png")
  
  bananaImage = loadImage("banana.png");
  obstacleImage = loadImage("obstacle.png");
 
}



function setup() {
  createCanvas(400,400);
  monkey = createSprite(80,315,20,20);
  monkey.addAnimation("moving",monkey_running)
  monkey.scale = 0.1; 
  
  ground = createSprite(200,350,400,10);
  ground.velocityX = -4;
  ground.x=ground.width/2;
  console.log(ground.x);
  
  foodGroup = createGroup();
  obstacleGroup = createGroup();
  
  score = 0;
}


function draw() {
  background(255);
  text("score: "+ score, 300,50);
  
  if(ground.x<0){
    ground.x = ground.width/2;
  }
  if(keyDown("SPACE")){
    monkey.velocityY = -7;
  }
  
  score = score + Math.round(getFrameRate()/60);
   
  monkey.velocityY = monkey.velocityY + 0.4;
   monkey.collide(ground);

  spawnFood();
  spawnObstacle();
  drawSprites();
}

function spawnFood(){
  if(frameCount % 80 == 0){
    banana = createSprite(600,200,40,10);
    banana.y = random (120,200);
    banana.velocityX = -5;
    banana.lifetime = 300;
    monkey.depth = banana.depth + 1
    banana.addImage(bananaImage);
    banana.scale = 0.08;
    foodGroup.add(banana);
  }
}

function spawnObstacle(){
  if(frameCount % 100 == 0){
    obstacle = createSprite(800,310,10,40);
    obstacle.velocityX = -5;
    obstacle.lifetime = 300;
    obstacle.addImage(obstacleImage);
    obstacle.scale = 0.2;
    obstacleGroup.add(obstacle);
  }
}




