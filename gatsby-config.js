require("dotenv").config({
  path: `.env.${process.env.NODE_ENV}`,
})
module.exports = {
  siteMetadata: {
    title: "Bogna Anna - Graphic Design and Architecture",
    description: "Freelance graphic designer and architect based in Copenhagen, experienced in design projects for small and medium companies and individual clients",
    author: "Bogna Anna Gebalska",
    siteUrl: "https://bognaanna.design",
    image: '/BognaAnnaPortfolio.jpg',
    themeColor: "#707070"
  },
  plugins: [
    {
      resolve: "gatsby-source-contentful",
      options: {
        accessToken: process.env.CONTENTFUL_ACCESS_TOKEN,
        spaceId: process.env.CONTENTFUL_SPACE_ID,
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
    {
      resolve: "gatsby-plugin-web-font-loader",
      options: {
        typekit: {
          id: process.env.TYPEKIT_ID,
        },
      },
    },
    "gatsby-plugin-preload-fonts",
    {
      resolve: `gatsby-plugin-manifest`,
      options: {
        name: `Bogna Anna - Graphic Design and Architecture`,
        short_name: `Bogna Anna Design`,
        start_url: `/`,
        background_color: `#fff`,
        theme_color: `#707070`,
        display: `standalone`,
        icon: 'src/images/favicon.svg',
        lang: `en`,
      },
    },
    `gatsby-plugin-offline`,
    {
      resolve: `gatsby-plugin-sitemap`,
      options: {
        createLinkInHead: 'true'
        }
    },
    {
      resolve: "gatsby-plugin-google-analytics",
      options: {
        trackingId: process.env.GOOGLE_TAGMANAGER_ID,
        head: false,
        anonymize: true,
        respectDNT: true,
      }
    }
  ],
};
