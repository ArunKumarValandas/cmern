import React from "react";
import { useNavigate } from "react-router-dom";

function Commitees() {
  const navigate = useNavigate();

  return (
    <>
      <style>{`
        .committee-section {
          min-height: 100vh;
          padding: 120px 7% 80px;
          background: #f5f7fb;
        }

        .committee-title {
          text-align: center;
          color: #073b73;
          font-size: 36px;
          margin-bottom: 45px;
        }

        .committee-cards {
          max-width: 1200px;
          margin: 0 auto;

          display: grid;
          grid-template-columns: repeat(3, 1fr);
          gap: 25px;
        }

        .committee-card {
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

        .committee-card:hover {
          transform: translateY(-5px);
          box-shadow: 0 8px 22px rgba(0, 0, 0, 0.16);
        }

        .committee-card h2 {
          color: #073b73;
          font-size: 21px;
          margin: 5px 0 15px;
        }

        .committee-card p {
          color: #444;
          font-size: 15px;
          line-height: 1.6;
          margin: 0 0 25px;
          flex: 1;
        }

        .committee-card button {
          background: #073b73;
          color: white;
          border: none;
          border-radius: 4px;
          padding: 10px 25px;
          font-size: 14px;
          cursor: pointer;
          transition: background 0.3s ease;
        }

        .committee-card button:hover {
          background: #052d59;
        }

        @media (max-width: 768px) {
          .committee-section {
            padding: 100px 20px 50px;
          }

          .committee-title {
            font-size: 28px;
          }

          .committee-cards {
            grid-template-columns: 1fr;
          }
        }
      `}</style>

      <section className="committee-section">

        <h1 className="committee-title">
          Committees
        </h1>

        <div className="committee-cards">

          {/* International Advisory Committee */}
          <div className="committee-card">
            <h2>
              International Advisory Committee
            </h2>

            <p>
              Meet the distinguished international experts and
              professionals supporting ICIFMEDE 2027.
            </p>

            <button
              onClick={() =>
                navigate("/committees/international-advisory")
              }
            >
              View Details
            </button>
          </div>


          {/* National Advisory Committee */}
          <div className="committee-card">
            <h2>
              National Advisory Committee
            </h2>

            <p>
              Explore the national experts and academicians
              contributing to the conference.
            </p>

            <button
              onClick={() =>
                navigate("/committees/national-advisory")
              }
            >
              View Details
            </button>
          </div>


          {/* Organizing Committee */}
          <div className="committee-card">
            <h2>
              Organizing Committee
            </h2>

            <p>
              Meet the team responsible for organizing and
              coordinating ICIFMEDE 2027.
            </p>

            <button
              onClick={() =>
                navigate("/committees/organizing")
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

export default Commitees;