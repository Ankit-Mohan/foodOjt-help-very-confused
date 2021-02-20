var dog,sadDog,happyDog;
var feedDog,addFood;
var foodS = 0;

function preload(){
  sadDog=loadImage("Dog.png");
  happyDog=loadImage("happy dog.png");
}

function setup() {
  createCanvas(1000,400);
  
  feedDog = createButton("Feed Dog")
  feedDog.position(700,200);
  feedDog.mousePressed(feedtheDog);
  addFood = createButton("add Food")
  addFood.position(630,200);
  addFood.mousePressed(addfoods)
  dog=createSprite(800,200,150,150);
  dog.addImage(sadDog);
  dog.scale=0.15;
  
}

function draw() {
  background(46,139,87);
  drawSprites();
}

//function to read food Stock


//function to update food stock 
function feedtheDog(){
  dog.addImage(happyDog);

  if(foodObj.getFoodStock()<=0){
    foodObj.updateFoodStock(foodobj.getFoodStock()*0);
  }else{
    foodObj.updateFoodStock(foodObj.getFoodStock()-1)
  }
}

//function to add food in stock
function addfoods(){
  foodS++;
  console.log(foodS);
}