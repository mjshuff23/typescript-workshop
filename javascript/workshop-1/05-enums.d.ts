/********************************** Numeric enums *********************************************/
declare enum Direction {
    Up = 1,
    Down = 2,
    Left = 3,
    Right = 4
}
declare enum UserResponse {
    No = 0,
    Yes = 1
}
declare function respond(recipient: string, message: UserResponse): void;
/********************************** String enums *********************************************/
declare enum StringDirections {
    Up = "UP",
    Down = "DOWN",
    Left = "LEFT",
    Right = "RIGHT"
}
