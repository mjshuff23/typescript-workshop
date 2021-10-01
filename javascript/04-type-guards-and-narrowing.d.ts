declare let value: Date | null | undefined | 'pineapple' | [number] | {
    dateRange: [Date, Date];
};
interface CarLike {
    make: string;
    model: string;
    year: number;
}
declare let maybeCar: unknown;
declare function isCarLike(maybeCar: any): maybeCar is CarLike;
declare function assertsIsCarLike(maybeCar: any): asserts maybeCar is CarLike;
declare function isNull(val: any): val is null;
declare const empty = "";
declare const zero = 0;
