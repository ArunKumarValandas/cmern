export default function Contact() {
  const isMobile = window.innerWidth <= 768;

  const sectionTitleStyle = {
    display: "flex",
    alignItems: "center",
    marginBottom: "18px",
  };

  const redBarStyle = {
    width: "5px",
    height: "22px",
    background: "#c62828",
    marginRight: "10px",
    flexShrink: 0,
  };

  const cardStyle = {
    background: "#ffffff",
    padding: isMobile ? "15px" : "22px",
    borderRadius: "10px",
    width: "100%",
    maxWidth: "1320px",
    boxSizing: "border-box",
    boxShadow: "0 2px 8px rgba(0,0,0,0.08)",
  };

  const infoRow = {
    marginBottom: "12px",
    fontSize: isMobile ? "12px" : "15px",
    lineHeight: "1.6",
    wordBreak: "break-word",
  };

  return (
    <div
      style={{
        padding: isMobile ? "25px 15px" : "35px",
        background: "#e6e6ea",
        minHeight: "100vh",
        boxSizing: "border-box",
      }}
    >
      {/* CONTACT US */}
      <div style={sectionTitleStyle}>
        <div style={redBarStyle} />

        <h2
          style={{
            margin: 0,
            letterSpacing: "0.5px",
            fontSize: isMobile ? "18px" : "26px",
          }}
        >
          CONTACT US
        </h2>
      </div>

      {/* CONTACT DETAILS */}
      <div style={cardStyle}>
        <p
          style={{
            fontSize: isMobile ? "16px" : "20px",
            fontWeight: "600",
            marginTop: 0,
            marginBottom: "5px",
          }}
        >
          Dr. T. Krishnaiah
        </p>

        <p
          style={{
            marginBottom: "15px",
            color: "#555",
            fontSize: isMobile ? "12px" : "14px",
          }}
        >
          Convenor – ICIFMEDE 2027
        </p>

        <p style={infoRow}>
          📞 <b>Phone:</b> 9640610016
        </p>

        <p style={infoRow}>
          📧 <b>Email:</b>{" "}
          <a
            href="mailto:icifmede2027@anurag.edu.in"
            style={{
              color: "#0d6efd",
              textDecoration: "none",
              wordBreak: "break-word",
            }}
          >
            icifmede2027@anurag.edu.in
          </a>
        </p>

        <p
          style={{
            marginTop: "16px",
            marginBottom: 0,
            lineHeight: "1.6",
            fontSize: isMobile ? "12px" : "15px",
          }}
        >
          Anurag University
          <br />
          Hyderabad, Telangana
          <br />
          India
        </p>
      </div>
    </div>
  );
}