const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Constraint = Matter.Constraint;

var engine, world;
var holder,polygon,ground;
var stand1,stand2;
var polygon;
var slingShot;
var polygon_img;loadImage("atta_img2-removebg-preview.png");
function preload(){
  polygon_img=loadImage("polygon.png");

  viv = loadImage("viv_img-removebg-preview.png");
  me = loadImage("my_gown-removebg-preview.png");
  mopa = loadImage("mopa_img-removebg-preview.png");
  nobi = loadImage("nobi_img-removebg-preview.png");
  dor = loadImage("doraemon_a_cute_little_robot-removebg-preview.png");
  mikeImg = loadImage("download (1).png");
  sound = loadSound("Recording (8).m4a");
}
function setup() {
  createCanvas(1000,700);
  engine = Engine.create();
  world = engine.world;
  Engine.run(engine);

  mike = createSprite(360,600,20,20);
  mike.addImage(mikeImg);
  mike.scale = 0.3;

 // mike.play(sound);
//playSound("Recording (8).m4a");


  ground = new Ground();
  stand1 = new Stand(390,300,250,10);
  stand2 = new Stand(700,200,200,10);
 
  //level one
  block1 = new Block(300,275,30,40);
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

  //set 2 for second stand
  //level one
  blocks1 = new Block(640,175,30,40);
  blocks2 = new Block(670,175,30,40);
  blocks3 = new Block(700,175,30,40);
  blocks4 = new Block(730,175,30,40);
  blocks5 = new Block(760,175,30,40);
  //level two
  blocks6 = new Block(670,135,30,40);
  blocks7 = new Block(700,135,30,40);
  blocks8 = new Block(730,135,30,40);
  //top
  blocks9 = new Block(700,95,30,40);

  //polygon holder with slings
  polygon = Bodies.circle(50,200,20);
  World.add(world,polygon);
  
  slingShot = new Slingshot(this.polygon,{x:100,y:200});

}
function draw() {
  background("darkblue"); 
  image(me,-40,210,400,400);
  image(mopa,10,300,300,300);
  image(viv,730,-180,400,600);
  image(nobi,570,195,300,300);
  image(dor,750,200,300,300);
  //Engine.update(engine);
  
  //playing the sound
 if (keyDown("left")){
 sound.play();
  }
  
  textSize(20);
  fill("lightyellow");
  text("Drag the polygon to destroy the blocks",300,30);
  textSize(20);
  text("Press Space to get a second Chance to Play!!",400 ,50);
  textSize(20);
  text("👈👈Do remember to press the left arrow key before you start!",420,620);
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
  fill("pink");
  block8.display();
  block9.display();
  block10.display();
  block11.display();
  block12.display();
  fill("turquoise");
  block13.display();
  block14.display();
  block15.display();
  fill("grey");
  block16.display();
  fill("skyblue");
  blocks1.display();
  blocks2.display();
  blocks3.display();
  blocks4.display();
  blocks5.display();
  fill("turquoise");
  blocks6.display();
  blocks7.display();
  blocks8.display();
  fill("pink")
  blocks9.display();
  fill("gold");
  imageMode(CENTER)
  image(polygon_img ,polygon.position.x,polygon.position.y,40,40);

  slingShot.display();
  
  drawSprites();
}//function draw bracket

function mouseDragged(){
  Matter.Body.setPosition(this.polygon,{x:mouseX,y:mouseY});
}
function mouseReleased(){
  slingShot.fly();
}
function keyPressed(){
//write code for extra chance of the player
if(keyCode === 32){
slingShot.attach(this.polygon);
}

}//keypressed bracket
