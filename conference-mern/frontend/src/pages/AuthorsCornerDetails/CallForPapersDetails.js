import React from "react";
import { useNavigate } from "react-router-dom";

function CallForPapersDetails() {
  const navigate = useNavigate();

  return (
    <>
      <style>{`
        .authors-details-section {
          min-height: 100vh;
          padding: 120px 7% 80px;
          background: #f5f7fb;
        }

        .authors-details-container {
          max-width: 1100px;
          margin: 0 auto;
          background: #ffffff;
          padding: 45px;
          border-radius: 8px;
          box-shadow: 0 4px 15px rgba(0, 0, 0, 0.12);
        }

        .authors-details-container h1 {
          color: #073b73;
          font-size: 32px;
          text-align: center;
          margin-bottom: 35px;
        }

        .authors-details-container h2 {
          color: #073b73;
          font-size: 22px;
          margin-top: 30px;
        }

        .authors-details-container p {
          color: #444;
          font-size: 15px;
          line-height: 1.8;
        }

        .authors-details-container ul {
          color: #444;
          font-size: 15px;
          line-height: 1.8;
          padding-left: 25px;
        }

        .back-button {
          display: block;
          margin: 35px auto 0;
          padding: 11px 25px;
          background: #073b73;
          color: white;
          border: none;
          border-radius: 4px;
          cursor: pointer;
          font-size: 14px;
        }

        .back-button:hover {
          background: #052d59;
        }

        @media (max-width: 768px) {
          .authors-details-section {
            padding: 100px 20px 50px;
          }

          .authors-details-container {
            padding: 25px 20px;
          }

          .authors-details-container h1 {
            font-size: 26px;
          }
        }
      `}</style>

      <section className="authors-details-section">
        <div className="authors-details-container">

          <h1>Call for Papers</h1>

          <h2>Call for Papers</h2>

          <p>
            ICIFMEDE 2027 invites researchers, academicians, students and
            industry professionals to submit their original research work
            for presentation at the conference.
          </p>

          <h2>Paper Submission</h2>

          <p>
            Authors are encouraged to submit original and unpublished
            research papers related to the themes and technical areas
            of the conference.
          </p>

          <h2>Submission Guidelines</h2>

          <ul>
            <li>Submit original research work.</li>
            <li>Ensure the paper follows the conference guidelines.</li>
            <li>Include complete author and affiliation details.</li>
            <li>Submit the paper through the official submission portal.</li>
          </ul>

          <button
            className="back-button"
            onClick={() => navigate("/authors-corner")}
          >
            ← Back to Author's Corner
          </button>

        </div>
      </section>
    </>
  );
}

export default CallForPapersDetails;