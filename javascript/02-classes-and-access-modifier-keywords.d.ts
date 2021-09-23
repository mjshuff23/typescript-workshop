declare class Car {
    #private;
    make: string;
    model: string;
    constructor(make: string, model: string, year: number);
    sayInfo: () => void;
}
declare const c: Car;
