// export default function Publication() {
//   return (
//     <div style={{ padding: "40px" }}>
//       <h2>Publication</h2>

//       <p>
//         All accepted papers will be published in
//         <b> AIP Conference Proceedings</b>.
//       </p>

//       <p>
//         Selected abstracts may be included in the conference souvenir
//         with ISBN.
//       </p>
//     </div>
//   );
// }

export default function Publication() {
  const isMobile = window.innerWidth <= 768;

  const cardStyle = {
    background: "#ffffff",
    padding: isMobile ? "20px" : "30px",
    borderRadius: "10px",
    boxShadow: "0 2px 8px rgba(0,0,0,0.08)",
    lineHeight: "1.8",
  };

  return (
    <div
      style={{
        padding: isMobile ? "20px 15px" : "50px",
        background: "#e6e6ea",
        minHeight: "100vh",
      }}
    >
      {/* Title */}

      <div
        style={{
          display: "flex",
          alignItems: "center",
          marginBottom: "25px",
        }}
      >
        <div
          style={{
            width: "8px",
            height: "24px",
            background: "#c62828",
            marginRight: "10px",
          }}
        />

        <h2
          style={{
            margin: 0,
            fontSize: isMobile ? "28px" : "38px",
            letterSpacing: "1px",
          }}
        >
          PUBLICATION
        </h2>
      </div>

      {/* Card */}

      <div style={cardStyle}>
        <p
          style={{
            fontSize: isMobile ? "15px" : "17px",
            marginBottom: "18px",
          }}
        >
          All accepted papers will be published in
          <strong> AIP Conference Proceedings</strong>.
        </p>

        <p
          style={{
            fontSize: isMobile ? "15px" : "17px",
          }}
        >
          Selected abstracts may be included in the conference
          souvenir with ISBN.
        </p>
      </div>
    </div>
  );
}