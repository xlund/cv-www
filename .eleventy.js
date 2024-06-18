module.exports = function (eleventyConfig) {
  eleventyConfig.addFilter("formatDate", function formatDate(date) {
    const d = new Date(date);
    return d.toLocaleDateString("en-EN", {
      year: "numeric",
    });
  });

  eleventyConfig.addPassthroughCopy("normalize.css");
  eleventyConfig.addPassthroughCopy("bundle.css");
};
