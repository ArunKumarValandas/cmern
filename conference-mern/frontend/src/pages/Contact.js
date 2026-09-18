
// export default function Contact() {
//   const sectionTitleStyle = {
//     display: "flex",
//     alignItems: "center",
//     marginBottom: "20px",
//   };

//   const redBarStyle = {
//     width: "8px",
//     height: "22px",
//     background: "#c62828",
//     marginRight: "10px",
//   };

//   const cardStyle = {
//     background: "#ffffff",
//     padding: "30px",
//     borderRadius: "8px",
//     maxWidth: "1320px",
//   };

//   const infoRow = {
//     marginBottom: "12px",
//     fontSize: "16px",
//   };

//   return (
//     <div
//       style={{
//         padding: "50px",
//         background: "#e6e6ea",
//         minHeight: "57.5vh",
//         minWidth: "1000vw",
//       }}
//     >
//       {/* ================= CONTACT US ================= */}
//       <div style={sectionTitleStyle}>
//         <div style={redBarStyle} />
//         <h2 style={{ margin: 0, letterSpacing: "1px" }}>
//           CONTACT US
//         </h2>
//       </div>

//       <div style={cardStyle}>
//         <p style={{ fontSize: "18px", fontWeight: "600", marginBottom: "5px" }}>
//           Dr. T. Krishnaiah
//         </p>

//         <p style={{ marginBottom: "15px", color: "#555" }}>
//           Co - Convenor – ICIFMEDE 2026
//         </p>

//         <p style={infoRow}>
//           📞 <b>Phone:</b> 9640610016
//         </p>

//         <p style={infoRow}>
//           📧 <b>Email:</b>{" "}
//           <a
//             href="mailto:icifmede2026@anurag.edu.in"
//             style={{ color: "#0d6efd", textDecoration: "none" }}
//           >
//             icifmede2026@anurag.edu.in
//           </a>
//         </p>

//         <p style={{ marginTop: "20px", lineHeight: "1.6" }}>
//           Anurag University, <br />
//           Hyderabad, Telangana, India
//         </p>
//       </div>
//     </div>
//   );
// }


export default function Contact() {
  const isMobile = window.innerWidth <= 768;

  const sectionTitleStyle = {
    display: "flex",
    alignItems: "center",
    flexWrap: "wrap",
    marginBottom: "20px",
  };

  const redBarStyle = {
    width: "8px",
    height: "24px",
    background: "#c62828",
    marginRight: "10px",
  };

  const cardStyle = {
    background: "#ffffff",
    padding: isMobile ? "20px" : "30px",
    borderRadius: "10px",
    maxWidth: "1320px",
    boxShadow: "0 2px 8px rgba(0,0,0,0.08)",
  };

  const infoRow = {
    marginBottom: "14px",
    fontSize: isMobile ? "15px" : "16px",
    lineHeight: "1.8",
    wordBreak: "break-word",
  };

  return (
    <div
      style={{
        padding: isMobile ? "20px 15px" : "50px",
        background: "#e6e6ea",
        minHeight: "100vh",
      }}
    >
      {/* CONTACT US */}

      <div style={sectionTitleStyle}>
        <div style={redBarStyle} />

        <h2
          style={{
            margin: 0,
            letterSpacing: "1px",
            fontSize: isMobile ? "28px" : "38px",
          }}
        >
          CONTACT US
        </h2>
      </div>

      <div style={cardStyle}>
        <p
          style={{
            fontSize: isMobile ? "22px" : "24px",
            fontWeight: "600",
            marginBottom: "5px",
          }}
        >
          Dr. T. Krishnaiah
        </p>

        <p
          style={{
            marginBottom: "20px",
            color: "#555",
            fontSize: isMobile ? "15px" : "16px",
          }}
        >
          Co - Convenor – ICIFMEDE 2026
        </p>

        <p style={infoRow}>
          📞 <b>Phone:</b> 9640610016
        </p>

        <p style={infoRow}>
          📧 <b>Email:</b>{" "}
          <a
            href="mailto:icifmede2026@anurag.edu.in"
            style={{
              color: "#0d6efd",
              textDecoration: "none",
              wordBreak: "break-word",
            }}
          >
            icifmede2026@anurag.edu.in
          </a>
        </p>

        <p
          style={{
            marginTop: "20px",
            lineHeight: "1.8",
            fontSize: isMobile ? "15px" : "16px",
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