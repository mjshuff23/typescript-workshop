declare type Primitive = number | boolean | string | null;
declare type JSONObject = {
    [k: string]: JSONValue;
};
declare type JSONArray = JSONValue[];
declare type JSONValue = Primitive | JSONArray | JSONObject;
declare function isJSON(arg: JSONValue): void;
