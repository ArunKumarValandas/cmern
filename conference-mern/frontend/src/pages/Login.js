// import { useState } from "react";
// import { useNavigate } from "react-router-dom";
// import axios from "axios";

// export default function Login() {
//   const navigate = useNavigate();

//   const [data, setData] = useState({
//     email: "",
//     password: "",
//   });

//   const login = () => {
//     if (!data.email || !data.password) {
//       alert("Enter email and password");
//       return;
//     }

//     axios
//       .post("http://localhost:5000/api/auth/login", data)
//       .then((res) => {
//         // 🔥 SAVE TOKEN (THIS WAS MISSING)
//         localStorage.setItem("token", res.data.token);

//         alert("Login Successful");
//         console.log("JWT Token:", res.data.token);

//         // 🔥 redirect after login
//         navigate("/");
//       })
//       .catch(() => alert("Invalid credentials or backend not running"));
//   };

//   return (
//     <div style={{ padding: "40px", maxWidth: "400px", margin: "auto" }}>
//       <h2>Login</h2>

//       <input
//         type="email"
//         placeholder="Email"
//         style={{ width: "100%", padding: "10px", margin: "10px 0" }}
//         onChange={(e) => setData({ ...data, email: e.target.value })}
//       />

//       <input
//         type="password"
//         placeholder="Password"
//         style={{ width: "100%", padding: "10px", margin: "10px 0" }}
//         onChange={(e) => setData({ ...data, password: e.target.value })}
//       />

//       <button onClick={login} style={{ padding: "10px", width: "100%" }}>
//         Login
//       </button>
//     </div>
//   );
// }
import { useState } from "react";
import { useNavigate } from "react-router-dom";
import axios from "axios";

export default function Login() {
  const navigate = useNavigate();

  const isMobile = window.innerWidth <= 768;

  const [data, setData] = useState({
    email: "",
    password: "",
  });

  const login = () => {
    if (!data.email || !data.password) {
      alert("Enter email and password");
      return;
    }

    axios
      .post("http://localhost:5000/api/auth/login", data)
      .then((res) => {
        localStorage.setItem("token", res.data.token);

        alert("Login Successful");
        console.log("JWT Token:", res.data.token);

        navigate("/");
      })
      .catch(() => alert("Invalid credentials or backend not running"));
  };

  return (
    <div
      style={{
        background: "#e6e6ea",
        minHeight: "100vh",
        padding: isMobile ? "20px 15px" : "50px",
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
      }}
    >
      <div
        style={{
          background: "#fff",
          width: "100%",
          maxWidth: "420px",
          padding: isMobile ? "25px" : "35px",
          borderRadius: "10px",
          boxShadow: "0 2px 10px rgba(0,0,0,0.08)",
        }}
      >
        {/* Heading */}

        <div
          style={{
            display: "flex",
            alignItems: "center",
            marginBottom: "25px",
          }}
        >
          <div
            style={{
              width: "8px",
              height: "24px",
              background: "#c62828",
              marginRight: "10px",
            }}
          />

          <h2
            style={{
              margin: 0,
              fontSize: isMobile ? "28px" : "34px",
              letterSpacing: "1px",
            }}
          >
            LOGIN
          </h2>
        </div>

        <input
          type="email"
          placeholder="Email"
          value={data.email}
          onChange={(e) =>
            setData({ ...data, email: e.target.value })
          }
          style={{
            width: "100%",
            padding: "12px",
            marginBottom: "18px",
            border: "1px solid #ccc",
            borderRadius: "6px",
            fontSize: "16px",
            boxSizing: "border-box",
          }}
        />

        <input
          type="password"
          placeholder="Password"
          value={data.password}
          onChange={(e) =>
            setData({ ...data, password: e.target.value })
          }
          style={{
            width: "100%",
            padding: "12px",
            marginBottom: "25px",
            border: "1px solid #ccc",
            borderRadius: "6px",
            fontSize: "16px",
            boxSizing: "border-box",
          }}
        />

        <button
          onClick={login}
          style={{
            width: "100%",
            padding: "13px",
            background: "#c62828",
            color: "#fff",
            border: "none",
            borderRadius: "6px",
            cursor: "pointer",
            fontSize: "16px",
            fontWeight: "600",
          }}
        >
          Login
        </button>
      </div>
    </div>
  );
}