class Hammer{
    constructor(x,y,width,height){
        var options=
        {
        
         
         restituion:0.8,
         friction:1,
         density:5,
         isStatic:false
         
   
        }
        this.body=Bodies.rectangle(x,y,10,height,options)
        this.width=width;
        this.height=height;
        World.add(world,this.body);
   
    }
   
      display(){
        
        var pos=this.body.position
        rectMode(CENTER);
         fill("brown");
         rect(pos.x,pos.y,this.width,this.height);
         drawSprites();

          
          
      }
   
   }