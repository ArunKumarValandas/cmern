
import React from "react";

function CallForPapers() {
  const isMobile = window.innerWidth <= 768;

  const topics = [
    {
      title: "RECENT ADVANCEMENTS IN THERMO-FLUIDS:",
      items: [
        "Bio Fuels",
        "Bio-Thermal Applications",
        "Compressible Fluid Flow",
        "Cryogenic Applications",
        "Fuel Cells",
        "Heat Transfer Enhancement",
        "Hydrogen Production and Storage",
        "Internal Combustion Engines",
        "Nanofluids",
        "Novel Materials for Thin Film Solar Cells",
        "Renewable Energy Sources",
        "Solar Thermal Energy",
        "Waste Heat Recovery",
      ],
    },
    {
      title: "RECENT ADVANCEMENTS IN DESIGN ENGINEERING:",
      items: [
        "Artificial Intelligence in Mechanical Engineering",
        "Computing in Applied Mechanics and Product Design",
        "Differential / Dynamical Systems",
        "Dynamics and Control of Structures / Systems",
        "Fracture and Failure Mechanics",
        "Fuzzy Logic, Neural Networks & Genetic Algorithm",
        "Human Factors in Seating Comfort",
        "Modelling and Simulation",
        "Numerical Techniques",
        "Robotics",
        "Solid Mechanics",
        "Tool Design",
        "Tribology",
      ],
    },
    {
      title: "RECENT ADVANCEMENTS IN MATERIAL AND MANUFACTURING ENGINEERING:",
      items: [
        "Additive Manufacturing",
        "Augmented Reality / Virtual Reality for Manufacturing Simulation",
        "Conventional and Non-Conventional Machining",
        "Ergonomics",
        "Intelligent Manufacturing Systems",
        "Machine Learning for Mechanical Engineering",
        "Nano Materials and Micro Electro Mechanical Systems (MEMS)",
        "Operational Efficiency and Quality Assurance",
        "Productivity Improvement",
        "Rapid Prototyping and Reverse Engineering",
        "Supply Chain Management and Logistics",
        "Surface Engineering, Characterization and Coatings",
        "Surface Nanotechnology and Devices",
        "Thermal Forming",
      ],
    },
  ];

  const redBarStyle = {
    width: "30px",
    height: "5px",
    background: "#a92738",
    marginBottom: "12px",
  };

  const sectionTitleStyle = {
    color: "#a92738",
    fontSize: isMobile ? "13px" : "16px",
    fontWeight: "700",
    lineHeight: 1.3,
    margin: "0 0 10px",
  };

  const topicListStyle = {
    paddingLeft: "16px",
    margin: 0,
    color: "#333333",
    fontSize: isMobile ? "11px" : "13px",
    lineHeight: 1.5,
  };

  return (
    <div
      style={{
        padding: isMobile ? "20px 15px" : "35px",
        background: "#e6e6ea",
        minHeight: "100vh",
        boxSizing: "border-box",
        fontFamily: "Arial, sans-serif",
      }}
    >
      {/* PAGE HEADING */}
      <div
        style={{
          display: "flex",
          alignItems: "center",
          marginBottom: "25px",
        }}
      >
        <div
          style={{
            width: "5px",
            height: "22px",
            background: "#c62828",
            marginRight: "10px",
            flexShrink: 0,
          }}
        />

        <h2
          style={{
            margin: 0,
            fontSize: isMobile ? "22px" : "26px",
            fontWeight: "bold",
            color: "#000000",
            letterSpacing: "0.5px",
            lineHeight: 1.4,
          }}
        >
          CALL FOR PAPERS
        </h2>
      </div>

      {/* WHITE CONTENT CARD */}
      <div
        style={{
          background: "#ffffff",
          border: "1px solid #dddddd",
          borderRadius: "10px",
          padding: isMobile ? "20px" : "35px",
          boxSizing: "border-box",
          boxShadow: "0 2px 8px rgba(0,0,0,0.08)",
          color: "#333333",
        }}
      >
        {/* INTRODUCTION */}
        <p
          style={{
            margin: "0 0 30px",
            fontSize: isMobile ? "12px" : "14px",
            lineHeight: 1.6,
          }}
        >
          Authors are solicited to contribute to the conference
          by submitting high-quality unpublished review or
          research articles and industrial experiences that
          describe significant advances in the fields of
          following tracks, but are not limited to:
        </p>

        {/* FIRST TWO COLUMNS */}
        <div
          style={{
            display: "grid",
            gridTemplateColumns: isMobile
              ? "1fr"
              : "repeat(2, minmax(0, 1fr))",
            columnGap: isMobile ? "25px" : "45px",
            rowGap: "30px",
            alignItems: "start",
          }}
        >
          {topics.slice(0, 2).map((topic) => (
            <div key={topic.title}>
              <div style={redBarStyle} />

              <h3 style={sectionTitleStyle}>
                {topic.title}
              </h3>

              <ul style={topicListStyle}>
                {topic.items.map((item) => (
                  <li key={item} style={{ marginBottom: "3px" }}>
                    {item}
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>

        {/* BOTTOM SECTION */}
        <div style={{ marginTop: "35px" }}>
          <div style={redBarStyle} />

          <h3 style={sectionTitleStyle}>
            {topics[2].title}
          </h3>

          <div
            style={{
              display: "grid",
              gridTemplateColumns: isMobile
                ? "1fr"
                : "repeat(2, minmax(0, 1fr))",
              columnGap: isMobile ? "25px" : "45px",
              alignItems: "start",
            }}
          >
            <ul style={topicListStyle}>
              {topics[2].items.slice(0, 7).map((item) => (
                <li key={item} style={{ marginBottom: "5px" }}>
                  {item}
                </li>
              ))}
            </ul>

            <ul style={topicListStyle}>
              {topics[2].items.slice(7).map((item) => (
                <li key={item} style={{ marginBottom: "5px" }}>
                  {item}
                </li>
              ))}
            </ul>
          </div>
        </div>
      </div>
    </div>
  );
}

export default CallForPapers;
