class Sling {
    constructor(bodyA, b) {
        var options = {
            bodyA: bodyA,
            pointB: b,
            stiffness: 0.5,
            length: 10,
        }
        this.sling = Constraint.create(options);
        World.add(world, this.sling);
        this.a = bodyA;
        this.b = b;

    }
    display() {
        push();
        var posa = this.a.position;

        var posb = this.b;
        line(posa.x, posa.y, posb.x, posb.y);
        pop();
    }
}