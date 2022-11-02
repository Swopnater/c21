
const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;

function preload()
{
	
}
function setup() {
	createCanvas(800, 700);


	engine = Engine.create();
	world = engine.world;

	//Create the Bodies Here.
	Matter.Bodies.circle(100,100,20)
	
	ground.obj.display()
	ground.obj = new ground (width/2,670,width,20);
	liftside = new ground (1100, 600, 20, 120)

	var ball
	ball_options={
		isStatic: false,
		restitution: 0.3,
		friction:0,
		dencity:1.2
	}
	ball = Bodies.circle(200,200,20, ball_options)
	world.add(world,ball)

	Engine.run(engine);
}

function draw() {
  rectMode(CENTER);
  background(0);
  Engine.update(engine)
  
  drawSprites();
 
}



