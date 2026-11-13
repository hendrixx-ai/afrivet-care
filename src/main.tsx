import React, { useState } from "react";
import { createRoot } from "react-dom/client";
import "./styles.css";

type Pet = { name: string; type: string; age: string; status: string };

const pets: Pet[] = [
  { name: "Milo", type: "Dog", age: "3 years", status: "Healthy" },
  { name: "Kiki", type: "Cat", age: "1 year", status: "Vaccination due" }
];

function App() {
  const [active, setActive] = useState("Home");
  const [showAuth, setShowAuth] = useState(false);

  const nav = ["Home", "Pets", "Appointments", "Records"];

  return (
    <div className="app">
      <header className="topbar">
        <div className="brand"><span className="mark">A</span><div><strong>AFRIVet</strong><small>CARE</small></div></div>
        <button className="signin" onClick={() => setShowAuth(true)}>Sign in</button>
      </header>

      <main>
        {active === "Home" && <section className="hero">
          <div className="hero-copy">
            <p className="eyebrow">VETERINARY CARE • AFRICA</p>
            <h1>Better care for every animal.</h1>
            <p className="lead">A simple digital home for pet owners, clinics and veterinary teams.</p>
            <div className="actions">
              <button className="primary" onClick={() => setActive("Pets")}>Add your pet</button>
              <button className="secondary" onClick={() => setActive("Appointments")}>Book care</button>
            </div>
          </div>
          <div className="hero-card">
            <div className="orb">🐾</div>
            <div><span className="tag">AFRICA FIRST</span><h3>Trusted veterinary support</h3><p>Keep health records, appointments and care information in one place.</p></div>
          </div>
        </section>}

        {active === "Pets" && <section className="page"><p className="eyebrow">MY ANIMALS</p><h2>Pets</h2><div className="grid">{pets.map(p => <article className="card" key={p.name}><div className="pet-icon">{p.type === "Dog" ? "🐕" : "🐈"}</div><div><h3>{p.name}</h3><p>{p.type} · {p.age}</p><span className="status">{p.status}</span></div></article>)}<article className="add card" onClick={() => alert("Pet registration will connect to the database in the next setup step.")}>＋ Add pet</article></div></section>}

        {active === "Appointments" && <section className="page"><p className="eyebrow">CARE PLANNING</p><h2>Appointments</h2><div className="empty card"><div className="big">📅</div><h3>Book veterinary care</h3><p>Connect a clinic and schedule an appointment. Authentication and database integration are ready for the next deployment step.</p><button className="primary">Find a clinic</button></div></section>}

        {active === "Records" && <section className="page"><p className="eyebrow">HEALTH HISTORY</p><h2>Health records</h2><div className="record card"><span>Vaccination</span><strong>Core vaccine</strong><small>Ready to connect to secure records storage.</small></div><div className="record card"><span>Wellness</span><strong>Annual check-up</strong><small>Track visits, medications and documents in one place.</small></div></section>}
      </main>

      <nav className="bottomnav">{nav.map(n => <button className={active === n ? "active" : ""} onClick={() => setActive(n)} key={n}><span>{n === "Home" ? "⌂" : n === "Pets" ? "🐾" : n === "Appointments" ? "◷" : "▤"}</span>{n}</button>)}</nav>

      {showAuth && <div className="modal" onClick={() => setShowAuth(false)}><div className="auth card" onClick={e => e.stopPropagation()}><button className="close" onClick={() => setShowAuth(false)}>×</button><p className="eyebrow">WELCOME</p><h2>Sign in to AFRIVet</h2><p>Secure authentication with Clerk will be connected before production launch.</p><button className="primary full">Continue</button></div></div>}
    </div>
  );
}
createRoot(document.getElementById("root")!).render(<React.StrictMode><App /></React.StrictMode>);