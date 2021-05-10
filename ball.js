class Ball{
    constructor(x,y){
this.ball = Bodies.circle(x,y,20);
World.add(world, this.ball);

    }

display(){
var pos = this.ball.position;
    ellipseMode(RADIUS);
    ellipse(pos.x,pos.y,20,20);
}
}