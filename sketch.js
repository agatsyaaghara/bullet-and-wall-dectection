var car,wall;
var speed,weigt;

function setup() {
  createCanvas(800,400);
  speed=random(55,90)
	weight=random(400,1500)


	car=createSprite(50, 200, 50,50);   

	car.velocityX = speed;

	car.shapeColor=color(255);


  
  	wall=createSprite(750,200, 20, height/2)
    wall.shapeColor=color(95,147,227)
    wall.isStatic=true;
}

function draw() {
  background(0);  

  if(wall.x-car.x<(car.width+wall.width)/2){
    car.velocityX=5;
    var deformation=0.5* weight* speed* speed/22509;
    if(deformation>180){
      wall.shapeColor=color(255,0,0);
    }
   if(deformation<180 && deformation>100){
     wall.shapeColor=color(0,255,0)
   }
   
 
  
  
  
  }
  
  drawSprites();
}
