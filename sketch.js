const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;

var box1,box2,box3,box4,box5,box6,box7,box8,box9,box10,box11,box12;
var polygon;
var sling;
var backgroundImg;
var score=0;
var gameState="onsling";

function preload() {
  
  getBackgroundImage();
}

function setup() {
  createCanvas(1000,600);
 
 engine = Engine.create();
 world = engine.world;


 box1 = new Box(300,200,50,50);
 box2 = new Box(350,200,50,50);
 box3 = new Box(400,200,50,50);
 box4 = new Box(325,150,50,50);
 box5 = new Box(375,150,50,50);
 box6 = new Box(350,100,50,50);

 box7 = new Box(500,550,50,50);
 box8 = new Box(550,550,50,50);
 box9 = new Box(600,550,50,50);
 box10 = new Box(525,500,50,50);
 box11 = new Box(575,500,50,50);
 box12 = new Box(550,450,50,50);

 box13 = new Box(750,350,50,50);
 box14 = new Box(800,350,50,50);
 box15 = new Box(850,350,50,50);
 box16 = new Box(775,300,50,50);
 box17 = new Box(825,300,50,50);
 box18 = new Box(800,250,50,50);

ground1 = new Ground(350,225,170,10);
ground2 = new Ground(550,575,170,10);
ground3 = new Ground(800,375,170,10);
support = new Ground(595,600,1200,10);


polygon=new Polygon(100,300,40,40);
World.add(world,polygon.body);

sling=new SlingShot(polygon.body,{x:100,y:300});

}

function draw() {
  if(backgroundImg){
  background(backgroundImg); 
  }
  Engine.update(engine);

  textSize(30);
  fill("white");
  noStroke();
  text("Score : "+score,480,30);
  
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
  box17.score();
  box18.score();


  fill("red");
  box1.display();
  fill("yellow");
  box2.display();
 fill("pink");
  box3.display();
  fill("green");
  box4.display();
  fill("blue");
  box5.display();
 fill("cyan");
  box6.display();
 
  fill("red");
  box7.display();
  fill("green");
  box8.display();
  fill("cyan");
  box9.display();
  fill("yellow");
  box10.display();
  fill("blue");
  box11.display();
  fill("pink");
  box12.display();

  fill("pink");
  box13.display();
  fill("blue");
  box14.display();
  fill("cyan");
  box15.display();
  fill("yellow");
  box16.display();
  fill("green");
  box17.display();
  fill("red");
  box18.display();

 ground1.display();
 ground2.display();
 ground3.display();

 fill("orange");
 polygon.display();

 sling.display();
 
}

function mouseDragged(){
  if(gameState=="onsling"){
    Matter.Body.setPosition(polygon.body, {x: mouseX , y: mouseY});
  }
 }


function mouseReleased(){
  sling.fly();
  gameState="launched";
}


function keyPressed(){
  if(keyCode === 32 && gameState=="launched"){
     sling.attach(polygon.body);
  }
}

async function getBackgroundImage(){
  var response=await fetch ("http://worldtimeapi.org/api/timezone/Asia/Kolkata")
  var responseJSON=await response.json();
  var datetime=responseJSON.datetime;
  var hour=datetime.slice(11,13);
  if(hour>6 && hour<18){
   bg="bg.png";
  } else{
    bg="bg2.jpg";
 }
  backgroundImg=loadImage(bg);
 }