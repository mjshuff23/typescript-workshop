declare function flipCoin(): 'heads' | 'tails';
declare function maybeGetUserInfo(string?: 'error' | 'success'): Error | {
    name: string;
    email: string;
} | 'need an argument';
declare class Person {
    name: string;
    age: number;
    constructor(name: string, age: number);
}
declare const person1: Person;
declare function returnPerson(person: Person | {
    name: string;
    age: number;
}): Person;
declare function maybeGetInfoTwo(): ['error', Error] | ['success', {
    name: string;
    email: string;
}];
declare const outcome: ["error", Error] | ["success", {
    name: string;
    email: string;
}];
declare const first: "error" | "success", second: Error | {
    name: string;
    email: string;
};
declare const secondOutcome: ["error", Error] | ["success", {
    name: string;
    email: string;
}];
declare function makeWeek(): Date & {
    end: Date;
};
declare const thisWeek: Date & {
    end: Date;
};
declare type SpecialDate = Date & {
    getReason(): string;
};
declare const newYearsEve: SpecialDate;
