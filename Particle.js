class Particle {
    constructor(x,y,r) {
      var options = {
          restitution:0.5,
          density:1000
      }
      this.body = Bodies.circle(x,y,r,options);
      this.r = r;
      World.add(world, this.body);
    }
    display(){
      var pos = this.body.position;
      push();
      noStroke();
      fill(random(0,255),random(0,255),random(0,255));
      circle(pos.x, pos.y, this.r);
      pop();
    }
  };