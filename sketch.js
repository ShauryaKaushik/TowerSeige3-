const Engine = Matter.Engine;
const World= Matter.World;
const Bodies = Matter.Bodies;
const Constraint = Matter.Constraint;

var engine, world;
var box1;
var platform;
var bird, slingShot;
var gameState = "onSling";
var bg; 
var score = 0;
var backgroundImg;

function preload(){

getBackgroundImg();

}


function setup(){
    var canvas = createCanvas(1200,400);
    engine = Engine.create();
    world = engine.world;


    ground = new Ground(600,height,1200,20);
    platform = new Ground(700, 305, 250, 10);

    box1 = new Box(585,280,70,20,"blue");
    box2 = new Box(665,280,70,20,"black");
    box3 = new Box(745,280,70,20,"orange");
    box4 = new Box(615,250,70,20,"green");
    box5 = new Box(705,250,70,20,"purple");
    box6 = new Box(660,220,70,20,"pink");
    
    

    hexagon = new Hexagon(180,50);

    slingshot = new SlingShot(hexagon.body,{x:190, y:50});
}

function draw(){
 
    if(backgroundImg)
    background(backgroundImg);

    noStroke();
    textSize(35)
    fill("blue")
    text("Score  " + score, width-300, 50)

    background("white")
    Engine.update(engine);
    strokeWeight(4);
    box1.display();
    box2.display();
    ground.display();
    box3.display();
    box4.display();
    box5.display();
    box6.display();

	hexagon.display();
	
    platform.display();
	
    slingshot.display();
    
   box1.score();
   box2.score();
   box3.score();
   box4.score();
   box5.score(); 
   box6.score();
}

function mouseDragged(){
    Matter.Body.setPosition(hexagon.body, {x: mouseX , y: mouseY});
}


function mouseReleased(){
    slingshot.fly();
}

function keyPressed(){

    if(keyCode === 32){

        slingshot.attach(hexagon.body);
        
         }   
}

async function getBackgroundImg(){
    var response = await fetch("http://worldtimeapi.org/api/timezone/Asia/Kolkata");
    var responseJSON = await response.json();

    var datetime = responseJSON.datetime;
    var hour = datetime.slice(11,13);
    
    if(hour>=0600 && hour<=1900){
        bg = "sprites/bg1.png";
    }
    else{
        bg = "sprites/bg2.jpg";
    }

    backgroundImg = loadImage(bg);

}
