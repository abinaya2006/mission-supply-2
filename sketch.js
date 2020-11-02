var helicopterIMG, helicopterSprite, packageSprite,packageIMG;
var packageBody,ground,landimg,landSprite;
const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;

var red,red1red2,back;
function preload()
{
	helicopterIMG=loadImage("helicopter.png")
	packageIMG=loadImage("package.png");

	back=loadImage("maxresdefault.jpg")

	
}

function setup() {
	createCanvas(800, 500);
	rectMode(CENTER);
	

	packageSprite=createSprite(width/2, 170, 10,10);
	packageSprite.addImage(packageIMG)
	packageSprite.scale=0.3;
	packageSprite.visible=false;

	helicopterSprite=createSprite(width/2, 100, 10,10);
	helicopterSprite.addImage(helicopterIMG)
	helicopterSprite.scale=1

	groundSprite=createSprite(width/2, height-35, width,10);
	groundSprite.shapeColor=color(255);
    groundSprite.visible=false
	
	red=createSprite(310,400,10,100);
	red.shapeColor=color(255,0,0)
	//red.visible=false

	red1=createSprite(450,400,10,100);
	red1.shapeColor=color(255,0,0)
	

	red2=createSprite(380,455,150,10);
	red2.shapeColor=color(255,0,0)
	//red2.visible=false

	engine = Engine.create();
	world = engine.world;

	packageBody = Bodies.circle(width/2 , 170 , 5 , {restitution:0.5, isStatic:true});
	World.add(world, packageBody);
	
	
ground = Bodies.rectangle(380, 430, width, 10 , {isStatic:true} );
 	World.add(world, ground);
	
	 //create a red box
	/* red2 = Bodies.rectangle(380, 430, width, 10 , {isStatic:true} );
 	World.add(world, red2);*/

	Engine.run(engine);
  
}


function draw() {
  rectMode(CENTER);
  background(back);
  packageSprite.x= packageBody.position.x 
  packageSprite.y= packageBody.position.y;
 red.display()
 red1.display()
 red2.display()

 
 
 
 
  drawSprites();
 
}

function keyPressed() {
 if (keyCode === DOWN_ARROW) {

  Matter.Body.setStatic(packageBody,false); 
  packageSprite.visible=true 
  }
}



