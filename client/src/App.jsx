import React, { useState, useEffect, useRef, useCallback } from "react";
import { getSocket } from "./config/socket";
import "./config/webrtc"; // initialize TURN credentials on load
import { AuthProvider, useAuth } from "./context/AuthContext";

// Pages
import Landing from "./pages/Landing";
import HostSetup from "./pages/HostSetup";
import HostDash from "./pages/HostDash";
import JoinPage from "./pages/JoinPage";
import Attendee from "./pages/Attendee";
import Login from "./pages/Login";
import Register from "./pages/Register";
import Admin from "./pages/Admin";
import Presenter from "./pages/Presenter";
import LoadingPage from "./pages/LoadingPage";

// Loading messages per view
const LOADING_MESSAGES = {
  landing: "Loading SpeakApp...",
  host: "Preparing event setup...",
  dash: "Loading dashboard...",
  join: "Preparing to join...",
  att: "Connecting to event...",
  login: "Loading sign in...",
  register: "Loading registration...",
  admin: "Loading admin panel...",
  presenter: "Loading projection...",
};

// Detect presenter mode from URL — takes over the whole app
const PRESENTER_ROOM = new URLSearchParams(window.location.search).get("presenter");

function Routes({ view, room, attUser, ok, nav, home, create, join }) {
  const { user } = useAuth();
  switch (view) {
    case "landing": return <Landing ok={ok} nav={nav} />;
    case "host": return <HostSetup onBack={home} onCreate={create} ok={ok} />;
    case "dash": return room ? <HostDash room={room} onEnd={home} /> : <Landing ok={ok} nav={nav} />;
    case "join": return <JoinPage onBack={home} onJoin={join} ok={ok} />;
    case "att": return room ? <Attendee room={room} user={attUser} onExit={home} /> : <Landing ok={ok} nav={nav} />;
    case "login": return <Login onBack={home} onSwitch={() => nav("register")} />;
    case "register": return <Register onBack={home} onSwitch={() => nav("login")} />;
    case "admin": return user && ["admin", "superadmin"].includes(user.role) ? <Admin onBack={home} /> : <Login onBack={home} onSwitch={() => nav("register")} />;
    default: return <Landing ok={ok} nav={nav} />;
  }
}

export default function App() {
  const [view, setView] = useState("landing");
  const [room, setRoom] = useState(null);
  const [attUser, setAttUser] = useState({ name: "", linkedin: "" });
  const [ok, setOk] = useState(false);
  const [loading, setLoading] = useState(false);
  const [loadingMsg, setLoadingMsg] = useState("");
  const sk = useRef(null);

  // Navigate with a brief loading transition
  const nav = useCallback((v) => {
    // Skip loading for instant views (same view, or server-driven transitions)
    if (v === view) return setView(v);
    setLoadingMsg(LOADING_MESSAGES[v] || "Loading...");
    setLoading(true);
    // Brief delay so the loading page is visible, then swap
    setTimeout(() => {
      setView(v);
      setLoading(false);
    }, 400);
  }, [view]);

  const home = useCallback(() => nav("landing"), [nav]);

  useEffect(() => {
    const s = getSocket();
    sk.current = s;
    s.on("connect", () => setOk(true));
    s.on("disconnect", () => setOk(false));
    s.on("event_created", (d) => {
      setRoom(d);
      setLoadingMsg("Launching event...");
      setLoading(true);
      setTimeout(() => { setView("dash"); setLoading(false); }, 400);
    });
    s.on("room_data", (d) => setRoom((p) => ({ ...p, ...d })));
    s.on("event_ended", ({ reason }) => { alert(`Event ended${reason ? ": " + reason : ""}`); setView("landing"); setRoom(null); });
    s.on("error", (m) => alert(m));
    setOk(s.connected);
    if (new URLSearchParams(window.location.search).get("room")) setView("join");
    return () => { s.off("connect"); s.off("disconnect"); s.off("event_created"); s.off("room_data"); s.off("event_ended"); s.off("error"); };
  }, []);

  const create = (d) => { if (!ok) return alert("Connecting..."); sk.current.emit("create_event", d); };
  const join = (code, u) => {
    if (!ok) return alert("Connecting...");
    setAttUser(u);
    sk.current.emit("join_room_attendee", { roomId: code.toUpperCase(), user: u });
    setLoadingMsg("Joining event...");
    setLoading(true);
    setTimeout(() => { setView("att"); setLoading(false); }, 400);
  };

  // Presenter mode short-circuits everything — it's a display-only view
  if (PRESENTER_ROOM) {
    return (
      <AuthProvider>
        <Presenter roomId={PRESENTER_ROOM} />
      </AuthProvider>
    );
  }

  return (
    <AuthProvider>
      {loading
        ? <LoadingPage message={loadingMsg} />
        : <Routes view={view} room={room} attUser={attUser} ok={ok} nav={nav} home={home} create={create} join={join} />
      }
    </AuthProvider>
  );
}
