
const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;

function setup() {
	var ball_options = {
		restitution: 0.2 
	}
	createCanvas(800, 700);
	engine = Engine.create();
	world = engine.world;
	ground=new Ground(400,700,800,20);
	box4=new Ground(400,1,800,20);
	box3=new Ground(1,350,20,700);
	box2=new Ground(670,180,20,20);
	box=new Ground(740,200,160,20);
	box5=new Ground(799,400,20,800);
	ball = Bodies.circle(200,100,20,ball_options);
	World.add(world,ball);
	Engine.run(engine); 
	rectMode(CENTER);
	ellipseMode(RADIUS);
}
function draw() {
  rectMode(CENTER);
  background(0);
  rect(ball.position.x,ball.position.y,40,40);
  box.display();
  box3.display();	
  box2.display();	
  box4.display();
  box5.display();
  ground.display();
  drawSprites();
}
function keyPressed(){
	if(keyCode === UP_ARROW){
		Matter.Body.applyForce(ball,{x:0,y:0},{x:0,y:-0.05});
	}
	if(keyCode === RIGHT_ARROW){
		Matter.Body.applyForce(ball,{x:0,y:0},{x:0.05,y:0});
	}
	if(keyCode === LEFT_ARROW){
		Matter.Body.applyForce(ball,{x:0,y:0},{x:-0.05,y:0});
	}
}


