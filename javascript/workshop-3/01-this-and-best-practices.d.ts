/*********************************** BAD ***********************************/
declare function myClickHandler(event: Event): void;
/*********************************** GOOD ***********************************/
declare function myClickHandlerAlternate(this: HTMLButtonElement, event: Event): void;
declare const myButton: HTMLButtonElement;
declare const boundHandler: (event: Event) => void;
