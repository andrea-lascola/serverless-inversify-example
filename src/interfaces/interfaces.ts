// i-logger.ts
export interface ILogger {
    debug(message: string): void;
    info(message: string): void;
}

export interface IRepository {
    get<T>(type: new () => T): T;
}
