import React from "react";
import { useNavigate } from "react-router-dom";

function ChiefGuestDetails() {
  const navigate = useNavigate();

  return (
    <>
      <style>{`
        .chief-guest-section {
          min-height: 100vh;
          padding: 120px 7% 80px;
          background: #f5f7fb;
        }

        .chief-guest-container {
          max-width: 900px;
          margin: 0 auto;
          background: white;
          padding: 45px;
          border-radius: 8px;
          box-shadow: 0 4px 15px rgba(0, 0, 0, 0.12);
        }

        .chief-guest-container h1 {
          text-align: center;
          color: #073b73;
          font-size: 34px;
          margin-bottom: 35px;
        }

        .chief-guest-container h2 {
          color: #073b73;
          font-size: 22px;
          margin-top: 30px;
        }

        .chief-guest-container p {
          color: #444;
          font-size: 16px;
          line-height: 1.8;
        }

        .back-button {
          display: block;
          margin: 35px auto 0;
          background: #073b73;
          color: white;
          border: none;
          border-radius: 4px;
          padding: 11px 28px;
          font-size: 15px;
          cursor: pointer;
        }

        .back-button:hover {
          background: #052d59;
        }

        @media (max-width: 768px) {
          .chief-guest-section {
            padding: 100px 20px 50px;
          }

          .chief-guest-container {
            padding: 25px;
          }

          .chief-guest-container h1 {
            font-size: 28px;
          }
        }
      `}</style>

      <section className="chief-guest-section">

        <div className="chief-guest-container">

          <h1>Chief Guest</h1>

          <h2>About the Chief Guest</h2>

          <p>
            The Chief Guest of ICIFMEDE 2027 will be a distinguished
            personality with significant contributions to academia,
            research, industry or society.
          </p>

          <h2>Role in the Conference</h2>

          <p>
            The Chief Guest will be invited to participate in the
            inaugural activities of the conference and share valuable
            insights and experiences with the participants.
          </p>

          <h2>Chief Guest Details</h2>

          <p>
            The name, designation, institution and profile of the
            Chief Guest will be updated here once officially confirmed.
          </p>

          <button
            className="back-button"
            onClick={() => navigate("/speakers")}
          >
            Back to Speakers
          </button>

        </div>

      </section>
    </>
  );
}

export default ChiefGuestDetails;