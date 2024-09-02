interface WorkerConstructorOptions {
    name?: string;
}
type WorkerConstructor = new (options?: WorkerConstructorOptions) => Worker;
export declare class WorkerManager<ParameterType, ResultType> {
    private readonly workerConstructor;
    private readonly options?;
    private _worker;
    constructor(workerConstructor: WorkerConstructor, options?: WorkerConstructorOptions | undefined);
    invoke(parameter: ParameterType): Promise<ResultType>;
    get worker(): Worker;
}
export {};
//# sourceMappingURL=worker.d.ts.map