import React from "react";

const Main = ({ mods }) => {
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

  return (
    <main style={pageStyles}>
      <h1 className="title is-uppercase is-family-code">Username Collection</h1>
      <div className="columns is-multiline">
        {mods
          .sort((a, b) => a.node.name.localeCompare(b.node.name))
          .map((data) => (
            <div key={data.id} className="column is-one-quarter">
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
  );
};

export default Main;
