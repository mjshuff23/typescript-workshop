interface AnimalLike {
    eat(food: string): void;
}
interface AnimalLike {
    isAlive(): boolean;
}
interface AnimalLike {
    eat(food: string): void;
}
declare function feed(animal: AnimalLike): string;
declare const myAnimal: AnimalLike;
interface Window {
    exampleProperty: number;
}
declare type NestedNumbers = number | NestedNumbers[];
declare const val: NestedNumbers;
