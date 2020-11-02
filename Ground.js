class Ground {
    constructor(x,y,width,height) {
  var po = {
          isStatic: true
      }
      this.body = Bodies.rectangle(x,y,width,height,po);
      this.width = width;
      this.height = height;
      this.image=loadImage("images/ground.png")
      World.add(world, this.body);
    }
    display(){
      var op =this.body.position;
      imageMode(CENTER);
      fill("brown");
      image(this.image,op.x, op.y, this.width, this.height);

    }
  }