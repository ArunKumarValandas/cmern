import React from "react";
import { useNavigate } from "react-router-dom";

function About() {
  const navigate = useNavigate();

  return (
    <>
      <style>{`
        .about-section {
          min-height: 100vh;
          padding: 120px 7% 80px;
          background: #f5f7fb;
        }

        .about-cards {
          max-width: 1200px;
          margin: 0 auto;

          display: grid;
          grid-template-columns: repeat(3, 1fr);
          gap: 25px;
        }

        .about-card {
          background: #ffffff;
          padding: 32px 25px;
          min-height: 230px;

          border-radius: 5px;

          display: flex;
          flex-direction: column;
          align-items: center;
          text-align: center;

          box-shadow: 0 4px 15px rgba(0, 0, 0, 0.12);

          transition: transform 0.3s ease,
                      box-shadow 0.3s ease;
        }

        .about-card:hover {
          transform: translateY(-5px);
          box-shadow: 0 8px 22px rgba(0, 0, 0, 0.16);
        }

        .about-card h2 {
          color: #073b73;
          font-size: 20px;
          margin: 5px 0 15px;
        }

        .about-card p {
          color: #444;
          font-size: 14px;
          line-height: 1.6;
          margin: 0 0 25px;
          flex: 1;
        }

        .about-card button {
          background: #073b73;
          color: white;

          border: none;
          border-radius: 4px;

          padding: 10px 22px;

          font-size: 14px;
          cursor: pointer;

          transition: background 0.3s ease;
        }

        .about-card button:hover {
          background: #052d59;
        }

        /* Mobile */
        @media (max-width: 768px) {
          .about-section {
            padding: 100px 20px 50px;
          }

          .about-cards {
            grid-template-columns: 1fr;
          }
        }
      `}</style>

      <section className="about-section">
        <div className="about-cards">

          {/* 1. About Anurag University */}
          <div className="about-card">
            <h2>About Anurag University</h2>

            <p>
              Know more about Anurag University, its academic
              excellence, infrastructure and institutional profile.
            </p>

            <button
              onClick={() =>
                navigate("/about/anurag-university")
              }
            >
              View Details
            </button>
          </div>

          {/* 2. Department of Mechanical Engineering */}
          <div className="about-card">
            <h2>Department of Mechanical Engineering</h2>

            <p>
              Learn about the Department of Mechanical Engineering,
              its facilities, faculty, research and industry connections.
            </p>

            <button
              onClick={() =>
                navigate("/about/mechanical-engineering")
              }
            >
              View Details
            </button>
          </div>

          {/* 3. About the Conference */}
          <div className="about-card">
            <h2>About the Conference</h2>

            <p>
              Explore ICIFMEDE 2027, its objectives, themes,
              areas and opportunities for researchers and professionals.
            </p>

            <button
              onClick={() =>
                navigate("/about/conference")
              }
            >
              View Details
            </button>
          </div>

        </div>
      </section>
    </>
  );
}

export default About;