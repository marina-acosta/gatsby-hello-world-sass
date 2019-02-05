module.exports = {
  // Common pieces of data shared across the site
  siteMetadata: {
    title: `Gatsby`,
    description: `Blazing fast modern site generator for React`
  },
  // Plugins: node packages that implement Gatsby functionalities
  plugins: [
    {
      resolve: "gatsby-source-wordpress",
      options: {
        baseUrl: "uruit.com/blog",
        protocol: "https",
        hostingWPCOM: false,
        // If useACF is true, then the source plugin will try to import the Wordpress ACF Plugin contents.
        // This feature is untested for sites hosted on wordpress.com.
        // Defaults to true.
        useACF: false,
        // Include specific ACF Option Pages that have a set post ID
        // Regardless if an ID is set, the default options route will still be retrieved
        // Must be using V3 of ACF to REST to include these routes
        // Example: `["option_page_1", "option_page_2"]` will include the proper ACF option
        // routes with the ID option_page_1 and option_page_2
        // Dashes in IDs will be converted to underscores for use in GraphQL
        acfOptionPageIds: [],
        // Set verboseOutput to true to display a verbose output on `npm run develop` or `npm run build`
        // It can help you debug specific API Endpoints problems.
        verboseOutput: true,
        // Set how many pages are retrieved per API request.
        perPage: 100,
        // Set how many simultaneous requests are sent at once.
        concurrentRequests: 10,
        // Set WP REST API routes whitelists
        // and blacklists using glob patterns.
        // Defaults to whitelist the routes shown
        // in the example below.
        // See: https://github.com/isaacs/minimatch
        // Example:  `["/*/*/comments", "/yoast/**"]`
        // ` will either include or exclude routes ending in `comments` and
        // all routes that begin with `yoast` from fetch.
        // Whitelisted routes using glob patterns
        includedRoutes: [
          //"**/*/*/categories",
          "**/*/*/posts",
          // "**/*/*/pages",
          "**/*/*/media",
          // "**/*/*/tags",
          // "**/*/*/taxonomies",
          "**/*/*/users"
        ],
        // Blacklisted routes using glob patterns
        //excludedRoutes: ["**/*/*/posts/1456"],
        // use a custom normalizer which is applied after the built-in ones.
        normalizer: function({ entities }) {
          return entities;
        }
      }
    },
    `gatsby-plugin-sass`
  ]
};
