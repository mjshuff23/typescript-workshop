declare const a: number;
declare let changingString: string;
declare const constantString = "I will never change";
declare let x: "Hello";
declare function printText(s: string, alignment: "left" | "right" | "center"): void;
declare function compare(a: string, b: string): -1 | 0 | 1;
interface Options {
    width: number;
}
declare function configure(x?: Options | "auto"): void;
declare let myCar: [number, string, string];
declare const year: number, make: string, model: string;
declare const numPair: [number, number];
