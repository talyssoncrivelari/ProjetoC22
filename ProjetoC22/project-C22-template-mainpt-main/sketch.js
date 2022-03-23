const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Constraint = Matter.Constraint;

let engine, world;
let canvas, backgroundImg;
let player, enemy;
let base1, base2, baseImg;

function preload() {
  backgroundImg = loadImage("./assets/ForestMC.png");
  baseImg = loadImage("./assets/BlocoDeTerraMC.jpg");
}

function setup() {
  canvas = createCanvas(windowWidth, windowHeight);

  var options = {
    isStatic: true,
  }

  engine = Engine.create();
  world = engine.world;
  angleMode(DEGREES);
  player = new Stevao(200, 200, 20, 20);
  enemy = new Stevao(200, 200, 20 ,20);

  base1 = Bodies.rectangle(windowWidth/2 - 500, windowHeight/2 + 175, 100, 100, options);
  World.add(world, base1);
  base2 = Bodies.rectangle(windowWidth/2 + 470, windowHeight/2 + 175, 100, 100, options);
  World.add(world, base2);
}

function draw() {

  background(backgroundImg);
  
  push();
  imageMode(CENTER);
  image(baseImg, base1.position.x, base1.position.y, 100, 100);
  image(baseImg, base2.position.x, base2.position.y, 100, 100);
  pop();
  
  Engine.update(engine);
  player.display();
  // Title
  fill("#FFFF");
  textAlign("center");
  textSize(40);
  text("Posso atirar nele?", windowWidth/2, windowHeight/2 - 225);
}
