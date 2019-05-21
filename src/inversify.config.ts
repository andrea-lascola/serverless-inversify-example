import "reflect-metadata";

import { Container } from "inversify";
import TYPES from "./types";
import { ILogger, IRepository } from "./interfaces/interfaces";
import { Logger } from "./services/logger";
import { Repository } from "./services/repository";

const container: Container = new Container();

container.bind<ILogger>(TYPES.Logger).to(Logger);
container.bind<IRepository>(TYPES.Repository).to(Repository);

export default container;
