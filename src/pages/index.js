import * as React from "react";

import JSONData from "../assets/data.json";

const pageStyles = {
  color: "#232129",
  padding: 96,
  fontFamily: "-apple-system, Roboto, sans-serif, serif",
};
const headingStyles = {
  marginTop: 0,
  marginBottom: 64,
  maxWidth: 320,
};
const listStyles = {
  marginBottom: 96,
  paddingLeft: 0,
};
const listItemStyles = {
  fontWeight: 300,
  fontSize: 24,
  maxWidth: 560,
  marginBottom: 30,
};

const linkStyle = {
  color: "#8954A8",
  fontWeight: "bold",
  fontSize: 16,
  verticalAlign: "5%",
};

const IndexPage = () => {
  return (
    <main style={pageStyles}>
      <title>Home Page</title>
      <h1 style={headingStyles}>MM</h1>
      <ul style={listStyles}>
        {JSONData.map((data, index) => (
          <li key={index} style={{ ...listItemStyles }}>
            <span>
              <a style={linkStyle} href={`${data.url}`}>
                {data.name}
              </a>
            </span>
          </li>
        ))}
      </ul>
    </main>
  );
};

export default IndexPage;
