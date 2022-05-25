"use strict";

const isWindows = require("is-windows");
const getRunCmdEnv = require("./utils/getRunCmdEnv");

function runCmd(cmd, _args, fn) {
  const accessCommand = ["run", "update"];

  if (accessCommand.indexOf(cmd) === -1) {
    return;
  }

  const args = _args || [];

  if (isWindows()) {
    args.unshift(cmd);
    args.unshift("/c");
    cmd = process.env.ComSpec;
  }

  const runner = require("child_process").spawn(cmd, args, {
    // keep color
    stdio: "inherit",
    env: getRunCmdEnv()
  });

  runner.on("close", (code) => {
    if (fn) {
      fn(code);
    }
  });
}

module.exports = runCmd;
