import React from "react";

function CallForPapers() {
  const isMobile = window.innerWidth <= 768;

  const redBarStyle = {
    width: "5px",
    height: "22px",
    background: "#c62828",
    marginRight: "10px",
    flexShrink: 0,
  };

  const contentStyle = {
    background: "#ffffff",
    border: "1px solid #dddddd",
    borderRadius: "10px",
    padding: isMobile ? "18px" : "25px",
    boxSizing: "border-box",
    lineHeight: 1.7,
    color: "#222222",
    fontSize: isMobile ? "14px" : "16px",
  };

  return (
    <section
      className="call-for-papers-section"
      style={{
        padding: isMobile ? "20px 15px" : "35px",
        background: "#e6e6ea",
        minHeight: "100vh",
        boxSizing: "border-box",
      }}
    >
      <div
        className="call-for-papers-heading"
        style={{
          display: "flex",
          alignItems: "center",
          marginBottom: "25px",
        }}
      >
        <div style={redBarStyle} />

        <h2
          style={{
            margin: 0,
            fontSize: isMobile ? "20px" : "26px",
            fontWeight: "bold",
            color: "#000000",
            letterSpacing: "0.5px",
            lineHeight: 1.4,
          }}
        >
          CALL FOR PAPERS
        </h2>
      </div>

      <div className="call-for-papers-content" style={contentStyle}>
        <p style={{ marginTop: 0, marginBottom: "18px" }}>
          Authors are invited to submit their original research papers
          for ICIFMEDE 2027.
        </p>

        <p style={{ marginBottom: "18px" }}>
          Submitted papers should present original research,
          innovations, and relevant developments in the conference's
          subject areas.
        </p>

        <p style={{ marginBottom: 0 }}>
          Please follow the conference submission guidelines when
          preparing your manuscript.
        </p>
      </div>
    </section>
  );
}

export default CallForPapers;