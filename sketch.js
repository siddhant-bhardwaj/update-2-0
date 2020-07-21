var player,player_image;
var ground;
var enmy, enmy_image;
var purplekey, purplekey_Image;
var purpleSafe, purpleSafe_Image, purplesafeunlockedimg;
var flash;
var door, hammer, orangekey,orangelock,yellowkey,yellowlock;
var greenkey,greenlock,lock,code,redkey,redlock,stungun,whitekey,whitelock;
var plank;
var flashimage,doorimage,hammerimage,orangekeyimage,orangelockimage,yellowkeyimage,yellowlockimage;
var greenkeyimage,greenlockimage,lockimage,codeimage,redkeyimage,redlockimage,stungunimage,whitekeyimage,whitelockimage;
var plankimage;
var livingroom,livingroomimage;
var kitchen, kitchenimg;
var study, studyimg;
var boiler, boilerimg;
var backyard, backyardimg;
var ground;
var gameState = "start";
var attack = "Reload";
var room,rooming;
var door1,door1img;
var bathroom,bathroomimg;
var bed,bedimg;
var door3;
var door3img;
var attic,atticimg;
var player_running;
var door4,door4img;
var winning,winningimg;
var travel="l1";
var startimg;
var playerimg2;
var button;
var input;
var edges;
var greeting;
var move=false;
var restart;

function preload(){
  player_image= loadAnimation("Images/DipperPines.png");
  player_running= loadAnimation("Images/DipperPines.png","Images/DipperRunning.png");
  playerimg2 = loadAnimation("Images/DipperPines2.png","Images/DipperRunning2.png");
  flashimage = loadImage("Images/Bluelight.jpg");
  doorimage = loadImage("Images/door.png");
  hammerimage = loadImage("Images/Hammer.png");
  orangekeyimage = loadImage("Images/orangekey.png");
  orangelockimage = loadImage("Images/orangelock.png");
  yellowkeyimage = loadImage("Images/yellowkey.png");
  yellowlockimage = loadImage("Images/yellowlock.png");
  enmy_image= loadImage("Images/Villian.png");
  purplekey_Image = loadImage("Images/Purplekey.png");
  purpleSafe_Image = loadAnimation("Images/Purplesafelocked.png");
  purplesafeunlockedimg = loadAnimation("Images/purplesafeunlocked.png");
  kitchenimg = loadAnimation("Images/Kitchen2room.jpg");
  studyimg = loadAnimation("Images/study.jpg");
  roomimg = loadAnimation("Images/Extraroom2.jpg");
  greenkeyimage = loadImage("Images/greenkey.png");
  greenlockimage = loadImage("Images/greenlock.png");
  lockimage = loadImage("Images/Lock.png");
  codeimage  = loadImage("Images/lockcode.png");
  redkeyimage  = loadImage("Images/redkey.png");
  redlockimage = loadImage("Images/redlock.png");
  stungunimage = loadImage("Images/stungun.png");
  //whitekeyimage = loadImage("Images/whitekey.gif");
  //whitelockimage = loadImage("");
  plankimage = loadImage("Images/plank.png");
  livingroomimage = loadAnimation("Images/livingroom2.jpg");
  boilerimg = loadAnimation("Images/BoilerRoom.jpg");
  backyardimg = loadAnimation("Images/Backyard.jpg");
  door1img = loadImage("Images/door.png");
  bathroomimg=loadAnimation("Images/Bathroom.jpg");
  bedimg = loadAnimation("Images/BedRoom1.jpg");
  door3img = loadImage("Images/door.png");
atticimg = loadAnimation("Images/Attic.jpg");
door4img = loadImage("Images/door.png");
winningimg = loadAnimation("Images/winning.jpg");
startimg = loadAnimation("Images/startimage.jpg");
}

function setup() {
  
  createCanvas(1200,600);
  /*livingroom = createSprite(500,600,200,300);
  livingroom.addImage(livingroomimage);
  livingroom.scale = 1.2;
  kitchen = createSprite(2237,525,200,300);
  kitchen.addImage(kitchenimg);
  study = createSprite(3746,494,200,300);
  study.addImage(studyimg);
  study.scale= 0.75;
boiler = createSprite(5200,541,200,300);
boiler.addImage(boilerimg);
backyard = createSprite(6595,509,200,300);
backyard.addImage(backyardimg);
backyard.scale = 0.5;*/

ground = createSprite(600,300,300,200);
ground.addAnimation("start",startimg);
ground.addAnimation("livingroom",livingroomimage);
ground.addAnimation("kitchen",kitchenimg);
ground.addAnimation("study",studyimg);
ground.addAnimation("boilerroom",boilerimg);
ground.addAnimation("backyard",backyardimg);
ground.addAnimation("room",roomimg);
//ground.addAnimation("bath",bathroomimg);
ground.addAnimation("bed",bedimg);
ground.addAnimation("attic",atticimg);
ground.addAnimation("won",winningimg);

  door = createSprite(60,300,20,20);
door.addImage(doorimage);
door.scale = 0.5;
door.visible = false;

door1 = createSprite(735,333,20,20);
door1.addImage(door1img);
door1.scale=0.5;
door1.visible = false;


door3 = createSprite(879,450,20,20);
door3.addImage(door3img);
door3.scale=0.5;
door3.visible = false;
  
door4 = createSprite(333,408);
door4.addImage(door4img);
door4.scale=0.5;
door4.visible = false;
 
enmy = createSprite(1150,150,10,10);

enmy.velocityX = -0.3;
enmy.addImage(enmy_image);
//enmy.debug = true;
enmy.setCollider("circle",0,0,100);
enmy.visible=false;
stungun = createSprite(800,242,10,10);
stungun.addImage(stungunimage);
stungun.scale = 0.15;
stungun.setCollider("rectangle",0,0,800,800);

purpleSafe = createSprite(800,242,20,20);
purpleSafe.addAnimation("locked",purpleSafe_Image);
purpleSafe.addAnimation("unlocked",purplesafeunlockedimg);
purpleSafe.scale=0.2;
purpleSafe.visible=false;

restart=createSprite(20,20,100,200);
restart.visible=false;

flash = createSprite(500,400,10,10);
flash.visible = false;
//redkey = createSprite(634,476,10,10);
//redkey.visible = false;
//redkey.scale = 0.5;
redlock = createSprite(872,482,10,10);
redlock.visible = false;
yellowkey = createSprite(125,536,10,10);
yellowkey.visible = false;
yellowlock = createSprite(333,404,10,10);
yellowlock.visible = false;
greenkey = createSprite(711,403,10,10);
greenkey.visible = false;
greenlock = createSprite(200,200,10,10);
greenlock.visible = false;
orangekey = createSprite(366,455,10,10);
orangekey.visible = false;
orangelock = createSprite(735,333,10,10);
orangelock.visible = false;
hammer = createSprite(5736,702,20,20);
hammer.visible = false;
hammer.addImage(hammerimage);
hammer.scale = 0.35;
plank = createSprite(319,404,10,10);
plank.visible = false;
code = createSprite(500,400,10,10);
code.visible = false;
 purplekey = createSprite(3526,644,10,10);
 purplekey.visible= true;
 //purplekey.visible = false;
purplekey.addImage(purplekey_Image);
purplekey.scale = 0.15;

flash.addImage(flashimage);
//redkey.addImage(redkeyimage);
yellowlock.addImage(yellowlockimage);
yellowlock.scale=0.4;
yellowkey.addImage(yellowkeyimage);
yellowkey.scale=0.2;
greenkey.addImage(greenkeyimage);
greenkey.scale = 0.5;
greenlock.addImage(greenlockimage);
redlock.addImage(redlockimage);
redlock.scale=0.3;
orangekey.addImage(orangekeyimage);
orangekey.scale=0.15;
orangelock.addImage(orangelockimage);
orangelock.scale = 0.3;
plank.addImage(plankimage);
plank.scale=0.25;
hammer.addImage(hammerimage);
code.addImage(codeimage);

player = createSprite(200,500,20,20);
player.addAnimation("static",player_image);
player.scale = 0.5;
player.addAnimation("run",player_running);
player.addAnimation("run2",playerimg2);
//player.debug = true;
player.setCollider("circle",0,0,200);


stungun.visible = false;




  //createSprite(400, 200, 50, 50);
}


function draw() {
  background(255,255,255);
  
 console.log("gameState is "+gameState);
  player.velocityY = 0.5;


  enmy.velocityY = random(-0.3,0.3);

 edges =createEdgeSprites();
 player.collide(edges[3]);

if(keyDown("space")){
player.velocityY = -4;
}

if(purplekey.isTouching(purpleSafe)){
 purpleSafe.visible = false;
 //stungun.visible = true;
 

}

if(player.isTouching(stungun)){
  stungun.x = player.x+100;
  stungun.y = player.y-50;
  //stungun.debug = true;

}



if(touches.length > 0 || keyDown(RIGHT_ARROW) && move===false) {
    player.x = player.x+10;
  player.changeAnimation("run2",playerimg2);
  touches=[];
  move=true;
}

if(touches.length > 0 || keyDown(LEFT_ARROW) && move===true) {
  player.x = player.x-10;
player.changeAnimation("run",player_running);
touches=[];
move=false;;
}



if(gameState==="start"){
  ground.changeAnimation("livingroom",livingroomimage);
  enmy.visible=true;
  purpleSafe.visible=true;
  purplekey.visible=true;
  purplekey.x = 691;
  purplekey.y= 525;
gameState="Diningroom";


}

if(player.x<0 && gameState==="Diningroom" ){
  ground.changeAnimation("kitchen",kitchenimg);
  player.x = 1130;
  //greenkey.visible = true;
  stungun.visible = false;
  purpleSafe.visible=false;
  purplekey.visible = false;
 // travel="l1";
  gameState="Study";
}

if(player.x<0 && gameState==="Study" ){
  ground.changeAnimation("study",studyimg);
  player.x = 1130;
  //purplekey.visible = true;
  //purplekey.x = 322;
  //purplekey.y =494;
  gameState="Boiler";
  travel="l2";
}

if(player.x<0 && gameState==="Boiler" ){
  ground.changeAnimation("boilerroom",boilerimg);
  player.x = 1130;
  door.visible=true;
  greenkey.visible=true;
  greenlock.visible = true;
  greenlock.x = door.x;
  greenlock.y = door.y;
  
 // hammer.visible= true; //492,475
  //hammer.x = 492;
 // hammer.y = 475;
  if(greenkey.isTouching(door)){
  gameState="Backyard";
  greenlock.visible=false;
  }
}

if(player.x<0 && gameState==="Backyard" ){
  ground.changeAnimation("backyard",backyardimg);
  player.x = 1130;
  door.visible=false;
  greenkey.visible = false;
  purplekey.visible = false;
 // door1.visible=true;
 // orangelock.visible = true;
 
  gameState="room1";
}



if(player.x<0 && gameState==="room1"){
ground.changeAnimation("room",roomimg);
//ground.scale=0.7;
player.x=1130;
gameState="bedroom";
orangekey.visible=true;
//door1.visible=false;
//orangelock.visible=false;
//door3.visible=true;
//redlock.visible=true;
}




if(player.x<0 && gameState==="bedroom"){
  ground.changeAnimation("bed",bedimg);
  player.x=1130;
  door1.visible=true;
  orangelock.visible=true;
  gameState="h";
  //redkey.visible=true;
  
}




if(player.isTouching(orangekey)){
  orangekey.x = player.x+100;
  orangekey.y = player.y-50;
}

if(orangekey.isTouching(orangelock) && gameState==="bedroom" ){
gameState="attic";
ground.changeAnimation("attic",atticimg);
orangelock.visible=false;
orangekey.visible=false;
door1.visible=false;
plank.visible=true;
hammer.visible=true;
hammer.x = 492;
 hammer.y = 475;
door4.visible=true;
yellowkey.visible=true;
yellowlock.visible=true;

}

if(player.isTouching(greenkey)){
  greenkey.x = player.x+100;
  greenkey.y = player.y-50;
}


if(stungun.isTouching(enmy)&& stungun.visible===true){
  enmy.visible = false;
  enmy.x=4000;
}

if(player.isTouching(purplekey)){
  purplekey.x = player.x+100;
  purplekey.y = player.y-50
}

if(purplekey.isTouching(purpleSafe)){
  stungun.visible=true;
  stungun.x=802;
  stungun.y=269;
  purplekey.visible=false;
}

if(player.isTouching(yellowkey)){
yellowkey.x = player.x+100;
yellowkey.y = player.y-100;
}

if(yellowkey.isTouching(yellowlock)){
  yellowlock.visible=false;
}

if(player.isTouching(hammer)){
  hammer.x = player.x+100;
  hammer.y = player.y-50;
}

if(hammer.isTouching(plank)){
  plank.visible=false;
}

if(plank.visible===false&&  gameState==="attic" && yellowlock.visible===false){
ground.changeAnimation("won",winningimg);
hammer.visible=false;
door4.visible=false;
enmy.x=3000;
enmy.visible=false;
yellowkey.visible=false;
}


/*if(player.x>1200 && travel==="l1"){
   ground.changeAnimation("livingroom",livingroomimage);
   player.x=10;
   
}

if(player.x>1200 && travel==="l2"){
  ground.changeAnimation("kitchen",kitchenimg);
  player.x=10;
  
}*/



drawSprites();

if(gameState==="start" ){
  displayrules();
  // gameState="livingroom";
 }

/*if(mouseIsOver(stungun)&& attack==="Reload"){
  stungun.x = player.x+100;
  stungun.y = player.y-50;

  
    //flash.velocityY = -3;
  fill("red");
   text("Press s key to attack the enmy",200,200);
}*/

if(enmy.isTouching(player)){
  player.visible = false;
  gameState="over";
  restart.visible=true;
}

if(gameState==="over"){
  text("YOU HAVE LOST! PRESS ANYWHERE TO START AGAIN",300,100);
}

if(gameState==="over" && mousePressed(restart)){
  gameState="start";
  player.visible=true;
  reset();
}
  
  
  text([mouseX,mouseY],mouseX,mouseY);  


  
}




function displayrules(){
  fill("yellow");
  text("Hello there! I am Dipper Pines and I need your help! I need to find the hidden treasure",571,100);
  text("in this house. I need to find it and escape before it is too late!",571,150);
  text("Match the colour cordinated keys with the locks. I am trying my best to help you",571,200);
  text("by allowing the keys to move along with you. Dont underestimate the guardian.",571,250);
  text("He can teleport rooms! If he catches you, game over. There is one way",571,300);
  text("to stop him. Use the stungun from the purple safe and stun him. He",571,350);
  text("won't be able to move for sometime. You are given 9 minutes to find the treasure.",571,400);
  text("Press enter to start",571,450);
   
}

function reset(){
purplekey.visible=false;
purpleSafe.visible=false;
stungun.visible=false;
greenkey.visible=false;
door.visible=false;
orangekey.visible=false;
orangelock.visible=false;
door1.visible = false;
door4.visible=false;
hammer.visible=false;
yellowkey.visible=false;
yellowlock.visible=false;
plank.visible=false;

}

function question(){
 text("Answer this riddle to continue. What has a head and a tail but no body?",200,100);
  input = createInput('');
  input.position(635,290);
  button = createButton("Enter");
  button.position(635,320);
button.mousePressed(greet);
  greeting.html('hello' + name + '!');
}

function greet(){
  if(name==="coin"){
  console.log("greet");
  greeting = createElement('h2', 'Your answer is correct!');
  greeting.position(20, 5);
 }

else{
greeting = createElement('h2', 'Incorrect anwer');
}

}


