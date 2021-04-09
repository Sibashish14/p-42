class Drops{
    constructor(x,y){
        this.x=x;
        this.y=y;
        var options={
            frictionAir:0.2,
            friction:0.3,
            density:0.2
        }
        this.body =Bodies.circle(x,y,5,options);
        World.add(world,this.body);
    }
    display(){
        ellipseMode(RADIUS);
        fill("blue");
        ellipse(this.body.position.x,this.body.position.y,5,5);
    }
    updateY(){
        if(this.body.position.y>height){
        Matter.Body.setPosition(this.body,{x:random(0,400),y:random(0,700)});
        }
    }
}