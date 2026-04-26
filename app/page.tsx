"use client";

import { useEffect, useState } from "react";
import { createClient } from "@supabase/supabase-js";

const supabase = createClient(
  process.env.NEXT_PUBLIC_SUPABASE_URL!,
  process.env.NEXT_PUBLIC_SUPABASE_ANON_KEY!
);

export default function Home() {
  const [moorings, setMoorings] = useState<any[]>([]);

  useEffect(() => {
    fetchMoorings();
  }, []);

  async function fetchMoorings() {
    const { data } = await supabase.from("moorings").select("*");
    if (data) setMoorings(data);
  }

  return (
    <main style={{ padding: 20 }}>
      <h1>Dockr App</h1>
      <p>Find your mooring</p>

      {moorings.map((m) => (
        <div key={m.id}>
          <h2>{m.title}</h2>
          <p>{m.location}</p>
          <p>£{m.price_per_night}</p>
        </div>
      ))}
    </main>
  );
}
