const rollup = require("rollup");
const watchOptions = require("./config/rollup.dev.config");

module.exports = function () {
  const watcher = rollup.watch(watchOptions);
  watcher.on("event", (event) => {
    switch (event.code) {
      case "START":
        console.info("Rebuilding...");
        break;
      case "BUNDLE_START":
        console.info("Bundling...");
        break;
      case "BUNDLE_END":
        console.info("Bundled!");
        break;
      case "END":
        console.info("Done!");
        console.log("Rollup is watching for changes...");
        break;
      case "ERROR":
      case "FATAL":
        console.error("Rollup error: ", event);
    }
  });
  process.on("exit", () => {
    watcher.close();
  });
};
