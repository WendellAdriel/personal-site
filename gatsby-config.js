module.exports = {
  siteMetadata: {
    author: {
      name: 'Wendell Adriel',
      title: 'Software Engineer',
      shortBio: 'Speaker, Writer, PHP/JS/Go/Open Source lover, Dungeon Master, Gamer',
      gravatar: 'd36a082aacb53b6f76869748fb4b81d4',
      social: {
        github: 'https://github.com/WendellAdriel',
        linkedin: 'https://linkedin.com/in/wendelladrielti/en',
        twitter: 'https://twitter.com/wendell_adriel',
        medium: 'https://medium.com/@wendell_adriel',
        facebook: 'https://facebook.com/wendell.adriel.7',
        email: 'mailto:wendelladriel.ti@gmail.com'
      }
    }
  },
  plugins: [
    'gatsby-plugin-react-helmet',
    {
      resolve: `gatsby-source-filesystem`,
      options: {
        name: `images`,
        path: `${__dirname}/src/images`,
      },
    },
    'gatsby-transformer-sharp',
    'gatsby-plugin-sharp',
    {
      resolve: `gatsby-plugin-manifest`,
      options: {
        name: 'wendell-adriel-personal-site',
        short_name: 'wendell-adriel',
        start_url: '/',
        background_color: '#ffffff',
        theme_color: '#222222',
        display: 'minimal-ui',
        icon: 'src/images/profile.jpg',
      },
    },
    'gatsby-plugin-emotion',
    {
      resolve: `gatsby-plugin-typography`,
      options: {
        pathToConfigModule: `src/utils/typography`,
      },
    },
    'gatsby-plugin-offline'
  ],
}
