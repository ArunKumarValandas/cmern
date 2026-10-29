
import React from "react";

export default function About() {
  const isMobile = window.innerWidth <= 768;

  const sections = [
    {
      title: "ABOUT ANURAG UNIVERSITY",
      content: (
        <>
          <h3>ABOUT ANURAG UNIVERSITY</h3>

          <p>
            Anurag University (formerly known as Anurag Group
            of Institutions) was established in 2002 and has
            evolved into a leading educational institution in
            Telangana. It focuses on providing quality higher
            education, promoting research, encouraging
            innovation, and developing technical skills to
            prepare students for the modern technological world.
          </p>

          <p>
            <strong>NIRF 2027</strong> | Quality Education |
            Technical Excellence
          </p>
        </>
      ),
    },
    {
      title: "DEPARTMENT OF MECHANICAL ENGINEERING",
      content: (
        <>
          <p>
            The Department of Mechanical Engineering was
            established in 2004 and was accredited by NBA
            under Tier-I in 2015. It was subsequently
            reaccredited, with the stated validity extending
            to June 2025.
          </p>

          <p>
            The department comprises qualified faculty
            members and technical staff, including
            doctorates with diverse specialisations.
          </p>

          <ul>
            <li>
              Value-added courses on{" "}
              <strong>SOLIDWORKS, CREO and ANSYS.</strong>
            </li>

            <li>
              <strong>19 MoUs</strong> with core engineering
              companies.
            </li>

            <li>
              Department library with over{" "}
              <strong>300 volumes</strong> and e-journals.
            </li>

            <li>
              Professional chapters including ISTE, SAE,
              IEEE-RAS and NTSC, along with student clubs
              such as FEM, CAD, MARK and DiMaC.
            </li>
          </ul>
        </>
      ),
    },
    {
      title: "ABOUT THE CONFERENCE",
      content: (
        <>
          <p>
            The International Conference on Innovations in
            Future Mechanical Engineering in Digital Era
            (ICIFMEDE 2027) aims to bring together experts
            from academic, scientific and industrial
            communities to address emerging challenges,
            present research findings, exchange ideas and
            explore future directions in mechanical engineering.
          </p>

          <p>
            The conference provides a platform for researchers,
            academicians, industry professionals and students
            to share innovative ideas, exchange knowledge and
            discuss advancements in mechanical engineering
            in the digital era.
          </p>

          <p>
            <strong>Date:</strong> June 10–11, 2027
            <br />
            <strong>Venue:</strong> Anurag University,
            Hyderabad, Telangana, India
          </p>
        </>
      ),
    },
  ];

  const redBarStyle = {
    width: "5px",
    height: "22px",
    background: "#c62828",
    marginRight: "10px",
    flexShrink: 0,
  };

  const contentStyle = {
    color: "#333333",
    fontSize: isMobile ? "13px" : "15px",
    lineHeight: 1.8,
  };

  return (
    <div
      style={{
        padding: isMobile ? "20px 15px" : "35px",
        background: "#e6e6ea",
        minHeight: "100vh",
        boxSizing: "border-box",
        fontFamily: "inherit",
      }}
    >
      {sections.map((section) => (
        <section
          key={section.title}
          style={{ marginBottom: "35px" }}
        >
          {/* SECTION HEADING */}
          <div
            style={{
              display: "flex",
              alignItems: "center",
              marginBottom: "18px",
            }}
          >
            <div style={redBarStyle} />

            <h2
              style={{
                margin: 0,
                fontSize: isMobile ? "20px" : "26px",
                fontWeight: "bold",
                letterSpacing: "0.5px",
                color: "#000000",
                lineHeight: 1.4,
              }}
            >
              {section.title}
            </h2>
          </div>

          {/* WHITE CONTENT CARD */}
          <div
            style={{
              background: "#ffffff",
              border: "1px solid #dddddd",
              borderRadius: "10px",
              padding: isMobile ? "18px" : "25px",
              boxSizing: "border-box",
              boxShadow: "0 2px 8px rgba(0,0,0,0.08)",
              width: "100%",
              ...contentStyle,
            }}
          >
            {section.content}
          </div>
        </section>
      ))}
    </div>
  );
}
