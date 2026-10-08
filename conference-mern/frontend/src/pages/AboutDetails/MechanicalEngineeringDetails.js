import React from "react";
import { useNavigate } from "react-router-dom";

function ConferenceDetails() {
  const navigate = useNavigate();

  return (
    <>
      <style>{`
        .details-section {
          min-height: 100vh;
          padding: 120px 7% 80px;
          background: #f5f7fb;
        }

        .details-container {
          max-width: 1100px;
          margin: 0 auto;
          background: #ffffff;
          padding: 45px;
          border-radius: 8px;
          box-shadow: 0 4px 15px rgba(0, 0, 0, 0.12);
        }

        .details-container h1 {
          color: #073b73;
          font-size: 32px;
          text-align: center;
          margin-bottom: 35px;
        }

        .details-container h2 {
          color: #073b73;
          font-size: 22px;
          margin-top: 30px;
        }

        .details-container p {
          color: #444;
          font-size: 15px;
          line-height: 1.8;
        }

        .details-container ul {
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
          .details-section {
            padding: 100px 20px 50px;
          }

          .details-container {
            padding: 25px 20px;
          }

          .details-container h1 {
            font-size: 26px;
          }
        }
      `}</style>

      <section className="details-section">
        <div className="details-container">

          <h1>About the Conference</h1>

          <h2>ICIFMEDE 2027</h2>

          <p>
            ICIFMEDE 2027 provides a platform for researchers, academicians,
            industry professionals and students to present their research,
            exchange ideas and discuss developments in engineering and
            related fields.
          </p>

          <h2>Conference Objectives</h2>

          <ul>
            <li>Provide a platform for research presentation.</li>
            <li>Encourage academic and industry interaction.</li>
            <li>Promote innovation and knowledge exchange.</li>
            <li>Discuss emerging technologies and developments.</li>
          </ul>

          <h2>Conference Scope</h2>

          <p>
            The conference covers research and developments in relevant
            engineering disciplines, emerging technologies, innovation,
            industrial applications and interdisciplinary research.
          </p>

          <h2>Who Can Participate?</h2>

          <p>
            Researchers, academicians, students, industry professionals and
            other interested participants can take part in the conference
            according to the applicable conference guidelines.
          </p>

          <button
            className="back-button"
            onClick={() => navigate("/about")}
          >
            ← Back to About
          </button>

        </div>
      </section>
    </>
  );
}

export default ConferenceDetails;