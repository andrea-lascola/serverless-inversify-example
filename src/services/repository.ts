import { IRepository, ILogger } from "../interfaces/interfaces";
import { injectable, inject } from "inversify";
import { TYPES } from "../types";

@injectable()
export class Repository implements IRepository {
    constructor(@inject(TYPES.Logger) private logger: ILogger) { }

    public get<T>(type: new () => T): T {
        // get data from repository
        this.logger.debug(`Use injected logger into repository. Get data`);
        return new type();
    }
}