import React from "react";
import { useNavigate } from "react-router-dom";

function AuthorsCorner() {
  const navigate = useNavigate();

  return (
    <>
      <style>{`
        .authors-section {
          min-height: 100vh;
          padding: 120px 7% 80px;
          background: #f5f7fb;
        }

        .authors-title {
          text-align: center;
          color: #073b73;
          font-size: 36px;
          margin-bottom: 45px;
        }

        .authors-cards {
          max-width: 1200px;
          margin: 0 auto;

          display: grid;
          grid-template-columns: repeat(3, 1fr);
          gap: 25px;
        }

        .authors-card {
          background: #ffffff;
          padding: 35px 25px;
          min-height: 220px;

          border-radius: 5px;

          display: flex;
          flex-direction: column;
          align-items: center;
          text-align: center;

          box-shadow: 0 4px 15px rgba(0, 0, 0, 0.12);

          transition: transform 0.3s ease,
                      box-shadow 0.3s ease;
        }

        .authors-card:hover {
          transform: translateY(-5px);
          box-shadow: 0 8px 22px rgba(0, 0, 0, 0.16);
        }

        .authors-card h2 {
          color: #073b73;
          font-size: 22px;
          margin: 5px 0 15px;
        }

        .authors-card p {
          color: #444;
          font-size: 15px;
          line-height: 1.6;
          margin: 0 0 25px;
          flex: 1;
        }

        .authors-card button {
          background: #073b73;
          color: white;
          border: none;
          border-radius: 4px;
          padding: 10px 25px;
          font-size: 14px;
          cursor: pointer;
          transition: background 0.3s ease;
        }

        .authors-card button:hover {
          background: #052d59;
        }

        @media (max-width: 768px) {
          .authors-section {
            padding: 100px 20px 50px;
          }

          .authors-title {
            font-size: 28px;
          }

          .authors-cards {
            grid-template-columns: 1fr;
          }
        }
      `}</style>

      <section className="authors-section">

        <h1 className="authors-title">
          Author's Corner
        </h1>

        <div className="authors-cards">

          {/* Call for Paper */}
          <div className="authors-card">
            <h2>Call for Paper</h2>

            <p>
              Submit your original research work and contribute
              to ICIFMEDE 2027.
            </p>

            <button
              onClick={() =>
                navigate("/authors-corner/call-for-papers")
              }
            >
              View Details
            </button>
          </div>


          {/* Conference Tracks */}
          <div className="authors-card">
            <h2>Conference Tracks</h2>

            <p>
              Explore the conference tracks and research areas
              covered by ICIFMEDE 2027.
            </p>

            <button
              onClick={() =>
                navigate("/authors-corner/conference-tracks")
              }
            >
              View Details
            </button>
          </div>


          {/* Submission Portal */}
          <div className="authors-card">
            <h2>Submission Portal</h2>

            <p>
              Submit your research paper through the official
              conference submission portal.
            </p>

            <button
              onClick={() =>
                navigate("/authors-corner/submission-portal")
              }
            >
              Submit Paper
            </button>
          </div>

        </div>

      </section>
    </>
  );
}

export default AuthorsCorner;