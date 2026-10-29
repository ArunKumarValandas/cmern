
import React from "react";

function Events() {
  return (
    <>
      <style>{`
        .events-section {
          min-height: 100vh;
          padding: 35px 20px 80px;
          background: #e6e6ea;
          box-sizing: border-box;
          width: 100%;
        }

        .events-title {
          display: flex;
          align-items: center;
          gap: 12px;
          color: #000000;
          font-size: 36px;
          font-weight: 700;
          margin: 30px 0 35px;
        }

        .events-title::before {
          content: "";
          display: block;
          width: 10px;
          height: 32px;
          background: #c62828;
          flex-shrink: 0;
        }

        .events-container {
          width: 100%;
          max-width: 1500px;
          margin: 0 auto;
          padding: 35px;
          background: #ffffff;
          border-radius: 12px;
          box-shadow: 0 4px 15px rgba(0, 0, 0, 0.08);
          box-sizing: border-box;
        }

        .events-cards {
          display: grid;
          grid-template-columns: repeat(2, minmax(0, 1fr));
          gap: 25px;
          width: 100%;
        }

        .event-card {
          background: #ffffff;
          border: 1px solid #dddddd;
          border-radius: 6px;
          padding: 30px 25px;
          min-height: 200px;
          box-sizing: border-box;
          display: flex;
          flex-direction: column;
          align-items: center;
          text-align: center;
          transition: box-shadow 0.3s ease;
        }

        .event-card:hover {
          box-shadow: 0 4px 15px rgba(0, 0, 0, 0.10);
        }

        .event-card h2 {
          color: #073b73;
          font-size: 26px;
          margin: 5px 0 15px;
          line-height: 1.4;
        }

        .event-card p {
          color: #333333;
          font-size: 16px;
          line-height: 1.7;
          margin: 0 0 20px;
        }

        .event-status {
          color: #102f50;
          font-size: 17px;
          font-weight: 700;
          margin-top: auto;
        }

        @media (max-width: 768px) {
          .events-section {
            padding: 25px 15px 50px;
          }

          .events-title {
            font-size: 25px;
            margin: 25px 0;
            gap: 10px;
          }

          .events-title::before {
            width: 6px;
            height: 25px;
          }

          .events-container {
            padding: 15px;
          }

          .events-cards {
            grid-template-columns: minmax(0, 1fr);
            gap: 18px;
          }

          .event-card {
            padding: 25px 15px;
            min-height: 180px;
          }

          .event-card h2 {
            font-size: 21px;
          }

          .event-card p {
            font-size: 14px;
          }

          .event-status {
            font-size: 15px;
          }
        }
      `}</style>

      <section className="events-section">
        <h1 className="events-title">
          EVENTS
        </h1>

        <div className="events-container">
          <div className="events-cards">

            {/* Submission Deadline */}
            <div className="event-card">
              <h2>Submission Deadline</h2>

              <p>
                Check the deadline for submitting your research
                paper to ICIFMEDE 2027.
              </p>

              <div className="event-status">
                In Progress
              </div>
            </div>

            {/* Event Schedule */}
            <div className="event-card">
              <h2>Event Schedule</h2>

              <p>
                View the complete schedule of conference events,
                sessions and activities.
              </p>

              <div className="event-status">
                In Progress
              </div>
            </div>

          </div>
        </div>
      </section>
    </>
  );
}

export default Events;
