// class keyword
class Rectangle {
  constructor(length, width){
    this.length = length;
    this.width = width;
  }

  calculateArea(){
    return this.length * this.width;
  }
};

const myRectanlge = new Rectangle(3, 5);

console.log(myRectanlge);
console.log(myRectanlge.calculateArea())

class RectangularPrism extends Rectangle {
  constructor(length, width, height){
    super(length, width);
    this.height = height;
  }

  calculateVolume(){
    return this.calculateArea() * this.height
  }

}

const myPrism = new RectangularPrism(2, 3, 5);

console.log(myPrism)
console.log(myPrism.calculateVolume())