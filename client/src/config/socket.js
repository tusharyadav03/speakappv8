import { io } from "socket.io-client";
import { API } from "./api";

let _socket = null;

export function getSocket() {
  if (!_socket) {
    _socket = io(API, {
      transports: ["websocket", "polling"],
      reconnection: true,
      reconnectionAttempts: 30,
      reconnectionDelay: 1000,
      reconnectionDelayMax: 5000,
      timeout: 20000,
    });
    _socket.on("connect", () => console.log("✅ Connected:", _socket.id));
    _socket.on("connect_error", (e) => console.error("❌ Socket error:", e.message));
  }
  return _socket;
}
