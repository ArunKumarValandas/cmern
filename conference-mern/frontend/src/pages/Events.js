// // import React from "react";

// // function Events() {
// //   return (
// //     <div>
// //       <h1>Events</h1>
// //       <p>Conference events and activities.</p>
// //     </div>
// //   );
// // }

// // export default Events;

// import React from "react";

// function Events() {
//   return (
//     <>
//       <style>{`
//         .events-section {
//           min-height: 100vh;
//           padding: 120px 7% 80px;
//           background: #f5f7fb;
//         }

//         .events-title {
//           text-align: center;
//           color: #073b73;
//           font-size: 36px;
//           margin-bottom: 45px;
//         }

//         .events-cards {
//           max-width: 800px;
//           margin: 0 auto;

//           display: grid;
//           grid-template-columns: repeat(2, 1fr);
//           gap: 30px;
//         }

//         .event-card {
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

//         .event-card:hover {
//           transform: translateY(-5px);

//           box-shadow: 0 8px 22px rgba(0, 0, 0, 0.16);
//         }

//         .event-card h2 {
//           color: #073b73;
//           font-size: 22px;
//           margin: 5px 0 15px;
//         }

//         .event-card p {
//           color: #444;
//           font-size: 15px;
//           line-height: 1.6;

//           margin: 0 0 25px;

//           flex: 1;
//         }

//         .event-card button {
//           background: #073b73;
//           color: white;

//           border: none;
//           border-radius: 4px;

//           padding: 10px 25px;

//           font-size: 14px;
//           cursor: pointer;

//           transition: background 0.3s ease;
//         }

//         .event-card button:hover {
//           background: #052d59;
//         }

//         @media (max-width: 768px) {
//           .events-section {
//             padding: 100px 20px 50px;
//           }

//           .events-title {
//             font-size: 28px;
//           }

//           .events-cards {
//             grid-template-columns: 1fr;
//           }
//         }
//       `}</style>

//       <section className="events-section">

//         <h1 className="events-title">
//           Events
//         </h1>

//         <div className="events-cards">

//           {/* Submission Deadline */}
//           <div className="event-card">

//             <h2>
//               Submission Deadline
//             </h2>

//             <p>
//               Check the deadline for submitting your research
//               paper to ICIFMEDE 2027.
//             </p>

//             <button>
//               View Details
//             </button>

//           </div>


//           {/* Event Schedule */}
//           <div className="event-card">

//             <h2>
//               Event Schedule
//             </h2>

//             <p>
//               View the complete schedule of conference events,
//               sessions and activities.
//             </p>

//             <button>
//               View Schedule
//             </button>

//           </div>

//         </div>

//       </section>
//     </>
//   );
// }

// export default Events;

import React from "react";
import { useNavigate } from "react-router-dom";

function Events() {
  const navigate = useNavigate();

  return (
    <>
      <style>{`
        .events-section {
          min-height: 100vh;
          padding: 120px 7% 80px;
          background: #f5f7fb;
        }

        .events-title {
          text-align: center;
          color: #073b73;
          font-size: 36px;
          margin-bottom: 45px;
        }

        .events-cards {
          max-width: 900px;
          margin: 0 auto;

          display: grid;
          grid-template-columns: repeat(2, 1fr);
          gap: 32px;
        }

        .event-card {
          background: #ffffff;
          padding: 40px 30px;
          min-height: 220px;

          border-radius: 5px;

          display: flex;
          flex-direction: column;
          align-items: center;
          text-align: center;

          box-shadow: 0 4px 15px rgba(0, 0, 0, 0.12);

          transition: transform 0.3s ease,
                      box-shadow 0.3s ease;
        }

        .event-card:hover {
          transform: translateY(-5px);
          box-shadow: 0 8px 22px rgba(0, 0, 0, 0.16);
        }

        .event-card h2 {
          color: #073b73;
          font-size: 26px;
          margin: 5px 0 15px;
        }

        .event-card p {
          color: #444;
          font-size: 16px;
          line-height: 1.6;
          margin: 0 0 25px;
          flex: 1;
        }

        .event-card button {
          background: #073b73;
          color: white;
          border: none;
          border-radius: 4px;
          padding: 11px 28px;
          font-size: 15px;
          cursor: pointer;
          transition: background 0.3s ease;
        }

        .event-card button:hover {
          background: #052d59;
        }

        @media (max-width: 768px) {
          .events-section {
            padding: 100px 20px 50px;
          }

          .events-title {
            font-size: 28px;
          }

          .events-cards {
            grid-template-columns: 1fr;
          }
        }
      `}</style>

      <section className="events-section">

        <h1 className="events-title">
          Events
        </h1>

        <div className="events-cards">

          {/* Submission Deadline */}
          <div className="event-card">

            <h2>
              Submission Deadline
            </h2>

            <p>
              Check the deadline for submitting your research
              paper to ICIFMEDE 2027.
            </p>

            <button
              onClick={() =>
                navigate("/events/submission-deadline")
              }
            >
              View Details
            </button>

          </div>


          {/* Event Schedule */}
          <div className="event-card">

            <h2>
              Event Schedule
            </h2>

            <p>
              View the complete schedule of conference events,
              sessions and activities.
            </p>

            <button
              onClick={() =>
                navigate("/events/schedule")
              }
            >
              View Schedule
            </button>

          </div>

        </div>

      </section>
    </>
  );
}

export default Events;