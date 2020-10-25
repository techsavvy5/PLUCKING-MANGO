class Mango{
    constructor(x,y,width,height){
        var options={
            isStatic:true,
            'density':1.0,
            'friction':0.9
        }
       
        this.x=x;
        this.y=y;
        this.width=50;
        this.height=50;
        this.image=loadImage("mango.png");
        this.body=Bodies.rectangle(x,y,width,height,options);
        World.add(world,this.body);
    }
    display(){
        var position=this.body.position;
        var angle=this.body.angle;
        push();
        translate(position.x,position.y);
        rotate(angle);
        imageMode(CENTER);
        image(this.image,0,0,this.width,this.height);
        pop();
    }
}
