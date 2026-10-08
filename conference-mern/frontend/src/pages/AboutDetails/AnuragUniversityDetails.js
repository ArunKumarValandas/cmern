import React from "react";
import { useNavigate } from "react-router-dom";

function AnuragUniversityDetails() {
  const navigate = useNavigate();

  return (
    <>
      <style>{`
        .university-details-section {
          min-height: 100vh;
          padding: 120px 7% 80px;
          background: #f5f7fb;
        }

        .university-details-container {
          max-width: 1100px;
          margin: 0 auto;
          background: #ffffff;
          padding: 45px;
          border-radius: 8px;
          box-shadow: 0 4px 15px rgba(0, 0, 0, 0.12);
        }

        .university-details-container h1 {
          color: #073b73;
          font-size: 32px;
          margin: 0 0 30px;
          text-align: center;
        }

        .university-details-container h2 {
          color: #073b73;
          font-size: 22px;
          margin-top: 30px;
          margin-bottom: 12px;
        }

        .university-details-container p {
          color: #444;
          font-size: 15px;
          line-height: 1.8;
          margin-bottom: 15px;
        }

        .university-details-container ul {
          color: #444;
          font-size: 15px;
          line-height: 1.8;
          padding-left: 25px;
        }

        .back-button {
          display: block;
          margin: 35px auto 0;

          background: #073b73;
          color: white;

          border: none;
          border-radius: 4px;

          padding: 11px 25px;

          font-size: 14px;
          cursor: pointer;

          transition: background 0.3s ease;
        }

        .back-button:hover {
          background: #052d59;
        }

        @media (max-width: 768px) {
          .university-details-section {
            padding: 100px 20px 50px;
          }

          .university-details-container {
            padding: 25px 20px;
          }

          .university-details-container h1 {
            font-size: 26px;
          }

          .university-details-container h2 {
            font-size: 20px;
          }
        }
      `}</style>

      <section className="university-details-section">

        <div className="university-details-container">

          <h1>About Anurag University</h1>

          <h2>University Overview</h2>

          <p>
            Anurag University is committed to providing quality education,
            fostering innovation and creating an environment that encourages
            students and researchers to develop their knowledge and skills.
          </p>

          <h2>Academic Excellence</h2>

          <p>
            The university provides an academic environment that promotes
            learning, research and professional development across various
            disciplines.
          </p>

          <h2>Research and Innovation</h2>

          <p>
            Research and innovation form an important part of the university's
            academic environment. Faculty members and students are encouraged
            to work on research activities and develop innovative solutions
            for real-world challenges.
          </p>

          <h2>Campus and Infrastructure</h2>

          <p>
            The university provides facilities and infrastructure that support
            academic activities, research, practical learning and student
            development.
          </p>

          <h2>Key Areas</h2>

          <ul>
            <li>Quality education and academic development</li>
            <li>Research and innovation</li>
            <li>Industry interaction</li>
            <li>Student development</li>
            <li>Professional and technical education</li>
          </ul>

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

export default AnuragUniversityDetails;