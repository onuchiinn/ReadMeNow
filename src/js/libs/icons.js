function requireAll(r) {
  r.keys().forEach(r);
}

requireAll(require.context('~/icons/', true, /\.svg$/));