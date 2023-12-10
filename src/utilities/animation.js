import chalk from "chalk";

export const loadingAnimation = () => {
  const frames = ["⠋", "⠙", "⠹", "⠸", "⠼", "⠴", "⠦", "⠧", "⠇", "⠏"];
  let i = 0;

  return setInterval(() => {
    process.stdout.write(chalk.yellowBright("\r" + frames[i] + " Thinking"));
    i = (i + 1) % frames.length;
  }, 80);
};
