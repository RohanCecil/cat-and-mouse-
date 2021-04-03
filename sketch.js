var bgImg;
var cat, catimg1, catimg2;
var mouse, mouseimg1, mouseimg2;

function preload() {
    //load the images here
    bgImg = loadImage("garden.png");
    catimg1 = loadImage("cat1.png");
    mouseimg1 = loadImage("mouse1.png");
    catimg2 = loadImage("cat2.png");
    mouseimg2 = loadImage("mouse2.png");
}

function setup(){
    createCanvas(1000,800);
    //create tom and jerry sprites here
     cat = createSprite(250,200,20,20);
     mouse = createSprite(750,600,202,20);
}

function draw() {

    background(bgImg);
    //Write condition here to evalute if tom and jerry collide
    if(cat.x - mouse.x < (cat.width - mouse.width)/2){
      cat.addAnimation("catRunning",catimg2);
      cat.changeAnimation("catRunning");
    }

    drawSprites();
}


function keyPressed(){

  //For moving and changing animation write code here
   if(keyCode === LEFT_ARROW){
     mouse.addAnimation("mouseTeasing",mouseimg2);
     mouse.changeAnimation("mouseTeasing");
     mouse.frameDelay = 25;
   }

   if(keyCode === RIGHT_ARROW){
    mouse.addAnimation("mouseTeasing",mouseimg2);
    mouse.changeAnimation("mouseTeasing");
    mouse.frameDelay = 25;
  }


}

function isTouching(cat,mouse){
    if(cat.x-mouse.x<=mouse.mouse/2+cat.width/2 && 
      mouse.x-cat.x<mouse.width/2+cat.width/2 &&
      cat.y-mouse.y<=mouse.height/2+cat.height/2 && 
      mouse.y-cat.y<mouse.height/2+cat.height/2){
      return true;
    }else{
      return false;
    }
  }
