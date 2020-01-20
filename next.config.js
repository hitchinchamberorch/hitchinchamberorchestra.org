const withSass = require('@zeit/next-sass');

module.exports = withSass({
  exportPathMap: async function(
    defaultPathMap,
    { dev, dir, outDir, distDir, buildId }
  ) {
    return {
      '/': { page: '/' },
      '/about': { page: '/about' },
      '/concerts': { page: '/concerts' },
      '/contact': { page: '/contact' },
      '/members': { page: '/members' }
    };
  }
});
