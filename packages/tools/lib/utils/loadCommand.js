const chalk = require("chalk");

module.exports = function loadCommand(commandName, moduleName) {
  const isNotFoundError = (err) => {
    return err.message.match(/Cannot find module/);
  };

  try {
    return require(moduleName);
  } catch (err) {
    if (isNotFoundError(err)) {
      console.log();
      console.log(`Command ${chalk.red(`@eh-design/tools ${commandName}`)} run error \n` + err);
      console.log();
      process.exit(1);
    } else {
      throw err;
    }
  }
};
