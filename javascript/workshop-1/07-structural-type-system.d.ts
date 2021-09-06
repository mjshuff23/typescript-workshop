interface Point {
    x: number;
    y: number;
}
declare function logPoint(point: Point): void;
declare const point: {
    x: number;
    y: number;
    z: number;
};
declare const point3: {
    x: number;
    y: number;
    z: number;
};
declare const rect: {
    x: number;
    y: number;
    height: number;
    width: number;
};
declare class VirtualPoint {
    x: number;
    y: number;
    constructor(x: number, y: number);
}
declare const newVirtualPoint: VirtualPoint;
