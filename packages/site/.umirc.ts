import { defineConfig } from 'dumi';
import { join } from 'path';

export default defineConfig({
  title: 'EH Design',
  mode: 'site',
  locales: [['zh-CN', '中文']],
  logo: 'https://www.jk.cn/favicon.ico',
  publicPath: process.env.NODE_ENV === 'production' ? '/limos/docs/' : '/',
  history: {
    type: 'hash',
  },
  alias: {
    demos: join(__dirname, 'src/demos'),
    '@': join(__dirname, 'src'),
  },
  sass: {},
  headScripts: [`https://at.alicdn.com/t/font_2862380_slj3lpqud8o.js`],
  styles: [`.__dumi-default-navbar-tool { display: none !important }`],
  extraBabelPlugins: [
    [
      'babel-plugin-import',
      {
        libraryName: 'eh-design',
        libraryDirectory: 'es',
        style: true,
      },
    ],
  ],
});
