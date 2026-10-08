import React from "react";
import { useNavigate } from "react-router-dom";

function KeynoteSpeakersDetails() {
  const navigate = useNavigate();

  const keynoteSpeakers = [
    {
      name: "Dr. Hafiz Muhammad Ali",
      photo:
        "https://me.kfupm.edu.sa/images/default-source/2022/dsc_6202.jpg?sfvrsn=ae591185_1",
      details: [
        "Associate Professor",
        "Mechanical Engineering",
        "King Fahd University of Petroleum and Minerals",
        "Dhahran, Saudi Arabia",
      ],
    },
    {
      name: "Dr. Anuj Sharma",
      photo:
        "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRMx4uS_JobdB2Y2isQS29EP9vVJwuJ68XpMA&s",
      details: [
        "Sr. Manager",
        "Embedded and High Compute Electronics Control Units",
        "Robert Bosch GmbH",
        "Germany",
      ],
    },
  ];

  return (
    <>
      <style>{`
        .speaker-details-section {
          min-height: 100vh;
          padding: 120px 7% 80px;
          background: #f5f7fb;
        }

        .speaker-details-title {
          text-align: center;
          color: #073b73;
          font-size: 36px;
          margin-bottom: 45px;
        }

        .speaker-details-container {
          max-width: 1000px;
          margin: 0 auto;
          display: grid;
          grid-template-columns: repeat(2, 1fr);
          gap: 30px;
        }

        .speaker-details-card {
          background: white;
          padding: 25px;
          border-radius: 8px;
          display: flex;
          gap: 20px;
          box-shadow: 0 4px 15px rgba(0, 0, 0, 0.12);
        }

        .speaker-details-card img {
          width: 150px;
          height: 190px;
          object-fit: cover;
          border-radius: 8px;
          flex-shrink: 0;
        }

        .speaker-details-info {
          flex: 1;
        }

        .speaker-details-info h2 {
          color: #073b73;
          font-size: 21px;
          margin: 5px 0 15px;
        }

        .speaker-details-info p {
          color: #444;
          font-size: 15px;
          line-height: 1.6;
          margin: 5px 0;
        }

        .back-button {
          display: block;
          margin: 40px auto 0;
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
          .speaker-details-section {
            padding: 100px 20px 50px;
          }

          .speaker-details-title {
            font-size: 28px;
          }

          .speaker-details-container {
            grid-template-columns: 1fr;
          }

          .speaker-details-card {
            flex-direction: column;
            align-items: center;
            text-align: center;
          }

          .speaker-details-card img {
            width: 170px;
            height: 210px;
          }
        }
      `}</style>

      <section className="speaker-details-section">

        <h1 className="speaker-details-title">
          Key Note Speakers
        </h1>

        <div className="speaker-details-container">

          {keynoteSpeakers.map((speaker, index) => (
            <div
              className="speaker-details-card"
              key={index}
            >
              <img
                src={speaker.photo}
                alt={speaker.name}
              />

              <div className="speaker-details-info">

                <h2>{speaker.name}</h2>

                {speaker.details.map((line, i) => (
                  <p key={i}>
                    {line}
                  </p>
                ))}

              </div>
            </div>
          ))}

        </div>

        <button
          className="back-button"
          onClick={() => navigate("/speakers")}
        >
          Back to Speakers
        </button>

      </section>
    </>
  );
}

export default KeynoteSpeakersDetails;