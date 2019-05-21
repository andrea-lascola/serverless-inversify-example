import { APIGatewayProxyHandler } from "aws-lambda";
import container from "./inversify.config";
import { IRepository, ILogger } from "./interfaces/interfaces";
import TYPES from "./types";

import "source-map-support/register";
import { Example } from "./models/example";

export const test: APIGatewayProxyHandler = async (event, context) => {

  console.log("test function");

  const repo = container.get<IRepository>(TYPES.Repository);
  console.log("got repo from container");

  const logger = container.get<ILogger>(TYPES.Logger);
  console.log("got logger from container");

  const model = repo.get(Example);
  logger.debug(`Account ok: ${model != null}`);
  logger.debug("Dependencies are wired correctly");

  return {
    statusCode: 200,
    body: JSON.stringify({
      message: "Go Serverless Webpack (Typescript) v1.0! Your function executed successfully!",
      input: event,
    }, null, 2),
  };
};
