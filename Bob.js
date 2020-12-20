class Bob{
    constructor(x,y,r){
        var options ={
            density: 0.01,
            friction:0.001,
            isStatic : false,
            restitution : 1.2
        }
        this.body = Bodies.circle(x,y,r, options);
        this.radius = r;
        World.add(world, this.body);
    }
    display(){
        fill("red")
        circle(this.body.position.x, this.body.position.y, this.radius*2);
    }
}