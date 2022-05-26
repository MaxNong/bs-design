const { nodeResolve } = require("@rollup/plugin-node-resolve");
const commonjs = require("@rollup/plugin-commonjs");
const { babel, getBabelOutputPlugin } = require("@rollup/plugin-babel");
const typescript = require("@rollup/plugin-typescript");
const jsx = require("acorn-jsx");
const { terser } = require("rollup-plugin-terser");

module.exports = {
  inputOptions: {
    input: "components/index.tsx",
    acornInjectPlugins: [jsx()],
    plugins: [
      nodeResolve(),
      commonjs(),
      typescript({ jsx: "preserve" }),
      terser(),
      babel({
        presets: ["@babel/preset-react"],
        babelHelpers: "bundled",
        extensions: [".js", ".jsx", ".es6", ".es", ".mjs", ".ts", ".tsx"]
      })
    ],
    external: ["react"]
  },
  outputOptions: {
    file: "lib/bs-design.es.js",
    format: "es",
    plugins: [
      getBabelOutputPlugin({
        presets: ["@babel/preset-env"]
      })
    ]
  }
};
