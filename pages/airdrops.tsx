// pages/airdrops.tsx

import { useEffect, useState } from "react";
import axios from "axios";

export default function AirdropsPage() {
  const [airdrops, setAirdrops] = useState<any[]>([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    axios.get("https://airdrop-backend-97v5.onrender.com/data/airdrops.json").then((res) => {
      setAirdrops(res.data);
      setLoading(false);
    });
  }, []);

  return (
    <div className="p-6">
      <h1 className="text-2xl font-bold mb-4">📋 Live Airdrops</h1>
      {loading ? (
        <p>Loading...</p>
      ) : (
        <ul className="grid gap-4">
          {airdrops.map((drop, index) => (
            <li key={index} className="border rounded p-4 shadow">
              <h2 className="text-lg font-semibold">{drop.title}</h2>
              <p>{drop.description}</p>
              <p className="text-sm text-muted">⛓ {drop.blockchain} • 🎁 {drop.reward}</p>
              <a
                href={drop.link}
                target="_blank"
                className="text-blue-500 hover:underline mt-2 block"
              >
                🔗 Visit Airdrop
              </a>
            </li>
          ))}
        </ul>
      )}
    </div>
  );
}
