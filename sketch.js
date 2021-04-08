
var welcome, welcomeImage

var chickIcon, chickicon1, chickShop, chickshop1

var chickBedroom, chickBedrooms, chickBathroom, chickBathrooms


function setup() {
  createCanvas(displayWidth, displayHeight);
  welcome = createSprite(displayWidth/2, displayHeight/2);
  welcome.addImage(welcomeImage);
  chickIcon = createSprite(30, displayHeight);
  chickIcon.scale = 0.5;
  chickIcon.addImage(chickicon1);
  chickShop = createSprite(displayWidth/2, displayHeight/2);
  chickShop.scale = 2;
  chickShop.addImage(chickshop1); 
  chickShop.visible = false;
  chickBedroom = createSprite(displayWidth/2, displayHeight/2);
  chickBedroom.addImage(chickBedrooms);
  chickBathroom = createSprite(displayWidth/2, displayHeight/2);
  chickBedroom.visible = false;
  chickBathroom.visible = false;
  //chickIcon.debug = true;
 // welcome.debug = true;
  welcome.setCollider("rectangle",0,0, displayWidth-300,displayHeight-300)
  
  
}




function preload() {
  welcomeImage = loadImage("Images/ChickensWorldIntro.JPG")
  chickicon1 = loadImage("Images/chickenIcon.PNG");
  chickshop1 = loadImage("Images/chickenShop.PNG");
  chickBedrooms = loadImage("Images/chickensbedroom.JPG")
  chickBathrooms = loadImage("images/chicksBathroom.JPG")


}

function draw() {
  background(255,255,255);  
  drawSprites();

  if(mousePressedOver(chickIcon)){
    chickShop.visible = true;
  }

  if(mousePressedOver(welcome)){
    chickBedroom.visible = true;
    chickShop.visible = false;
    welcome.visible = false;
  }
   
  // adjust the depth
  chickShop.depth = chickBedroom.depth +1
  


}