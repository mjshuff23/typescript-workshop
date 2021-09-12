declare type PointType = {
    x: number;
    y: number;
};
declare let myPoint: Point;
declare function myCoords(pt: Point): void;
declare type ID = string | number;
declare type TrimmedString = string;
declare function trimInput(str: string): TrimmedString;
declare let userInput: string;
interface PointInterface {
    x: number;
    y: number;
}
interface Animal {
    name: string;
}
interface Bear extends Animal {
    honey: boolean;
}
declare let myBear: Bear;
interface MyWindow {
    title: string;
}
interface MyWindow {
    size: {
        height: number;
        width: number;
    };
}
declare let myWindow: MyWindow;
