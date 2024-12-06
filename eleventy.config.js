module.exports = function(eleventyConfig) {
    eleventyConfig.addPassthroughCopy("assets");
  
    eleventyConfig.addCollection("blog", function (collectionApi) {
      return collectionApi.getFilteredByTag("blog");
    });
  
    return {
      dir: {
        input: "src",
        output: "dist",
      },
    };

  };