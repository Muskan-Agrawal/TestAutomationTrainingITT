import { Rectangle } from "./Rectangle"

export class Square extends Rectangle {
    constructor();

    constructor(side: number);
    
    constructor(side?: number, color?: string, filled?: boolean) {
        typeof side !== 'undefined' ? super(side,side) : super();
    }

    public getSide(): number {
        return this.width;
    }

    public setSide(side: number): void {
        this.width = side;
        this.length = side;
    }

    public setWidth(side: number): void {
        this.width = side;
        this.length = side;
    }

    public setLength(side: number): void {
        this.width = side;
        this.length = side;
    }
}