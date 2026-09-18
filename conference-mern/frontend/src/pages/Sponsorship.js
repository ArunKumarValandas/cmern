// export default function Sponsorship() {
//   return (
//     <div style={{ padding: "40px" }}>
//       <h2>Sponsorship Packages</h2>

//       <table border="1" cellPadding="10">
//         <thead>
//           <tr>
//             <th>Category</th>
//             <th>Amount (₹)</th>
//           </tr>
//         </thead>
//         <tbody>
//           <tr><td>Diamond Sponsor</td><td>1,00,000</td></tr>
//           <tr><td>Platinum Sponsor</td><td>50,000</td></tr>
//           <tr><td>Gold Sponsor</td><td>25,000</td></tr>
//           <tr><td>Silver Sponsor</td><td>10,000</td></tr>
//         </tbody>
//       </table>
//     </div>
//   );
// }


export default function Sponsorship() {
  const isMobile = window.innerWidth <= 768;

  return (
    <div
      style={{
        padding: isMobile ? "20px 15px" : "50px",
        background: "#e6e6ea",
        minHeight: "100vh",
      }}
    >
      {/* Heading */}

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
            letterSpacing: "1px",
            fontSize: isMobile ? "28px" : "38px",
          }}
        >
          SPONSORSHIP PACKAGES
        </h2>
      </div>

      {/* Card */}

      <div
        style={{
          background: "#fff",
          borderRadius: "10px",
          padding: isMobile ? "20px" : "30px",
          boxShadow: "0 2px 8px rgba(0,0,0,0.08)",
        }}
      >
        <div
          style={{
            overflowX: "auto",
          }}
        >
          <table
            style={{
              width: "100%",
              minWidth: "500px",
              borderCollapse: "collapse",
            }}
          >
            <thead>
              <tr
                style={{
                  background: "#c62828",
                  color: "#fff",
                }}
              >
                <th
                  style={{
                    padding: "12px",
                    border: "1px solid #ddd",
                    textAlign: "left",
                  }}
                >
                  Category
                </th>

                <th
                  style={{
                    padding: "12px",
                    border: "1px solid #ddd",
                    textAlign: "center",
                  }}
                >
                  Amount (₹)
                </th>
              </tr>
            </thead>

            <tbody>
              <tr>
                <td
                  style={{
                    padding: "12px",
                    border: "1px solid #ddd",
                  }}
                >
                  Diamond Sponsor
                </td>

                <td
                  style={{
                    padding: "12px",
                    border: "1px solid #ddd",
                    textAlign: "center",
                  }}
                >
                  ₹1,00,000
                </td>
              </tr>

              <tr>
                <td
                  style={{
                    padding: "12px",
                    border: "1px solid #ddd",
                  }}
                >
                  Platinum Sponsor
                </td>

                <td
                  style={{
                    padding: "12px",
                    border: "1px solid #ddd",
                    textAlign: "center",
                  }}
                >
                  ₹50,000
                </td>
              </tr>

              <tr>
                <td
                  style={{
                    padding: "12px",
                    border: "1px solid #ddd",
                  }}
                >
                  Gold Sponsor
                </td>

                <td
                  style={{
                    padding: "12px",
                    border: "1px solid #ddd",
                    textAlign: "center",
                  }}
                >
                  ₹25,000
                </td>
              </tr>

              <tr>
                <td
                  style={{
                    padding: "12px",
                    border: "1px solid #ddd",
                  }}
                >
                  Silver Sponsor
                </td>

                <td
                  style={{
                    padding: "12px",
                    border: "1px solid #ddd",
                    textAlign: "center",
                  }}
                >
                  ₹10,000
                </td>
              </tr>
            </tbody>
          </table>
        </div>
      </div>
    </div>
  );
}