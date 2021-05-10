const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Constraint = Matter.Constraint;
var engine,world;

var box1,box2,box3,ground;
 var ball;
 var box;
 var sling;
function setup(){
    var canvas = createCanvas(800,500);
    
    engine = Engine.create();
    world = engine.world;
    World.add(world, engine);
    box1 = new Box(600,200,50,50);
    ground = new Ground();
    box2 = new Box(630,100,50,50);
    box3 = new Box(650,50,50,50);
   ball = new Ball(300,300);
   //ball = Bodies.circle(300,300,20);
   //World.add(world, ball);
   
     box = new Box(300,300,20,20);
     sling = new Sling(ball.body,{x:200,y:200});

}
function draw(){
    background(255,255,25);
    Engine.update(engine);
    box1.show();
    ground.display();
    box2.show();
    box3.show();
   // ball.display();
    box.show();
    box.position.x = mouseX;
    box.position.y = mouseY;
    sling.display();
    console.log();
}
