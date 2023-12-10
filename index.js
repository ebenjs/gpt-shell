#!/usr/bin/env node

import yargs from "yargs";
import { hideBin } from "yargs/helpers";
import { ask, configure } from "./src/main.js";

const isAtLeastOneOptionSpecified = (keys, args) => {
  return keys.some((key) => args[key] !== null);
};

const args = yargs(hideBin(process.argv))
  .strict(true)
  .command(
    "ask",
    "Send prompt to GPT",
    (yargs) => {
      yargs
        .option("prompt", {
          alias: "p",
          type: "string",
          describe: "Prompt to send to GPT",
          demandOption: true,
        })
        .option("interactive", {
          alias: "i",
          type: "boolean",
          default: false,
          describe: "Interactive mode",
        });
    },
    (argv) => {
      ask(argv.prompt);
    }
  )
  .command(
    "config",
    "Configure GPT-Shell",
    (yargs) => {
      yargs
        .option("apikey", {
          alias: "k",
          type: "string",
          default: null,
          describe: "API key to use",
        })
        .option("model", {
          alias: "m",
          type: "string",
          default: null,
          describe: "Model to use",
        })
        .option("url", {
          alias: "u",
          type: "string",
          default: null,
          describe: "API endpoint to use",
        });
    },
    (argv) => {
      configure(argv);
    }
  )
  .check((argv) => {
    if (!isAtLeastOneOptionSpecified(["apikey", "model", "url"], argv)) {
      throw new Error("No option specified");
    }
    return true;
  })
  .demandCommand(1)
  .parse();
