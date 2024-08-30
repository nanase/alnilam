export declare class RawObject {
    readonly obj: object;
    constructor(obj: object);
}
type SourceType = {
    [Key: string]: boolean | number | string | undefined | null | symbol | bigint | RawObject | Array<unknown> | SourceType;
};
export declare function deepAssign<T>(target: T, source: SourceType): T;
export declare function ternary<T>(condition: boolean | undefined | null, truthy: T, falsy: T, nullish: T): T;
export {};
//# sourceMappingURL=object.d.ts.map