import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import axios from "axios";

const api = import.meta.env.VITE_API_URL || "http://localhost:3000";

const Login = () => {
  const [email, setEmail]       = useState("");
  const [password, setPassword] = useState("");
  const [showPass, setShowPass] = useState(false);
  const [loading, setLoading]   = useState(false);
  const [error, setError]       = useState("");
  const navigate = useNavigate();

  const handleLogin = async (e) => {
    e.preventDefault();
    setError("");
    setLoading(true);
    try {
      const res = await axios.post(`${api}/api/users/login`, { email, password });
      if (res.status === 200 || res.status === 201) {
        const userRole = res.data.user.role || "USER";
        localStorage.setItem("userRole", userRole);
        localStorage.setItem("userId", res.data.user._id);
        localStorage.setItem("token", res.data.token);
        navigate(userRole === "ADMIN" || userRole === "STAFF" ? "/admin-dashboard" : "/home");
      }
    } catch (err) {
      setError(err.response?.data?.message || "An error occurred. Please try again.");
    } finally {
      setLoading(false);
    }
  };

  return (
    <>
      <style>{`
        @keyframes fadeSlideUp {
          from { opacity:0; transform:translateY(32px); }
          to   { opacity:1; transform:translateY(0); }
        }
        @keyframes floatBubble {
          0%,100% { transform:translateY(0) scale(1); }
          50%     { transform:translateY(-18px) scale(1.04); }
        }
        @keyframes spin { to { transform:rotate(360deg); } }

        .login-input {
          width:100%; padding:0.9rem 1rem 0.9rem 2.8rem;
          border-radius:12px; border:1.5px solid rgba(255,255,255,0.2);
          background:rgba(255,255,255,0.08); color:#fff; font-size:0.95rem;
          outline:none; transition:border-color 0.25s,background 0.25s,box-shadow 0.25s;
          box-sizing:border-box; backdrop-filter:blur(4px);
        }
        .login-input::placeholder { color:rgba(255,255,255,0.4); }
        .login-input:focus {
          border-color:#22c55e; background:rgba(255,255,255,0.13);
          box-shadow:0 0 0 4px rgba(34,197,94,0.2);
        }
        .login-btn {
          width:100%; padding:0.95rem; border-radius:12px; border:none;
          background:linear-gradient(135deg,#22c55e 0%,#1d4ed8 100%);
          color:#fff; font-weight:700; font-size:1rem; cursor:pointer;
          letter-spacing:0.03em; box-shadow:0 6px 24px rgba(34,197,94,0.35);
          transition:transform 0.2s,box-shadow 0.2s;
        }
        .login-btn:hover:not(:disabled) { transform:translateY(-2px); box-shadow:0 10px 32px rgba(34,197,94,0.45); }
        .login-btn:disabled { opacity:0.7; cursor:not-allowed; }
        .login-label {
          display:block; font-size:0.78rem; font-weight:700;
          color:rgba(255,255,255,0.6); letter-spacing:0.1em;
          text-transform:uppercase; margin-bottom:8px;
        }
        .input-icon {
          position:absolute; left:14px; top:50%; transform:translateY(-50%);
          color:rgba(255,255,255,0.4); pointer-events:none; font-size:1rem;
        }
        .pass-toggle {
          position:absolute; right:14px; top:50%; transform:translateY(-50%);
          background:none; border:none; color:rgba(255,255,255,0.4);
          cursor:pointer; font-size:0.82rem; padding:0; transition:color 0.2s;
        }
        .pass-toggle:hover { color:#22c55e; }
        @media(max-width:991px){ .left-panel{ display:none !important; } }
      `}</style>

      <div style={{ minHeight:"100vh", display:"flex", position:"relative", overflow:"hidden", fontFamily:"'Inter',system-ui,sans-serif" }}>

        {/* Background */}
        <div style={{ position:"absolute", inset:0, backgroundImage:'url("https://images.unsplash.com/photo-1501004318641-b39e6451bec6?w=1600&q=80")', backgroundSize:"cover", backgroundPosition:"center" }} />
        <div style={{ position:"absolute", inset:0, background:"linear-gradient(135deg,rgba(5,46,22,0.9) 0%,rgba(29,78,216,0.65) 100%)" }} />
        <div style={{ position:"absolute", top:"-120px", left:"-120px", width:"440px", height:"440px", borderRadius:"50%", background:"radial-gradient(circle,rgba(34,197,94,0.2) 0%,transparent 70%)", animation:"floatBubble 7s ease-in-out infinite", pointerEvents:"none" }} />
        <div style={{ position:"absolute", bottom:"-100px", right:"-80px", width:"380px", height:"380px", borderRadius:"50%", background:"radial-gradient(circle,rgba(59,130,246,0.2) 0%,transparent 70%)", animation:"floatBubble 9s ease-in-out infinite reverse", pointerEvents:"none" }} />

        {/* Left panel */}
        <div className="left-panel" style={{ flex:1, display:"flex", flexDirection:"column", justifyContent:"center", padding:"4rem", position:"relative", zIndex:1 }}>
          <div style={{ display:"flex", alignItems:"center", gap:"12px", marginBottom:"48px" }}>
            <div style={{ width:"46px", height:"46px", background:"linear-gradient(145deg,#15803d,#1d4ed8)", borderRadius:"12px", display:"flex", alignItems:"center", justifyContent:"center", fontSize:"22px", boxShadow:"0 4px 16px rgba(34,197,94,0.35)", border:"1px solid rgba(34,197,94,0.3)" }}>♻</div>
            <div>
              <div style={{ fontSize:"1.2rem", fontWeight:"800", color:"#fff", letterSpacing:"-0.03em" }}>Eco<span style={{ color:"#22c55e" }}>Manage</span></div>
              <div style={{ fontSize:"0.6rem", color:"rgba(255,255,255,0.45)", letterSpacing:"0.15em", textTransform:"uppercase" }}>Waste Solutions</div>
            </div>
          </div>
          <h1 style={{ fontSize:"clamp(2rem,3.5vw,3rem)", fontWeight:"800", color:"#fff", lineHeight:"1.15", letterSpacing:"-0.03em", marginBottom:"20px" }}>
            Managing Waste,<br />
            <span style={{ background:"linear-gradient(90deg,#22c55e,#3b82f6)", WebkitBackgroundClip:"text", WebkitTextFillColor:"transparent", backgroundClip:"text" }}>Protecting Earth</span>
          </h1>
          <p style={{ color:"rgba(255,255,255,0.6)", fontSize:"1rem", lineHeight:"1.75", maxWidth:"400px" }}>
            Join thousands of communities building a cleaner, greener future with intelligent waste management.
          </p>
          <div style={{ display:"flex", gap:"32px", marginTop:"48px" }}>
            {[{ num:"500+", label:"Pickups" }, { num:"1200+", label:"Customers" }, { num:"20+", label:"Areas" }].map((s,i) => (
              <div key={i}>
                <div style={{ fontSize:"1.6rem", fontWeight:"800", background:"linear-gradient(90deg,#22c55e,#3b82f6)", WebkitBackgroundClip:"text", WebkitTextFillColor:"transparent", backgroundClip:"text", letterSpacing:"-0.03em" }}>{s.num}</div>
                <div style={{ fontSize:"0.75rem", color:"rgba(255,255,255,0.45)", textTransform:"uppercase", letterSpacing:"0.08em" }}>{s.label}</div>
              </div>
            ))}
          </div>
        </div>

        {/* Right panel — login form */}
        <div style={{ width:"100%", maxWidth:"480px", display:"flex", alignItems:"center", justifyContent:"center", padding:"2rem", position:"relative", zIndex:1 }}>
          <div style={{ width:"100%", background:"rgba(255,255,255,0.07)", backdropFilter:"blur(24px)", WebkitBackdropFilter:"blur(24px)", border:"1px solid rgba(255,255,255,0.14)", borderRadius:"24px", padding:"2.8rem", boxShadow:"0 24px 64px rgba(0,0,0,0.4)", animation:"fadeSlideUp 0.6s cubic-bezier(0.16,1,0.3,1) forwards" }}>

            {/* Header */}
            <div style={{ textAlign:"center", marginBottom:"1.8rem" }}>
              <div style={{ width:"54px", height:"54px", background:"linear-gradient(145deg,#15803d,#1d4ed8)", borderRadius:"14px", display:"flex", alignItems:"center", justifyContent:"center", fontSize:"24px", margin:"0 auto 16px", boxShadow:"0 4px 18px rgba(34,197,94,0.35)", border:"1px solid rgba(34,197,94,0.3)" }}>♻</div>
              <h2 style={{ color:"#fff", fontWeight:"800", fontSize:"1.6rem", letterSpacing:"-0.03em", marginBottom:"6px" }}>
                {email ? "Welcome Back" : "Welcome"}
              </h2>
              <p style={{ color:"rgba(255,255,255,0.45)", fontSize:"0.88rem", margin:0 }}>Sign in to your account to continue</p>
            </div>

            {/* Error */}
            {error && (
              <div style={{ background:"rgba(239,68,68,0.15)", border:"1px solid rgba(239,68,68,0.3)", borderRadius:"10px", padding:"12px 16px", color:"#fca5a5", fontSize:"0.88rem", marginBottom:"1.2rem", display:"flex", alignItems:"center", gap:"8px" }}>
                ⚠️ {error}
              </div>
            )}

            <form onSubmit={handleLogin}>
              {/* Email */}
              <div style={{ marginBottom:"1.4rem" }}>
                <label className="login-label">Email Address</label>
                <div style={{ position:"relative" }}>
                  <span className="input-icon">✉</span>
                  <input type="email" className="login-input" value={email} onChange={(e) => setEmail(e.target.value)} placeholder="you@example.com" required />
                </div>
              </div>

              {/* Password */}
              <div style={{ marginBottom:"1.8rem" }}>
                <label className="login-label">Password</label>
                <div style={{ position:"relative" }}>
                  <span className="input-icon">🔒</span>
                  <input type={showPass ? "text" : "password"} className="login-input" value={password} onChange={(e) => setPassword(e.target.value)} placeholder="Enter your password" required style={{ paddingRight:"3rem" }} />
                  <button type="button" className="pass-toggle" onClick={() => setShowPass(!showPass)} tabIndex={-1}>{showPass ? "Hide" : "Show"}</button>
                </div>
              </div>

              {/* Submit */}
              <button type="submit" className="login-btn" disabled={loading}>
                {loading
                  ? <span style={{ display:"flex", alignItems:"center", justifyContent:"center", gap:"10px" }}>
                      <span style={{ width:"16px", height:"16px", border:"2px solid rgba(255,255,255,0.3)", borderTopColor:"#fff", borderRadius:"50%", display:"inline-block", animation:"spin 0.7s linear infinite" }} />
                      Signing in...
                    </span>
                  : "Sign In →"}
              </button>
            </form>

            {/* Divider + footer */}
            <div style={{ display:"flex", alignItems:"center", gap:"12px", margin:"1.4rem 0" }}>
              <div style={{ flex:1, height:"1px", background:"rgba(255,255,255,0.1)" }} />
              <span style={{ color:"rgba(255,255,255,0.3)", fontSize:"0.75rem" }}>or</span>
              <div style={{ flex:1, height:"1px", background:"rgba(255,255,255,0.1)" }} />
            </div>
            <p style={{ textAlign:"center", color:"rgba(255,255,255,0.35)", fontSize:"0.78rem", margin:0 }}>
              By signing in, you agree to our{" "}
              <span style={{ color:"#22c55e", cursor:"pointer" }}>Terms of Service</span>{" "}and{" "}
              <span style={{ color:"#3b82f6", cursor:"pointer" }}>Privacy Policy</span>
            </p>
          </div>
        </div>
      </div>
    </>
  );
};

export default Login;
