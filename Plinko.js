class Plinko {
    constructor(x,y,r) {
      var options = {
          isStatic: true,
          density:10
      }
      this.body = Bodies.circle(x,y,r,options);
      this.r = r;
      World.add(world, this.body);
    }
    display(){
      var pos = this.body.position;
      noStroke();
      circle(pos.x, pos.y, this.r);
    }
  };