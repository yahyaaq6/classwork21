//Doge the car

var boundary1, boundary2, boundary3, boundary4;
var player;
var obstacle1, obstacle2, obstacle3, obstacle4;
var Meteorite, Rocket, SolarSystem, Star;
var MeteoriteImg, RocketImg, SolarSystemImg, StarImg;

function preload(){
    MeteoriteImg = loadImage("Meteorite.png");
    RocketImg = loadImage("Rocket.png");
    SolarSystemImg = loadImage("SolarSystem.png");
    StarImg = loadImage("Star.png");
}

function setup() {
    SolarSystem = createSprite(200,180,400,20);
    SolarSystem.addImage("SolarSystem.png",SolarSystemImg);
    SolarSystem.x = SolarSystem.width/2;

    boundary1 = createSprite(200,100,1000,0.1);
    boundary2 = createSprite(200,250,1000,0.1);
    boundary3 = createSprite(0,175,0.1,155);
    boundary4 = createSprite(400,175,0.1,155);
    
    player = createSprite(25,175,25,25);

    obstacle1 = createSprite(73,225,15,15);
    obstacle2 = createSprite(148, 125, 15, 15);
    obstacle3 = createSprite(223, 225, 15, 15);
    obstacle4 = createSprite(298, 125, 15, 15);

    boundary1.shapeColor = ("black");
    boundary2.shapeColor = ("black");
    boundary3.shapeColor = ("black");
    boundary4.shapeColor = ("black");
    player.shapeColor = ("Purple");

    obstacle1.shapeColor = ("red");
    obstacle2.shapeColor = ("orange");
    obstacle3.shapeColor = ("Green");
    obstacle4.shapeColor = ("Blue");

    obstacle1.velocityY = -3;
    obstacle1.velocityX = -2;

    obstacle2.velocityY = 3;
    obstacle2.velocityX = -2;

    obstacle3.velocityY = -3;
    obstacle3.velocityX = -2;

    obstacle4.velocityY = 3;
    obstacle4.velocityX = -2;

    SolarSystem.velocityX = -2;

    boundary1.visible = ("false");
    boundary2.visible = ("false");
    boundary3.visible = ("false");
    boundary4.visible = ("false");

    player.addImage("Rocket.png",RocketImg);
}


    /*obstacle1.bounceOff(boundary1);
    obstacle1.bounceOff(boundary2);
    obstacle2.bounceOff(boundary1);
    obstacle2.bounceOff(boundary2);
    obstacle3.bounceOff(boundary1);
    obstacle3.bounceOff(boundary2);
    obstacle4.bounceOff(boundary1);
    obstacle4.bounceOff(boundary2);*/

function draw() {
   
    background("0");

   // createEdgeSprites();
   createEdgeSprites();
    
   if (SolarSystem.x < 0){
    SolarSystem.x = SolarSystem.width/2;

     var a = Math.round(random(1,6));
    switch (a){
      case 1 : obstacle.addImage(obstacle1);
      break;
      case 2 : obstacle.addImage(obstacle2);
      break;
      case 3 : obstacle.addImage(obstacle3);
      break;
      case 4 : obstacle.addImage(obstacle4);
      break;

      default : break;
  
    }   
  }
  
   drawSprites();

}

