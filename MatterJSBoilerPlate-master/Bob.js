class Bob{
    constructor(x,y,r){
        var options={
            isStatic:false,
            'restituion':0.8,
            'density':0.04,
            'friction':1.0
        }
        
        this.body=Bodies.circle(x,y,r,options);
        this.r=r;
        World.add(world,this.body);
        
    }
    display(){   
    var pos=this.body.position;
     push();
     ellipseMode(RADIUS);
     translate(pos.x,pos.y)
     fill(254,0,255);
     ellipse(0,0,this.r);
     pop();
    }
}