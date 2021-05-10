class Box{
    constructor(x,y,w,h){
        this.box = Bodies.rectangle(x,y,w,h);
        World.add(world, this.box);
        this.w = w;
        this.h = h;
    }

    show(){
      
push()
var pos = this.box.position;
var angle = this.box.angle;
translate(pos.x,pos.y);
angleMode(RADIANS);
rotate(angle);
rectMode(CENTER);
fill(255,100,10)
rect(0,0,this.w,this.h);
pop();
console.log(angle);
    }
    
}
