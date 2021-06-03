
const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;



function setup() {
	createCanvas(800, 700);


	engine = Engine.create();
	world = engine.world;

	//Create the Bodies Here.

    
     groundObj = new  ground(width/2,670,width,20)
     paperObj = new papper(200,450,40)
     

	Engine.run(engine);
  
}


function draw() {
  rectMode(CENTER);
  background(0);
  
 
  paperObj.display()
  groundObj.display()
  
   
}

function keyPressed() {
  if (keyCode === UP_ARROW) {

    Matter.Body.applyForce(paperObj.body,paperObj.body.position,{x:100,y:-105});

  
  }
}


