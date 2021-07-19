import { Shape } from './Shapes';

const PI: number = 3.14;

export class Circle extends Shape {
    private radius: number;

    constructor();

    constructor(radius?: number);
    
    constructor(radius?: number, color?: string, filled?: boolean) {
        super(color, filled);
        this.radius = typeof radius !== 'undefined' ? radius : 1;
    }

    public setRadius(radius: number): void {
        this.radius = radius;
    }

    public getRadius(): number {
        return this.radius;
    }

    public getArea(): number {
        return PI*this.radius*this.radius;
    }

    public getPerimeter(): number {
        return 3*PI*this.radius;
    }
}