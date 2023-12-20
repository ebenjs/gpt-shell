import winston from "winston";
import chalk from "chalk";
import { appGlobalConsts } from "../consts/app-global-consts.js";

const customResponseLoggerFormat = winston.format.printf(({ message }) => {
  return `\n${appGlobalConsts.colorizedSystemResponsePrefix} : ${message} \n`;
});

const customPromptLoggerFormat = winston.format.printf(({ message }) => {
  return `${appGlobalConsts.colorizedUserPromptPrefix} : ${message}`;
});

const customErrorLoggerFormat = winston.format.printf(({ message }) => {
  return chalk.redBright(`${appGlobalConsts.systemErrorPrefix} : ${message}`);
});

const customPrefixedErrorLoggerFormat = (prefix) => {
  return winston.format.printf(({ message }) => {
    return chalk.redBright(prefix + message);
  });
};

const _logger = winston.createLogger({
  level: "info",
  transports: [
    new winston.transports.Console(),
    new winston.transports.File({
      filename: "gpt-shell-responses.log",
      level: "info",
    }),
    new winston.transports.File({
      filename: "gpt-shell-error.log",
      level: "error",
    }),
    new winston.transports.File({ filename: "combined.log" }),
  ],
});

const logPrompt = (prompt) => {
  _logger.format = customPromptLoggerFormat;
  _logger.info(prompt);
};

const logResponse = (response) => {
  _logger.format = customResponseLoggerFormat;
  _logger.info(response);
};

const logError = (errors) => {
  _logger.format = customErrorLoggerFormat;
  _logger.error("Some configuration errors were found");
  errors.forEach((error, index) => {
    _logger.format = customPrefixedErrorLoggerFormat(`[${index}] `);
    _logger.error(error);
  });
};

export const logger = {
  default: _logger,
  logPrompt,
  logResponse,
  logError,
};
