const $ = require('dekko');
const chalk = require('chalk');

$('dist')
  .isDirectory()
  .hasFile('bsd-with-locales.js')
  .hasFile('bsd-with-locales.min.js')
  .hasFile('bsd.css')
  .hasFile('bsd.min.css')
  .hasFile('bsd.js')
  .hasFile('bsd.min.js')
  .hasFile('bsd.less')
  .hasFile('bsd.dark.less')
  .hasFile('bsd.dark.css')
  .hasFile('bsd.compact.less')
  .hasFile('bsd.compact.css')
  .hasFile('dark-theme.js');

// eslint-disable-next-line no-console
console.log(chalk.green('✨ `dist` directory is valid.'));
