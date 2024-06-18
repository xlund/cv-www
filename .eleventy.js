module.exports = function (eleventyConfig) {
  eleventyConfig.addPassthroughCopy("normalize.css");
  eleventyConfig.addPassthroughCopy("bundle.css");
};
