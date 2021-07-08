module.exports = (eleventyConfig) => {
  eleventyConfig.setUseGitIgnore(false)
  eleventyConfig.addWatchTarget('./src/_assets/')
  eleventyConfig.addPassthroughCopy({'src/assets' : 'public'})
  eleventyConfig.setBrowserSyncConfig(
    require('./browsersync-html-extension')('dist')
  )

  eleventyConfig.addCollection("pages", function(collectionApi) {
    return collectionApi.getAll()
      .filter(item => !!item.data.order)
      .sort((a, b) => a.data.order - b.data.order)
  });

  if (process.env.ELEVENTY_ENV === "production") {
    eleventyConfig.addPlugin(require('eleventy-plugin-purgecss'));
  }

  return {
    markdownTemplateEngine: 'njk',
    dir: {
      includes: '_includes',
      input: 'src',
      layouts: '_layouts',
      output: 'dist'
    }
  }
}
