//creating car,wall
//creating speed,weight
var car,wall;
var speed,weight;


function setup() {
  createCanvas(1600,400);

  //sets random speed and weight
  speed = random(55,90);
  weight=random(400,1500);

//sets color of car and wall
  car=createSprite(50,200,50,50);
  wall=createSprite(1300,200,40,height/2);
  car.shapeColor="White";
  wall.shapeColor=("Grey")

}

function draw() {
  background("Black");

  car.velocityX=speed;

  if(car.isTouching(wall)){
      car.velocityX=0;

  }

     var deformation=0.5*weight*speed*speed/22500;

     if(deformation>180){
        car.shapeColor=color(255,0,0);
     }

     if(deformation>100 && deformation<180){
        car.shapeColor=color(230,230,0);
     }

     if(deformation<100){
       car.shapeColor=color(0,255,0);
     }

    
  drawSprites();
}