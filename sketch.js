const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;
const Constraint = Matter.Constraint;
var manImage,thunderImage,ball,Ball;
var man,thunder;
var Drop = [];
var drop;

function preload()
{
    manImage = loadImage("walking_1.png","walking_2.png");
    thunderImage = loadImage("1.png");
}


function setup() 
{
    engine = Engine.create();
    world = engine.world;
	createCanvas(600,800);
    man = createSprite(300,560,20,20);
    man.addImage("walking man",manImage);
    man.scale = 0.6;

   
   
    

 
   Engine.run(engine);

}

function draw()
{
    rectMode(CENTER);
    background(0);

  
    drop = new Drops(random(10,590),random(10,200),20,20);
    drop2 = new Drops(random(10,590),random(10,200),20,20);
    drop3 = new Drops(random(10,590),random(10,200),20,20);
    drop4 = new Drops(random(10,590),random(10,200),20,20);
    drop5 = new Drops(random(10,590),random(10,200),20,20);
    drop6 = new Drops(random(10,590),random(10,200),20,20);
    drop7 = new Drops(random(10,590),random(10,200),20,20);
    drop8 = new Drops(random(10,590),random(10,200),20,20);
    drop9 = new Drops(random(10,590),random(10,200),20,20);
    drop10 = new Drops(random(10,590),random(10,200),20,20);

    if(frameCount%100 === 0)
    {
        thunder = createSprite(300,50,20,20);
        thunder.addImage("thunder",thunderImage);
        thunder.lifetime = 17;
    }

    drop.display();
    drop2.display();
    drop3.display();
    drop4.display();
    drop5.display();
    drop6.display();
    drop7.display();
    drop8.display();
    drop9.display();
    drop10.display();


 drawSprites();
}


