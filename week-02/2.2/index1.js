/*

const rectangle1 = {
  width : 2,
  length : 4, 
  color : "red"
}

function area(rectangle){
  return rectangle.width * rectangle.length;
}

const ans = area(rectangle1);
console.log(ans);

*/

class Rectangle {
    constructor(width, height, color) {
       this.width = width; // this keyword is rectangle1 down there 
       this.height = height;
       this.color = color; 
    }
    area() {
      const area = this.width * this.height;
      return area;
    }
    paint() {
      //  console.log(`Painting with color ${this.color}`);
      console.log(`Painting with color` + this.color);
    }
    parameter(){
      const parameter = 2 * ( this.width + this.height );
      return parameter;
    }
 }
 
 const rectangle1 = new Rectangle(20, 10, "white-smoke");
 console.log(rectangle1.area);
 console.log(rectangle1.area());
 console.log(rectangle1.paint()); // will return undefined also as it doesn't return anything
 rectangle1.paint();
 console.log(rectangle1.parameter);
 console.log(rectangle1.parameter());