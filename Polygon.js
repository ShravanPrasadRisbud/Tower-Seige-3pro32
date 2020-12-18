class Polygon extends BaseClass {
  constructor(x,y){
    super(x,y,50,50);
    this.image = loadImage("sprites/polygon.png");
        //polygon holder with slings
        polygon = Bodies.circle(50,200,20);
        World.add(world, polygon);
  }

  display() {
    super.display();
  }
}

