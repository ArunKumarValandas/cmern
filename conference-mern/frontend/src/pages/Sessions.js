// export default function Sessions() {
//   return (
//     <div style={{ padding: "40px" }}>
//       <h2>Conference Sessions</h2>
//       <p>Two Days – Four Technical Sessions</p>

//       <hr />

//       <h3>📅 Day 1</h3>

//       <div style={cardStyle}>
//         <h4>Session 1 (Morning)</h4>
//         <p>Advanced Manufacturing & Materials</p>
//         <p>Time: 9:30 AM – 12:30 PM</p>
//       </div>

//       <div style={cardStyle}>
//         <h4>Session 2 (Afternoon)</h4>
//         <p>Thermal Engineering & Energy Systems</p>
//         <p>Time: 2:00 PM – 5:00 PM</p>
//       </div>

//       <hr />

//       <h3>📅 Day 2</h3>

//       <div style={cardStyle}>
//         <h4>Session 3 (Morning)</h4>
//         <p>Robotics, AI & Automation</p>
//         <p>Time: 9:30 AM – 12:30 PM</p>
//       </div>

//       <div style={cardStyle}>
//         <h4>Session 4 (Afternoon)</h4>
//         <p>Renewable Energy & Future Technologies</p>
//         <p>Time: 2:00 PM – 5:00 PM</p>
//       </div>
//     </div>
//   );
// }

// const cardStyle = {
//   border: "1px solid #ccc",
//   padding: "15px",
//   marginBottom: "15px",
//   borderRadius: "6px",
// };


export default function Sessions() {
  const isMobile = window.innerWidth <= 768;
  const isTablet = window.innerWidth <= 1024;

  return (
    <div
      style={{
        padding: isMobile ? "20px 15px" : "50px",
        background: "#f4f4f6",
        minHeight: "100vh",
      }}
    >
      {/* Page Title */}
      <div style={{ marginBottom: "35px" }}>
        <div
          style={{
            display: "flex",
            alignItems: "center",
            marginBottom: "10px",
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
            }}
          >
            Conference Sessions
          </h2>
        </div>

        <p
          style={{
            fontSize: isMobile ? "16px" : "20px",
            color: "#555",
            marginTop: "8px",
          }}
        >
          Two Days – Four Technical Sessions
        </p>
      </div>

      {/* Day 1 */}
      <h3
        style={{
          fontSize: isMobile ? "22px" : "28px",
          marginBottom: "20px",
        }}
      >
        📅 Day 1
      </h3>

      <div
        style={{
          display: "grid",
          gridTemplateColumns: isMobile
            ? "1fr"
            : isTablet
            ? "repeat(2,1fr)"
            : "repeat(2,1fr)",
          gap: "20px",
          marginBottom: "40px",
        }}
      >
        <div style={cardStyle(isMobile)}>
          <h4>Session 1 (Morning)</h4>
          <p>Advanced Manufacturing & Materials</p>
          <p>
            <strong>Time:</strong> 9:30 AM – 12:30 PM
          </p>
        </div>

        <div style={cardStyle(isMobile)}>
          <h4>Session 2 (Afternoon)</h4>
          <p>Thermal Engineering & Energy Systems</p>
          <p>
            <strong>Time:</strong> 2:00 PM – 5:00 PM
          </p>
        </div>
      </div>

      {/* Day 2 */}
      <h3
        style={{
          fontSize: isMobile ? "22px" : "28px",
          marginBottom: "20px",
        }}
      >
        📅 Day 2
      </h3>

      <div
        style={{
          display: "grid",
          gridTemplateColumns: isMobile
            ? "1fr"
            : isTablet
            ? "repeat(2,1fr)"
            : "repeat(2,1fr)",
          gap: "20px",
        }}
      >
        <div style={cardStyle(isMobile)}>
          <h4>Session 3 (Morning)</h4>
          <p>Robotics, AI & Automation</p>
          <p>
            <strong>Time:</strong> 9:30 AM – 12:30 PM
          </p>
        </div>

        <div style={cardStyle(isMobile)}>
          <h4>Session 4 (Afternoon)</h4>
          <p>Renewable Energy & Future Technologies</p>
          <p>
            <strong>Time:</strong> 2:00 PM – 5:00 PM
          </p>
        </div>
      </div>
    </div>
  );
}

const cardStyle = (isMobile) => ({
  background: "#fff",
  borderRadius: "10px",
  padding: isMobile ? "18px" : "25px",
  boxShadow: "0 2px 8px rgba(0,0,0,0.08)",
  border: "1px solid #ddd",
});