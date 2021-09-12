interface TwoNumberCalculation {
    (x: number, y: number): number;
}
declare type TwoNumberCalc = (x: number, y: number) => number;
declare const add: TwoNumberCalculation;
declare const substract: TwoNumberCalc;
declare function printFormattedJSON(obj: string[]): void;
declare const myVar: void;
declare function invokeInFourSeconds(callback: () => undefined): void;
declare function invokeInFiveSeconds(callback: () => void): void;
declare const values: number[];
interface DateConstructor {
    new (value: number): Date;
}
declare let myDateConstructor: DateConstructor;
declare const d: Date;
declare type FormSubmitHandler = (data: FormData) => void;
declare type MessageHandler = (event: MessageEvent) => void;
declare function handleMainEvent(elem: HTMLFormElement, handler: FormSubmitHandler): void;
declare function handleMainEvent(elem: HTMLIFrameElement, handler: MessageHandler): void;
declare const myFrame: HTMLIFrameElement;
declare const myForm: HTMLFormElement;
