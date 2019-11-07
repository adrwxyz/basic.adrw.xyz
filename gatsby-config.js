module.exports = {
  siteMetadata: {
    title: `ADRW Digital`,
    description: `Make your next pitch, website, or customer facing product a winner.`,
    siteUrl: "https://adrw.xyz",
    author: `@adrw`
  },
  plugins: [
    {
      resolve: "@westegg/gatsby-theme-core",
      options: {
        mdx: true,
        mdxLayouts: {
          default: require.resolve("./src/components/layout.js")
        },
        mdxShowToc: false
      }
    }
  ]
}
