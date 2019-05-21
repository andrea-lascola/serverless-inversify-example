import { ILogger } from "../interfaces/interfaces";
import { injectable } from "inversify";

@injectable()
export class Logger implements ILogger {
    public debug(message: string): void {
        console.log(`DEBUG: ${message}`);
    }
    public info(message: string): void {
        console.log(`INFO: ${message}`);
    }
}
