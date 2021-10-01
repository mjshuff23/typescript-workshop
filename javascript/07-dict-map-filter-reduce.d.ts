declare const fruits: {
    apple: {
        color: string;
        mass: number;
    };
    grape: {
        color: string;
        mass: number;
    };
    banana: {
        color: string;
        mass: number;
    };
    lemon: {
        color: string;
        mass: number;
    };
    pear: {
        color: string;
        mass: number;
    };
    orange: {
        color: string;
        mass: number;
    };
    raspberry: {
        color: string;
        mass: number;
    };
    cherry: {
        color: string;
        mass: number;
    };
};
interface Dict<Type> {
    [k: string]: Type;
}
declare function mapDict<Type, NewType>(inputDict: Dict<Type>, mapFunction: (original: Type) => NewType): Dict<NewType>;
declare const fruitsWithKgMass: Dict<{
    kg: number;
    color: string;
    mass: number;
} | {
    kg: number;
    color: string;
    mass: number;
} | {
    kg: number;
    color: string;
    mass: number;
} | {
    kg: number;
    color: string;
    mass: number;
} | {
    kg: number;
    color: string;
    mass: number;
} | {
    kg: number;
    color: string;
    mass: number;
} | {
    kg: number;
    color: string;
    mass: number;
} | {
    kg: number;
    color: string;
    mass: number;
}>;
declare function filterDict<T>(inputDict: Dict<T>, filterFunction: (value: T) => boolean): Dict<T>;
declare const redFruit: Dict<{
    color: string;
    mass: number;
} | {
    color: string;
    mass: number;
} | {
    color: string;
    mass: number;
} | {
    color: string;
    mass: number;
} | {
    color: string;
    mass: number;
} | {
    color: string;
    mass: number;
} | {
    color: string;
    mass: number;
} | {
    color: string;
    mass: number;
}>;
declare function reduceDict<T, V>(inputDict: Dict<T>, reducerFunction: (currentVal: V, dictItem: T) => V, initialValue: V): V;
declare const oneOfEachFruitMass: number;
