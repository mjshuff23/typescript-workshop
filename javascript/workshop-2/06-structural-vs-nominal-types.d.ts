declare class Car {
    make: string;
    model: string;
    year: number;
    isElectric: boolean;
    constructor(make: string, model: string, year: number, isElectric: boolean);
}
declare class Truck {
    make: string;
    model: string;
    year: number;
    towingCapacity: number;
    constructor(make: string, model: string, year: number, towingCapacity: number);
}
declare const vehicle: {
    make: string;
    model: string;
    year: number;
};
declare function printCar(car: {
    make: string;
    model: string;
    year: number;
}): void;
