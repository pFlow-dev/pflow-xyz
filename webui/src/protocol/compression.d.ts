import { Model } from "./model";
export declare function compressBrotliEncode(data: string): string;
export declare function decompressBrotliDecode(data: string): Promise<string>;
export declare function decompressModel(data: string, version?: string): Promise<Model>;
