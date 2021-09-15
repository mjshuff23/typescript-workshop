declare const myCanvas: HTMLCanvasElement;
declare const a: number;
declare let changingString: string;
declare const constantString = "I will never change";
declare let x: 'Hello';
declare function printText(s: string, alignment: 'left' | 'right' | 'center'): void;
declare function compare(a: string, b: string): -1 | 0 | 1;
interface Options {
    width: number;
    height: number;
}
declare function configure(x?: Options | 'auto'): void;
declare function handleRequest(url: string, method: 'GET' | 'POST'): void;
declare const req: {
    readonly url: "https://www.google.com";
    readonly method: "GET";
};
declare let myCar: [number, string, string];
declare const year: number, make: string, model: string;
declare const numPair: [number, number];
