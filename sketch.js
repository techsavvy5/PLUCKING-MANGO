const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Costraint=Matter.Costraint;
var tree,treeImage;
var ground;
var boy,boyImage;
var mango,mangoImage,mango1,mango2,mango3,mango4,mangoe,mangoe1,mangoe3;
var Stone,stoneImage;
function preload()
{
	treeImage=loadImage("tree.png");
	boyImage=loadImage("boy.png");
	stoneImage=loadImage("stone.png");
}

function setup() {
	createCanvas(800, 700);
	engine = Engine.create();
	world = engine.world;

	tree=createSprite(590,540,10,10);
	tree.addImage(treeImage);
	tree.scale=0.3;
	
	ground=createSprite(450,690,900,14);
	ground.shapeColor="black";

	boy=createSprite(100,650,900,14);
	boy.addImage(boyImage);
	boy.scale=0.07;

	mango=new Mango(500,450,50,50);
	mango1=new Mango(550,400,50,50);
	mango2=new Mango(550,500,50,50);
	mango3=new Mango(630,500,50,50);
	mango4=new Mango(650,410,50,50);

	Stone=createSprite(65,605,50,50);
	Stone.addImage(stoneImage);
	Stone.scale=0.05;

	Engine.run(engine);
}


function draw() {
  background("lightblue");
  Engine.update(engine);
  rectMode(CENTER);

  if(keyDown(RIGHT_ARROW)){
	Stone.velocityX=5;
	Stone.velocityY=-1;
 }
 
  ground.display();
  boy.display();
  tree.display();
  mango.display();
  mango1.display();
  mango2.display();
  mango3.display();
  mango4.display();
  Stone.display();
}


  

