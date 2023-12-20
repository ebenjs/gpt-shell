import { loadingAnimation } from "./utilities/animation.js";
import { logger } from "./utilities/logger.js";
import { getConfig } from "./utilities/get-config.js";
import readline from "readline";

export const sendOpenApiRequest = async (requestPrompt) => {
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
  // const response = await fetch(getConfig().config.url, requestOptions);
  // const data = await response.json();

  // wait 2 seconds

  await new Promise((resolve) => setTimeout(resolve, 2000));

     clearInterval(animation);
    //  readline.cursorTo(process.stdout, 0);
     process.stdout.clearLine();
    // process.stdout.write("\r hi");
  
  const data = {
    choices: [
      {
        message: {
          content: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Proin ac neque augue. Sed sollicitudin metus in posuere tristique. Proin hendrerit lacus vel turpis scelerisque sagittis. Fusce dictum, urna a hendrerit imperdiet, neque diam vestibulum mauris, sit amet gravida dolor risus id diam. Morbi pulvinar tortor sed nunc dictum pretium. Orci varius natoque penatibus et magnis dis parturient montes, nascetur ridiculus mus. Sed quis augue sit amet odio accumsan tempor sit amet et augue. Proin id turpis facilisis, gravida massa eu, tempor dui. Ut ullamcorper faucibus rhoncus. Nunc pretium, lacus sed scelerisque volutpat, nulla sapien porta metus, in cursus ligula purus sit amet orci. Praesent a neque metus. Sed eu efficitur nisl.",
        },
      },
      {
        message: {
          content: "Fusce id augue augue. Donec accumsan nisi sit amet ultrices sollicitudin. Etiam ac semper ipsum, vitae mollis odio. Proin fermentum aliquam ipsum, vel posuere dui sagittis non. Donec sodales gravida nibh nec porta. Donec venenatis eros id ligula gravida gravida. In laoreet aliquam nulla. Donec elementum pharetra vehicula. Phasellus dignissim suscipit efficitur. Suspendisse ac vulputate sem.",
        },
      },
    ],
  };

  // clearInterval(animation);
  // process.stdout.write("\r");
  return data;
};
