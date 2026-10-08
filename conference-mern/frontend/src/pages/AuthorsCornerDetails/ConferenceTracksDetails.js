import React from "react";
import { useNavigate } from "react-router-dom";

function ConferenceTracksDetails() {
  const navigate = useNavigate();

  return (
    <>
      <style>{`
        .tracks-details-section {
          min-height: 100vh;
          padding: 120px 7% 80px;
          background: #f5f7fb;
        }

        .tracks-details-container {
          max-width: 1100px;
          margin: 0 auto;
          background: #ffffff;
          padding: 45px;
          border-radius: 8px;
          box-shadow: 0 4px 15px rgba(0, 0, 0, 0.12);
        }

        .tracks-details-container h1 {
          color: #073b73;
          font-size: 32px;
          text-align: center;
          margin-bottom: 35px;
        }

        .tracks-details-container h2 {
          color: #073b73;
          font-size: 22px;
          margin-top: 30px;
        }

        .tracks-details-container p {
          color: #444;
          font-size: 15px;
          line-height: 1.8;
        }

        .tracks-details-container ul {
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
          .tracks-details-section {
            padding: 100px 20px 50px;
          }

          .tracks-details-container {
            padding: 25px 20px;
          }

          .tracks-details-container h1 {
            font-size: 26px;
          }
        }
      `}</style>

      <section className="tracks-details-section">
        <div className="tracks-details-container">

          <h1>Conference Tracks</h1>

          <h2>Conference Research Areas</h2>

          <p>
            ICIFMEDE 2027 covers a range of research areas related to
            engineering, technology, innovation and interdisciplinary
            research.
          </p>

          <h2>Major Areas</h2>

          <ul>
            <li>Mechanical Engineering and Manufacturing</li>
            <li>Emerging Engineering Technologies</li>
            <li>Artificial Intelligence and Automation</li>
            <li>Energy and Sustainable Technologies</li>
            <li>Advanced Materials and Design</li>
            <li>Industrial Applications and Innovation</li>
          </ul>

          <h2>Research Contributions</h2>

          <p>
            Researchers and professionals can contribute original work
            addressing current challenges, innovative technologies and
            practical applications within the conference scope.
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

export default ConferenceTracksDetails;