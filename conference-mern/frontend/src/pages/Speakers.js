
import React from "react";

function Speakers() {
  const isMobile = window.innerWidth <= 768;

  return (
    <>
      <style>{`
        .speakers-section {
          min-height: 100vh;
          padding: 25px 20px 60px;
          background: #e6e6ea;
          box-sizing: border-box;
          width: 100%;
        }

        .speakers-title {
          display: flex;
          align-items: center;
          gap: 12px;
          color: #000000;
          font-size: 32px;
          font-weight: 700;
          margin: 0 0 25px;
        }

        .speakers-title::before {
          content: "";
          width: 6px;
          height: 27px;
          background: #c62828;
          flex-shrink: 0;
        }

        .speakers-container {
          width: 100%;
          min-height: 64px;
          padding: 20px;
          background: #ffffff;
          border: 1px solid #dddddd;
          border-radius: 12px;
          box-sizing: border-box;
          display: flex;
          align-items: center;
          justify-content: center;
        }

        .speakers-status {
          color: #102f50;
          font-size: 18px;
          font-weight: bold;
          text-align: center;
          margin: 0;
        }

        @media (max-width: 768px) {
          .speakers-section {
            padding: 25px 15px 45px;
          }

          .speakers-title {
            font-size: 24px;
            gap: 10px;
          }

          .speakers-title::before {
            height: 23px;
            width: 5px;
          }

          .speakers-container {
            min-height: 64px;
            padding: 15px;
          }

          .speakers-status {
            font-size: 16px;
          }
        }
      `}</style>

      <section className="speakers-section">
        <h1 className="speakers-title">
          KEYNOTE SPEAKERS
        </h1>

        <div className="speakers-container">
          <p className="speakers-status">
            In Progress
          </p>
        </div>
      </section>
    </>
  );
}

export default Speakers;
