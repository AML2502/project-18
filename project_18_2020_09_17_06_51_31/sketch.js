var bI,oi,obstaclegroup,ground,score,monkey,m1,gamestate,servival,BananaGroup,ob,b,m2;
function preload() {
 m1=loadAnimation("Monkey_01.png",
"Monkey_02.png","Monkey_03.png","Monkey_04.png","Monkey_05.png","Monkey_06.png","Monkey_07.png","Monkey_08.png","Monkey_09.png","Monkey_10.png");
 bi=loadImage("banana.png");
 oi=loadImage("stone.png");
 m2=loadImage("monkey.jfi")
  
}
function setup() {
  createCanvas(400, 400);
  ground = createSprite(200,380,400,20);
  ground.velocityX = -6;
  monkey = createSprite(100,320,20,50);
  monkey.addAnimation("m",m1);
  monkey.scale=0.13;
  gamestate=1;
  obstaclesGroup=new Group ();
  servival=0;
  BananaGroup=new Group ();
}
function ba(){
  if (frameCount % 60 === 0) {
    b = createSprite(600,120,40,10);
    b.y = Math.round(random(120,200));
    b.addImage(bi);
    b.scale = 0.05;
    b.velocityX = -3;
    
     //assign lifetime to the variable
    b.lifetime = 220;
    BananaGroup.add(b);

  }
}
function o(){
  //write code here to spawn the clouds
  if (frameCount % 300 === 0) {
   ob = createSprite(400,365,10,40);
    ob.addImage(oi);
    ob.scale = 0.1125;
    ob.velocityX = -3;
    
     //assign lifetime to the variable
    ob.lifetime = 220;
    obstaclesGroup.add(ob);
  }
}

function draw() {
  background(220);
  drawSprites();
  monkey.collide(ground);
  ground.x = ground.width/2;
  //console.log(monkey.y);
  text("survival time:"+servival,100,50);
  if (gamestate===1){
    if(keyDown("space") && monkey.y>=320) {
      monkey.velocityY = -20;
    }
    if (BananaGroup.isTouching(monkey)){
      b.destroy();
    }
    servival=round(frameCount/getFrameRate());
    monkey.velocityY = monkey.velocityY + 0.8
    ba();
    o();
    if(obstaclesGroup.isTouching(monkey)){
      gamestate = 0 ;
    }

  } else {
    obstaclesGroup.setLifetimeEach(-1);
    BananaGroup.setLifetimeEach(-1);
    ground.velocityX = 0;
    monkey.velocityY = 0;
    obstaclesGroup.setVelocityXEach(0);
    BananaGroup.setVelocityXEach(0);
    monkey.addAnimation("mo",m2);
  }
  

k
}   