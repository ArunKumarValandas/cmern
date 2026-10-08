

// // export default function Speakers() {
// //   const isMobile = window.innerWidth <= 768;

// //   const keynoteSpeakers = [
// //     {
// //       name: "Dr. Hafiz Muhammad Ali",
// //       photo:
// //         "https://me.kfupm.edu.sa/images/default-source/2022/dsc_6202.jpg?sfvrsn=ae591185_1",
// //       details: [
// //         "Associate Professor,",
// //         "Mechanical Engineering,",
// //         "King Fahd University of Petroleum and Minerals,",
// //         "Dhahran, Saudi Arabia.",
// //       ],
// //     },
// //     {
// //       name: "Dr. Anuj Sharma",
// //       photo:
// //         "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRMx4uS_JobdB2Y2isQS29EP9vVJwuJ68XpMA&s",
// //       details: [
// //         "Sr. Manager,",
// //         "Embedded and High Compute Electronics Control Units,",
// //         "Robert Bosch GmbH,",
// //         "Germany.",
// //       ],
// //     },
// //   ];

// //   return (
// //     <div
// //       style={{
// //         minHeight: "60vh",
// //         padding: isMobile ? "20px 15px" : "50px",
// //         background: "#e6e6ea",
// //       }}
// //     >
// //       {/* SECTION TITLE */}
// //       <div
// //         style={{
// //           display: "flex",
// //           alignItems: "center",
// //           flexWrap: "wrap",
// //           marginBottom: "35px",
// //         }}
// //       >
// //         <div
// //           style={{
// //             width: "8px",
// //             height: "24px",
// //             background: "#c62828",
// //             marginRight: "12px",
// //             flexShrink: 0,
// //           }}
// //         />

// //         <h2
// //           style={{
// //             margin: 0,
// //             fontSize: isMobile ? "24px" : "30px",
// //             letterSpacing: "1px",
// //             lineHeight: "1.3",
// //           }}
// //         >
// //           KEYNOTE SPEAKERS
// //         </h2>
// //       </div>

// //       {/* SPEAKERS GRID */}
// //       <div
// //         style={{
// //           display: "grid",
// //           gridTemplateColumns: isMobile
// //             ? "1fr"
// //             : "repeat(auto-fit, minmax(420px, 1fr))",
// //           gap: isMobile ? "30px" : "60px",
// //         }}
// //       >
// //         {keynoteSpeakers.map((speaker, index) => (
// //           <div
// //             key={index}
// //             style={{
// //               display: "flex",
// //               flexDirection: isMobile ? "column" : "row",
// //               alignItems: isMobile ? "center" : "flex-start",
// //               gap: "20px",
// //               background: "#fff",
// //               padding: isMobile ? "18px" : "22px",
// //               borderRadius: "10px",
// //               boxShadow: "0 2px 8px rgba(0,0,0,0.08)",
// //             }}
// //           >
// //             {/* PHOTO */}
// //             {speaker.photo ? (
// //               <img
// //                 src={speaker.photo}
// //                 alt={speaker.name}
// //                 style={{
// //                   width: isMobile ? "170px" : "180px",
// //                   height: isMobile ? "210px" : "220px",
// //                   objectFit: "cover",
// //                   borderRadius: "8px",
// //                   flexShrink: 0,
// //                 }}
// //               />
// //             ) : (
// //               <div
// //                 style={{
// //                   width: isMobile ? "170px" : "180px",
// //                   height: isMobile ? "210px" : "220px",
// //                   background: "#ccc",
// //                   borderRadius: "8px",
// //                 }}
// //               />
// //             )}

// //             {/* DETAILS */}
// //             <div
// //               style={{
// //                 flex: 1,
// //                 textAlign: isMobile ? "center" : "left",
// //               }}
// //             >
// //               <h3
// //                 style={{
// //                   margin: "0 0 12px",
// //                   fontSize: isMobile ? "22px" : "24px",
// //                   lineHeight: "1.3",
// //                 }}
// //               >
// //                 {speaker.name}
// //               </h3>

// //               {speaker.details.map((line, i) => (
// //                 <p
// //                   key={i}
// //                   style={{
// //                     margin: "6px 0",
// //                     fontSize: isMobile ? "15px" : "16px",
// //                     lineHeight: "1.7",
// //                   }}
// //                 >
// //                   {line}
// //                 </p>
// //               ))}
// //             </div>
// //           </div>
// //         ))}
// //       </div>
// //     </div>
// //   );
// // }

// import React from "react";

// function Speakers() {
//   return (
//     <>
//       <style>{`
//         .speakers-section {
//           min-height: 100vh;
//           padding: 120px 7% 80px;
//           background: #f5f7fb;
//         }

//         .speakers-title {
//           text-align: center;
//           color: #073b73;
//           font-size: 36px;
//           margin-bottom: 45px;
//         }

//         .speakers-cards {
//           max-width: 800px;
//           margin: 0 auto;

//           display: grid;
//           grid-template-columns: repeat(2, 1fr);
//           gap: 30px;
//         }

//         .speaker-card {
//           background: #ffffff;
//           padding: 35px 25px;
//           min-height: 230px;

//           border-radius: 5px;

//           display: flex;
//           flex-direction: column;
//           align-items: center;
//           text-align: center;

//           box-shadow: 0 4px 15px rgba(0, 0, 0, 0.12);

//           transition: transform 0.3s ease,
//                       box-shadow 0.3s ease;
//         }

//         .speaker-card:hover {
//           transform: translateY(-5px);

//           box-shadow: 0 8px 22px rgba(0, 0, 0, 0.16);
//         }

//         .speaker-card h2 {
//           color: #073b73;
//           font-size: 22px;
//           margin: 5px 0 15px;
//         }

//         .speaker-card p {
//           color: #444;
//           font-size: 15px;
//           line-height: 1.6;

//           margin: 0 0 25px;

//           flex: 1;
//         }

//         .speaker-card button {
//           background: #073b73;
//           color: white;

//           border: none;
//           border-radius: 4px;

//           padding: 10px 25px;

//           font-size: 14px;
//           cursor: pointer;

//           transition: background 0.3s ease;
//         }

//         .speaker-card button:hover {
//           background: #052d59;
//         }

//         @media (max-width: 768px) {
//           .speakers-section {
//             padding: 100px 20px 50px;
//           }

//           .speakers-title {
//             font-size: 28px;
//           }

//           .speakers-cards {
//             grid-template-columns: 1fr;
//           }
//         }
//       `}</style>


//       <section className="speakers-section">

//         <h1 className="speakers-title">
//           Speakers
//         </h1>


//         <div className="speakers-cards">

//           {/* Key Note Speakers */}
//           <div className="speaker-card">

//             <h2>
//               Key Note Speakers
//             </h2>

//             <p>
//               Meet the distinguished keynote speakers who will
//               share their expertise, insights and experiences
//               at ICIFMEDE 2027.
//             </p>

//             <button>
//               View Details
//             </button>

//           </div>


//           {/* Chief Guest */}
//           <div className="speaker-card">

//             <h2>
//               Chief Guest
//             </h2>

//             <p>
//               Learn more about the distinguished chief guest
//               of ICIFMEDE 2027.
//             </p>

//             <button>
//               View Details
//             </button>

//           </div>

//         </div>

//       </section>
//     </>
//   );
// }

// export default Speakers;
import React from "react";
import { useNavigate } from "react-router-dom";

function Speakers() {
  const navigate = useNavigate();

  return (
    <>
      <style>{`
        .speakers-section {
          min-height: 100vh;
          padding: 120px 7% 80px;
          background: #f5f7fb;
        }

        .speakers-title {
          text-align: center;
          color: #073b73;
          font-size: 36px;
          margin-bottom: 45px;
        }

        .speakers-cards {
          max-width: 800px;
          margin: 0 auto;

          display: grid;
          grid-template-columns: repeat(2, 1fr);
          gap: 30px;
        }

        .speaker-card {
          background: #ffffff;
          padding: 35px 25px;
          min-height: 230px;

          border-radius: 5px;

          display: flex;
          flex-direction: column;
          align-items: center;
          text-align: center;

          box-shadow: 0 4px 15px rgba(0, 0, 0, 0.12);

          transition: transform 0.3s ease,
                      box-shadow 0.3s ease;
        }

        .speaker-card:hover {
          transform: translateY(-5px);

          box-shadow: 0 8px 22px rgba(0, 0, 0, 0.16);
        }

        .speaker-card h2 {
          color: #073b73;
          font-size: 22px;
          margin: 5px 0 15px;
        }

        .speaker-card p {
          color: #444;
          font-size: 15px;
          line-height: 1.6;

          margin: 0 0 25px;

          flex: 1;
        }

        .speaker-card button {
          background: #073b73;
          color: white;

          border: none;
          border-radius: 4px;

          padding: 10px 25px;

          font-size: 14px;
          cursor: pointer;

          transition: background 0.3s ease;
        }

        .speaker-card button:hover {
          background: #052d59;
        }

        @media (max-width: 768px) {
          .speakers-section {
            padding: 100px 20px 50px;
          }

          .speakers-title {
            font-size: 28px;
          }

          .speakers-cards {
            grid-template-columns: 1fr;
          }
        }
      `}</style>


      <section className="speakers-section">

        <h1 className="speakers-title">
          Speakers
        </h1>


        <div className="speakers-cards">

          {/* Key Note Speakers */}
          <div className="speaker-card">

            <h2>
              Key Note Speakers
            </h2>

            <p>
              Meet the distinguished keynote speakers who will
              share their expertise, insights and experiences
              at ICIFMEDE 2027.
            </p>

            <button
              onClick={() =>
                navigate("/speakers/keynote")
              }
            >
              View Details
            </button>

          </div>


          {/* Chief Guest */}
          <div className="speaker-card">

            <h2>
              Chief Guest
            </h2>

            <p>
              Learn more about the distinguished chief guest
              of ICIFMEDE 2027.
            </p>

            <button
              onClick={() =>
                navigate("/speakers/chief-guest")
              }
            >
              View Details
            </button>

          </div>

        </div>

      </section>
    </>
  );
}

export default Speakers;