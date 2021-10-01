declare const userInfo: {
    name: string;
    email: string;
    secondaryEmail: null;
};
declare const formInProgress: {
    createdAt: Date;
    data: FormData;
    completedAt: undefined;
};
declare function submitForm(): void;
declare type GroceryCart = {
    fruits?: {
        name: string;
        qty: number;
    }[];
    vegetable?: {
        name: string;
        qty: number;
    }[];
};
declare const cart: GroceryCart;
declare class AsyncStuff {
    setupPromise: Promise<any>;
    isSetup: boolean;
    constructor();
    private doSetup;
}
declare let myThing: AsyncStuff;
