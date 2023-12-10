import { logger } from "./logger.js";

let aggregatedErrors = [];

export const addError = (error) => {
  aggregatedErrors.push(error);
};

export const getErrors = () => aggregatedErrors;

export const clearErrors = () => (aggregatedErrors = []);

export const logErrors = () => {
  aggregatedErrors.forEach((error) => {
    logger.logError(error);
  });
};

export const throwError = (message) => {
  throw new Error(message);
};
