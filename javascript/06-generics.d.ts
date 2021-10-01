declare const phones: {
    [key: string]: {
        customerId: string;
        areaCode: string;
        num: string;
    };
};
declare const phoneList: {
    customerId: string;
    areaCode: string;
    num: string;
}[];
declare const phoneDict: {
    '0001': {
        customerId: string;
        areaCode: string;
        num: string;
    };
    '0002': {
        customerId: string;
        areaCode: string;
        num: string;
    };
};
interface PhoneInfo {
    customerId: string;
    areaCode: string;
    num: string;
}
