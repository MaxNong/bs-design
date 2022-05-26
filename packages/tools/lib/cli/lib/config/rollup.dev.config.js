// // Rollup plugins
// // babel插件用于处理es6代码的转换，使转换出来的代码可以用于不支持es6的环境使用
// // const babel = require('rollup-plugin-babel');
//  // resolve将我们编写的源码与依赖的第三方库进行合并
// const { nodeResolve } = require("@rollup/plugin-node-resolve");
// // 解决rollup.js无法识别CommonJS模块
// const commonjs = require("@rollup/plugin-commonjs");
// // 全局替换变量比如process.env
// // const replace = require("@rollup/rollup-plugin-replace");
// // 使rollup可以使用postCss处理样式文件less、css等
// // const postcss = require("rollup-plugin-postcss");
// // 可以处理组件中import图片的方式，将图片转换成base64格式，但会增加打包体积，适用于小图标
// const image = require("@rollup/plugin-image");
// // 压缩打包代码（这里弃用因为该插件不能识别es的语法，所以采用terser替代）
// // import { uglify } from 'rollup-plugin-uglify';
// // 压缩打包代码
// const { terser } = require("rollup-plugin-terser");
// // import less from 'rollup-plugin-less';
// // PostCSS plugins
// // 处理css定义的变量
// const simplevars = require('postcss-simple-vars');
// // 处理less嵌套样式写法
// const nested = require("postcss-nested");
// // 可以提前适用最新css特性（已废弃由postcss-preset-env替代，但还是引用进来了。。。）
// // import cssnext from 'postcss-cssnext';
// // 替代cssnext
// const postcssPresetEnv = require("postcss-preset-env");
// // css代码压缩
// const cssnano = require("cssnano");
// const typescript = require("@rollup/plugin-typescript");
// const jsx = require("acorn-jsx");
// const { babel, getBabelOutputPlugin } = require("@rollup/plugin-babel");

// const env = process.env.NODE_ENV;

// module.exports =  {
//   // 入口文件我这里在components下统一导出所有自定义的组件
//   input: "components/index.tsx",
//   acornInjectPlugins: [jsx()],
//   // 输出文件夹，可以是个数组输出不同格式（umd,cjs,es...）通过env是否是生产环境打包来决定文件命名是否是.min
//   output: [{
//     file: `lib/dna-ui-react-umd${env === 'production' ? '.min' : ''}.js`,
//     format: 'umd',
//     name: 'geneUI',
//   }, {
//     file: `lib/dna-ui-react-es${env === 'production' ? '.min' : ''}.js`,
//     format: 'es',
//     plugins: [
//       getBabelOutputPlugin({
//         presets: ["@babel/preset-env"]
//       })
//     ]
//   }],
//   // 将模块视为外部模块，不会打包在库中
//   external: ['bsd', '@ant-design/icons', 'react', 'prop-types', 'gojs'],
//   // 插件
//   plugins: [
//     image(),
//     typescript({ jsx: "preserve" }),
//     // postcss({
//     //   plugins: [
//     //     simplevars(),
//     //     nested(),
//     //     // cssnext({ warnForDuplicates: false, }),
//     //     postcssPresetEnv(),
//     //     cssnano(),
//     //   ],
//     //   // 处理.css和.less文件
//     //   extensions: [ '.css', 'less' ],
//     // }),
//     nodeResolve(),
//     // babel处理不包含node_modules文件的所有js
//     // babel({
//     //   exclude: '**/node_modules/**',
//     //   runtimeHelpers: true,
//     //   plugins: [
//     //     "@babel/plugin-external-helpers",
//     //     "@babel/preset-react"
//     //   ]
//     // }),
//     babel({
//       presets: ["@babel/preset-react"],
//       babelHelpers: "bundled",
//       extensions: [".js", ".jsx", ".es6", ".es", ".mjs", ".ts", ".tsx"]
//     }),
//     // 这里有些引入使用某个库的api但报未导出改api通过namedExports来手动导出
//     // commonjs({
//     //   'namedExports': {
//     //     'node_modules/react-is/index.js': ['isFragment'],
//     //     'node_modules/react/index.js': ['Fragment', 'cloneElement', 'isValidElement', 'Children', 'createContext', 'Component', 'useRef', 'useImperativeHandle', 'forwardRef', 'useState', 'useEffect', 'useMemo'],
//     //     'node_modules/react-dom/index.js': ['render', 'unmountComponentAtNode', 'findDOMNode'],
//     //     'node_modules/gojs/release/go.js': ['Diagram', 'GraphLinksModel', 'Overview', 'Spot']
//     //   }
//     // }),
//     // 全局替换NODE_ENV，exclude表示不包含某些文件夹下的文件
//     // replace({
//     //   // exclude: 'node_modules/**',
//     //   'process.env.NODE_ENV':  JSON.stringify(env || 'development'),
//     // }),
//     // 生产环境执行terser压缩代码
//     (env === 'production' && terser()),
//   ],
// }

const { nodeResolve } = require("@rollup/plugin-node-resolve");
const commonjs = require("@rollup/plugin-commonjs");
const { babel, getBabelOutputPlugin } = require("@rollup/plugin-babel");
const typescript = require("@rollup/plugin-typescript");
const jsx = require("acorn-jsx");
const fg = require("fast-glob");

module.exports = {
  input: "components/index.tsx",
  acornInjectPlugins: [jsx()],
  plugins: [
    nodeResolve(),
    commonjs(),
    typescript({ jsx: "preserve" }),
    babel({
      presets: ["@babel/preset-react"],
      babelHelpers: "bundled",
      extensions: [".js", ".jsx", ".es6", ".es", ".mjs", ".ts", ".tsx"]
    }),
    {
      name: "watch-external",
      async buildStart() {
        const files = await fg("components/**/*");
        for (let file of files) {
          this.addWatchFile(file);
        }
      }
    }
  ],
  output: {
    file: "lib/bs-design.es.js",
    format: "es",
    plugins: [
      getBabelOutputPlugin({
        presets: ["@babel/preset-env", "@babel/preset-react"]
      })
    ]
  },
  external: ["react", "react-dom"]
};
