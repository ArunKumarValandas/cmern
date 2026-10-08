import React from "react";
import { useNavigate } from "react-router-dom";

function SubmissionDeadlineDetails() {
  const navigate = useNavigate();

  return (
    <>
      <style>{`
        .event-details-section {
          min-height: 100vh;
          padding: 120px 7% 80px;
          background: #f5f7fb;
        }

        .event-details-container {
          max-width: 900px;
          margin: 0 auto;
          background: white;
          padding: 45px;
          border-radius: 8px;
          box-shadow: 0 4px 15px rgba(0,0,0,0.12);
        }

        .event-details-container h1 {
          text-align: center;
          color: #073b73;
          font-size: 34px;
          margin-bottom: 35px;
        }

        .event-details-container h2 {
          color: #073b73;
          font-size: 22px;
          margin-top: 30px;
        }

        .event-details-container p,
        .event-details-container li {
          color: #444;
          font-size: 16px;
          line-height: 1.8;
        }

        .event-details-container ul {
          padding-left: 25px;
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

      <section className="event-details-section">
        <div className="event-details-container">

          <h1>Submission Deadline</h1>

          <h2>About Submission</h2>

          <p>
            Authors are invited to submit their original research
            papers for consideration at ICIFMEDE 2027.
          </p>

          <h2>Important Information</h2>

          <ul>
            <li>Submit original and unpublished research work.</li>
            <li>Follow the prescribed paper submission guidelines.</li>
            <li>Ensure that all required author details are provided.</li>
            <li>Submit the paper before the official deadline.</li>
          </ul>

          <h2>Submission Deadline</h2>

          <p>
            The official submission deadline will be announced by
            the conference organizers.
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

export default SubmissionDeadlineDetails;