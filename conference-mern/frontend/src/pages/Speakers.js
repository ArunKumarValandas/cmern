
// export default function Speakers() {

//   // 🔹 EDIT SPEAKERS HERE (ADD / REMOVE / MODIFY)
//   const keynoteSpeakers = [
//     {
//       name: "Dr. Hafiz Muhammad Ali",
//       photo: "https://me.kfupm.edu.sa/images/default-source/2022/dsc_6202.jpg?sfvrsn=ae591185_1", // 🔥 add image URL later
//       details: [
//         "Associate Professor,",
//         "Mechanical Engineering,",
//         "King Fahd University of Petroleum and Minerals,",
//         "Dhahran, Saudi Arabia.",
//       ],
//     },
//     {
//       name: "Dr. Anuj Sharma",
//       photo: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRMx4uS_JobdB2Y2isQS29EP9vVJwuJ68XpMA&s", // 🔥 add image URL later
//       details: [
//         "Sr. Manager,",
//         "Embedded and High Compute Electronics Control Units,",
//         "Robert Bosch, GmbH,",
//         "Germany.",
//       ],
//     },
//     // 👉 ADD MORE SPEAKERS HERE
//   ];

//   return (
//     <div
//       style={{
//         minHeight: "60vh",
//         padding: "50px",
//         background: "#e6e6ea",
//       }}
//     >
//       {/* SECTION TITLE */}
//       <div style={{ display: "flex", alignItems: "center", marginBottom: "30px" }}>
//         <div
//           style={{
//             width: "8px",
//             height: "22px",
//             background: "#c62828",
//             marginRight: "10px",
//           }}
//         />
//         <h2 style={{ margin: 0, letterSpacing: "1px" ,fontSize:"23px"}}>
//           KEYNOTE SPEAKERS
//         </h2>
//       </div>

//       {/* SPEAKERS GRID */}
//       <div
//         style={{
//           display: "grid",
//           gridTemplateColumns: "repeat(auto-fit, minmax(320px, 1fr))",
//           gap: "60px",
//         }}
//       >
//         {keynoteSpeakers.map((speaker, index) => (
//           <div
//             key={index}
//             style={{
//               display: "flex",
//               gap: "20px",
//               alignItems: "flex-start",
//             }}
//           >
//             {/* 🔹 PHOTO (OPTIONAL) */}
//             {speaker.photo ? (
//               <img
//                 src={speaker.photo}
//                 alt={speaker.name}
//                 style={{
//                   width: "180px",      // 🔥 doubled
//                   height: "220px",     // 🔥 doubled
//                   objectFit: "cover",
//                   borderRadius: "6px",
//                 }}
//               />
//             ) : (
//               <div
//                 style={{
//                   width: "180px",      // 🔥 doubled
//                   height: "220px",     // 🔥 doubled
//                   background: "#ccc",
//                   borderRadius: "6px",
//                 }}
//               />
//             )}

//             {/* 🔹 TEXT CONTENT */}
//             <div>
//               <h3 style={{ marginBottom: "8px" }}>{speaker.name}</h3>
//               {speaker.details.map((line, i) => (
//                 <p key={i} style={{ margin: "4px 0" }}>
//                   {line}
//                 </p>
//               ))}
//             </div>
//           </div>
//         ))}
//       </div>
//     </div>
//   );
// }

export default function Speakers() {
  const isMobile = window.innerWidth <= 768;

  const keynoteSpeakers = [
    {
      name: "Dr. Hafiz Muhammad Ali",
      photo:
        "https://me.kfupm.edu.sa/images/default-source/2022/dsc_6202.jpg?sfvrsn=ae591185_1",
      details: [
        "Associate Professor,",
        "Mechanical Engineering,",
        "King Fahd University of Petroleum and Minerals,",
        "Dhahran, Saudi Arabia.",
      ],
    },
    {
      name: "Dr. Anuj Sharma",
      photo:
        "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRMx4uS_JobdB2Y2isQS29EP9vVJwuJ68XpMA&s",
      details: [
        "Sr. Manager,",
        "Embedded and High Compute Electronics Control Units,",
        "Robert Bosch GmbH,",
        "Germany.",
      ],
    },
  ];

  return (
    <div
      style={{
        minHeight: "60vh",
        padding: isMobile ? "20px 15px" : "50px",
        background: "#e6e6ea",
      }}
    >
      {/* SECTION TITLE */}
      <div
        style={{
          display: "flex",
          alignItems: "center",
          flexWrap: "wrap",
          marginBottom: "35px",
        }}
      >
        <div
          style={{
            width: "8px",
            height: "24px",
            background: "#c62828",
            marginRight: "12px",
            flexShrink: 0,
          }}
        />

        <h2
          style={{
            margin: 0,
            fontSize: isMobile ? "24px" : "30px",
            letterSpacing: "1px",
            lineHeight: "1.3",
          }}
        >
          KEYNOTE SPEAKERS
        </h2>
      </div>

      {/* SPEAKERS GRID */}
      <div
        style={{
          display: "grid",
          gridTemplateColumns: isMobile
            ? "1fr"
            : "repeat(auto-fit, minmax(420px, 1fr))",
          gap: isMobile ? "30px" : "60px",
        }}
      >
        {keynoteSpeakers.map((speaker, index) => (
          <div
            key={index}
            style={{
              display: "flex",
              flexDirection: isMobile ? "column" : "row",
              alignItems: isMobile ? "center" : "flex-start",
              gap: "20px",
              background: "#fff",
              padding: isMobile ? "18px" : "22px",
              borderRadius: "10px",
              boxShadow: "0 2px 8px rgba(0,0,0,0.08)",
            }}
          >
            {/* PHOTO */}
            {speaker.photo ? (
              <img
                src={speaker.photo}
                alt={speaker.name}
                style={{
                  width: isMobile ? "170px" : "180px",
                  height: isMobile ? "210px" : "220px",
                  objectFit: "cover",
                  borderRadius: "8px",
                  flexShrink: 0,
                }}
              />
            ) : (
              <div
                style={{
                  width: isMobile ? "170px" : "180px",
                  height: isMobile ? "210px" : "220px",
                  background: "#ccc",
                  borderRadius: "8px",
                }}
              />
            )}

            {/* DETAILS */}
            <div
              style={{
                flex: 1,
                textAlign: isMobile ? "center" : "left",
              }}
            >
              <h3
                style={{
                  margin: "0 0 12px",
                  fontSize: isMobile ? "22px" : "24px",
                  lineHeight: "1.3",
                }}
              >
                {speaker.name}
              </h3>

              {speaker.details.map((line, i) => (
                <p
                  key={i}
                  style={{
                    margin: "6px 0",
                    fontSize: isMobile ? "15px" : "16px",
                    lineHeight: "1.7",
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
  );
}