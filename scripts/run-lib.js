const { getRunMode, execute } = require("./utils");
const path = require("path");

const runMode = getRunMode();
const execPath = path.resolve(process.cwd(), `./packages/core`);

execute(execPath, runMode);
