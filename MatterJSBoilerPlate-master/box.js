class Box{
    constructor(x,y,r){
        var options=
        {
         density:8,
         restituion:8,
         friction:7,
         
         
        
        }
        this.body=Bodies.ellipse(this.x,this.y,this.r/2,options)
        this.y=y;
        this.x=x;
        this.r=r;

        World.add(world,this.body);
       
   
    }
   
      display(){
          var pos=this.body.position
          push();
          translate(pos.x,pos.y)
          rotate(this.body.angle)
          ellipseMode(CENTER);
         fill("pink");
         ellipse(0,0,this.r,this.r);
         pop();
          
          
      }
   
   }