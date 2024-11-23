export type SIPrefixSymbol = 'Q' | 'R' | 'Y' | 'Z' | 'E' | 'P' | 'T' | 'G' | 'M' | 'k' | 'h' | 'da' | '' | 'd' | 'c' | 'm' | 'u' | 'μ' | 'n' | 'p' | 'f' | 'a' | 'z' | 'y' | 'r' | 'q';
export type SIPrefix = {
    symbol: SIPrefixSymbol;
    exponent: number;
};
export declare const BaseSIPrefix: SIPrefix;
export declare class SIValue {
    readonly fraction: number;
    readonly prefix: SIPrefix;
    private static siValuePattern;
    constructor(fraction: number, prefix: SIPrefix);
    get actualValue(): number;
    toString(): string;
    toSimpleString(fractionDigits?: number): string;
    toFixed(fractionDigits?: number): string;
    static getPrefixSymbols(allPrefix?: boolean): SIPrefixSymbol[];
    static test(text: string | undefined): boolean;
    static parseToPart(text: string | undefined): {
        fraction?: number;
        prefix?: SIPrefix;
    };
    static parse(text: string | undefined): SIValue;
    static fit(value: number, symbols: readonly SIPrefixSymbol[]): SIValue;
    static fitBy(value: number, symbol: SIPrefixSymbol): SIValue;
    static getPrefix(symbol: SIPrefixSymbol): SIPrefix;
    static successor(symbol: SIPrefixSymbol, allPrefix?: boolean): SIPrefixSymbol;
    static predecessor(symbol: SIPrefixSymbol, allPrefix?: boolean): SIPrefixSymbol;
}
//# sourceMappingURL=siPrefix.d.ts.map