
import React from "react";

export default function Committees() {
  const isMobile = window.innerWidth <= 768;

  const committees = [
    "International Advisory Committee",
    "National Advisory Committee",
    "Organizing Committee",
  ];

  const internationalMembers = [
    { no: 1, name: "Dr. Emrah Turan", designation: "Professor", department: "School of Machining Technology, Darmstadt University of Technology", country: "Germany" },
    { no: 2, name: "Dr. Christophe Lescalier", designation: "Professor", department: "National School of Arts and Crafts ENSAM-Laboratory for the Study of Microstructures and Mechanics of Materials", country: "France" },
    { no: 3, name: "Dr. Jun Peng", designation: "Professor", department: "School of Engineering, College of Health and Science, University of Lincoln", country: "UK" },
    { no: 4, name: "Dr. Guolong Zhao", designation: "Associate", department: "College of Mechanical Engineering, Nanjing University", country: "China" },
    { no: 5, name: "Dr. V. Vasudeva Rao", designation: "Professor", department: "Mechanical and Industrial Engineering, University of South Africa", country: "South Africa" },
    { no: 6, name: "Dr. Apurv Kumar", designation: "Senior Lecturer", department: "Mechanical Engineering, Federation University", country: "Australia" },
    { no: 7, name: "Dr. Krishna Pakala", designation: "Associate", department: "Mechanical and Biomedical Engineering, Boise State University", country: "USA" },
    { no: 8, name: "Dr. Rama Raju Ramgopal", designation: "Associate", department: "Mechanical Engineering, University of Toronto", country: "Canada" },
    { no: 9, name: "Dr. Rama Rao Karri", designation: "Professor", department: "Faculty of Engineering, Universiti Teknologi Brunei", country: "Brunei Darussalam" },
    { no: 10, name: "Dr. Asma Perveen", designation: "Associate", department: "Nazarbayev University, Kazakhstan; Hybrid Machining Processes", country: "Kazakhstan" },
    { no: 11, name: "Dr. Okokpujie Imhade Prin", designation: "Senior Lecturer", department: "Afe Babalola University, Nigeria; Design and Production", country: "Nigeria" },
    { no: 12, name: "A. Nagendra Krishna", designation: "Senior Engineer", department: "Mechanical Maintenance Department", country: "Jordan" },
    { no: 13, name: "Dr. Ho Seok Ahn", designation: "Professor", department: "Department of Electrical, Computer and Software Engineering", country: "New Zealand" },
    { no: 14, name: "Redwan Ferdous", designation: "Ex-Com member", department: "Bangladesh Open Source Network", country: "Bangladesh" },
    { no: 15, name: "Mr Samuel Milton", designation: "Research Executive", department: "Sandvik Tooling, France", country: "France" },
    { no: 16, name: "Dr. Apurv Kumar", designation: "Senior Lecturer", department: "School of Civil & Mechanical Engineering", country: "Western Australia" },
    { no: 17, name: "Dr. Pruvireddy Paresi", designation: "Lecturer", department: "Higher Colleges of Technology, ADA, BaniYas North, Abu Dhabi, UAE", country: "Abu Dhabi - United Arab Emirates" },
  ];

  const nationalMembers = [
    { no: 1, name: "Dr. Som shekhar S. Hiremath", designation: "Professor", department: "Mechanical Engineering, Indian Institute of Technology Madras" },
    { no: 2, name: "Dr. Surya Kumar S.", designation: "Professor", department: "Mechanical & Aerospace Engineering, Indian Institute of Technology Hyderabad" },
    { no: 3, name: "Dr. D. Chakradhar", designation: "Associate Professor", department: "Mechanical Engineering, Indian Institute of Technology Palakkad" },
    { no: 4, name: "Dr. K. Ravi Kumar", designation: "Associate Professor", department: "Energy Science and Engineering, Indian Institute of Technology Delhi" },
    { no: 5, name: "Dr. P. Banagaru Babu", designation: "Professor", department: "Mechanical Engineering, National Institute of Technology Warangal" },
    { no: 6, name: "Dr. Ram Naresh Rai", designation: "Professor", department: "Production Engineering, National Institute of Technology Agartala" },
    { no: 7, name: "Dr. Abhishek Paul", designation: "Associate Professor", department: "Mechanical Engineering, National Institute of Technology Silchar" },
    { no: 8, name: "Dr. Anil Kumar", designation: "Associate Professor", department: "Mechanical Engineering, Delhi Technological University, Delhi" },
    { no: 9, name: "Dr. L. Siva Rama Krishna", designation: "Professor", department: "Mechanical Engineering, Osmania University, Hyderabad" },
    { no: 10, name: "Dr. Panitanu Bhamara", designation: "Professor", department: "Mechanical Engineering, Jawaharlal Nehru Technological University Hyderabad" },
    { no: 11, name: "Dr. M. L. S. Deva Kumar", designation: "Professor", department: "Mechanical Engineering, Jawaharlal Nehru Technological University Anantapur" },
    { no: 12, name: "Dr. Phaneendra Kiran Ch", designation: "Professor", department: "Mechanical Engineering, Birla Institute of Technology & Science Pilani, Hyderabad" },
    { no: 13, name: "Dr. Swagatika Mohanty", designation: "Associate Professor", department: "Mechanical Engineering, Vellore Institute of Technology, Vellore" },
    { no: 14, name: "Dr. B. Nageswara Rao", designation: "Professor", department: "Mechanical Engineering, Koneru Lakshmaiah Education Foundation, Guntur" },
    { no: 15, name: "Dr. Rajesh Purohit", designation: "Professor", department: "Maulana Azad National Institute of Technology, Bhopal" },
    { no: 16, name: "Dr. M. L. S. Deva Kumar", designation: "Senior Professor", department: "Department of Mechanical Engineering, Jawaharlal Nehru Technological University Anantapur" },
    { no: 17, name: "Dr. Vutukuru Ravindra", designation: "Assistant Professor", department: "Centre for Rural Development and Innovative Sustainable Technology, Indian Institute of Technology Kharagpur, Kharagpur, India" },
    { no: 18, name: "Dr. A. Veeresh Babu", designation: "Professor", department: "Department of Mechanical Engineering, National Institute of Technology Warangal" },
    { no: 19, name: "Dr. V. Mariappan", designation: "Associate Professor", department: "Department of Mechanical Engineering, National Institute of Technology Tiruchirappalli" },
    { no: 20, name: "Dr. B. Bala Krishna", designation: "Senior Professor", department: "Department of Mechanical Engineering, Jawaharlal Nehru Technological University Kakinada" },
    { no: 21, name: "Dr. Santosh Kumar Gugulothu", designation: "Assistant Professor, HOD", department: "Department of Mechanical Engineering, National Institute of Technology Andhra Pradesh" },
    { no: 22, name: "Shubham Goyal", designation: "Sourcing Engineer, Strategic Sourcing & SRM", department: "Aramco Asia India Pvt. Ltd." },
    { no: 23, name: "Tapas Kumar Moharana", designation: "Curator 'E'", department: "Nehru Science Centre, A Unit of NCSM - Ministry of Culture, Govt. of India" },
    { no: 24, name: "Prof. Jayakumar KV", designation: "Senior Adjunct Professor and Outreach Advisor, IIT Dharwad", department: "IIT Dharwad & President, Wetlands International South Asia (WISA)" },
    { no: 25, name: "Dr. D. Ravi Kumar", designation: "Professor", department: "Department of Mechanical Engineering, IIT Delhi" },
    { no: 26, name: "Dr. P. Parthibhan", designation: "Associate Professor & Head", department: "Department of Production Engineering, NIT Tiruchirappalli" },
    { no: 27, name: "Dr. Sri Harsha Dorapudi", designation: "Assistant Professor", department: "Operations, Supply Chain & Logistics, IIM Jammu" },
    { no: 28, name: "Rajat Kumar", designation: "Manager - Public Affairs", department: "Aramco Asia India Pvt. Ltd." },
    { no: 29, name: "Dr. Nitin Muttil", designation: "Professor and Associate Dean", department: "School of Advanced Engineering, UPES, Uttarakhand 248007, India" },
    { no: 30, name: "Prof. Anil Kumar", designation: "Professor", department: "Mechanical Engineering, Delhi Technological University (DTU), Delhi" },
    { no: 31, name: "Dr. K. Ravi Kumar", designation: "Associate Professor", department: "Department of Energy Science and Engineering, IIT Delhi, IIT Abu Dhabi" },
    { no: 32, name: "Prof. Veershetty Guntapure", designation: "Professor", department: "Department of Mechanical Engineering, NIT Karnataka, Surathkal" },
    { no: 33, name: "Dr. K. Mahesh", designation: "Associate Dean, Assistant Professor", department: "Department of Mechanical Engineering, RGUKT Basar" },
    { no: 34, name: "Harikrishna Gadilli", designation: "Senior Manager", department: "Bharat Heavy Electricals Limited, Hyderabad" },
  ];

  const organizingMembers = [
    { no: 1, committee: "GENERAL CHAIR", name: "Dr. K. Srinivasa Chalapathi", designation: "Associate Professor, ME & Associate Dean - School of Engineering" },
    { no: 2, committee: "PROGRAM CHAIR", name: "Dr. Md. Sikindar Baba", designation: "Professor, ME & Controller of Examinations" },
    { no: 3, committee: "CONVENER", name: "Dr. T. Krishnaiah", designation: "Professor & Head ME" },
    { no: 4, committee: "CO-CONVENERS", name: "Dr. N. Madan Mohan Reddy", designation: "Associate Professor & Associate Director, Innovations" },
    { no: 5, committee: "CO-CONVENERS", name: "Dr. P. Saritha", designation: "Associate Professor" },
    { no: 6, committee: "SPONSORSHIP COMMITTEE", name: "Dr. D. Pratibha", designation: "Assistant Professor" },
    { no: 7, committee: "SPONSORSHIP COMMITTEE", name: "Dr. A. Neeraja", designation: "Assistant Professor" },
    { no: 8, committee: "SPONSORSHIP COMMITTEE", name: "Mr. G. Arun Reddy", designation: "Assistant Professor" },
    { no: 9, committee: "PUBLICATION COMMITTEE", name: "Dr. S. Naga Kishore", designation: "Assistant Professor" },
    { no: 10, committee: "PUBLICATION COMMITTEE", name: "Dr. V. Srikanth", designation: "Assistant Professor" },
    { no: 11, committee: "PUBLICATION COMMITTEE", name: "Dr. C. Sravanthi", designation: "Assistant Professor" },
    { no: 12, committee: "INTERNATIONAL PUBLICITY COMMITTEE", name: "Dr. P. Vishwanath Kumar", designation: "Associate Professor" },
    { no: 13, committee: "INTERNATIONAL PUBLICITY COMMITTEE", name: "Dr. B. P. Maddilety", designation: "Assistant Professor" },
    { no: 14, committee: "INTERNATIONAL PUBLICITY COMMITTEE", name: "Dr. A. Muni Tanuja", designation: "Assistant Professor" },
    { no: 15, committee: "NATIONAL PUBLICITY COMMITTEE", name: "Dr. M. Rajkumar Reddy", designation: "Assistant Professor" },
    { no: 16, committee: "NATIONAL PUBLICITY COMMITTEE", name: "Dr. L. Srinivas Naik", designation: "Assistant Professor" },
    { no: 17, committee: "NATIONAL PUBLICITY COMMITTEE", name: "Dr. R. Naresh Kumar Goud", designation: "Assistant Professor" },
    { no: 18, committee: "DESIGN & PRINTING COMMITTEE", name: "Dr. Jush Kumar Siddani", designation: "Assistant Professor" },
    { no: 19, committee: "DESIGN & PRINTING COMMITTEE", name: "Dr. E. Sadanadam", designation: "Assistant Professor" },
    { no: 20, committee: "DESIGN & PRINTING COMMITTEE", name: "Dr. D. Sruthi Keerthi", designation: "Assistant Professor" },
    { no: 21, committee: "DESIGN & PRINTING COMMITTEE", name: "Mr. A. Suresh", designation: "Assistant Professor" },
    { no: 22, committee: "DESIGN & PRINTING COMMITTEE", name: "Mr. K. Saidulu", designation: "Assistant Professor" },
    { no: 23, committee: "WEBSITE COMMITTEE", name: "Dr. M. Harish", designation: "Assistant Professor" },
    { no: 24, committee: "WEBSITE COMMITTEE", name: "Mr. K. Srinivasulu", designation: "Assistant Professor" },
    { no: 25, committee: "WEBSITE COMMITTEE", name: "Mr. K. Shravan Kumar", designation: "Assistant Professor" },
    { no: 26, committee: "TRANSPORTATION & ACCOMMODATION COMMITTEE", name: "Dr. M. B. Venkata Ramana Reddy", designation: "Associate Professor" },
    { no: 27, committee: "TRANSPORTATION & ACCOMMODATION COMMITTEE", name: "Dr. T. Purushotham", designation: "Assistant Professor" },
    { no: 28, committee: "TRANSPORTATION & ACCOMMODATION COMMITTEE", name: "Mr. G. Ch. Gangarao", designation: "Assistant Professor" },
    { no: 29, committee: "REGISTRATION COMMITTEE", name: "Mr. T. Naga Ravikanth", designation: "Assistant Professor" },
    { no: 30, committee: "REGISTRATION COMMITTEE", name: "Mr. K. Sandeep Kumar", designation: "Assistant Professor" },
    { no: 31, committee: "REGISTRATION COMMITTEE", name: "Mrs. M. Sireesha", designation: "Assistant Professor" },
    { no: 32, committee: "STAGE COMMITTEE", name: "Mr. H. Ameresh", designation: "Assistant Professor" },
    { no: 33, committee: "STAGE COMMITTEE", name: "Mr. Mohan Krishna", designation: "Assistant Professor" },
    { no: 34, committee: "STAGE COMMITTEE", name: "Mr. M. Mahesh", designation: "Teaching Assistant" },
    { no: 35, committee: "HOSPITALITY COMMITTEE", name: "Dr. Sk. Shaheda", designation: "Assistant Professor" },
    { no: 36, committee: "HOSPITALITY COMMITTEE", name: "Mr. P. Chinna Srinivasa Rao", designation: "Assistant Professor" },
  ];

  const redBarStyle = {
    width: "5px",
    height: "22px",
    background: "#c62828",
    marginRight: "10px",
    flexShrink: 0,
  };

  const cardStyle = {
    background: "#ffffff",
    border: "1px solid #dddddd",
    borderLeft: "5px solid #c62828",
    borderRadius: "10px",
    padding: isMobile ? "16px" : "22px",
    boxShadow: "0 2px 8px rgba(0,0,0,0.07)",
    boxSizing: "border-box",
    minWidth: 0,
    overflowWrap: "anywhere",
  };

  const labelStyle = {
    fontSize: "12px",
    fontWeight: "bold",
    color: "#666666",
    margin: "0 0 4px",
    textTransform: "uppercase",
    letterSpacing: "0.4px",
  };

  const valueStyle = {
    fontSize: isMobile ? "13px" : "15px",
    color: "#222222",
    lineHeight: 1.6,
    margin: "0 0 13px",
    overflowWrap: "anywhere",
  };

  return (
    <div
      style={{
        padding: isMobile ? "20px 12px" : "35px",
        background: "#e6e6ea",
        minHeight: "100vh",
        boxSizing: "border-box",
      }}
    >
      {committees.map((title, index) => {
        const data =
          index === 0
            ? internationalMembers
            : index === 1
            ? nationalMembers
            : organizingMembers;

        return (
          <section
            key={title}
            style={{ marginBottom: "35px" }}
          >
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
                  fontSize: isMobile ? "18px" : "26px",
                  fontWeight: "bold",
                  letterSpacing: "0.5px",
                  textTransform: "uppercase",
                  color: "#000000",
                  lineHeight: 1.4,
                }}
              >
                {title}
              </h2>
            </div>

            <div
              style={{
                background: "#ffffff",
                border: "1px solid #dddddd",
                borderRadius: "10px",
                padding: isMobile ? "12px" : "24px",
                boxShadow: "0 2px 8px rgba(0,0,0,0.08)",
                boxSizing: "border-box",
                width: "100%",
              }}
            >
              <div
                style={{
                  display: "grid",
                  gridTemplateColumns: isMobile
                    ? "minmax(0, 1fr)"
                    : "repeat(2, minmax(0, 1fr))",
                  gap: isMobile ? "14px" : "20px",
                }}
              >
                {data.map((member) => (
                  <article
                    key={`${index}-${member.no}`}
                    style={cardStyle}
                  >
                    <p
                      style={{
                        margin: "0 0 8px",
                        color: "#c62828",
                        fontSize: "12px",
                        fontWeight: "bold",
                      }}
                    >
                      MEMBER {member.no}
                    </p>

                    {index === 2 && (
                      <p
                        style={{
                          display: "inline-block",
                          background: "#f8e8e8",
                          color: "#a51e27",
                          borderRadius: "5px",
                          padding: "5px 9px",
                          margin: "0 0 12px",
                          fontSize: "11px",
                          fontWeight: "bold",
                          lineHeight: 1.5,
                        }}
                      >
                        {member.committee}
                      </p>
                    )}

                    <h3
                      style={{
                        color: "#073b73",
                        fontSize: isMobile ? "17px" : "20px",
                        lineHeight: 1.4,
                        margin: "0 0 16px",
                        overflowWrap: "anywhere",
                      }}
                    >
                      {member.name}
                    </h3>

                    {member.department && (
                      <>
                        <p style={labelStyle}>
                          Department / Institution
                        </p>
                        <p style={valueStyle}>
                          {member.department}
                        </p>
                      </>
                    )}

                    {member.country && (
                      <>
                        <p style={labelStyle}>Country</p>
                        <p
                          style={{
                            ...valueStyle,
                            marginBottom: 0,
                          }}
                        >
                          {member.country}
                        </p>
                      </>
                    )}
                  </article>
                ))}
              </div>
            </div>
          </section>
        );
      })}
    </div>
  );
}
