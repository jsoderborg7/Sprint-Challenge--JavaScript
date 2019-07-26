// 1. Copy and paste your prototype in here and refactor into class syntax.
class cuboidMaker2{
  constructor(attrs){
  this.length= attrs.length;
  this.width= attrs.width;
  this.height= attrs.height;
  }
  volume(){
    return this.length * this.width * this.height
  }
  surfaceArea(){
    return  2 * (this.length * this.width + this.length * this.height + this.width * this.height)
  }
}

class CubeMaker extends cuboidMaker2{
  constructor(cubeattrs){
    super(cubeattrs);
    this.speak= cubeattrs.speak
  }
  cubeVolume(){
    return Math.pow(this.length, 3);
  }
  cubeSurfaceArea(){
    return (6*(this.length * this.length));
  }
}

const cuboid2 = new cuboidMaker2({
  length: 4,
  width: 5,
  height: 5,
});

const cube = new CubeMaker({
  length: 7,
  width: 7,
  height: 7
});

// Test your volume and surfaceArea methods by uncommenting the logs below:
console.log(cuboid2.volume()); // 100
console.log(cuboid2.surfaceArea()); // 130

// Stretch Task: Extend the base class CuboidMaker with a sub class called CubeMaker.  Find out the formulas for volume and surface area for cubes and create those methods using the dimension properties from CuboidMaker.  Test your work by logging out your volume and surface area.
console.log(cube.cubeSurfaceArea());
console.log(cube.cubeVolume());