function rewriteSource(t, path, libDir) {
  if (libDir === "dist") {
    const matches = path.node.source.value.match(new RegExp("^ehd(-mobile)?$"));
    if (matches) {
      path.node.source.value = `../../../dist/${matches[0]}`;
    }
  }
}

module.exports = rewriteSource;
