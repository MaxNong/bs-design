const commandErrorMessage = require("./commandErrorMessage");
const chalk = require("chalk");

module.exports = () => {
  commandErrorMessage("missingArgument", (argName) => {
    return `Missing required argument ${chalk.yellow(`<${argName}>`)}`;
  });

  commandErrorMessage("unknownOption", (optionName) => {
    return `Unknown option ${chalk.yellow(optionName)}`;
  });

  commandErrorMessage("optionMissingArgument", (option, flag) => {
    return (
      `Missing required argument for option ${chalk.yellow(option.flags)}` +
      (flag ? `, got ${chalk.yellow(flag)}` : ``)
    );
  });
};
