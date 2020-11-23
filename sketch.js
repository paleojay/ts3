const Engine = Matter.Engine;
const World= Matter.World;
const Bodies = Matter.Bodies;
const Constraint = Matter.Constraint;

var engine, world;
var box1;
var slingshot;
var score = 0;


function setup() {
  createCanvas(1200,400);
  createSprite(400, 200, 50, 50);
  engine = Engine.create();
  world = engine.world;
  box1 = new box(300,110,30,20);
  box2 = new box(600,200,1200,20);
  box3 = new box(600,200,1200,20);
  box4 = new box(600,200,1200,20);
  box5 = new box(600,200,1200,20);
  box6 = new box(600,200,1200,20);
  box7 = new box(600,200,1200,20);
  box8 = new box(600,200,1200,20);
  box9 = new box(600,200,1200,20);
  box10 = new box(600,200,1200,20);
  box11= new box(600,200,1200,20);
  box12 = new box(600,200,1200,20);
  box13 = new box(600,200,1200,20);
  box14 = new box(600,200,1200,20);
  box15 = new box(600,200,1200,20);
  box16 = new box(600,200,1200,20);
  polygon=Bodies.circle(50,200,20);
  World.add(world,polygon);
  slingshot = new SlingShot(this.polygon,{x:100, y:200});
  ground = new Ground(600,height,1200,20);
  ground1 = new Ground(400,200,150,25);
}

function draw() {
  background(255,255,255);  
  Engine.update(engine);
  text("SCORE : "+score,75040)
  ground.display();
  ground1.display();
  
  slingshot.display();  
  display();
  box1.display();
  box2.display();
  box3.display();
  box4.display();
  box5.display();
  box6.display();
  box7.display();
  box8.display();
  box9.display();
  box10.display();
  box11.display();
  box12.display();
  box13.display();
  box14.display();
  box15.display();
  box16.display();
  box1.score();
  box2.score();
  box3.score();
  box4.score();
  box5.score();
  box6.score();
  box7.score();
  box8.score();
  box9.score();
  box10.score();
  box11.score();
  box12.score();
  box13.score();
  box14.score();
  box15.score();
  box16.score();
 


  drawSprites();
}


function mouseDragged(){
 Matter.Body.setPosition(polygon.body, {x: mouseX , y: mouseY});
}


function mouseReleased(){
  slingshot.fly();
}

function keyPressed(){
  if(keyCode===32){
      slingshot.attach(bird.body);
  }
}