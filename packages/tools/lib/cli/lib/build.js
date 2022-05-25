const rollup = require("rollup");
const config = require("./config/rollup.prod.config");

module.exports = function () {
  async function build() {
    const bundle = await rollup.rollup(config.inputOptions);
    await bundle.generate(config.outputOptions);
    await bundle.write(config.outputOptions);
  }

  build();
};
