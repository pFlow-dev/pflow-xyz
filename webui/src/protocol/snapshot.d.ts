import { Model, Vector } from "./model";
type HashChar = "#" | "%32";
export declare function snapshot(model: Model, options?: {
    state?: Vector;
    hashChar?: HashChar;
}): string;
export {};
