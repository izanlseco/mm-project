import React from "react";

import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faCaretUp } from "@fortawesome/free-solid-svg-icons";

const Footer = () => {
  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  return (
    <footer className="footer pb-6">
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
  );
};

export default Footer;
