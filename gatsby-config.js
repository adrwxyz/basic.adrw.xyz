module.exports = {
  siteMetadata: {
    title: "adrw.xyz"
  },
  plugins: [
    {
      resolve: "@westegg/gatsby-theme-digital-garden",
      options: {
        header: {
          home: {
            href: "/",
            label: "/img/logos/h.png"
          },
          links: []
        },
        notesPath: "/notes",
        postsPath: "/blog",
        projectsPath: "/projects",
        projects: "projects"
      }
    }
  ]
}
