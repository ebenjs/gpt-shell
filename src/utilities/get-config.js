import fs from "fs";

export const getConfig = () => {
  if (fs.existsSync("./.gpt-shell-config.json")) {
    const config = JSON.parse(fs.readFileSync("./.gpt-shell-config.json"));
    return config;
  }

  const config = {
    apikey: process.env.OPENAI_API_KEY,
    model: process.env.OPENAI_MODEL,
    url: process.env.OPENAI_API_URL,
  };

  return config;
};
