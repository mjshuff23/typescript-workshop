declare function tupleCreator<T>(first: T): <S>(last: S) => [T, S];
declare const finishTuple: <S>(last: S) => [number, S];
declare const t1: [number, null];
declare const t2: [number, number[]];
