import { loadingAnimation } from "./utilities/animation.js";
import { logger } from "./utilities/logger.js";
import { getConfig } from "./utilities/get-config.js";

export const sendOpenApiRequest = async (requestPrompt) => {
  logger.logPrompt(requestPrompt + "\n");
  const animation = loadingAnimation();

  const config = getConfig();

  if (config.status === "error") {
    clearInterval(animation);
    process.stdout.write("\r");
    throw new Error(JSON.stringify(config.errors));
  }

  const requestOptions = {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
      Authorization: "Bearer " + getConfig().config.apikey,
    },
    body: JSON.stringify({
      model: getConfig().config.model,
      messages: [{ role: "user", content: requestPrompt }],
    }),
  };
  const response = await fetch(getConfig().config.url, requestOptions);
  const data = await response.json();

  clearInterval(animation);
  process.stdout.write("\r");
  return data;
};
