class Shape{
    constructor() {}
    getArea() {
        throw new Error("You cannot create an abstract shape")
    }
    getTotalSides() {
        throw new Error("You cannot create an abstract shape")
    }
    getDimensions() {
        throw new Error("You cannot create an abstract shape")
    }
}
class Circle extends Shape {
    constructor(radius){
        super();
        this.radius = radius;
    }
    getArea(){
        return Math.PI * this.radius ** 2;
    }
    getTotalSides(){
        return 0;
    }
    getDimensions(){
        return "Two dimensional";
    }
}  
class Rectangle extends Shape {
    constructor(length,width){
        super();
        this.width = width;
        this.length = length;
    }
    getArea(){
        return this.length * this.width;
    }
    getTotalSides(){
        return 4;
    }
    getDimensions(){
        return "Two dimensional";
    }
} 
class Triangle extends Shape {
    constructor(height,width){
        super();
        this.height = height;
        this.base = base;
    }
    getArea(){
        return Math.PI ** 2; 
    }
    getTotalSides(){
        return 3;
    }
    getDimensions(){
        return "Two dimensional"
    }
} 

const circle = new Circle(30);
console.log("The Area of a circle :" + circle.getArea());
console.log("The TotalSides of a circle :" + circle.getTotalSides());
console.log("The Dimensions of a circle :" + circle.getDimensions());

const rectangle = new Rectangle(30,20);
console.log("The Area of a rectangle :" + rectangle.getArea());
console.log("The TotalSides of a rectangle :" + rectangle.getTotalSides());
console.log("The Dimensions of a rectangle :" + rectangle.getDimensions());

const triangle = new Triangle(30,20,10);
console.log("The Area of a triangle :" + triangle.getArea());
console.log("The TotalSides of a triangle :" + triangle.getTotalSides());
console.log("The Dimensions of a triangle :" + triangle.getDimensions());


