import * as React from "react";
import "../assets/custom.scss";
import JSONData from "../assets/data.json";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faCaretUp } from "@fortawesome/free-solid-svg-icons";
import Logo from "../assets/logo_black.png";
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

const IndexPage = () => {
  return (
    <>
      <nav
        className="navbar is-light"
        role="navigation"
        aria-label="main-navigation"
      >
        <div className="navbar-brand">
          <a className="navbar-item" href="https://bulma.io">
            <img src={Logo} alt="logo" />
          </a>
        </div>
        <div className="navbar-menu">
          <div className="navbar-start">
            <a className="navbar-item is-size-4" href="/home">
              Home
            </a>
          </div>
        </div>
      </nav>
      <main style={pageStyles}>
        <h1 className="title is-uppercase is-family-code">Minecraft mods</h1>
        <div className="columns is-multiline">
          {JSONData.map((data, index) => (
            <div key={index} className="column is-one-quarter">
              <div className="card" style={cardStyle}>
                <div className="card-content">
                  <div className="content">
                    <a
                      className="has-text-link is-capitalized is-size-5"
                      style={linkStyle}
                      href={`${data.url}`}
                      target="_blank"
                      rel="noreferrer"
                    >
                      {data.name}
                    </a>
                    <p className="subtitle">v{data.version}</p>
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
      <footer class="footer">
        <div class="content has-text-centered">
          <a class="button is-text" href="/">
            <FontAwesomeIcon icon={faCaretUp} size="3x" />
          </a>
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
