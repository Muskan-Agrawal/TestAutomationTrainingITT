import { Circle } from "./Circle";
import { Rectangle } from "./Rectangle";
import { Square } from "./Square";

var circle = new Circle(5);
console.log('\n',"----------------Circle------------- ",'\n',circle);
console.log("Color: " + circle.getColor())
circle.setColor("PINK");
console.log("Color: " + circle.getColor());
console.log("Circle object: ", circle);

var rectangle = new Rectangle(2, 4);
console.log('\n',"----------------Rectangle-------------- ",'\n',rectangle);
console.log("Area: " + rectangle.getArea());
console.log("Perimeter: " + rectangle.getPerimeter());
rectangle.setLength(3);
rectangle.setWidth(5);
console.log("Area: " + rectangle.getArea());
console.log("Perimeter: " + rectangle.getPerimeter());
console.log("Rectangle object: ", rectangle);

var square = new Square(123);
console.log('\n',"----------------Square---------------- ",'\n',square);
console.log("Square side: " + square.getLength(), square.getWidth());
console.log("Area: ", square.getArea());

//assigning sub-class instance to super-class
rectangle = square;
rectangle.setLength(7);
rectangle.setWidth(5);
console.log("Area of rectangle: " + rectangle.getArea());