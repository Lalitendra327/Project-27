class bob {
    constructor(x,y,diameter){
       var options = {
             isStatic: false,
                 restitution: 1,
                 density: 0.8,
                 friction: 0
            }

           this.body = Bodies.circle(x,y,diameter/2,options);
           this.diameter = diameter;
           World.add(world,this.body);
    }

    display(){
        var pos = this.body.position;
        //ellipseMode(RADIUS);
        fill("red");
        ellipse(pos.x,pos.y,this.diameter, this.diameter);
    }

    
}