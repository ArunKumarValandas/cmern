
import "./home.css";
import heroImage from "../assets/hero-bg.jpg";

export default function Home() {
  return (
    <section
      className="hero-section"
      style={{ backgroundImage: `url(${heroImage})` }}
    >
      <div className="hero-overlay">
        <div className="hero-content">
          <h1>INTERNATIONAL CONFERENCE ON</h1>

          <h2>
            INNOVATIONS AND FUTURE SCOPE OF
            <br />
            MECHANICAL ENGINEERING IN DIGITAL ERA
          </h2>

          <h3>(ICIFMEDE 2027)</h3>

          <p className="event-date">June 10–11, 2027</p>

          <div className="organiser-details">
            <p className="organised-by">Organised by</p>
            <p>Department of Mechanical Engineering</p>
            <p>Anurag University, Hyderabad, Telangana, India.</p>
            <p className="contact-details">
              ✉ icifmede2027@anurag.edu.in
              <span>|</span>
              ☎ +91 98765 43210
            </p>
            <p className="copyright">
              © 2027 ICIFMEDE. All Rights Reserved.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}
