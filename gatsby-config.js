require("dotenv").config({
  path: `.env.${process.env.NODE_ENV}`,
});

module.exports = {
  siteMetadata: {
    siteUrl: "https://www.yourdomain.tld",
    title: "mm",
  },
  plugins: [
    "gatsby-plugin-gatsby-cloud",
    "gatsby-plugin-image",
    "gatsby-plugin-sass",
    "gatsby-plugin-react-helmet",
    {
      resolve: "gatsby-plugin-manifest",
      options: {
        icon: "src/images/icon.png",
      },
    },
    "gatsby-plugin-sharp",
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
      resolve: "gatsby-source-mongodb",
      options: {
        dbName: process.env.MONGO_DB,
        collection: process.env.MONGO_COL,
        server: {
          address: process.env.MONGO_ADDR,
          port: 27017,
        },
        auth: {
          user: process.env.MONGO_USER,
          password: process.env.MONGO_PASS,
        },
        extraParams: {
          replicaSet: process.env.MONGO_RSET,
          ssl: true,
          authSource: "admin",
          retryWrites: true,
        },
      },
    },
  ],
};
