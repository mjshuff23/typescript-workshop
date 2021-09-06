declare const phones: {
    home: {
        country: string;
        area: string;
        number: string;
    };
    work: {
        country: string;
        area: string;
        number: string;
    };
    mobile: {
        country: string;
        area: string;
        number: string;
    };
};
declare const phonesIndex: {
    [banana: string]: {
        country: string;
        area: string;
        number: string;
    } | undefined;
};
