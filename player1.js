class Player1{

    constructor(x,y,radius){
    
        var Poptions = {

            isStatic : true,
            'restitution' : 0.3,
            'friction': 0.5,
            'density' : 1.2
        
        }
        this.body = Bodies.circle(x,y,radius,Poptions);
        this.radius=radius;
       this.image=loadImage("right.png");
      this.image.scale=9;
          

        World.add(world,this.body);
}

display(){

    push();
    ellipseMode(RADIUS);
  imageMode(CENTER);
    fill(60);
   
 image(this.image,80,190,110,100); 
  //circle(this.body.position.x,this.body.position.y,this.radius);
    pop();
}
}