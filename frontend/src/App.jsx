import React from "react";

function App() {
  const projects = Array.from({ length: 30 }, (_, i) => ({
    id: i + 1,
    title: `Business Website ${i + 1}`,
    client: ["Chennai", "Bangalore", "Mumbai", "Hyderabad", "Delhi"][i % 5],
    amount: `₹${1500 + i * 500}`,
    status: i < 25 ? "Completed" : "Pending"
  }));

  return (
    <div style={{ padding: "30px", fontFamily: "Arial", background: "#f5f5f5" }}>
      <h1 style={{ color: "green" }}>Vignesh Freelance Hub</h1>

      <div style={{ display: "flex", gap: "20px", marginBottom: "20px" }}>
        <div style={{ background: "white", padding: "20px", borderRadius: "10px" }}>
          <h3>Total Earned</h3>
          <h2>₹60,000</h2>
        </div>

        <div style={{ background: "white", padding: "20px", borderRadius: "10px" }}>
          <h3>Pending Due</h3>
          <h2>₹25,000</h2>
        </div>

        <div style={{ background: "white", padding: "20px", borderRadius: "10px" }}>
          <h3>Projects</h3>
          <h2>30</h2>
        </div>
      </div>

      {projects.map((p) => (
        <div
          key={p.id}
          style={{
            background: "white",
            padding: "15px",
            margin: "10px 0",
            borderRadius: "10px"
          }}
        >
          <h4>{p.title}</h4>
          <p>Client: {p.client}</p>
          <p>Amount: {p.amount}</p>
          <p>Status: {p.status}</p>
        </div>
      ))}
    </div>
  );
}

export default App;