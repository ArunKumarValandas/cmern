
// export default function Register() {
//   const sectionTitleStyle = {
//     display: "flex",
//     alignItems: "center",
//     marginBottom: "20px",
//     marginTop: "30px",
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
//     marginBottom: "40px",
//   };

//   const tableStyle = {
//     width: "100%",
//     borderCollapse: "collapse",
//     marginTop: "20px",
//   };

//   const thTdStyle = {
//     border: "1px solid #999",
//     padding: "12px",
//     textAlign: "center",
//   };

//   return (
//     <div
//       style={{
//         padding: "50px",
//         background: "#e6e6ea",
//         minHeight: "100vh",
//       }}
//     >
//       {/* ================= REGISTRATION ================= */}
//       <div style={sectionTitleStyle}>
//         <div style={redBarStyle} />
//         <h2 style={{ margin: 0, letterSpacing: "1px" }}>REGISTRATION</h2>
//       </div>

//       <div style={cardStyle}>
//         <p style={{ lineHeight: "1.7" }}>
//           Upon receiving confirmation email from the ICIFMEDE 2025, register for
//           the conference using the following link:
//         </p>

//         <p style={{ marginTop: "15px" }}>
//           <a
//             href="https://icifmede.com/registration"
//             target="_blank"
//             rel="noreferrer"
//             style={{
//               color: "#0d6efd",
//               fontWeight: "600",
//               fontSize: "16px",
//               textDecoration: "none",
//             }}
//           >
//             https://icifmede.com/registration
//           </a>
//         </p>
//       </div>

//       {/* ================= REGISTRATION FEE ================= */}
//       <div style={sectionTitleStyle}>
//         <div style={redBarStyle} />
//         <h2 style={{ margin: 0, letterSpacing: "1px" }}>
//           REGISTRATION FEE
//         </h2>
//       </div>

//       <div style={cardStyle}>
//         <div style={{ overflowX: "auto" }}>
//           <table style={tableStyle}>
//             <thead>
//               <tr>
//                 <th style={thTdStyle}>Description</th>
//                 <th style={thTdStyle}>Student / Research Scholars</th>
//                 <th style={thTdStyle}>
//                   Academia / Industry <br />(One Person)
//                 </th>
//                 <th style={thTdStyle}>
//                   Foreign Authors <br />(One Person)
//                 </th>
//               </tr>
//             </thead>

//             <tbody>
//               <tr>
//                 <td style={thTdStyle}>
//                   Registration + Publication in <br />
//                   AIP Conference Proceedings <br />
//                   (Scopus indexed)
//                 </td>
//                 <td style={thTdStyle}>₹ 10,000</td>
//                 <td style={thTdStyle}>₹ 10,000</td>
//                 <td style={thTdStyle}>$ 150</td>
//               </tr>

//               <tr>
//                 <td style={thTdStyle}>
//                   Registration + Abstract in <br />
//                   Souvenir (ISBN)
//                 </td>
//                 <td style={thTdStyle}>₹ 3,000</td>
//                 <td style={thTdStyle}>₹ 4,000</td>
//                 <td style={thTdStyle}>$ 100</td>
//               </tr>

//               <tr>
//                 <td style={thTdStyle}>Participant / Co-Author</td>
//                 <td style={thTdStyle}>₹ 1,500</td>
//                 <td style={thTdStyle}>₹ 2,000</td>
//                 <td style={thTdStyle}>$ 50</td>
//               </tr>
//             </tbody>
//           </table>
//         </div>
//       </div>
//     </div>
//   );
// }

export default function Register() {
  const isMobile = window.innerWidth <= 768;
  const isTablet = window.innerWidth <= 1024;

  const sectionTitleStyle = {
    display: "flex",
    alignItems: "center",
    flexWrap: "wrap",
    marginBottom: "20px",
    marginTop: "35px",
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
    marginBottom: "40px",
    boxShadow: "0 2px 8px rgba(0,0,0,0.08)",
  };

  const tableStyle = {
    width: "100%",
    borderCollapse: "collapse",
    marginTop: "20px",
    minWidth: isMobile ? "650px" : "100%",
  };

  const thTdStyle = {
    border: "1px solid #999",
    padding: isMobile ? "10px" : "12px",
    textAlign: "center",
    fontSize: isMobile ? "14px" : "16px",
    lineHeight: "1.6",
  };

  return (
    <div
      style={{
        padding: isMobile ? "20px 15px" : "50px",
        background: "#e6e6ea",
        minHeight: "100vh",
      }}
    >
      {/* REGISTRATION */}

      <div style={sectionTitleStyle}>
        <div style={redBarStyle} />

        <h2
          style={{
            margin: 0,
            letterSpacing: "1px",
            fontSize: isMobile ? "28px" : "38px",
          }}
        >
          REGISTRATION
        </h2>
      </div>

      <div style={cardStyle}>
        <p
          style={{
            lineHeight: "1.8",
            fontSize: isMobile ? "15px" : "17px",
          }}
        >
          Upon receiving confirmation email from the ICIFMEDE 2025, register
          for the conference using the following link:
        </p>

        <p style={{ marginTop: "20px" }}>
          <a
            href="https://icifmede.com/registration"
            target="_blank"
            rel="noreferrer"
            style={{
              color: "#0d6efd",
              fontWeight: "600",
              fontSize: isMobile ? "15px" : "17px",
              textDecoration: "none",
              wordBreak: "break-word",
            }}
          >
            https://icifmede.com/registration
          </a>
        </p>
      </div>

      {/* REGISTRATION FEE */}

      <div style={sectionTitleStyle}>
        <div style={redBarStyle} />

        <h2
          style={{
            margin: 0,
            letterSpacing: "1px",
            fontSize: isMobile ? "28px" : "38px",
          }}
        >
          REGISTRATION FEE
        </h2>
      </div>

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
                  AIP Conference Proceedings
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