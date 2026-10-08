import "./home.css";
import heroImage from "../assets/hero-bg.jpg";

export default function Home() {
  return (
    <div>

      {/* ================= HERO SECTION ================= */}

      <section
        className="hero-section"
        style={{
          backgroundImage: `url(${heroImage})`,
        }}
      >
        <div className="hero-overlay">

          <h1>
            INTERNATIONAL CONFERENCE ON
          </h1>

          <h2>
            INNOVATIONS AND FUTURE SCOPE OF
            <br />
            MECHANICAL ENGINEERING
          </h2>

          <h3>
            IN DIGITAL ERA (ICIFMEDE 2026)
          </h3>

          <p>
            December 20–21, 2026
          </p>

          <p>
            Anurag University,
            <br />
            Hyderabad, India
          </p>

        </div>
      </section>

    </div>
  );
}