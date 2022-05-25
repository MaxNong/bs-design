const cp = require("child_process");
const minimist = require("minimist");

function runCommand(cmd, callback) {
  console.log(`executed: ${cmd}`);
  cp.execSync(cmd, { stdio: "inherit" });
  console.log(`completed: ${cmd}`);
  callback && callback();
}

function getRunMode() {
  const args = minimist(process.argv.slice(2));
  const mode = args["mode"];

  return mode;
}

function execute(path, mode) {
  const modeMapping = {
    development: "start",
    production: "build",
  };

  if (!modeMapping[mode]) {
    console.log("mode参数错误");
    return;
  }

  runCommand(`cd ${path} && npm run ${modeMapping[mode]}`);
}

module.exports = {
  runCommand,
  getRunMode,
  execute,
};
