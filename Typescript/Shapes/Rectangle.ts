import { Shape } from './Shapes';

export class Rectangle extends Shape {
    protected width: number;
    protected length: number;

    constructor();

    constructor(width?: number, length?: number);
    
    constructor(width?: number, length?: number, color?: string, filled?: boolean) {
        super(color, filled);
        this.width = typeof width !== 'undefined' ? width : 1;
        this.length = typeof length !== 'undefined' ? length : 1;
    }

    public setLength(length: number): void {
        this.length = length;
    }

    public getLength(): number {
        return this.length;
    }

    public setWidth(width: number): void {
        this.width = width;
    }

    public getWidth(): number {
        return this.width;
    }

    public getArea(): number {
        return this.width*this.length;
    }

    public getPerimeter(): number {
        return 2*(this.length+this.width);
    }
}