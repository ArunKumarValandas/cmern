

export default function Commitees() {

  const isMobile = window.innerWidth <= 768;
  const isTablet = window.innerWidth <= 1024;

  // 🔹 ADD / EDIT DATA HERE ONLY

  const committees = [
    {
      title: "CHIEF PATRONS",
      withPhoto: true,
      members: [
        {
          name: "Dr. P. Rajeshwar Reddy",
          photo: "https://anurag.edu.in/wp-content/uploads/2023/02/Dr.-P.-Rajeshwar-Reddy.jpg",
    
        
          
          details: [
            "Chairman, Anurag Group",
            "MLA Jangaon constituency, Telangana",
          ],
        },
        {
          name: "Prof. U. B. Desai",
          photo: "https://anurag.edu.in/wp-content/uploads/2023/02/U.-B.-Desai.jpg",
          details: ["Chancellor, Anurag University"],
        },
        {
          name: "Mrs. S. Neelima",
          photo: "https://anurag.edu.in/wp-content/uploads/2023/02/S.-Neelima.jpg",
          details: ["CEO, Anurag University"],
        },
      ],
    },

    {
      title: "PATRONS",
      withPhoto: true,
      members: [
        {
          name: "Dr. Archana Mantri",
          photo: "https://www.chitkara.edu.in/wp-content/uploads/2022/07/Dr-Archana-Mantri.jpg",
          details: ["Vice Chancellor, Anurag University"],
        },
        {
          name: "Dr. Balaji Utla",
          photo: "https://ehealth.eletsonline.com/wp-content/uploads/2015/08/Dr-Balaji-Utla.jpg",
          details: ["Registrar, Anurag University"],
        },
      ],
    },

    {
      title: "LEADERSHIP COMMITTEE",
      withPhoto: true,
      members: [
        {
          name: "Dr. K. Srinivasa Chalapathi",
          photo: "https://anurag.edu.in/wp-content/uploads/2023/06/Mr.-K.-SRINIVASA-CHALAPATHI-2048x2048.jpg",
          details: [
            "GENERAL CHAIR",
            "Associate Professor & Head, Mechanical Engineering",
            "I/c Director, Foreign Relations Office",
          ],
        },
        {
          name: "Dr. S. Madhu",
          photo: "https://anurag.edu.in/wp-content/uploads/2023/02/Dr.-S.-MADHU.png",
          details: [
            "PROGRAM CHAIR",
            "Professor, Mechanical Engineering",
            "Director, Anurag Centre for Educational Innovations",
          ],
        },
        {
          name: "Dr. Md. Sikindar Baba",
          photo: "https://anurag.edu.in/wp-content/uploads/2023/03/Md.Sikindar-Baba.jpg",
          details: [
            "CONVENER",
            "Associate Professor, Mechanical Engineering",
            "Controller of Examinations",
          ],
        },
        {
          name: "Dr. T. Krishnaiah",
          photo: "https://anurag.edu.in/wp-content/uploads/2023/06/Dr.-T.-KRISHNAIAH-2048x2048.jpg",
          details: [
            "CO-CONVENER",
            "Associate Professor, Mechanical Engineering",
          ],
        },
      ],
    },

    {
      title: "EXECUTIVE COMMITTEES",
      withPhoto: true,
      members: [
        {
          name: "Dr. S. Madhu",
          photo: "https://anurag.edu.in/wp-content/uploads/2023/02/Dr.-S.-MADHU.png",
          details: ["Chair – Sponsorship Committee"],
        },
        {
          name: "Dr. T. Krishnaiah",
          photo: "https://anurag.edu.in/wp-content/uploads/2023/06/Dr.-T.-KRISHNAIAH-2048x2048.jpg",
          details: ["Chair – Organizing Committee"],
        },
        {
          name: "Dr. N. Madan Mohan Reddy",
          photo: "https://anurag.edu.in/wp-content/uploads/2023/06/Dr.-N.-MADAN-MOHAN-REDDY.jpg",
          details: ["Chair – Publication Committee"],
        },
      ],
    },

    {
      title: "ORGANISING COMMITTEE",
      withPhoto: true,
      members: [
        { name: "Dr. S. Naga Kishore", photo: "https://media.licdn.com/dms/image/v2/D5603AQFARvBOu-pejg/profile-displayphoto-shrink_200_200/profile-displayphoto-shrink_200_200/0/1726593561164?e=2147483647&v=beta&t=NlnKsL7rRJvVOL-wp21djRwvG9TnKko8rIe9Bt3u6PU", details: ["Assistant Professor, Mechanical Engineering"] },
        { name: "Dr. B. P. Maddilety", photo: "https://media.licdn.com/dms/image/v2/D5603AQGigmw98cN6KA/profile-displayphoto-shrink_400_400/profile-displayphoto-shrink_400_400/0/1680681710170?e=1770854400&v=beta&t=OSRnz2OTG0taeJJz2Qjshdg5lFB7a0k9RB1cdF_3w7k", details: ["Assistant Professor, Mechanical Engineering"] },
        { name: "Mr. L. S. Naik", photo: "https://rsis.international/wp-content/uploads/2025/12/1000160009-69421711721ac-scaled.jpg", details: ["Assistant Professor, Mechanical Engineering"] },
        { name: "Mrs. A. Neeraja", photo: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQwiQTvlzQLZi7aD-rg7gBeQuD3ISdK7T-HkA&s", details: ["Assistant Professor, Mechanical Engineering"] },
        { name: "Mr. H. Ameresh", photo: "https://media.licdn.com/dms/image/v2/C5603AQFiI-Up9cHsUQ/profile-displayphoto-shrink_400_400/profile-displayphoto-shrink_400_400/0/1598242937296?e=1770854400&v=beta&t=zp4XTfwcJuKabLvctr9mhnqfPRaOpjOsFaPa5UFxyN8", details: ["Assistant Professor, Mechanical Engineering"] },
        { name: "Mr. M. Harish", photo: "https://media.licdn.com/dms/image/v2/C5603AQHxy13im1r6rw/profile-displayphoto-shrink_400_400/profile-displayphoto-shrink_400_400/0/1517360659804?e=1770854400&v=beta&t=jdbmHUoopwQOfjNkwVumB2Wk_n86JcWd1iV6E3RHx3U", details: ["Assistant Professor, Mechanical Engineering"] },
      ],
    },

    {
      title: "INTERNATIONAL ADVISORY BOARD",
      withPhoto: false,
      members: [
        { name: "Dr. Emrah Turan", details: ["Professor, Darmstadt University of Technology, Germany"] },
        { name: "Dr. Christophe Lescalier", details: ["Professor, ENSAM (LEM3), France"] },
        { name: "Dr. Jun Peng", details: ["Professor, University of Lincoln, UK"] },
        { name: "Dr. Guolong Zhao", details: ["Associate Professor, Nanjing University, China"] },
        { name: "Dr. V. Vasudeva Rao", details: ["Professor, University of South Africa"] },
        { name: "Dr. Apurv Kumar", details: ["Senior Lecturer, Federation University, Australia"] },
        { name: "Dr. Krishna Pakala", details: ["Associate Professor, Boise State University, USA"] },
        { name: "Dr. Rama Raju Ramgopal Varma", details: ["Associate Professor, University of Toronto, Canada"] },
        { name: "Dr. Rama Rao Karri", details: ["Professor, Universiti Teknologi, Brunei"] },
      ],
    },

    {
      title: "NATIONAL ADVISORY BOARD",
      withPhoto: false,
      members: [
        { name: "Dr. Somashekhar S. Hiremath", details: ["Professor, IIT Madras"] },
        { name: "Dr. Surya Kumar S", details: ["Professor, IIT Hyderabad"] },
        { name: "Dr. D. Chakradhar", details: ["Associate Professor, IIT Palakkad"] },
        { name: "Dr. K. Ravi Kumar", details: ["Associate Professor, IIT Delhi"] },
        { name: "Dr. P. Bangaru Babu", details: ["Professor, NIT Warangal"] },
        { name: "Dr. Ram Naresh Rai", details: ["Professor, NIT Agartala"] },
        { name: "Dr. Abhishek Paul", details: ["Associate Professor, NIT Silchar"] },
        { name: "Dr. Anil Kumar", details: ["Associate Professor, DTU Delhi"] },
        { name: "Dr. L. Siva Rama Krishna", details: ["Professor, Osmania University"] },
        { name: "Dr. Panitapu Bhramara", details: ["Professor, JNTUH"] },
        { name: "Dr. M. L. S. Deva Kumar", details: ["Professor, JNTU Anantapur"] },
        { name: "Dr. Phaneendra Kiran Chaganti", details: ["Professor, BITS Hyderabad"] },
        { name: "Dr. Swagatika Mohanty", details: ["Associate Professor, VIT Vellore"] },
        { name: "Dr. B. Nageswara Rao", details: ["Professor, KLEF Guntur"] },
      ],
    },
  ];

//   return (
//     <div style={{ padding: "50px", background: "#e6e6ea", minHeight: "100vh" }}>
//       {committees.map((section, index) => (
//         <div key={index} style={{ marginBottom: "50px" }}>
//           {/* SECTION TITLE */}
//           <div style={{ display: "flex", alignItems: "center", marginBottom: "25px" }}>
//             <div style={{ width: "8px", height: "22px", background: "#c62828", marginRight: "10px" }} />
//             <h3 style={{ margin: 0, color: "black" ,fontSize:"23px"}}>{section.title}</h3>
//           </div>

//           {/* GRID */}
//           <div
//             style={{
//               display: "grid",
//               gridTemplateColumns: "repeat(3, 1fr)",
//               gap: "30px",
//             }}
//           >
//             {section.members.map((member, i) => (
//               <div
//                 key={i}
//                 style={{
//                   display: "flex",
//                   gap: "15px",
//                   background: "#fff",
//                   padding: "15px",
//                   borderRadius: "6px",
//                 }}
//               >
//                 {section.withPhoto && (
//                   member.photo ? (
//                     <img src={member.photo} alt={member.name}
//                       style={{ width: "120px", height: "150px", objectFit: "cover", borderRadius: "6px" }} />
//                   ) : (
//                     <div style={{ width: "120px", height: "150px", background: "#ccc", borderRadius: "6px" }} />
//                   )
//                 )}

//                 <div>
//                   <strong>{member.name}</strong>
//                   {member.details.map((line, j) => (
//                     <p key={j} style={{ margin: "4px 0" }}>{line}</p>
//                   ))}
//                 </div>
//               </div>
//             ))}
//           </div>
//         </div>
//       ))}
//     </div>
//   );
// }


return (
  <div
    style={{
      padding: isMobile ? "20px 15px" : "50px",
      background: "#e6e6ea",
      minHeight: "100vh",
    }}
  >
    {committees.map((section, index) => (
      <div
        key={index}
        style={{
          marginBottom: isMobile ? "35px" : "50px",
        }}
      >
        {/* SECTION TITLE */}

        <div
          style={{
            display: "flex",
            alignItems: "center",
            flexWrap: "wrap",
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

          <h3
            style={{
              margin: 0,
              color: "black",
              fontSize: isMobile ? "22px" : "30px",
              lineHeight: "1.3",
            }}
          >
            {section.title}
          </h3>
        </div>

        {/* GRID */}

        <div
          style={{
            display: "grid",
            gridTemplateColumns: isMobile
              ? "1fr"
              : isTablet
              ? "repeat(2, 1fr)"
              : "repeat(3, 1fr)",
            gap: "25px",
          }}
        >
          {section.members.map((member, i) => (
                          <div
                key={i}
                style={{
                  display: "flex",
                  flexDirection: isMobile ? "column" : "row",
                  alignItems: isMobile ? "center" : "flex-start",
                  textAlign: isMobile ? "center" : "left",
                  gap: "18px",
                  background: "#fff",
                  padding: "20px",
                  borderRadius: "10px",
                  boxShadow: "0 2px 8px rgba(0,0,0,0.08)",
                }}
              >
                {section.withPhoto &&
                  (member.photo ? (
                    <img
                      src={member.photo}
                      alt={member.name}
                      style={{
                        width: isMobile ? "160px" : "120px",
                        height: isMobile ? "200px" : "150px",
                        objectFit: "cover",
                        borderRadius: "8px",
                        flexShrink: 0,
                      }}
                    />
                  ) : (
                    <div
                      style={{
                        width: isMobile ? "160px" : "120px",
                        height: isMobile ? "200px" : "150px",
                        background: "#ccc",
                        borderRadius: "8px",
                      }}
                    />
                  ))}

                <div style={{ flex: 1 }}>
                  <strong
                    style={{
                      display: "block",
                      fontSize: isMobile ? "20px" : "18px",
                      marginBottom: "10px",
                    }}
                  >
                    {member.name}
                  </strong>

                  {member.details.map((line, j) => (
                    <p
                      key={j}
                      style={{
                        margin: "5px 0",
                        fontSize: isMobile ? "15px" : "16px",
                        lineHeight: "1.6",
                      }}
                    >
                      {line}
                    </p>
                  ))}
                </div>
              </div>
            ))}
        </div>
      </div>
    ))}
  </div>
);
}