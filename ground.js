class Ground{
constructor(){
    this.ground = Bodies.rectangle(400,400,800,20,{isStatic:true,})
    World.add(world, this.ground);

}
display(){
   var pos = this.ground.position;
   push();
    rectMode(CENTER);
    fill(200,50,200);
    rect(pos.x,pos.y,800,20);
    pop();
}
}