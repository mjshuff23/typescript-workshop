/**************************************** Unions **************************************************/
declare type MyBoolean = true | false;
declare type WindowStates = "open" | "closed" | "minimized";
declare type LockStates = "locked" | "unlocked";
declare type PositiveOddNumbersUnderTen = 1 | 3 | 5 | 7 | 9;
declare type myCrazyType = "Hi" | false | 10;
declare function getLength(obj: string | string[]): string;
/**************************************** Generics ************************************************/
declare type StringArray = Array<string>;
declare type NumberArray = Array<number>;
declare type ObjectArray = Array<Object>;
declare type ObjectWithNameArray = Array<{
    name: string;
}>;
interface Backpack<Type> {
    add: (obj: Type) => void;
    get: () => Type;
}
declare let backpack: Backpack<string>;
declare function greetUser(user: string, date: Date): void;
