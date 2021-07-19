export abstract class Shape {
    protected color: string;
    protected filled: boolean;

    constructor();

    constructor(color?: string, filled?: boolean);
    
    constructor(color?: string, filled?: boolean) {
        this.color = typeof color !== 'undefined' ? color : "red";
        this.filled = typeof filled !== 'undefined' ? filled : true;
    }

    public getColor(): string {
        return this.color;
    }

    public setColor(color: string): void {
        this.color = color;
    }

    public isFilled(): boolean {
        return this.filled;
    }

    public setFilled(filled: boolean): void {
        this.filled = filled;
    }

    abstract getArea(): number;

    abstract getPerimeter(): number;
}