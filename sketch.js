
const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;
const Render = Matter.Render;
var dustbinObj,groundObject	
var world;
var paper;


function setup() {
	createCanvas(1600, 700);

	engine = Engine.create();
	world = engine.world;

	dustbinObj=new Dustbin(1200,650);

	paperObj=new Paper(210,450,40);
	paperObj.scale = 0.1;

	groundObj=new ground(width/2,670,width,20);
	
	Engine.run(engine);
  
}


function draw() {
  rectMode(CENTER);
  background(230);
  Engine.update(engine);
 

  groundObj.display();
  dustbinObj.display();
  paperObj.display();

}

function keyPressed() {
	 if (keyCode === UP_ARROW) {
		 Matter.Body.applyForce(paperObj.body,paperObj.body.position,{x:80,y:-95}); }
	 }

