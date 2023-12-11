import fs from "fs";
import { getErrors, addError } from "./error-handling.js";

export const checkForRequiredEnvironmentVariables = (config) => {
  let result = true;
  if (!config.apikey) {
    result = false;
    addError("OPENAI_API_KEY is not defined");
  }

  if (!config.model) {
    result = false;
    addError("OPENAI_MODEL is not defined");
  }

  if (!config.url) {
    result = false;
    addError("OPENAI_API_URL is not defined");
  }

  return result;
};

export const getConfig = () => {
  if (fs.existsSync("./.gpt-shell-config.json")) {
    const config = JSON.parse(fs.readFileSync("./.gpt-shell-config.json"));
    if (!checkForRequiredEnvironmentVariables(config)) {
      return { status: "error", errors: getErrors() };
    }

    return { status: "success", config: config };
  }

  const config = {
    apikey: process.env.OPENAI_API_KEY,
    model: process.env.OPENAI_MODEL,
    url: process.env.OPENAI_API_URL,
  };

  if (!checkForRequiredEnvironmentVariables(config)) {
    return { status: "error", errors: getErrors() };
  }

  return { status: "success", config: config };
};
