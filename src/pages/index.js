import * as React from "react";
import "../assets/custom.scss";
import JSONData from "../assets/data.json";

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
    <main style={pageStyles}>
      <title>Minecraft mod manager</title>
      <h1 class="title">Minecraft mods</h1>
      <div class="columns is-multiline">
        {JSONData.map((data, index) => (
          <div class="column is-one-quarter">
            <div class="card" style={cardStyle}>
              <div class="card-content">
                <div class="content">
                  <a
                    style={linkStyle}
                    href={`${data.url}`}
                    target="_blank"
                    rel="noreferrer"
                  >
                    {data.name}
                  </a>
                  <p class="subtitle">v{data.version}</p>
                </div>
              </div>
              <footer class="card-footer">
                <a href="#" class="card-footer-item">
                  Edit
                </a>
                <a href="#" class="card-footer-item">
                  delete
                </a>
              </footer>
            </div>
          </div>
        ))}
      </div>
    </main>
  );
};

export default IndexPage;
