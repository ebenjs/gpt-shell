import "dotenv/config";
import fs from "fs";
import { sendOpenApiRequest } from "./request-helper.js";
import { logger } from "./utilities/logger.js";

export const ask = (prompt) => {
  sendOpenApiRequest(prompt)
    .then((data) => {
      logger.logResponse(data.choices[0].message.content);
    })
    .catch((error) => {
      logger.logError(JSON.parse(error.message));
    });
};

export const configure = (args) => {
  let existingConfig = null;
  if (fs.existsSync("./.gpt-shell-config.json")) {
    existingConfig = JSON.parse(fs.readFileSync("./.gpt-shell-config.json"));
  }

  const { apikey, model, url } = args;
  const config = {
    apikey: apikey || existingConfig?.apikey || process.env.OPENAI_API_KEY,
    model: model || existingConfig?.model || process.env.OPENAI_DEFAULT_MODEL,
    url: url || existingConfig?.url || process.env.OPENAI_API_URL,
  };

  fs.writeFileSync("./.gpt-shell-config.json", JSON.stringify(config, null, 2));

  logger.default.info(config);
};
