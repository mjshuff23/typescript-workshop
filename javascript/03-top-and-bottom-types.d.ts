declare let x: boolean;
declare let y: number;
declare let a: 5 | 6 | 7;
declare let b: null;
declare let d: {
    favoriteFruit?: 'pineapple';
};
declare let flexible: any;
declare let unknownValue: unknown;
declare class Car {
    drive(): void;
}
declare class Truck {
    tow(): void;
}
declare class Boat {
    isFloating(): boolean;
}
declare type Vehicle = Truck | Car | Boat;
declare let myVehicle: Vehicle;
declare class UnreachableError extends Error {
    constructor(_nvr: never, message: string);
}
