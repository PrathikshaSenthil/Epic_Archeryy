const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Constraint = Matter.Constraint;

var engine, world;
var canvas;
var base1,base2, base2Img, base1Img,player1,player2,playerImg,playerImg;
var bg,bgImg;

function preload(){
  
  base2Img=loadImage("base2.png");
  base1Img=loadImage("base1.png");
 playerImg=loadImage("right.png");
   player2Img=loadImage("left.png");
  bgImg=loadImage("bg.png");
  
  
}


function setup() {
  canvas = createCanvas(windowWidth, windowHeight);
  
// itialising Engine
  engine = Engine.create();
  world = engine.world;
	
   //Create Player Base and Computer Base Object
   base1= new PlayerBase(30,30,10);
  base2 = new ComputerBase (30,30,10);
   player1= new Player1 (30,30,10);
  player2= new Player2 (30,30,10);
   
  

 }

function draw() {

  background(bgImg,30,30);

  Engine.update(engine);

  // Title
  fill(" #FFD700");
  textAlign("center");
  textSize(40);
  textFont("algeria");
  stroke("#033006")
   strokeWeight("6")
  text("🅔🅟🅘🅒", width / 2, 100);
   text("🅐🅡🅒🅗🅔🅡🅨🏹", width / 2+20, 140);

   //Display P.diase and computer base 
base2.display();
base1.display();
  player1.display();
   player2.display();


   //display Player and computerplayer


}
