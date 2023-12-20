import "dotenv/config";
import fs from "fs";
import readline from "readline";
import { sendOpenApiRequest } from "./request-helper.js";
import { logger } from "./utilities/logger.js";
import { appGlobalConsts } from "./consts/app-global-consts.js";

const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout,
});

const chatHistory = [];

let askFunctionCalledTimes = 0;
export const ask = (prompt) => {
  chatHistory.push({
    role: "user",
    content: prompt,
  });
  if (askFunctionCalledTimes === 0) {
    logger.logPrompt(prompt);
  }
  askFunctionCalledTimes++;
  sendOpenApiRequest(chatHistory)
    .then((data) => {
      chatHistory.push({
        role: "system",
        content: data.choices[0].message.content,
      });
      logger.logResponse(data.choices[0].message.content);
      rl.question(`${appGlobalConsts.colorizedUserPromptPrefix} : `, (newPrompt) => {
        newPrompt.toLowerCase() === 'exit' ? process.exit(0) : ask(newPrompt);
      });
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
