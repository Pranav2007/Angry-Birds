class Bird {
    constructor(x, y) {
      var options = {
          'restitution':0.8,
          'friction':1.0,
          'density':3.0,
      }
      this.body = Bodies.rectangle(x, y, 25, 25, options);
      this.width = 25;
      this.height = 25;
      
      World.add(world, this.body);
    }
    display(){
      var pos = this.body.position;
      pos.x = mouseX;
      pos.y = mouseY;
      var angle = this.body.angle;
      push();
      translate(pos.x, pos.y);
      rotate(angle);
      strokeWeight(4);
      stroke("blue");
      fill("red");
      rectMode(CENTER);
      rect(0, 0, this.width, this.height);
      pop();
    }
  }