require(`dotenv`).config({
  path: `.env`,
})

const shouldAnalyseBundle = process.env.ANALYSE_BUNDLE
const path = require(`path`)

module.exports = {
  plugins: [
    {
      resolve: `@lekoarts/gatsby-theme-minimal-blog`,
      // See the theme's README for all available options
      options: {
        navigation: [
          {
            title: `About`,
            slug: `/about`,
          },
          {
            title: `Art`,
            slug: `/art`,
          },
          {
            title: `Somethings`,
            slug: `/blog`,
          },
        ],
        externalLinks: [
          {
            name: `Youtube`,
            url: `https://www.youtube.com/channel/UCFvPy_lotEv_40zX4tOnwCw`,
          },
          {
            name: `Linkedin`,
            url: `https://www.linkedin.com/in/tue-ngo-a78508154`,
          },
        ],
      },
    },
    {
      resolve: `gatsby-plugin-google-analytics`,
      options: {
        trackingId: process.env.GOOGLE_ANALYTICS_ID,
      },
    },
    `gatsby-plugin-sitemap`,
    {
      resolve: `gatsby-plugin-manifest`,
      options: {
        name: `minimal-blog - @lekoarts/gatsby-theme-minimal-blog`,
        short_name: `minimal-blog`,
        description: `Typography driven, feature-rich blogging theme with minimal aesthetics. Includes tags/categories support and extensive features for code blocks such as live preview, line numbers, and code highlighting.`,
        start_url: `/`,
        background_color: `#fff`,
        theme_color: `#6B46C1`,
        display: `standalone`,
        icons: [
          {
            src: `/android-chrome-192x192.png`,
            sizes: `192x192`,
            type: `image/png`,
          },
          {
            src: `/android-chrome-512x512.png`,
            sizes: `512x512`,
            type: `image/png`,
          },
        ],
      },
    },
    `gatsby-plugin-offline`,
    `gatsby-plugin-netlify`,
    {
      resolve: `gatsby-source-filesystem`,
      options: {
        name: `images`,
        path: path.join(__dirname, `src`, `images`),
      },
    },
    `gatsby-transformer-sharp`,
    `gatsby-plugin-sharp`,
    shouldAnalyseBundle && {
      resolve: `gatsby-plugin-webpack-bundle-analyser-v2`,
      options: {
        analyzerMode: `static`,
        reportFilename: `_bundle.html`,
        openAnalyzer: false,
      },
    },
  ].filter(Boolean),
  siteMetadata: {
    // Used for the title template on pages other than the index site
    siteTitle: `Ngô Toàn Minh Tuệ - 健児`,
    // Default title of the page
    siteTitleAlt: `Tôi trọ`,
    // Can be used for e.g. JSONLD
    siteHeadline: `Ngô Toàn Minh Tuệ - 健児git push`,
    // Will be used to generate absolute URLs for og:image etc.
    siteUrl: `https://toitro.me`,
    // Used for SEO
    siteDescription: `Typography driven, feature-rich blogging theme with minimal aesthetics. Includes tags/categories support and extensive features for code blocks such as live preview, line numbers, and line highlighting.`,
    // Will be set on the <html /> tag
    siteLanguage: `en`,
    // Used for og:image and must be placed inside the `static` folder
    siteImage: `/banner.`,
    // Twitter Handle
    author: `@tuengo`,
    // Links displayed in the header on the right side
  },
}