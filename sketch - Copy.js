

function preload(){
    bg = loadImage("images/bg.jpg")
    playerImg1 = loadImage("images/boy.png")
    playerImg2 = loadImage("images/boy2.png")
    playerImg3 = loadImage("images/boy3.png")
    ob1 = loadImage("images/bat.png")
    ob2 = loadImage("images/creature_03.png")
    ob3 = loadImage("images/ob1.png")
    ob4 = loadImage("images/ob2.png")
    ob5 = loadImage("images/alien_03.png")
  trophy1 = loadImage("images/trophy.png")
  
  
  
  
  }
function setup(){
createCanvas(windowWidth/2,windowHeight)
console.log(windowWidth,windowHeight)
 wall1 = createSprite(0,70,400,10)
 wall2 = createSprite(400,20,200,10)
 wall3 = createSprite(700,100,400,10)
 wall4 = createSprite(70,150,400,10)
 wall5 = createSprite(800,200,200,10)
 wall6 = createSprite(250,150,200,10)
 wall7 = createSprite(300,250,400,10)
 wall8 = createSprite(350,310,10,100)
 wall9 = createSprite(480,310,10,100)
 wall10 = createSprite(650,310,10,100)
 wall11 = createSprite(100,450,600,10)
 wall12 = createSprite(500,600,400,10)
 wall13 = createSprite(100,550,600,10)
 wall14 = createSprite(800,60,60,10)
 wall15 = createSprite(100,650,600,10)
 wall16 = createSprite(800,680,300,10)
 wall17 = createSprite(300,750,400,10)
 wall18 = createSprite(500,450,60,10)

 obstacle1 = createSprite(400,750,20,10)
 obstacle2 = createSprite(400,650,20,10)
 obstacle3 = createSprite(400,450,20,10)
 obstacle4 = createSprite(200,250,20,10)
 obstacle5 = createSprite(400,50,20,10)



 obstacle1.addImage(ob1)
obstacle1.scale = 0.2
obstacle2.addImage(ob2)
obstacle2.scale = 0.2
obstacle3.addImage(ob3)
obstacle3.scale = 0.2
obstacle4.addImage(ob4)
obstacle4.scale = 0.2
obstacle5.addImage(ob5)
obstacle5.scale = 0.2




trophy = createSprite(780,750,50,50)
trophy.shapeColor= "Yellow"
trophy.addImage(trophy1)
trophy.scale = 0.07


 player = createSprite(50,10,30,30)
player.shapeColor = "orange"
player.addImage(playerImg2)
 player.scale = 0.2



edges = createEdgeSprites();
wall1.shapeColor = rgb(random(0,255),random(0,255),random(0,255))
wall2.shapeColor = rgb(random(0,255),random(0,255),random(0,255))
wall3.shapeColor = rgb(random(0,255),random(0,255),random(0,255))
wall4.shapeColor = rgb(random(0,255),random(0,255),random(0,255))
wall5.shapeColor = rgb(random(0,255),random(0,255),random(0,255))
wall6.shapeColor = rgb(random(0,255),random(0,255),random(0,255))
wall7.shapeColor = rgb(random(0,255),random(0,255),random(0,255))
wall8.shapeColor = rgb(random(0,255),random(0,255),random(0,255))
wall9.shapeColor = rgb(random(0,255),random(0,255),random(0,255))
wall10.shapeColor = rgb(random(0,255),random(0,255),random(0,255))
wall11.shapeColor = rgb(random(0,255),random(0,255),random(0,255))
wall12.shapeColor = rgb(random(0,255),random(0,255),random(0,255))
wall13.shapeColor = rgb(random(0,255),random(0,255),random(0,255))
wall14.shapeColor = rgb(random(0,255),random(0,255),random(0,255))
wall15.shapeColor = rgb(random(0,255),random(0,255),random(0,255))
wall16.shapeColor = rgb(random(0,255),random(0,255),random(0,255))
wall17.shapeColor = rgb(random(0,255),random(0,255),random(0,255))
wall18.shapeColor = rgb(random(0,255),random(0,255),random(0,255))


obstacle1.velocityX = random(10,20)
obstacle2.velocityX = random(10,20)
obstacle3.velocityX = random(10,20)
obstacle4.velocityY = random(10,20)
obstacle5.velocityY = random(10,20)

}

function draw(){
   
background(bg);

if(keyDown("UP_ARROW")){
    player.y -=5
    player.addImage(playerImg2)
}
if(keyDown("DOWN_ARROW")){
    player.y +=5
    player.addImage(playerImg2)
}
if(keyDown("LEFT_ARROW")){
    player.x -=5
    player.addImage(playerImg1)
}
if(keyDown("RIGHT_ARROW")){
    player.x +=5
    player.addImage(playerImg3)
}
player.addImage(playerImg2)
player.bounceOff(edges);

player.bounceOff(wall1)
player.bounceOff(wall2)
player.bounceOff(wall3)
player.bounceOff(wall4)
player.bounceOff(wall4)
player.bounceOff(wall5)
player.bounceOff(wall6)
player.bounceOff(wall7)
player.bounceOff(wall8)
player.bounceOff(wall9)
player.bounceOff(wall10)
player.bounceOff(wall11)
player.bounceOff(wall12)
player.bounceOff(wall13)
player.bounceOff(wall14)
player.bounceOff(wall15)
player.bounceOff(wall16)
player.bounceOff(wall17)
player.bounceOff(wall18)


obstacle1.bounceOff(edges)
obstacle2.bounceOff(edges)
obstacle3.bounceOff(edges)
obstacle4.bounceOff(edges)
obstacle5.bounceOff(edges)


if(player.isTouching(obstacle1)|| player.isTouching(obstacle2)
||player.isTouching(obstacle3)||player.isTouching(obstacle4)
||player.isTouching(obstacle5)){
player.x = 50;
player.y = 10;
}


if(player.isTouching(trophy)){
    obstacle1.setVelocity(0,0)
    obstacle2.setVelocity(0,0)
    obstacle3.setVelocity(0,0)
    obstacle4.setVelocity(0,0)
    obstacle5.setVelocity(0,0)
    player.setVelocity(0,0)
    textSize(100);
    fill(rgb(random(0,255),random(0,255),random(0,255)))
    text("YOU WIN",width/2-100,height/2)
    


  }



//textSize(20)
//fill("black")
//text("wall17", wall17.x,wall17.y)

drawSprites();

}









