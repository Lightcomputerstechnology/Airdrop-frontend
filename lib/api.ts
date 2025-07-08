// lib/api.ts

import axios from "axios";

const API_BASE = process.env.NEXT_PUBLIC_API_BASE || "https://airdrop-backend-97v5.onrender.com";

export async function sendCommand(command: string) {
  const res = await axios.post(`${API_BASE}/ai/command`, { command });
  return res.data;
}
