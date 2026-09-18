
// import "./home.css";
// import heroImage from "../assets/hero-bg.jpg";

// export default function Home() {
//   const sectionStyle = {
//     padding: "60px 80px",
//     background: "#f4f4f6",
//   };

//   const whiteCard = {
//     background: "#ffffff",
//     padding: "35px",
//     borderRadius: "8px",
//     marginBottom: "50px",
//   };

//   const titleRow = {
//     display: "flex",
//     alignItems: "center",
//     marginBottom: "20px",
//   };

//   const redBar = {
//     width: "8px",
//     height: "24px",
//     background: "#c62828",
//     marginRight: "12px",
//   };

//   return (
//     <div>
//       {/* ================= HERO SECTION ================= */}
//       <section
//         className="hero-section"
//         style={{ backgroundImage: `url(${heroImage})` }}
//       >
//         <div className="hero-overlay">
//           <h1>INTERNATIONAL CONFERENCE ON</h1>

//           <h2>
//             INNOVATIONS AND FUTURE SCOPE OF <br />
//             MECHANICAL ENGINEERING
//           </h2>

//           <h3>IN DIGITAL ERA (ICIFMEDE 2026)</h3>

//           <p>December 20–21, 2026</p>
//           <p>Anurag University, Hyderabad, India</p>
//         </div>
//       </section>

//       {/* ================= ABOUT ANURAG UNIVERSITY ================= */}
//       <section style={sectionStyle}>
//         <div style={whiteCard}>
//           <div style={titleRow}>
//             <div style={redBar} />
//             <h2>ABOUT ANURAG UNIVERSITY (AU)</h2>
//           </div>

//           <p style={{ lineHeight: "1.7" }}>
//             Anurag University (formerly known as Anurag Group of Institutions)
//             was established in 2002 which has evolved into one of the top
//             universities of Telangana State and is well reputed for its pursuit
//             of excellence by providing technical education with high academic
//             standards. AU uses Outcome Based Education techniques and Blended
//             Pedagogy to help students navigate the rapidly changing landscape of
//             modern-day technological world.
//           </p>

//           <p style={{ marginTop: "15px", fontWeight: "500" }}>
//             NIRF Ranking 2024 • NAAC A+ • NBA Accredited Programs
//           </p>
//         </div>
//  {/* ================= ABOUT THE CONFERENCE ================= */}
//         <div style={whiteCard}>
//           <div style={titleRow}>
//             <div style={redBar} />
//             <h2>ABOUT THE CONFERENCE</h2>
//           </div>

//           <p style={{ lineHeight: "1.7" }}>
//             The 1<sup>st</sup> International Conference on Innovations and Future
//             Scope of Mechanical Engineering in Digital Era (ICIFMEDE 2026) will
//             be held during 24<sup>th</sup> & 25<sup>th</sup> January 2026, at
//             Anurag University, Hyderabad. The conference aims to bring together
//             experts from academia, scientific and industrial communities from
//             all over the globe to create a common platform to address challenges,
//             present their latest research findings, ideas, developments and
//             perspective of the future direction in the field of Mechanical
//             Engineering. ICIFMEDE 2026 invites all the researchers to participate
//             in the conference.
//           </p>
//         </div>
//         {/* ================= DEPARTMENT OF MECHANICAL ENGINEERING ================= */}
//         <div style={whiteCard}>
//           <div style={titleRow}>
//             <div style={redBar} />
//             <h2>DEPARTMENT OF MECHANICAL ENGINEERING</h2>
//           </div>

//           <p style={{ lineHeight: "1.7" }}>
//             Department of Mechanical Engineering was established in the year
//             2004 and was accredited by NBA under tier-II in 2015. It was
//             reaccredited subsequently twice with validity extending up to June
//             2025. The department comprises of well-qualified and committed 32
//             faculty members and 14 technical staff, among which 13 are
//             doctorates with diverse specialisations.
//           </p>

//           <ul style={{ paddingLeft: "22px", lineHeight: "1.8" }}>
//             <li>
//               Value-added courses on <b>SOLIDWORKS, CREO and ANSYS</b>
//             </li>
//             <li>19 MoUs with core engineering companies</li>
//             <li>
//               Exclusive department library with over{" "}
//               <b>300 volumes and e-journals</b>
//             </li>
//             <li>
//               Active professional chapters (<b>ISTE, SAE, IEEE – RAS & NTSC</b>)
//               and student clubs (<b>FEM, CAD, MARK, DiMaC</b> etc.)
//             </li>
//           </ul>
//         </div>

   
//       </section>
//     </div>
//   );
// }

import "./home.css";
import heroImage from "../assets/hero-bg.jpg";

export default function Home() {
  const isMobile = window.innerWidth <= 768;

  const sectionStyle = {
    padding: isMobile ? "20px 15px" : "60px 80px",
    background: "#f4f4f6",
  };

  const whiteCard = {
    background: "#ffffff",
    padding: isMobile ? "20px" : "35px",
    borderRadius: "8px",
    marginBottom: "35px",
    width: "100%",
    boxSizing: "border-box",
  };

  const titleRow = {
    display: "flex",
    alignItems: "center",
    flexWrap: "wrap",
    marginBottom: "20px",
  };

  const redBar = {
    width: "8px",
    height: "24px",
    background: "#c62828",
    marginRight: "12px",
    flexShrink: 0,
  };

  const headingStyle = {
    margin: 0,
    fontSize: isMobile ? "22px" : "30px",
    lineHeight: "1.3",
    overflowWrap: "break-word",
  };

  const paragraphStyle = {
    lineHeight: "1.8",
    fontSize: isMobile ? "15px" : "17px",
    overflowWrap: "break-word",
    textAlign: "justify",
  };

  const listStyle = {
    paddingLeft: "22px",
    lineHeight: "1.9",
    fontSize: isMobile ? "15px" : "17px",
  };

  return (
    <div>
      {/* ================= HERO SECTION ================= */}

      <section
        className="hero-section"
        style={{
          backgroundImage: `url(${heroImage})`,
        }}
      >
        <div className="hero-overlay">
          <h1>INTERNATIONAL CONFERENCE ON</h1>

          <h2>
            INNOVATIONS AND FUTURE SCOPE OF
            <br />
            MECHANICAL ENGINEERING
          </h2>

          <h3>
            IN DIGITAL ERA (ICIFMEDE 2026)
          </h3>

          <p>December 20–21, 2026</p>

          <p>
            Anurag University,
            <br />
            Hyderabad, India
          </p>
        </div>
      </section>

      {/* ================= CONTENT ================= */}

      <section style={sectionStyle}>

        {/* ABOUT UNIVERSITY */}

        <div style={whiteCard}>

          <div style={titleRow}>
            <div style={redBar} />

            <h2 style={headingStyle}>
              ABOUT ANURAG UNIVERSITY (AU)
            </h2>

          </div>

          <p style={paragraphStyle}>
            Anurag University (formerly known as
            Anurag Group of Institutions) was
            established in 2002 which has evolved
            into one of the top universities of
            Telangana State and is well reputed
            for its pursuit of excellence by
            providing technical education with
            high academic standards. AU uses
            Outcome Based Education techniques
            and Blended Pedagogy to help
            students navigate the rapidly
            changing landscape of the
            modern-day technological world.
          </p>

          <p
            style={{
              ...paragraphStyle,
              marginTop: "15px",
              fontWeight: "600",
            }}
          >
            NIRF Ranking 2024 •
            NAAC A+ •
            NBA Accredited Programs
          </p>

        </div>
                {/* ================= ABOUT THE CONFERENCE ================= */}

        <div style={whiteCard}>
          <div style={titleRow}>
            <div style={redBar} />

            <h2 style={headingStyle}>
              ABOUT THE CONFERENCE
            </h2>
          </div>

          <p style={paragraphStyle}>
            The 1<sup>st</sup> International Conference on
            Innovations and Future Scope of Mechanical
            Engineering in Digital Era (ICIFMEDE 2026)
            will be held during 24<sup>th</sup> &amp;
            25<sup>th</sup> January 2026, at Anurag
            University, Hyderabad.

            The conference aims to bring together experts
            from academia, scientific and industrial
            communities from all over the globe to create
            a common platform to address challenges,
            present their latest research findings,
            ideas, developments and perspective of the
            future direction in the field of Mechanical
            Engineering.

            ICIFMEDE 2026 invites all the researchers
            to participate in the conference.
          </p>
        </div>

        {/* ================= DEPARTMENT OF MECHANICAL ENGINEERING ================= */}

        <div style={whiteCard}>
          <div style={titleRow}>
            <div style={redBar} />

            <h2 style={headingStyle}>
              DEPARTMENT OF MECHANICAL ENGINEERING
            </h2>
          </div>

          <p style={paragraphStyle}>
            Department of Mechanical Engineering
            was established in the year 2004 and
            was accredited by NBA under tier-II
            in 2015. It was reaccredited
            subsequently twice with validity
            extending up to June 2025.

            The department comprises well-qualified
            and committed 32 faculty members and
            14 technical staff, among which
            13 are doctorates with diverse
            specialisations.
          </p>

          <ul style={listStyle}>
            <li>
              Value-added courses on
              <b> SOLIDWORKS, CREO and ANSYS</b>
            </li>

            <li>
              19 MoUs with core engineering
              companies.
            </li>

            <li>
              Exclusive department library with
              over <b>300 volumes and e-journals</b>.
            </li>

            <li>
              Active professional chapters
              (<b>ISTE, SAE, IEEE–RAS &amp; NTSC</b>)
              and student clubs
              (<b>FEM, CAD, MARK, DiMaC</b> etc.).
            </li>
          </ul>
        </div>
      </section>
    </div>
  );
}