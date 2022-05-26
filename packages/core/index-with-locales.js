const bsd = require('./components');

const req = require.context('./components', true, /^\.\/locale\/.+_.+\.tsx$/);

bsd.locales = {};

req.keys().forEach(mod => {
  const matches = mod.match(/\/([^/]+).tsx$/);
  bsd.locales[matches[1]] = req(mod).default;
});

module.exports = bsd;
