import { useState, useEffect } from "react";
import {
  BrowserRouter,
  Routes,
  Route,
  Link,
  useLocation,
  useNavigate,
} from "react-router-dom";

// Pages
import Home from "./pages/Home";
import About from "./pages/About";
import AuthorsCorner from "./pages/AuthorsCorner";
import Commitees from "./pages/Commitees";
import Speakers from "./pages/Speakers";
import Events from "./pages/Events";
import Sponsorship from "./pages/Sponsorship";
import Publication from "./pages/Publication";
import Contact from "./pages/Contact";
import Register from "./pages/Register";
import Footer from "./pages/Footer";
// About Details
import AnuragUniversityDetails from "./pages/AboutDetails/AnuragUniversityDetails";
import MechanicalEngineeringDetails from "./pages/AboutDetails/MechanicalEngineeringDetails";
import ConferenceDetails from "./pages/AboutDetails/ConferenceDetails";
// Author's Corner Details
import CallForPapersDetails from "./pages/AuthorsCornerDetails/CallForPapersDetails";
import ConferenceTracksDetails from "./pages/AuthorsCornerDetails/ConferenceTracksDetails";
import SubmissionPortalDetails from "./pages/AuthorsCornerDetails/SubmissionPortalDetails";
// Committee Details
import InternationalAdvisoryCommitteeDetails from "./pages/CommitteeDetails/InternationalAdvisoryCommitteeDetails";
import NationalAdvisoryCommitteeDetails from "./pages/CommitteeDetails/NationalAdvisoryCommitteeDetails";
import OrganizingCommitteeDetails from "./pages/CommitteeDetails/OrganizingCommitteeDetails";
// Speaker Details
import KeynoteSpeakersDetails from "./pages/SpeakersDetails/KeynoteSpeakersDetails";

import ChiefGuestDetails from "./pages/SpeakersDetails/ChiefGuestDetails";
// // Event Details
import SubmissionDeadlineDetails from "./pages/EventsDetails/SubmissionDeadlineDetails";
import EventScheduleDetails from "./pages/EventsDetails/EventScheduleDetails";

const NAVBAR_HEIGHT = 70;

/* ================= NAVBAR ================= */

function Navbar() {
  const location = useLocation();
  const navigate = useNavigate();

  const isHome = location.pathname === "/";
  const isLoggedIn = !!localStorage.getItem("token");

  const [menuOpen, setMenuOpen] = useState(false);

  const [isMobile, setIsMobile] = useState(window.innerWidth <= 768);

  useEffect(() => {
    const handleResize = () => {
      setIsMobile(window.innerWidth <= 768);
    };

    window.addEventListener("resize", handleResize);

    return () => window.removeEventListener("resize", handleResize);
  }, []);

  const logout = () => {
    localStorage.removeItem("token");
    navigate("/register");
  };

  const closeMenu = () => {
    setMenuOpen(false);
  };

  return (
    <>
      <nav
        style={{
          position: isHome ? "absolute" : "relative",
          top: 0,
          left: 0,
          width: "100%",
          minHeight: NAVBAR_HEIGHT,
          background: isHome ? "transparent" : "#222",
          color: "#fff",
          zIndex: 1000,
          boxSizing: "border-box",
          padding: isMobile ? "15px" : "20px",
        }}
      >
        {/* TOP ROW */}

        <div
          style={{
            display: "flex",
            justifyContent: "space-between",
            alignItems: "center",
          }}
        >
          {/* LOGO */}

          <h2
            style={{
              margin: 0,
              fontSize: isMobile ? "20px" : "24px",
              color: "#fff",
            }}
          >
            ICIFMEDE
          </h2>

          {/* HAMBURGER */}

          {isMobile && (
            <button
              onClick={() => setMenuOpen(!menuOpen)}
              style={{
                background: "transparent",
                color: "white",
                border: "none",
                fontSize: "30px",
                cursor: "pointer",
              }}
            >
              ☰
            </button>
          )}

          {/* DESKTOP MENU */}

          {!isMobile && (
            <div
              style={{
                display: "flex",
                alignItems: "center",
              }}
            >
              <Link style={linkStyle} to="/">
                Home
              </Link>

              <Link style={linkStyle} to="/about">
                About
              </Link>

              <Link style={linkStyle} to="/authors-corner">
                Author's Corner
              </Link>

              <Link style={linkStyle} to="/committees">
                Committees
              </Link>

              <Link style={linkStyle} to="/speakers">
                Speakers
              </Link>

              <Link style={linkStyle} to="/events">
                Events
              </Link>

              <Link style={linkStyle} to="/sponsorship">
                Sponsorship
              </Link>

              <Link style={linkStyle} to="/publications">
                Publications
              </Link>

              <Link style={linkStyle} to="/contact">
                Contact
              </Link>

              {isLoggedIn ? (
                <button onClick={logout} style={logoutButton}>
                  Logout
                </button>
              ) : (
                <Link to="/register" style={registerButton}>
                  Register
                </Link>
              )}
            </div>
          )}
        </div>

        {/* MOBILE MENU */}

        {isMobile && menuOpen && (
          <div
            style={{
              display: "flex",
              flexDirection: "column",
              marginTop: "20px",
              background: "#222",
              borderRadius: "8px",
              padding: "10px",
            }}
          >
            <Link style={mobileLink} to="/" onClick={closeMenu}>
              Home
            </Link>

            <Link style={mobileLink} to="/about" onClick={closeMenu}>
              About
            </Link>

            <Link style={mobileLink} to="/authors-corner" onClick={closeMenu}>
              Author's Corner
            </Link>

            <Link style={mobileLink} to="/committees" onClick={closeMenu}>
              Committees
            </Link>

            <Link style={mobileLink} to="/speakers" onClick={closeMenu}>
              Speakers
            </Link>

            <Link style={mobileLink} to="/events" onClick={closeMenu}>
              Events
            </Link>

            <Link style={mobileLink} to="/sponsorship" onClick={closeMenu}>
              Sponsorship
            </Link>

            <Link style={mobileLink} to="/publications" onClick={closeMenu}>
              Publications
            </Link>

            <Link style={mobileLink} to="/contact" onClick={closeMenu}>
              Contact
            </Link>
            {isLoggedIn ? (
              <button
                onClick={() => {
                  logout();
                  closeMenu();
                }}
                style={logoutButton}
              >
                Logout
              </button>
            ) : (
              <Link to="/register" style={registerButton} onClick={closeMenu}>
                Register
              </Link>
            )}
          </div>
        )}
      </nav>

      {/* Horizontal Line */}
      <div
        style={{
          position: isHome ? "absolute" : "relative",
          top: isHome ? `${NAVBAR_HEIGHT}px` : 0,
          width: "100%",
          height: "1px",
          background: "rgba(255,255,255,0.35)",
          zIndex: 999,
        }}
      />
    </>
  );
}

/* ================= APP ================= */

function App() {
  return (
    <BrowserRouter>
      <div
        style={{
          minHeight: "100vh",
          display: "flex",
          flexDirection: "column",
        }}
      >
        <Navbar />

        <div style={{ flex: 1 }}>
          <Routes>
            {/* ==================== MAIN PAGES ==================== */}

            <Route path="/" element={<Home />} />

            <Route path="/about" element={<About />} />

            <Route path="/authors-corner" element={<AuthorsCorner />} />

            <Route
              path="/authors-corner/call-for-papers"
              element={<CallForPapersDetails />}
            />

            <Route
              path="/authors-corner/conference-tracks"
              element={<ConferenceTracksDetails />}
            />

            <Route
              path="/authors-corner/submission-portal"
              element={<SubmissionPortalDetails />}
            />
            <Route
              path="/committees/international-advisory"
              element={<InternationalAdvisoryCommitteeDetails />}
            />

            <Route
              path="/committees/national-advisory"
              element={<NationalAdvisoryCommitteeDetails />}
            />

            <Route
              path="/committees/organizing"
              element={<OrganizingCommitteeDetails />}
            />
            <Route
              path="/speakers/keynote"
              element={<KeynoteSpeakersDetails />}
            />

            <Route
              path="/speakers/chief-guest"
              element={<ChiefGuestDetails />}
            />
            <Route
              path="/events/submission-deadline"
              element={<SubmissionDeadlineDetails />}
            />

            <Route path="/events/schedule" element={<EventScheduleDetails />} />
            <Route path="/committees" element={<Commitees />} />

            <Route path="/speakers" element={<Speakers />} />

            <Route path="/events" element={<Events />} />

            <Route path="/sponsorship" element={<Sponsorship />} />

            <Route path="/publications" element={<Publication />} />

            <Route path="/contact" element={<Contact />} />

            <Route path="/register" element={<Register />} />

            {/* ==================== ABOUT DETAILS ==================== */}

            <Route
              path="/about/anurag-university"
              element={<AnuragUniversityDetails />}
            />

            <Route
              path="/about/mechanical-engineering"
              element={<MechanicalEngineeringDetails />}
            />

            <Route path="/about/conference" element={<ConferenceDetails />} />
          </Routes>
        </div>

        <Footer />
      </div>
    </BrowserRouter>
  );
}

/* ================= COMMON STYLES ================= */

const linkStyle = {
  color: "#fff",
  textDecoration: "none",
  margin: "0 12px",
  fontSize: "16px",
  transition: "0.3s",
};

const mobileLink = {
  color: "#fff",
  textDecoration: "none",
  padding: "12px 0",
  borderBottom: "1px solid rgba(255,255,255,0.2)",
  fontSize: "16px",
};

const registerButton = {
  color: "#fff",
  textDecoration: "none",
  border: "1px solid white",
  padding: "8px 15px",
  borderRadius: "5px",
  marginLeft: "12px",
  display: "inline-block",
};

const logoutButton = {
  background: "transparent",
  color: "#fff",
  border: "1px solid white",
  padding: "8px 15px",
  borderRadius: "5px",
  marginLeft: "12px",
  cursor: "pointer",
};

export default App;
