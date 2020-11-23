class box {
    constructor(x,y,width,height) {
      var options = {
          isStatic: true
      }
      this.body = Bodies.rectangle(x,y,width,height,options);
      this.width = width;
      this.height = height;
      World.add(world, this.body);
      this.visiblity=255;
    }

    score(){
      if(this.visibility<0 && this.visibility >-105){
        score++;
      }
    }

    display(){
      var pos =this.body.position;
      rectMode(CENTER);
      fill("blue");
      rect(pos.x, pos.y, this.width, this.height);
      console.log(this.body.speed);
      if(this.body.speed<3){
      super.display();
      }
      else{
        World.remove(world,this.body);
        push();
        this.visiblity = this.visiblity-5;
        tint(255,this.visiblity);
        image(this.image,this.body.position.x,this.body.position.y,50,50);
        pop();
      }
    }
  };