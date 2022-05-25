const $ = require('dekko');
const chalk = require('chalk');

$('dist')
  .isDirectory()
  .hasFile('ehd-with-locales.js')
  .hasFile('ehd-with-locales.min.js')
  .hasFile('ehd.css')
  .hasFile('ehd.min.css')
  .hasFile('ehd.js')
  .hasFile('ehd.min.js')
  .hasFile('ehd.less')
  .hasFile('ehd.dark.less')
  .hasFile('ehd.dark.css')
  .hasFile('ehd.compact.less')
  .hasFile('ehd.compact.css')
  .hasFile('dark-theme.js');

// eslint-disable-next-line no-console
console.log(chalk.green('✨ `dist` directory is valid.'));
