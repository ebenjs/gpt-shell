import chalk from "chalk";

export const appGlobalConsts = {
  userPromptPrefix: "[gp-shell-promt]",
  systemResponsePrefix: "[gp-shell-response]",
  systemErrorPrefix: "[error]",
  colorizedUserPromptPrefix: chalk.blueBright("[gp-shell-promt]"),
  colorizedSystemResponsePrefix: chalk.magenta("[gp-shell-response]"),
  colorizedSystemErrorPrefix: chalk.redBright("[error]"),
};
