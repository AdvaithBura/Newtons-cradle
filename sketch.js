
const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;
const Constraint = Matter.Constraint;

function setup() {
	createCanvas(800, 700);


	engine = Engine.create();
	world = engine.world;

	//Create the Bodies Here.
	bob1 = new Bob(320,250,20);
	bob2 = new Bob(360,250,20);
	bob3 = new Bob(400,250,20);
	bob4 = new Bob(440,250,20);
	bob5 = new Bob(480,250,20);
	cradle1 = new Cradle(400,50,200,30);
	rope1 = new Rope(bob1.body, cradle1.body, -80,0);
	rope2 = new Rope(bob2.body, cradle1.body, -40,0);
	rope3 = new Rope(bob3.body, cradle1.body, 0,0);
	rope4 = new Rope(bob4.body, cradle1.body, 40,0);
	rope5 = new Rope(bob5.body, cradle1.body, 80,0);
	Engine.run(engine);
  
}


function draw() {
	Engine.update(engine);
  rectMode(CENTER);
  background(0);
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
  cradle1.display();
  drawSprites();
  bobMove();
  textSize(30)
  text("To start the action, first hold the up arrow",100,600);
  text(" and then the down arrow", 200,650);
}

function bobMove(){
	if(keyCode === UP_ARROW){
	Matter.Body.applyForce(bob1.body, bob1.body.position, {x:-0.01,y:-0.02})
	//bob1.velocityX = -7;
}
}


