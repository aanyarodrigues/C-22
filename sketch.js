var fairy,fairyImg;
var fairySprite;
var bgImg;
var star, starImg;
var starSprite;
var music;
const Engine=Matter.Engine;
const World=Matter.World;
const Bodies=Matter.Bodies;
const Body = Matter.Body;
var engine,world;

function preload(){
  fairyImg=loadAnimation("images/fairy1.png","images/fairy2.png");
  bgImg=loadImage("images/starnight.png");
  starImg=loadImage("images/star.png");
  music=loadSound("sound/JoyMusic.mp3");

}
function setup() {
  var canvas=createCanvas(400,400);
  music.play();
  engine=Engine.create();
  world=engine.world;
  rectMode(CENTER);
  
  fairySprite=createSprite(100, 300, 50,100);
	fairySprite.addAnimation("moving",fairyImg);
  fairySprite.scale=0.2
  
  starSprite=createSprite(350, 50, 25,25);
	starSprite.addImage(starImg)
  starSprite.scale=0.13
  

  var fairy_options={
    isStatic:true
  }
  fairy=Bodies.rectangle(100,300,50,100,fairy_options);
  World.add(world,fairy);

  var star_options={
    isStatic:true
  }
  star=Bodies.rectangle(350,50,25,25,star_options);
  World.add(world,star);


}

function draw() {
  rectMode(CENTER); 
  background(bgImg); 
  Engine.update(engine);
  starSprite.x= star.position.x 
  starSprite.y= star.position.y 

  if(keyDown("left_arrow")){
    fairySprite.x=fairySprite.position.x-2;
  }
  if(keyDown("right_arrow")){
    fairySprite.x=fairySprite.position.x+2;
  }
  if (keyCode === DOWN_ARROW) {
		Matter.Body.setStatic(star,false); 
	}
  if(starSprite.y > 280 && star.position.y > 280 ){
  	Matter.Body.setStatic(star,true);
  }
  
  drawSprites();
}