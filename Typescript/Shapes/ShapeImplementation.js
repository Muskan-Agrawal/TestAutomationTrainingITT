"use strict";
exports.__esModule = true;
var Circle_1 = require("./Circle");
var Rectangle_1 = require("./Rectangle");
var Square_1 = require("./Square");
var circle = new Circle_1.Circle(5);
console.log('\n', "----------------Circle------------- ", '\n', circle);
console.log("Color: " + circle.getColor());
circle.setColor("PINK");
console.log("Color: " + circle.getColor());
console.log("Circle object: ", circle);
var rectangle = new Rectangle_1.Rectangle(2, 4);
console.log('\n', "----------------Rectangle-------------- ", '\n', rectangle);
console.log("Area: " + rectangle.getArea());
console.log("Perimeter: " + rectangle.getPerimeter());
rectangle.setLength(3);
rectangle.setWidth(5);
console.log("Area: " + rectangle.getArea());
console.log("Perimeter: " + rectangle.getPerimeter());
console.log("Rectangle object: ", rectangle);
var square = new Square_1.Square(123);
console.log('\n', "----------------Square---------------- ", '\n', square);
console.log("Square side: " + square.getLength(), square.getWidth());
console.log("Area: ", square.getArea());
//assigning sub-class instance to super-class
rectangle = square;
rectangle.setLength(7);
rectangle.setWidth(5);
console.log("Area of rectangle: " + rectangle.getArea());
