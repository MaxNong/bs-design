const ehd = require('./components');

const req = require.context('./components', true, /^\.\/locale\/.+_.+\.tsx$/);

ehd.locales = {};

req.keys().forEach(mod => {
  const matches = mod.match(/\/([^/]+).tsx$/);
  ehd.locales[matches[1]] = req(mod).default;
});

module.exports = ehd;
