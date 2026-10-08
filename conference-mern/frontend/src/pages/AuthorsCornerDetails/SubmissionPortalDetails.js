import React from "react";
import { useNavigate } from "react-router-dom";

function SubmissionPortalDetails() {
  const navigate = useNavigate();

  return (
    <>
      <style>{`
        .submission-details-section {
          min-height: 100vh;
          padding: 120px 7% 80px;
          background: #f5f7fb;
        }

        .submission-details-container {
          max-width: 1100px;
          margin: 0 auto;
          background: #ffffff;
          padding: 45px;
          border-radius: 8px;
          box-shadow: 0 4px 15px rgba(0, 0, 0, 0.12);
        }

        .submission-details-container h1 {
          color: #073b73;
          font-size: 32px;
          text-align: center;
          margin-bottom: 35px;
        }

        .submission-details-container h2 {
          color: #073b73;
          font-size: 22px;
          margin-top: 30px;
        }

        .submission-details-container p {
          color: #444;
          font-size: 15px;
          line-height: 1.8;
        }

        .submission-details-container ol {
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
          .submission-details-section {
            padding: 100px 20px 50px;
          }

          .submission-details-container {
            padding: 25px 20px;
          }

          .submission-details-container h1 {
            font-size: 26px;
          }
        }
      `}</style>

      <section className="submission-details-section">
        <div className="submission-details-container">

          <h1>Submission Portal</h1>

          <h2>Paper Submission</h2>

          <p>
            Authors can submit their research papers through the official
            conference submission process. Please ensure that the paper
            follows the required conference guidelines before submission.
          </p>

          <h2>Submission Process</h2>

          <ol>
            <li>Prepare your research paper.</li>
            <li>Check the conference submission guidelines.</li>
            <li>Prepare the required author information.</li>
            <li>Submit the paper through the submission portal.</li>
            <li>Wait for the review and further communication.</li>
          </ol>

          <h2>Important</h2>

          <p>
            Authors should carefully check the official conference
            instructions and deadlines before submitting their papers.
          </p>

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

export default SubmissionPortalDetails;