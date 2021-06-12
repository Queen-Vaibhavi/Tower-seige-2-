class Block{
  constructor(x, y, width, height) {
      var options = {
          restitution :0.4,
          friction :0.0,
      }
      
      this.body = Bodies.rectangle(x, y, width, height, options);
      this.width = width;
      this.height = height;
      this.image = loadImage("block.png");
      World.add(world, this.body);
      this.visiblity = 255;
    }
    display(){
      
       if(this.body.speed > 4){
       World.remove(world, this.body);
       push();
       this.visiblity = this.visiblity - 5;
       tint(255,this.visiblity);
       image(this.image,this.body.position.x,this.body.position.y,50,50);
       pop();

       } else{
        var pos= this.body.position;
        rectMode(CENTER);
        rect(pos.x,pos.y,this.width, this.height);
        imageMode(CENTER);
        image(this.image,0,0,50,50);
      
     
  
     }
}
}