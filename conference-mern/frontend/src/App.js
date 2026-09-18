
// import {
//   BrowserRouter,
//   Routes,
//   Route,
//   Link,
//   useLocation,
//   useNavigate,
// } from "react-router-dom";

// // Pages
// import Home from "./pages/Home";
// import Commitees from "./pages/Commitees";
// import Sessions from "./pages/Sessions";
// import Speakers from "./pages/Speakers";
// import Register from "./pages/Register";
// import Contact from "./pages/Contact";
// // import Login from "./pages/Login";
// import Footer from "./pages/Footer";
// import CallForPapers from "./pages/CallForPapers";

// const NAVBAR_HEIGHT = 70;

// /* ================= NAVBAR COMPONENT ================= */
// function Navbar() {
//   const location = useLocation();
//   const navigate = useNavigate();

//   const isHome = location.pathname === "/";
//   const isLoggedIn = !!localStorage.getItem("token");

//   const logout = () => {
//     localStorage.removeItem("token"); // 🔥 remove JWT
//     navigate("/login");               // 🔁 redirect
//   };

//   return (
//     <>
//       {/* NAVBAR */}
//       <nav
//         style={{
//           position: isHome ? "absolute" : "relative",
//           top: 0,
//           width: "100%",
//           height: `${NAVBAR_HEIGHT}px`,
//           padding: "20px",
//           boxSizing: "border-box",
//           background: isHome ? "transparent" : "#222",
//           color: "white",
//           display: "flex",
//           justifyContent: "space-between",
//           alignItems: "center",
//           zIndex: 1000,
//         }}
//       >
//         {/* LEFT LINKS */}
//         <div>
//           <Link style={linkStyle} to="/">Home</Link>
//           <Link style={linkStyle} to="/Commitees">Commitees</Link>
//           <Link style={linkStyle} to="/sessions">Sessions</Link>
//           <Link style={linkStyle} to="/speakers">Speakers</Link>
//           <Link style={linkStyle} to="/contact">Contact</Link>
//           <Link style={linkStyle} to="/CallForPapers">CallForPapers</Link>
//         </div>

//         {/* RIGHT AUTH */}
//         <div>
//           {isLoggedIn ? (
//             <button
//               onClick={logout}
//               style={{
//                 background: "transparent",
//                 color: "white",
//                 border: "1px solid white",
//                 padding: "6px 12px",
//                 borderRadius: "4px",
//                 cursor: "pointer",
//               }}
//             >
//               Logout
//             </button>
//           ) : (
//             <>
//               {/* <Link style={linkStyle} to="/login">Login</Link> */}
//               <Link
//                 to="/register"
//                 style={{
//                   ...linkStyle,
//                   border: "1px solid white",
//                   padding: "6px 12px",
//                   borderRadius: "4px",
//                 }}
//               >
//                 Register
//               </Link>
//             </>
//           )}
//         </div>
//       </nav>

//       {/* HORIZONTAL LINE BELOW NAVBAR */}
//       <div
//         style={{
//           position: isHome ? "absolute" : "relative",
//           top: isHome ? `${NAVBAR_HEIGHT}px` : 0,
//           width: "100%",
//           height: "1px",
//           background: "rgba(255, 255, 255, 0.35)",
//           zIndex: 999,
//         }}
//       />
//     </>
//   );
// }

// /* ================= APP COMPONENT ================= */
// function App() {
//   return (
//     <BrowserRouter>
//       <div style={{ minHeight: "100vh", display: "flex", flexDirection: "column" }}>
        
//         {/* NAVBAR */}
//         <Navbar />

//         {/* PAGE CONTENT */}
//         <div style={{ flex: 1 }}>
//           <Routes>
//             <Route path="/" element={<Home />} />
//             <Route path="/Commitees" element={<Commitees />} />
//             <Route path="/sessions" element={<Sessions />} />
//             <Route path="/speakers" element={<Speakers />} />
//             <Route path="/register" element={<Register />} />
//             {/* <Route path="/login" element={<Login />} /> */}
//             <Route path="/contact" element={<Contact />} />
//             <Route path="/CallForPapers" element={<CallForPapers />} />
//           </Routes>
//         </div>

//         {/* FOOTER */}
//         <Footer />
//       </div>
//     </BrowserRouter>
//   );
// }

// /* ================= COMMON LINK STYLE ================= */
// const linkStyle = {
//   color: "white",
//   margin: "10px",
//   textDecoration: "none",
// };

// export default App;


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
import Commitees from "./pages/Commitees";
import Sessions from "./pages/Sessions";
import Speakers from "./pages/Speakers";
import Register from "./pages/Register";
// import Login from "./pages/Login";
import Contact from "./pages/Contact";
import Footer from "./pages/Footer";
import CallForPapers from "./pages/CallForPapers";

const NAVBAR_HEIGHT = 70;

/* ================= NAVBAR ================= */

function Navbar() {
  const location = useLocation();
  const navigate = useNavigate();

  const isHome = location.pathname === "/";
  const isLoggedIn = !!localStorage.getItem("token");

  const [menuOpen, setMenuOpen] = useState(false);

  const [isMobile, setIsMobile] = useState(
    window.innerWidth <= 768
  );

  useEffect(() => {
    const handleResize = () => {
      setIsMobile(window.innerWidth <= 768);
    };

    window.addEventListener("resize", handleResize);

    return () =>
      window.removeEventListener("resize", handleResize);
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
              onClick={() =>
                setMenuOpen(!menuOpen)
              }
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

              <Link
                style={linkStyle}
                to="/Commitees"
              >
                Commitees
              </Link>

              <Link
                style={linkStyle}
                to="/sessions"
              >
                Sessions
              </Link>

              <Link
                style={linkStyle}
                to="/speakers"
              >
                Speakers
              </Link>

              <Link
                style={linkStyle}
                to="/CallForPapers"
              >
                Call For Papers
              </Link>

              <Link
                style={linkStyle}
                to="/contact"
              >
                Contact
              </Link>

              {isLoggedIn ? (
                <button
                  onClick={logout}
                  style={logoutButton}
                >
                  Logout
                </button>
              ) : (
                <Link
                  to="/register"
                  style={registerButton}
                >
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
            <Link
              style={mobileLink}
              to="/"
              onClick={closeMenu}
            >
              Home
            </Link>

            <Link
              style={mobileLink}
              to="/Commitees"
              onClick={closeMenu}
            >
              Commitees
            </Link>

            <Link
              style={mobileLink}
              to="/sessions"
              onClick={closeMenu}
            >
              Sessions
            </Link>

            <Link
              style={mobileLink}
              to="/speakers"
              onClick={closeMenu}
            >
              Speakers
            </Link>

            <Link
              style={mobileLink}
              to="/CallForPapers"
              onClick={closeMenu}
            >
              Call For Papers
            </Link>

            <Link
              style={mobileLink}
              to="/contact"
              onClick={closeMenu}
            >
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
              <Link
                to="/register"
                style={registerButton}
                onClick={closeMenu}
              >
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
            <Route path="/" element={<Home />} />

            <Route
              path="/Commitees"
              element={<Commitees />}
            />

            <Route
              path="/sessions"
              element={<Sessions />}
            />

            <Route
              path="/speakers"
              element={<Speakers />}
            />

            <Route
              path="/register"
              element={<Register />}
            />

            {/* <Route
              path="/login"
              element={<Login />}
            /> */}

            <Route
              path="/contact"
              element={<Contact />}
            />

            <Route
              path="/CallForPapers"
              element={<CallForPapers />}
            />
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
