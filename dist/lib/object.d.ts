export declare class RawObject {
    readonly obj: object;
    constructor(obj: object);
}
type SourceType = {
    [Key: string]: boolean | number | string | undefined | null | symbol | bigint | RawObject | Array<unknown> | SourceType;
};
/**
 * @deprecated `_.merge` should be used instead of this function.
 */
export declare function deepAssign<T>(target: T, source: SourceType): T;
export declare function ternary<T>(condition: boolean | undefined | null, truthy: T, falsy: T, nullish: T): T;
export declare function pick<T, K extends keyof T>(obj: T, ...keys: K[]): Pick<T, K>;
export declare function pick<T, K extends keyof T>(obj: T, keys: K[]): Pick<T, K>;
export declare function omit<T, K extends keyof T>(obj: T, ...keys: K[]): Omit<T, K>;
export declare function omit<T, K extends keyof T>(obj: T, keys: K[]): Omit<T, K>;
export {};
//# sourceMappingURL=object.d.ts.map