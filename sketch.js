var bgImg, cat, catImg1, catImg2, catImg3, mouse, mouseImg1, mouseImg2, mouseImg3, tom, jerry, canvas;


function preload() {
    //load the images here
    bgImg = loadImage("images/garden.png");
    catImg1 = loadAnimation("images/cat1.png");
    mouseImg1 = loadAnimation("images/mouse1.png");
    catImg2 = loadAnimation("images/cat2.png","images/cat3.png");
    catImg3 = loadAnimation("images/cat4.png");
    mouseImg2 = loadAnimation("images/mouse2.png","images/mouse3.png");
    mouseImg3 = loadAnimation("images/mouse4.png");
}

function setup(){
     canvas = createCanvas(1000,800);
    //create tom and jerry sprites here
    tom = createSprite(870, 600);
    tom.addAnimantion("TOMSleeping", catImg1);
    tom.scale = 0.2;
    jerry = createSprite(200,600);
    jerry.addAnimantion("JERRYStanding", mouseImg1);
    jerry.scale = 0.15;
}

function draw() {

    background(bgImg);
    //Write condition here to evalute if tom and jerry collide
if(cat.x - mouse.x < (cat.width - mouse.width) /2 ){
tom.velocityX = 0
tom.addAnimantion("TOMLastImage, catImg3");
tom.x = 300;
tom.scale = 0.2
tom.changeAnimation("TOMLastImage");

jerry.addAnimantion("JERRYLastImage, mouseImg3");
jerry.scale = 0.15;
jerry.changeAnimation("JERRYLastImage");


}

    drawSprites();
}


function keyPressed(){

  //For moving and changing animation write code here
if(keyCode === LEFT_ARROW){
tom.velocityX = -5
tom.addAnimantion("mouseTeasing", mouseImg2);
tom.changeAnimation("mouseTeasing");

jerry.addAnimantion("catRunning", catImg2);
jerry.frameDelay = 25;
jerry.changeAnimation("catRunning");

}

}

