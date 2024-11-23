export declare function findBy<K extends PropertyKey, T extends Record<K, unknown>, ValueType>(key: K, value: ValueType, array: Array<T>): T | null;
export declare function mergeArrayBy<K extends PropertyKey, T1 extends Record<K, unknown>, T2 extends Record<K, unknown>>(key: K, array1: T1[], array2: T2[]): Array<T1 & T2>;
export declare function sum(array: number[]): number;
export declare function sum<T>(array: T[], key?: (element: T) => number): number;
export declare function empty<T>(array: string | T[] | undefined | null): boolean;
export declare function existsDuplicate<T>(array: T[]): boolean;
export declare function count<T>(array?: T[], condition?: (element: T, index: number, array: T[]) => boolean): number;
export declare function sequence(start: number, end?: number): number[];
export declare function divide(value: number, divider: number): number[];
export declare function findMinMax(array: Iterable<number>): {
    max: number;
    min: number;
    maxIndex: number;
    minIndex: number;
};
export declare function generateForDepth<T>(array: Array<T>, depth: number): Iterable<Array<T>>;
export declare function moveAbove<T>(array: T[], element: T): void;
export declare function moveBelow<T>(array: T[], element: T): void;
//# sourceMappingURL=array.d.ts.map