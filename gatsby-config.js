module.exports = {
  siteMetadata: {
    title: "bognasPortfolio",
  },
  plugins: [
    {
      resolve: "gatsby-source-contentful",
      options: {
        accessToken: "99kgEx1ja9XQMpN5AzRtV753Y1HLyV4-OXDvnyWRJJQ",
        spaceId: "3izr731s7l9v",
      },
    },
    "gatsby-plugin-styled-components",
    "gatsby-plugin-sharp",
    "gatsby-plugin-react-helmet",
    "gatsby-transformer-sharp",
    {
      resolve: "gatsby-source-filesystem",
      options: {
        name: "images",
        path: "./src/images/",
      },
      __key: "images",
    },
  ],
};
