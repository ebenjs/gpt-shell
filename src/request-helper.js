import { loadingAnimation } from "./utilities/animation.js";
import { getConfig } from "./utilities/get-config.js";

export const sendOpenApiRequest = async (messages) => {
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
      messages: messages,
    }),
  };
  const response = await fetch(getConfig().config.url, requestOptions);
  const data = await response.json();

  clearInterval(animation);
  process.stdout.clearLine();
  return data;
};
