const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Constraint = Matter.Constraint;

var engine, world;
var holder,ball,ground;
var stand1,stand2;
var ball;
var slingShot;
var polygon_img;
function preload(){
  polygon_img=loadImage("polygon.png");
}
function setup() {
  createCanvas(900,400);
  engine = Engine.create();
  world = engine.world;
  Engine.run(engine);
  ground = new Ground();
  stand1 = new Stand(390,300,250,10);
  stand2 = new Stand(700,200,200,10);

  //stand2 blocks
  //level one
  blockA = new Block(635,160,30,40);
  blockB = new Block(665,160,30,40);
  blockC = new Block(695,160,30,40);
  blockD = new Block(725,160,30,40);
  blockE = new Block(755,160,30,40);

  //level two
  blockF = new Block(665,120,30,40);
  blockG = new Block(695,120,30,40);
  blockH = new Block(725,120,30,40);

  //level three
  blockI = new Block(680,80,30,40);
  blockJ = new Block(710,80,30,40);

  //level four
  blockK = new Block(695,40,30,40);
 
  //level one
  block1 = new Block(300,275,30,40);
  console.log(block1);
  block2 = new Block(330,275,30,40);
  block3 = new Block(360,275,30,40);
  block4 = new Block(390,275,30,40);
  block5 = new Block(420,275,30,40);
  block6 = new Block(450,275,30,40);
  block7 = new Block(480,275,30,40);
  //level two
  block8 = new Block(330,235,30,40);
  block9 = new Block(360,235,30,40);
  block10 = new Block(390,235,30,40);
  block11 = new Block(420,235,30,40);
  block12 = new Block(450,235,30,40);
  //level three
  block13 = new Block(360,195,30,40);
  block14 = new Block(390,195,30,40);
  block15 = new Block(420,195,30,40);
  //top
  block16 = new Block(390,155,30,40);

  ball = new hexagon(50,50);
  slingShot = new SlingShot(ball.body,{x:100,y:275});

  

}
function draw() {
  background(56,44,44); 

  fill("yellow");
  textSize(20);
  text("press space for another chance",50,40);


  ground.display();
  stand1.display();
  stand2.display();
  
  strokeWeight(2);
  stroke(15);
  fill("skyblue");
  block1.display();
  block2.display();
  block3.display();
  block4.display();
  block5.display();
  block6.display();
  block7.display();
  blockA.display();
  blockB.display();
  blockC.display();
  blockD.display();
  blockE.display();

  fill("pink");
  block8.display();
  block9.display();
  block10.display();
  block11.display();
  block12.display();
  blockF.display();
  blockG.display();
  blockH.display();

  fill("turquoise");
  block13.display();
  block14.display();
  block15.display();
  blockI.display();
  blockJ.display();

  fill("grey");
  block16.display();
  blockK.display();

  slingShot.display();


  ball.display();

}

function mouseDragged(){
  Matter.Body.setPosition(ball.body, {x: mouseX , y: mouseY});
}

function mouseReleased(){
 slingShot.fly();
}

function keyPressed(){
 if(keyCode === 32){
   slingShot.attach(ball.body);
 }
}