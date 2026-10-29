
export default function Register() {
  const isMobile = window.innerWidth <= 768;

  const sectionTitleStyle = {
    display: "flex",
    alignItems: "center",
    marginBottom: "18px",
    marginTop: "30px",
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
    marginBottom: "30px",
    boxShadow: "0 2px 8px rgba(0,0,0,0.08)",
    boxSizing: "border-box",
    width: "100%",
  };

  const tableStyle = {
    width: "100%",
    borderCollapse: "collapse",
    marginTop: "10px",
    minWidth: isMobile ? "550px" : "100%",
  };

  const thTdStyle = {
    border: "1px solid #999",
    padding: isMobile ? "8px" : "10px",
    textAlign: "center",
    fontSize: isMobile ? "11px" : "13px",
    lineHeight: "1.5",
  };

  const SectionTitle = ({ children }) => (
    <div style={sectionTitleStyle}>
      <div style={redBarStyle} />
      <h2
        style={{
          margin: 0,
          letterSpacing: "0.5px",
          fontSize: isMobile ? "18px" : "26px",
        }}
      >
        {children}
      </h2>
    </div>
  );

  return (
    <div
      style={{
        padding: isMobile ? "25px 15px" : "35px",
        background: "#e6e6ea",
        minHeight: "100vh",
        boxSizing: "border-box",
      }}
    >
      {/* REGISTRATION */}
      <SectionTitle>REGISTRATION</SectionTitle>

      <div style={cardStyle}>
        <p
          style={{
            lineHeight: "1.6",
            fontSize: isMobile ? "12px" : "15px",
            margin: "0 0 12px",
          }}
        >
          Upon receiving confirmation email from the ICIFMEDE 2027,
          register for the conference using the following link:
        </p>

        <p
          style={{
            margin: 0,
            color: "#102f50",
            fontWeight: "bold",
            fontSize: isMobile ? "12px" : "15px",
          }}
        >
          In Progress
        </p>
      </div>

      {/* REGISTRATION FEE */}
      <SectionTitle>REGISTRATION FEE</SectionTitle>

      <div style={cardStyle}>
        <div style={{ overflowX: "auto" }}>
          <table style={tableStyle}>
            <thead>
              <tr>
                <th style={thTdStyle}>Description</th>
                <th style={thTdStyle}>
                  Student / Research Scholars
                </th>
                <th style={thTdStyle}>
                  Academia / Industry
                  <br />
                  (One Person)
                </th>
                <th style={thTdStyle}>
                  Foreign Authors
                  <br />
                  (One Person)
                </th>
              </tr>
            </thead>

            <tbody>
              <tr>
                <td style={thTdStyle}>
                  Registration + Publication in
                  <br />
                  Conference Proceedings
                  <br />
                  (Scopus indexed)
                </td>
                <td style={thTdStyle}>₹ 10,000</td>
                <td style={thTdStyle}>₹ 10,000</td>
                <td style={thTdStyle}>$ 150</td>
              </tr>

              <tr>
                <td style={thTdStyle}>
                  Registration + Abstract in
                  <br />
                  Souvenir (ISBN)
                </td>
                <td style={thTdStyle}>₹ 3,000</td>
                <td style={thTdStyle}>₹ 4,000</td>
                <td style={thTdStyle}>$ 100</td>
              </tr>

              <tr>
                <td style={thTdStyle}>
                  Participant / Co-Author
                </td>
                <td style={thTdStyle}>₹ 1,500</td>
                <td style={thTdStyle}>₹ 2,000</td>
                <td style={thTdStyle}>$ 50</td>
              </tr>
            </tbody>
          </table>
        </div>
      </div>
    </div>
  );
}
