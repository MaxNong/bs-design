const { runCommand, getRunMode } = require("./utils");

const mode = getRunMode();

function build() {
  if (mode === "start") {
    runCommand("npm run lib:build", function () {
      runCommand("npm run template:dev");
    });
  } else if (mode === "start:site") {
    runCommand("npm run lib:build", function () {
      runCommand("npm run site:dev");
    });
  } else if (mode === "build") {
    runCommand("npm run lib:build", function () {
      runCommand('npx concurrently "npm run site:build" "npm run template:build"');
    });
  } else {
    console.log("mode参数错误");
  }
}

build();
