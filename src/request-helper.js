import { loadingAnimation } from "./utilities/animation.js";
import { logger } from "./utilities/logger.js";
import { getConfig } from "./utilities/get-config.js";

export const sendOpenApiRequest = async (requestPrompt) => {
  logger.logPrompt(requestPrompt + "\n");
  const animation = loadingAnimation();

  console.log(getConfig());

  const requestOptions = {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
      Authorization: "Bearer " + getConfig().apikey,
    },
    body: JSON.stringify({
      model: getConfig().model,
      messages: [{ role: "user", content: requestPrompt }],
    }),
  };
  /*const response = await fetch(getConfig().url, requestOptions);
  const data = await response.json();*/

  // Simulate call to OpenAI API for development purposes
  await new Promise((resolve) => setTimeout(resolve, 5000));
  const fakeData = {
    choices: [
      {
        message: { content: "Hello, how are you?" },
      },
    ],
  };

  clearInterval(animation);
  process.stdout.write("\r");
  return fakeData;
};
