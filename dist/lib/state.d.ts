export type State<T, PropName extends string> = ({
    ready: true;
} & {
    [key in PropName]: T;
}) | ({
    ready: false;
} & {
    [key in PropName]: null;
});
//# sourceMappingURL=state.d.ts.map