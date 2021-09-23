import React, { useState } from "react";
import { graphql } from "gatsby";
import { Helmet } from "react-helmet";
import "../assets/custom.scss";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faCaretUp } from "@fortawesome/free-solid-svg-icons";
import Logo from "../images/logo_black.png";

const pageStyles = {
  color: "#232129",
  padding: 96,
  fontFamily: "-apple-system, Roboto, sans-serif, serif",
};

const linkStyle = {
  color: "#8954A8",
  fontWeight: "bold",
  fontSize: 16,
  verticalAlign: "5%",
};
const cardStyle = {
  marginBottom: 10,
};

const IndexPage = (props) => {
  const mods = props.data.allMongodbMmprojectMods.edges;
  const [isActive, setIsActive] = useState(false);

  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

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
      <nav
        className="navbar is-light"
        role="navigation"
        aria-label="main-navigation"
      >
        <div className="navbar-brand">
          <a className="navbar-item" href="https://minemods.gatsbyjs.io/">
            <img src={Logo} alt="logo" />
          </a>
          <button
            onClick={() => {
              setIsActive(!isActive);
            }}
            className={`navbar-burger burger ${isActive ? "is-active" : ""}`}
            aria-label="menu"
            aria-expanded="false"
            data-target="main-menu"
          >
            <span aria-hidden="true"></span>
            <span aria-hidden="true"></span>
            <span aria-hidden="true"></span>
          </button>
        </div>
        <div
          id="main-menu"
          className={`navbar-menu ${isActive ? "is-active" : ""}`}
        >
          <div className="navbar-start">
            <a className="navbar-item is-size-5" href="/">
              Home
            </a>
          </div>
          <div className="navbar-end">
            <a className="navbar-item is-size-5" href="/sign-up">
              Sign Up
            </a>
            <a className="navbar-item is-size-5" href="/login">
              Login
            </a>
          </div>
        </div>
      </nav>
      <main style={pageStyles}>
        <h1 className="title is-uppercase is-family-code">
          Username Collection
        </h1>
        <div className="columns is-multiline">
          {mods
            .sort((a, b) => a.node.name.localeCompare(b.node.name))
            .map((data, index) => (
              <div key={index} className="column is-one-quarter">
                <div className="card" style={cardStyle}>
                  <div className="card-content">
                    <div className="content">
                      <a
                        className="has-text-link is-capitalized is-size-5"
                        style={linkStyle}
                        href={`${data.node.url}`}
                        target="_blank"
                        rel="noreferrer"
                      >
                        {data.node.name}
                      </a>
                      <p className="subtitle">v{data.node.version}</p>
                    </div>
                  </div>
                  <footer className="card-footer">
                    <a href="/edit" className="card-footer-item is-size-5">
                      Edit
                    </a>
                    <a href="/delete" className="card-footer-item is-size-5">
                      Delete
                    </a>
                  </footer>
                </div>
              </div>
            ))}
        </div>
      </main>
      <footer className="footer">
        <div className="content has-text-centered">
          <button
            arial-label="scroll to top"
            className="button is-text"
            onClick={scrollToTop}
          >
            <FontAwesomeIcon icon={faCaretUp} size="3x" />
          </button>
          <br />
          Made with ❤️ by{" "}
          <a href="https://www.izanlseco.com" target="_blank" rel="noreferrer">
            Izan López
          </a>
          <span> & </span>
          <a href="https://pattyogaliano.com/" target="_blank" rel="noreferrer">
            Patty O'Galiano
          </a>
        </div>
      </footer>
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
