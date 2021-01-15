const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;
const Constraint = Matter.Constraint;
const Render = Matter.Render

var engine, world;

function setup() {
	createCanvas(800, 700);

	engine = Engine.create();
	world = engine.world;

	bobDiameter=40; 

	startBobPositionX=width/2; 
	startBobPositionY=height/4+500; 

	bobObject1=new bob(startBobPositionX-bobDiameter*2,startBobPositionY,bobDiameter);
	bobObject2=new bob(startBobPositionX-bobDiameter*1,startBobPositionY,bobDiameter); 
	bobObject3=new bob(startBobPositionX,startBobPositionY,bobDiameter); 
	bobObject4=new bob(startBobPositionX+bobDiameter*1,startBobPositionY,bobDiameter); 
	bobObject5=new bob(startBobPositionX+bobDiameter*2,startBobPositionY,bobDiameter);
	
	roof = new roof (width/2,70,width,20);
	rope1 = new rope(bobObject1.body,roof.body,-bobDiameter*2,0); 
	rope2 = new rope(bobObject2.body,roof.body,-bobDiameter*1,0); 
	rope3 = new rope(bobObject3.body,roof.body,-bobDiameter,0); 
	rope4 = new rope(bobObject4.body,roof.body,+bobDiameter*1,0); 
	rope5 = new rope(bobObject5.body,roof.body,+bobDiameter*2,0);

	Engine.run(engine);
  
}

function draw() {
  rectMode(CENTER);
  background(0);
  
  roof.display();
  rope1.display();
  rope2.display();
  rope3.display();
  rope4.display();
  rope5.display();
  bobObject1.display();
  bobObject2.display();
  bobObject3.display();
  bobObject4.display();
  bobObject5.display();
 
}
function keyPressed() {
	if (keyCode === UP_ARROW) {
	   Matter.Body.applyForce(bobObject1.Body.position,roof.Body,{x:-730,y:0});
	 }
   }

   function drawLine(constraint) { 
   bobBodyPosition=constraint.bodyA.position 
   roofBodyPosition=constraint.bodyB.position 
   roofBodyOffset=constraint.pointB; 
   roofBodyX=roofBodyPosition.x+roofBodyOffset.x 
   roofBodyY=roofBodyPosition.y+roofBodyOffset.y 
   line(bobBodyPosition.x, bobBodyPosition.y, roofBodyX,roofBodyY);
 }