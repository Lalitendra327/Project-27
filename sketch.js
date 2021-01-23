
const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;
const Constraint = Matter.Constraint;

var bob1, bob2, bob3,bob4,bob5;
var roof1, ground;
var rope1,rope2,rope3,rope4,rope5;

function preload()
{
	
}

function setup() {
	createCanvas(800, 700);


	engine = Engine.create();
	world = engine.world;

	bob1 = new bob(320,500,40);
	bob2 = new bob(360,500,40);
	bob3 = new bob(400,500,40);
	bob4 = new bob(440,500,40);
	bob5 = new bob(480,500,40);

  roof1 = new roof(400,200,400,40);
  //ground = new roof(400,600,400,40);

  rope1 = new rope(bob1.body,roof1.body,-80,0);
  rope2 = new rope(bob2.body,roof1.body,-40,0);
  rope3 = new rope(bob3.body,roof1.body,0,0);
  rope4 = new rope(bob4.body,roof1.body,40,0);
  rope5 = new rope(bob5.body,roof1.body,80,0);


	Engine.run(engine);
  
}


function draw() {
  rectMode(CENTER);
  background("white");

  Engine.update(engine);

  roof1.display();

  rope1.display();
  rope2.display();
  rope3.display();
  rope4.display();
  rope5.display();

  bob1.display();
  bob2.display();
  bob3.display();
  bob4.display();
  bob5.display();

  
  //ground.display();

 
  
  drawSprites();
 
}

function keyPressed() {
  if (keyCode === UP_ARROW) {

    Matter.Body.applyForce(bob1.body,bob1.body.position,{x:-45,y:-45});

  }
}



