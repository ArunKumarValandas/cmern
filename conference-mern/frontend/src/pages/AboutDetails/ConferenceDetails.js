import React from "react";
import { useNavigate } from "react-router-dom";

function MechanicalEngineeringDetails() {
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

          <h1>Department of Mechanical Engineering</h1>

          <h2>Department Overview</h2>

          <p>
            The Department of Mechanical Engineering provides an academic
            environment focused on engineering education, technical learning,
            research and professional development.
          </p>

          <h2>Research and Development</h2>

          <p>
            The department encourages students and faculty to participate in
            research, innovation and development activities related to
            mechanical engineering and emerging technologies.
          </p>

          <h2>Facilities and Infrastructure</h2>

          <p>
            The department supports teaching and practical learning through
            laboratories, academic facilities and technical resources.
          </p>

          <h2>Industry Interaction</h2>

          <p>
            Industry interaction provides opportunities for students and
            researchers to gain practical knowledge and understand current
            engineering practices.
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

export default MechanicalEngineeringDetails;