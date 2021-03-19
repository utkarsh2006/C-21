var wall,thickness;
var speed,weight,bullet;
function setup() {
  createCanvas(1600,400);
  createSprite(400, 200, 50, 50);
  speed=random(223,321);
  weight=random(30,52);
  thickness=random(22,83)
  bullet=createSprite(50,200,50,50);
  wall=createSprite(1500,200,60,thickness,height/2);
bullet.velocityX = 5;

}

function draw() {
  background("black"); 
if(hasCollided(bullet,wall))
{
  bullet.velocityX=0;
  var damage=0.5 * weight * speed * speed/(thickness * thickness * thickness)
if(damage>10)
{
  wall.shapecolor=color(255,0,0);
}
if (damage<10)
{
  wall.shapecolor=color(0,255,0)
}

}


function hasCollided(bullet,wall){
  bulletRightEdge=bullet.x +bullet.width
wallLeftEdge=wall.x
if(bulletRightEdge>-wallLeftEdge)
{
  return true;
}
return false;
}


  drawSprites();
}