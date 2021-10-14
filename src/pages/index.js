import React from "react";
import { graphql } from "gatsby";
import { Helmet } from "react-helmet";
import "../assets/custom.scss";

import NavBar from "../components/NavBar";
import Main from "../components/Main";
import Footer from "../components/Footer";

const IndexPage = (props) => {
  const mods = props.data.allMongodbMmprojectMods.edges;

  return (
    <>
      <Helmet htmlAttributes={{ lang: "en" }}>
        <meta charSet="utf-8" />
        <meta
          name="description"
          content="Webpage made by Izan that is intended to be used as a way to have the mods that you're currently using in minecraft listed so you can have it all tidy in one place."
        />
        <title>MineMods</title>
      </Helmet>
      <NavBar />
      <Main mods={mods} />
      <Footer />
    </>
  );
};

export default IndexPage;

export const allModsQuery = graphql`
  query MyQuery {
    allMongodbMmprojectMods {
      edges {
        node {
          id
          type
          url
          version
          name
          installedAt
        }
      }
    }
  }
`;
