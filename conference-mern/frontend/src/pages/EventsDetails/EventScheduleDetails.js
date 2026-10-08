import React from "react";
import { useNavigate } from "react-router-dom";

function EventScheduleDetails() {
  const navigate = useNavigate();

  return (
    <>
      <style>{`
        .schedule-section {
          min-height: 100vh;
          padding: 120px 7% 80px;
          background: #f5f7fb;
        }

        .schedule-container {
          max-width: 900px;
          margin: 0 auto;
          background: white;
          padding: 45px;
          border-radius: 8px;
          box-shadow: 0 4px 15px rgba(0,0,0,0.12);
        }

        .schedule-container h1 {
          text-align: center;
          color: #073b73;
          font-size: 34px;
          margin-bottom: 35px;
        }

        .schedule-container h2 {
          color: #073b73;
          font-size: 22px;
          margin-top: 30px;
        }

        .schedule-container p,
        .schedule-container li {
          color: #444;
          font-size: 16px;
          line-height: 1.8;
        }

        .schedule-container ul {
          padding-left: 25px;
        }

        .schedule-item {
          background: #f5f7fb;
          padding: 15px 20px;
          margin: 12px 0;
          border-left: 4px solid #073b73;
        }

        .schedule-item strong {
          color: #073b73;
        }

        .back-button {
          display: block;
          margin: 35px auto 0;
          padding: 11px 28px;
          background: #073b73;
          color: white;
          border: none;
          border-radius: 4px;
          cursor: pointer;
          font-size: 15px;
        }

        .back-button:hover {
          background: #052d59;
        }
      `}</style>

      <section className="schedule-section">
        <div className="schedule-container">

          <h1>Event Schedule</h1>

          <h2>Conference Schedule</h2>

          <p>
            The detailed schedule of ICIFMEDE 2027 will include
            keynote sessions, technical sessions, paper presentations,
            networking activities and other conference events.
          </p>

          <h2>Planned Activities</h2>

          <div className="schedule-item">
            <strong>Inaugural Ceremony</strong>
            <p>
              Opening ceremony and welcome address.
            </p>
          </div>

          <div className="schedule-item">
            <strong>Keynote Sessions</strong>
            <p>
              Talks and presentations by distinguished keynote speakers.
            </p>
          </div>

          <div className="schedule-item">
            <strong>Technical Sessions</strong>
            <p>
              Research paper presentations and technical discussions.
            </p>
          </div>

          <div className="schedule-item">
            <strong>Valedictory Session</strong>
            <p>
              Closing ceremony and conference conclusion.
            </p>
          </div>

          <h2>Official Schedule</h2>

          <p>
            Exact dates, timings, venues and session details will be
            updated here once officially announced by the conference
            organizers.
          </p>

          <button
            className="back-button"
            onClick={() => navigate("/events")}
          >
            Back to Events
          </button>

        </div>
      </section>
    </>
  );
}

export default EventScheduleDetails;