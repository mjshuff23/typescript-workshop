interface AnimalLike {
    isAlive(): boolean;
}
interface AnimalLike {
    eat(food: string): void;
}
declare function feed(animal: AnimalLike): string;
declare const myAnimal: AnimalLike;
declare type NestedNumbers = number | NestedNumbers[];
declare const val: NestedNumbers;
