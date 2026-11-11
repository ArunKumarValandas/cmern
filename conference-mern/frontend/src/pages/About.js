
import React from "react";

export default function About() {
  const isMobile = window.innerWidth <= 768;

  const sections = [
    {
      title: "ABOUT ANURAG UNIVERSITY (AU)",
      content: (
        <>
          <p>
            Anurag University (formerly known as Anurag Group
            of Institutions) was established in 2002 and has
            evolved into one of the top universities in
            Telangana State. It is well reputed for its pursuit
            of excellence by providing technical education
            with high academic standards. AU utilizes Outcome
            Based Education techniques and Blended Pedagogy
            to help students navigate the rapidly changing
            landscape of the modern-day technological world.
          </p>

          <p>
            <strong>Institutional Excellence:</strong>
            <br />
            <strong>Top Accreditations & NIRF Rankings:</strong>{" "}
            Highly ranked among universities and engineering
            institutions across India, recognized for
            state-of-the-art infrastructure, research centers,
            and academic excellence.
          </p>
        </>
      ),
    },

    {
      title: "ABOUT DEPARTMENT OF MECHANICAL ENGINEERING",
      content: (
        <>
          <p>
            The Department of Mechanical Engineering was
            established in the year 2004 and was accredited
            by NBA under Tier-I in 2015. It was reaccredited
            subsequently twice with validity extending up
            to 2028.
          </p>

          <p>
            The department comprises well-qualified and
            committed 34 faculty members and 16 technical
            staff, among which 19 are doctorates with
            diverse specializations. The faculty members
            are actively engaged in research and scholarly
            activities.
          </p>

          <ul>
            <li>
              Strategic MoU Collaborations with Leading
              Global MNCs to Strengthen Industry–Academia
              Partnerships.
            </li>

            <li>
              Access to a Wide Range of Prestigious
              National and International E-Journals.
            </li>

            <li>
              Active Professional Chapters – ISTE, SAE,
              IEEE-RAS, and NTSC – Encouraging Technical
              Learning and Professional Growth.
            </li>

            <li>
              Active Student Clubs – Thermex, CAD, MARK,
              and DiMaC – Promoting Technical Skills,
              Creativity, and Teamwork.
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
            The <strong>2nd International Conference on
            Innovations and Future Scope of Mechanical
            Engineering in Digital Era (ICIFMEDE 2027)</strong>{" "}
            will be held during June 10–11, 2027, at Anurag
            University, Hyderabad.
          </p>

          <p>
            The conference aims to bring together experts
            from academic, scientific, and industry
            communities from all over the globe to a common
            platform to address new challenges, present
            their latest research findings, ideas,
            developments and perspectives of the future
            directions in the field of Mechanical Engineering.
          </p>

          <p>
            ICIFMEDE 2027 invites all the researchers
            to participate in the conference.
          </p>

          <p style={{ marginTop: "18px" }}>
            <strong>Date:</strong>{" "}
            <span style={{ fontSize: "18px", color: "#c62828" }}>
              June 10–11, 2027
            </span>
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