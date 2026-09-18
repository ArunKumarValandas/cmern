// import abstractingIndexingImg from "../assets/indexing/abstracting-indexing.png";

// export default function CallForPapers() {
//   //

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
//     marginBottom: "40px",
//   };

//   const listStyle = {
//     paddingLeft: "20px",
//     lineHeight: "1.7",
//   };

//   return (
//     <div
//       style={{
//         padding: "50px",
//         background: "#e6e6ea",
//         minHeight: "100vh",
//       }}
//     >
//       {/* ================= CALL FOR PAPERS ================= */}
//       <div style={sectionTitleStyle}>
//         <div style={redBarStyle} />
//         <h2 style={{ margin: 0, letterSpacing: "1px", fontSize: "23px" }}>
//           CALL FOR PAPERS
//         </h2>
//       </div>

//       <div style={cardStyle}>
//         <p style={{ lineHeight: "1.6", marginBottom: "25px" }}>
//           Authors are solicited to contribute to the conference by submitting
//           high quality unpublished review or research articles and industrial
//           experiences that describe significant advances in the fields of
//           following tracks, but are not limited to:
//         </p>

//         <div
//           style={{
//             display: "grid",
//             gridTemplateColumns: "repeat(auto-fit, minmax(280px, 1fr))",
//             gap: "30px",
//           }}
//         >
//           {/* THERMO-FLUIDS */}
//           <div>
//             <h4 style={{ color: "#c62828" }}>
//               Recent Advancements in Thermo-Fluids
//             </h4>
//             <ul style={listStyle}>
//               <li>Bio Fuels</li>
//               <li>Bio-Thermal Applications</li>
//               <li>Compressible Fluid Flow</li>
//               <li>Cryogenic Applications</li>
//               <li>Fuel Cells</li>
//               <li>Heat Transfer Enhancement</li>
//               <li>Hydrogen Production and Storage</li>
//               <li>Internal Combustion Engines</li>
//               <li>Nanofluids</li>
//               <li>Novel Materials for Thin Film Solar Cells</li>
//               <li>Renewable Energy Sources</li>
//               <li>Solar Thermal Energy</li>
//               <li>Waste Heat Recovery</li>
//             </ul>
//           </div>

//           {/* DESIGN ENGINEERING */}
//           <div>
//             <h4 style={{ color: "#c62828" }}>
//               Recent Advancements in Design Engineering
//             </h4>
//             <ul style={listStyle}>
//               <li>Artificial Intelligence in Mechanical Engineering</li>
//               <li>Computing in Applied Mechanics and Product Design</li>
//               <li>Differential / Dynamical Systems</li>
//               <li>Dynamics and Control of Structures / Systems</li>
//               <li>Fracture and Failure Mechanics</li>
//               <li>Fuzzy Logic, Neural Networks & Genetic Algorithm</li>
//               <li>Human Factors in Seating Comfort</li>
//               <li>Modelling and Simulation</li>
//               <li>Numerical Techniques</li>
//               <li>Robotics</li>
//               <li>Solid Mechanics</li>
//               <li>Tool Design</li>
//               <li>Tribology</li>
//             </ul>
//           </div>

//           {/* MATERIAL & MANUFACTURING */}
//           <div>
//             <h4 style={{ color: "#c62828" }}>
//               Recent Advancements in Material & Manufacturing Engineering
//             </h4>
//             <ul style={listStyle}>
//               <li>Additive Manufacturing</li>
//               <li>
//                 Augmented Reality / Virtual Reality for Manufacturing Simulation
//               </li>
//               <li>Conventional and Non-Conventional Machining</li>
//               <li>Ergonomics</li>
//               <li>Intelligent Manufacturing Systems</li>
//               <li>Machine Learning for Mechanical Engineering</li>
//               <li>
//                 Nano Materials and Micro Electro Mechanical Systems (MEMS)
//               </li>
//               <li>Operational Efficiency and Quality Assurance</li>
//               <li>Productivity Improvement</li>
//               <li>Rapid Prototyping and Reverse Engineering</li>
//               <li>Supply Chain Management and Logistics</li>
//               <li>Surface Engineering, Characterization and Coatings</li>
//               <li>Surface Nanotechnology and Devices</li>
//               <li>Thermal Forming</li>
//             </ul>
//           </div>
//         </div>
//       </div>

//       {/* ================= PAPER SUBMISSION ================= */}
//       <div style={sectionTitleStyle}>
//         <div style={redBarStyle} />
//         <h2 style={{ margin: 0, letterSpacing: "1px", fontSize: "23px" }}>
//           PAPER SUBMISSION
//         </h2>
//       </div>

//       <div style={cardStyle}>
//         <p style={{ marginBottom: "20px", lineHeight: "1.6" }}>
//           Authors are instructed to follow the steps given below to submit the
//           manuscript.
//         </p>

//         {/* STEP 1 */}
//         <div style={{ marginBottom: "25px" }}>
//           <h4 style={{ color: "#c62828" }}>Step 1</h4>
//           <p style={{ lineHeight: "1.6" }}>
//             Click the following link and register in <b>Microsoft CMT</b>
//             (Conference Management Tool Kit) using your mail ID as the username.
//           </p>
//           <a
//             href="https://cmt3.research.microsoft.com/User/Register"
//             target="_blank"
//             rel="noreferrer"
//             style={{ color: "#0d6efd", textDecoration: "none" }}
//           >
//             https://cmt3.research.microsoft.com/User/Register
//           </a>
//         </div>

//         {/* STEP 2 */}
//         <div style={{ marginBottom: "25px" }}>
//           <h4 style={{ color: "#c62828" }}>Step 2</h4>
//           <ul style={listStyle}>
//             <li>Login to Microsoft CMT.</li>
//             <li>
//               In the search bar, type <b>ICIFMEDE</b> to select the conference.
//             </li>
//             <li>
//               Click on the conference name and enter the submission details.
//             </li>
//             <li>
//               Upload the full paper as per <b>AIP format</b>.
//             </li>
//           </ul>

//           <a
//             href="https://publishing.aip.org/resources/researchers/author-instructions/"
//             target="_blank"
//             rel="noreferrer"
//             style={{ color: "#0d6efd", textDecoration: "none" }}
//           >
//             ACP – Preparing Your Manuscript | AIP Conference Proceedings
//           </a>
//         </div>

//         {/* STEP 3 */}
//         <div>
//           <h4 style={{ color: "#c62828" }}>Step 3</h4>
//           <p style={{ lineHeight: "1.6" }}>
//             Click on <b>Submit</b> and view the summary of the manuscript.
//           </p>
//         </div>
//         {/* ================= ABSTRACTING & INDEXING ================= */}
// <div style={{ marginTop: "40px", marginBottom: "35px" }}>
//   <div style={sectionTitleStyle}>
//     {/* <div style={redBarStyle} /> */}
//     <h3 style={{ margin: 0 }}>ABSTRACTING AND INDEXING</h3>
//   </div>

//   {/* Single combined image */}
//   <div style={{ marginTop: "20px", textAlign: "center" }}>
//     <img
//   src={abstractingIndexingImg}
//   alt="Abstracting and Indexing Logos"
//   style={{
//     maxWidth: "100%",
//     height: "230px",
//     marginLeft:"0px"
//   }}
// />

//   </div>
// </div>

// {/* ================= QUALITY & PLAGIARISM ================= */}
// <div style={{ marginTop: "30px" }}>
//   <div style={sectionTitleStyle}>
//     {/* <div style={redBarStyle} /> */}
//     <h3 style={{ margin: 0 }}>QUALITY & PLAGIARISM</h3>
//   </div>

//   <p style={{ lineHeight: "1.7", marginTop: "15px" }}>
//     All the manuscripts will be double blind reviewed and the allowable
//     plagiarism is less than <b>18%</b>. Accepted papers will be published in
//     <b> AIP Conference Proceedings</b> (Scopus Indexed).
//   </p>
// </div>

//       </div>
//     </div>
//   );
// }
// // import "./CallForPapers.css";
// // import abstractingIndexingImg from "../assets/indexing/abstracting-indexing.png";

// // export default function CallForPapers() {
// //   return (
// //     <div className="cfp-container">
// //       {/* ================= CALL FOR PAPERS ================= */}
// //       <div className="section-title">
// //         <div className="red-bar"></div>
// //         <h2>CALL FOR PAPERS</h2>
// //       </div>

// //       <div className="cfp-card">
// //         <p className="paragraph">
// //           Authors are solicited to contribute to the conference by submitting
// //           high quality unpublished review or research articles and industrial
// //           experiences.
// //         </p>

// //         <div className="tracks-grid">
// //           <div>
// //             <h4>Recent Advancements in Thermo-Fluids</h4>
// //             <ul>
// //               <li>Bio Fuels</li>
// //               <li>Heat Transfer Enhancement</li>
// //               <li>Hydrogen Production</li>
// //               <li>Renewable Energy</li>
// //             </ul>
// //           </div>

// //           <div>
// //             <h4>Recent Advancements in Design Engineering</h4>
// //             <ul>
// //               <li>AI in Mechanical Engineering</li>
// //               <li>Robotics</li>
// //               <li>Numerical Techniques</li>
// //               <li>Tribology</li>
// //             </ul>
// //           </div>

// //           <div>
// //             <h4>Material & Manufacturing Engineering</h4>
// //             <ul>
// //               <li>Additive Manufacturing</li>
// //               <li>Machine Learning</li>
// //               <li>Supply Chain Management</li>
// //               <li>Surface Engineering</li>
// //             </ul>
// //           </div>
// //         </div>
// //       </div>

// //       {/* ================= ABSTRACTING & INDEXING ================= */}
// //       <div className="cfp-card center">
// //         <h3>ABSTRACTING AND INDEXING</h3>
// //         <img
// //           src={abstractingIndexingImg}
// //           alt="Abstracting and Indexing"
// //           className="responsive-img"
// //         />
// //       </div>

// //       {/* ================= QUALITY & PLAGIARISM ================= */}
// //       <div className="cfp-card">
// //         <h3>QUALITY & PLAGIARISM</h3>
// //         <p className="paragraph">
// //           All manuscripts will be double blind reviewed. Allowable plagiarism is
// //           less than <b>18%</b>. Accepted papers will be published in
// //           <b> AIP Conference Proceedings</b>.
// //         </p>
// //       </div>
// //     </div>
// //   );
// // }


import abstractingIndexingImg from "../assets/indexing/abstracting-indexing.png";

export default function CallForPapers() {

  const isMobile = window.innerWidth <= 768;
  const isTablet = window.innerWidth <= 1024;

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
    marginBottom: "40px",
    boxShadow: "0 2px 8px rgba(0,0,0,0.08)",
  };

  const listStyle = {
    paddingLeft: "20px",
    lineHeight: "1.8",
    fontSize: isMobile ? "15px" : "16px",
  };

  return (
    <div
      style={{
        padding: isMobile ? "20px 15px" : "50px",
        background: "#e6e6ea",
        minHeight: "100vh",
      }}
    >

      {/* ================= CALL FOR PAPERS ================= */}

      <div style={sectionTitleStyle}>
        <div style={redBarStyle} />

        <h2
          style={{
            margin: 0,
            letterSpacing: "1px",
            fontSize: isMobile ? "28px" : "38px",
          }}
        >
          CALL FOR PAPERS
        </h2>
      </div>

      <div style={cardStyle}>
        <p
          style={{
            lineHeight: "1.8",
            marginBottom: "25px",
            fontSize: isMobile ? "15px" : "16px",
          }}
        >
          Authors are solicited to contribute to the conference by submitting
          high quality unpublished review or research articles and industrial
          experiences that describe significant advances in the fields of
          following tracks, but are not limited to:
        </p>

        <div
          style={{
            display: "grid",
            gridTemplateColumns: isMobile
              ? "1fr"
              : isTablet
              ? "repeat(2,1fr)"
              : "repeat(3,1fr)",
            gap: "30px",
          }}
        >

          {/* THERMO-FLUIDS */}
                    {/* THERMO-FLUIDS */}
          <div>
            <h4
              style={{
                color: "#c62828",
                fontSize: isMobile ? "18px" : "20px",
              }}
            >
              Recent Advancements in Thermo-Fluids
            </h4>

            <ul style={listStyle}>
              <li>Bio Fuels</li>
              <li>Bio-Thermal Applications</li>
              <li>Compressible Fluid Flow</li>
              <li>Cryogenic Applications</li>
              <li>Fuel Cells</li>
              <li>Heat Transfer Enhancement</li>
              <li>Hydrogen Production and Storage</li>
              <li>Internal Combustion Engines</li>
              <li>Nanofluids</li>
              <li>Novel Materials for Thin Film Solar Cells</li>
              <li>Renewable Energy Sources</li>
              <li>Solar Thermal Energy</li>
              <li>Waste Heat Recovery</li>
            </ul>
          </div>

          {/* DESIGN ENGINEERING */}

          <div>
            <h4
              style={{
                color: "#c62828",
                fontSize: isMobile ? "18px" : "20px",
              }}
            >
              Recent Advancements in Design Engineering
            </h4>

            <ul style={listStyle}>
              <li>Artificial Intelligence in Mechanical Engineering</li>
              <li>Computing in Applied Mechanics and Product Design</li>
              <li>Differential / Dynamical Systems</li>
              <li>Dynamics and Control of Structures / Systems</li>
              <li>Fracture and Failure Mechanics</li>
              <li>Fuzzy Logic, Neural Networks & Genetic Algorithm</li>
              <li>Human Factors in Seating Comfort</li>
              <li>Modelling and Simulation</li>
              <li>Numerical Techniques</li>
              <li>Robotics</li>
              <li>Solid Mechanics</li>
              <li>Tool Design</li>
              <li>Tribology</li>
            </ul>
          </div>

          {/* MATERIAL & MANUFACTURING */}

          <div>
            <h4
              style={{
                color: "#c62828",
                fontSize: isMobile ? "18px" : "20px",
              }}
            >
              Recent Advancements in Material & Manufacturing Engineering
            </h4>

            <ul style={listStyle}>
              <li>Additive Manufacturing</li>

              <li>
                Augmented Reality / Virtual Reality for Manufacturing
                Simulation
              </li>

              <li>Conventional and Non-Conventional Machining</li>

              <li>Ergonomics</li>

              <li>Intelligent Manufacturing Systems</li>

              <li>Machine Learning for Mechanical Engineering</li>

              <li>
                Nano Materials and Micro Electro Mechanical Systems (MEMS)
              </li>

              <li>Operational Efficiency and Quality Assurance</li>

              <li>Productivity Improvement</li>

              <li>Rapid Prototyping and Reverse Engineering</li>

              <li>Supply Chain Management and Logistics</li>

              <li>
                Surface Engineering, Characterization and Coatings
              </li>

              <li>Surface Nanotechnology and Devices</li>

              <li>Thermal Forming</li>
            </ul>
          </div>

        </div>
      </div>

      {/* ================= PAPER SUBMISSION ================= */}
            <div style={sectionTitleStyle}>
        <div style={redBarStyle} />

        <h2
          style={{
            margin: 0,
            letterSpacing: "1px",
            fontSize: isMobile ? "28px" : "38px",
          }}
        >
          PAPER SUBMISSION
        </h2>
      </div>

      <div style={cardStyle}>
        <p
          style={{
            marginBottom: "20px",
            lineHeight: "1.8",
            fontSize: isMobile ? "15px" : "16px",
          }}
        >
          Authors are instructed to follow the steps given below to submit the
          manuscript.
        </p>

        {/* STEP 1 */}

        <div style={{ marginBottom: "25px" }}>
          <h4
            style={{
              color: "#c62828",
              fontSize: isMobile ? "18px" : "20px",
            }}
          >
            Step 1
          </h4>

          <p
            style={{
              lineHeight: "1.8",
              fontSize: isMobile ? "15px" : "16px",
            }}
          >
            Click the following link and register in <b>Microsoft CMT</b>
            (Conference Management Tool Kit) using your mail ID as the username.
          </p>

          <a
            href="https://cmt3.research.microsoft.com/User/Register"
            target="_blank"
            rel="noreferrer"
            style={{
              color: "#0d6efd",
              textDecoration: "none",
              wordBreak: "break-word",
            }}
          >
            https://cmt3.research.microsoft.com/User/Register
          </a>
        </div>

        {/* STEP 2 */}

        <div style={{ marginBottom: "25px" }}>
          <h4
            style={{
              color: "#c62828",
              fontSize: isMobile ? "18px" : "20px",
            }}
          >
            Step 2
          </h4>

          <ul style={listStyle}>
            <li>Login to Microsoft CMT.</li>

            <li>
              In the search bar, type <b>ICIFMEDE</b> to select the conference.
            </li>

            <li>
              Click on the conference name and enter the submission details.
            </li>

            <li>
              Upload the full paper as per <b>AIP format</b>.
            </li>
          </ul>

          <a
            href="https://publishing.aip.org/resources/researchers/author-instructions/"
            target="_blank"
            rel="noreferrer"
            style={{
              color: "#0d6efd",
              textDecoration: "none",
              wordBreak: "break-word",
            }}
          >
            ACP – Preparing Your Manuscript | AIP Conference Proceedings
          </a>
        </div>

        {/* STEP 3 */}

        <div>
          <h4
            style={{
              color: "#c62828",
              fontSize: isMobile ? "18px" : "20px",
            }}
          >
            Step 3
          </h4>

          <p
            style={{
              lineHeight: "1.8",
              fontSize: isMobile ? "15px" : "16px",
            }}
          >
            Click on <b>Submit</b> and view the summary of the manuscript.
          </p>
        </div>        {/* ================= ABSTRACTING & INDEXING ================= */}

        <div style={{ marginTop: "40px", marginBottom: "35px" }}>
          <div style={sectionTitleStyle}>
            <h3
              style={{
                margin: 0,
                fontSize: isMobile ? "22px" : "28px",
              }}
            >
              ABSTRACTING AND INDEXING
            </h3>
          </div>

          <div
            style={{
              marginTop: "20px",
              textAlign: "center",
            }}
          >
            <img
              src={abstractingIndexingImg}
              alt="Abstracting and Indexing Logos"
              style={{
                maxWidth: "100%",
                height: isMobile ? "120px" : "230px",
                objectFit: "contain",
              }}
            />
          </div>
        </div>

        {/* ================= QUALITY & PLAGIARISM ================= */}

        <div style={{ marginTop: "30px" }}>
          <div style={sectionTitleStyle}>
            <h3
              style={{
                margin: 0,
                fontSize: isMobile ? "22px" : "28px",
              }}
            >
              QUALITY & PLAGIARISM
            </h3>
          </div>

          <p
            style={{
              lineHeight: "1.8",
              marginTop: "15px",
              fontSize: isMobile ? "15px" : "16px",
            }}
          >
            All the manuscripts will be double blind reviewed and the
            allowable plagiarism is less than <b>18%</b>. Accepted papers
            will be published in <b>AIP Conference Proceedings</b>
            (Scopus Indexed).
          </p>
        </div>

      </div>
    </div>
  );
}