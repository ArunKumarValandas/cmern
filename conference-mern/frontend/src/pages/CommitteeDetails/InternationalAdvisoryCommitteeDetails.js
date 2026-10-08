import React from "react";
import { useNavigate } from "react-router-dom";

function InternationalAdvisoryCommitteeDetails() {
  const navigate = useNavigate();

  return (
    <>
      <style>{`
        .details-page {
          min-height: 100vh;
          padding: 120px 7% 80px;
          background: #f5f7fb;
        }

        .details-container {
          max-width: 1000px;
          margin: auto;
          background: white;
          padding: 45px;
          border-radius: 8px;
          box-shadow: 0 4px 15px rgba(0,0,0,0.12);
        }

        .details-container h1 {
          text-align: center;
          color: #073b73;
          font-size: 34px;
          margin-bottom: 35px;
        }

        .details-container h2 {
          color: #073b73;
          font-size: 22px;
          margin-top: 30px;
        }

        .details-container p,
        .details-container li {
          color: #444;
          font-size: 16px;
          line-height: 1.8;
        }

        .details-container ul {
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

      <section className="details-page">
        <div className="details-container">

          <h1>International Advisory Committee</h1>

          <h2>About</h2>

          <p>
            The International Advisory Committee consists of distinguished
            academicians, researchers and professionals from institutions
            across different countries. The committee provides valuable
            academic guidance and support for ICIFMEDE 2027.
          </p>

          <h2>Responsibilities</h2>

          <ul>
            <li>Provide international academic guidance.</li>
            <li>Support research and technical collaboration.</li>
            <li>Encourage international participation.</li>
            <li>Provide suggestions for conference activities.</li>
            <li>Support the academic quality of the conference.</li>
          </ul>

          <h2>Committee Members</h2>

          <p>
            The names, designations and institutional details of the
            International Advisory Committee members will be displayed
            here.
          </p>

          <button
            className="back-button"
            onClick={() => navigate("/committees")}
          >
            Back to Committees
          </button>

        </div>
      </section>
    </>
  );
}

export default InternationalAdvisoryCommitteeDetails;