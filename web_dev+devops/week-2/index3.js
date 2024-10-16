class Shape {
    constructor(dimensions, type, color) {
        this.dimensions = dimensions;
        this.type = type;
        this.color = color;
    }
    paint() {
        console.log(`Coloring the shape ${this.type} with color ${this.color}.`);
    }
}

class Rectangle extends Shape {
    constructor(dimensions, color) {
        super(dimensions, "rectange", color);
    }
    area() {
        console.log(`Area of the rectangle is ${this.dimensions.length * this.dimensions.breadth}.`);
    }
}

class Circle extends Shape {
    constructor(dimensions, color) {
        super(dimensions, "circle", color);
    }
    area() {
        console.log(`Area of the circle is ${this.dimensions.radius * this.dimensions.radius * 3.1428}.`);
    }
}

let rect = new Rectangle({length: 5, breadth: 4}, "red");
rect.area();
rect.paint();

let cir = new Circle({radius: 5}, "blue");
cir.paint();
cir.area();