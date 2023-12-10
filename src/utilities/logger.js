import winston from "winston";
import chalk from "chalk";

const customResponseLoggerFormat = winston.format.printf(({ message }) => {
  return `${chalk.magenta("[gpt-shell-response]")} : ${message}`;
});

const customPromptLoggerFormat = winston.format.printf(({ message }) => {
  return `${chalk.blueBright("[gpt-shell-prompt]")} : ${message}`;
});

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

export const logger = {
  default: _logger,
  logPrompt,
  logResponse,
};
