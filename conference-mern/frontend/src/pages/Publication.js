export default function Publication() {
  const isMobile = window.innerWidth <= 768;

  const cardStyle = {
    background: "#ffffff",
    padding: isMobile ? "15px" : "22px",
    borderRadius: "10px",
    boxShadow: "0 2px 8px rgba(0,0,0,0.08)",
    lineHeight: "1.6",
    boxSizing: "border-box",
    width: "100%",
  };

  const SectionTitle = ({ children }) => (
    <div
      style={{
        display: "flex",
        alignItems: "center",
        marginBottom: "18px",
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
          fontSize: isMobile ? "18px" : "26px",
          letterSpacing: "0.5px",
        }}
      >
        {children}
      </h2>
    </div>
  );

  const steps = [
    {
      title: "AUTHOR SUBMITTED PAPER",
      description: "Paper submitted to ICIFMEDE.",
      color: "#65a943",
    },
    {
      title: "STEP 1 — INITIAL REVIEW",
      description:
        "The Conference Editor checks the conference template, presentation quality, and plagiarism (18% or less).",
    },
    {
      title: "STEP 2 — TECHNICAL REVIEW",
      description:
        "A Paper ID is assigned. The paper is sent to a minimum of two reviewers for a single-blind review.",
    },
    {
      title: "STEP 3 — REVIEWER DECISIONS",
      description:
        "Reviewers provide comments and one of four decisions: Accepted as it is, Accepted with Minor Changes, Accepted with Major Changes, or Rejected with Comments.",
    },
    {
      title: "STEP 4 — REGISTRATION & REVISION",
      description:
        "Accepted papers proceed to registration. Papers requiring minor or major changes are revised and sent back to reviewers before acceptance and registration.",
    },
    {
      title: "STEP 5 — COPYRIGHT SUBMISSION",
      description:
        "The author submits the copyright form for the final accepted paper along with the conference registration fee.",
    },
    {
      title: "FINAL PUBLICATION",
      description:
        "ICIFMEDE conference article published in Conference Proceedings with Scopus indexing, as stated in the supplied review procedure.",
      color: "#f5b900",
    },
  ];

  const flowCardStyle = {
    width: "100%",
    maxWidth: "700px",
    padding: isMobile ? "12px" : "17px 22px",
    borderRadius: "9px",
    background: "#3568bf",
    color: "#ffffff",
    boxShadow: "0 2px 6px rgba(0,0,0,0.12)",
    textAlign: "center",
    boxSizing: "border-box",
  };

  return (
    <div
      style={{
        padding: isMobile ? "25px 15px" : "35px",
        background: "#e6e6ea",
        minHeight: "100vh",
        boxSizing: "border-box",
      }}
    >
      {/* PUBLICATION */}
      <SectionTitle>PUBLICATION</SectionTitle>

      <div style={cardStyle}>
       
<p
  style={{
    fontSize: isMobile ? "12px" : "15px",
    margin: 0,
  }}
>
  All accepted papers for the conference will be published in{" "}
  <strong>Scopus-indexed Conference Proceedings.</strong>
</p>

{/* 
        <p
          style={{
            fontSize: isMobile ? "12px" : "15px",
            margin: 0,
          }}
        >
          Selected abstracts may be included in the conference
          souvenir with ISBN.
        </p> */}
      </div>

      {/* PUBLICATION PARTNER */}
      <div style={{ marginTop: "45px" }}>
        <SectionTitle>PUBLICATION PARTNER</SectionTitle>

        <div
          style={{
            ...cardStyle,
            minHeight: "80px",
            display: "flex",
            justifyContent: "center",
            alignItems: "center",
          }}
        >
          <p
            style={{
              fontSize: isMobile ? "16px" : "20px",
              fontWeight: "bold",
              color: "#102f50",
              margin: 0,
              textAlign: "center",
            }}
          >
            In progress
          </p>
        </div>
      </div>

      {/* PUBLICATION PEER REVIEW */}
      <div style={{ marginTop: "45px" }}>
        <SectionTitle>PUBLICATION PEER REVIEW</SectionTitle>

        <div
          style={{
            ...cardStyle,
            padding: isMobile ? "20px 10px" : "30px 20px",
            display: "flex",
            flexDirection: "column",
            alignItems: "center",
          }}
        >
          {steps.map((step, index) => (
            <div
              key={step.title}
              style={{
                width: "100%",
                display: "flex",
                flexDirection: "column",
                alignItems: "center",
              }}
            >
              {/* FLOWCHART BOX */}
              <div
                style={{
                  ...flowCardStyle,
                  background: step.color || "#3568bf",
                  color:
                    step.color === "#f5b900" ? "#102f50" : "#ffffff",
                  borderRadius:
                    index === 0 || index === steps.length - 1
                      ? "30px"
                      : "9px",
                  border:
                    index === steps.length - 1
                      ? "2px solid #102f50"
                      : "none",
                }}
              >
                <h3
                  style={{
                    margin: "0 0 5px",
                    fontSize: isMobile ? "12px" : "15px",
                    lineHeight: 1.4,
                  }}
                >
                  {step.title}
                </h3>

                <p
                  style={{
                    margin: 0,
                    fontSize: isMobile ? "11px" : "13px",
                    lineHeight: 1.6,
                  }}
                >
                  {step.description}
                </p>
              </div>

              {/* CONNECTING ARROW */}
              {index < steps.length - 1 && (
                <div
                  style={{
                    height: isMobile ? "28px" : "35px",
                    width: "3px",
                    background: "#102f50",
                    position: "relative",
                  }}
                >
                  <div
                    style={{
                      position: "absolute",
                      bottom: "-1px",
                      left: "50%",
                      transform: "translateX(-50%)",
                      width: 0,
                      height: 0,
                      borderLeft: "7px solid transparent",
                      borderRight: "7px solid transparent",
                      borderTop: "9px solid #102f50",
                    }}
                  />
                </div>
              )}
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}