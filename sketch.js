const Engine = Matter.Engine;
const World= Matter.World;
const Bodies = Matter.Bodies;
const Constraint = Matter.Constraint;

var ground;
var division;
var p;


function setup() {
  createCanvas(1350,625);
  engine = Engine.create();
  world = engine.world;
  ground = new Ground(675,610,1350,25);
  p = new Particle(200,400,20);
}
var division = [];
var particle = [];
var plinko = [];

var divisionHeight = 250;

function draw() {
background(0);  
Engine.update(engine);
  ground.display();
  p.display();
  for(var k = 15; k <= 1350 ; k = k+100)
  {
    division.push(new Ground(k,height-divisionHeight/2,10,divisionHeight));
   
  }
  for(var k = 15; k < division.length ;k++ ){
     division[k].display();
  }
  for(var j = 100;j <= 1200 ; j = j+100)
  {
    plinko.push(new Plinko(j,80,20));
   
  }
  for(var j = 100; j < plinko.length ;j++ ){
     plinko[j].display();
  }
  for(var i = 10;i <= 1340 ; i = i+90)
  {
    plinko.push(new Plinko(i,140,20));
   
  }
  for(var i = 10; i < plinko.length ;i++ ){
     plinko[i].display();
  }
  for(var t = 10;t <= 1340 ; t = t+90)
  {
    plinko.push(new Plinko(t,200,20));
   
  }
  for(var t = 100; t < plinko.length ;t++ ){
     plinko[t].display();
  }
  for(var f = 300;f <= 1000 ; f = f+110)
  {
    plinko.push(new Plinko(f,275,30));
   
  }
  for(var f = 400; f < plinko.length ;f++ ){
     plinko[f].display();
  }
  if(frameCount%10 === 0 ){
    particle.push(new Particle(random(500,700),20,20));
  }
  for(var d = 0; d < particle.length ;d++ ){
     particle[d].display();
  }
}