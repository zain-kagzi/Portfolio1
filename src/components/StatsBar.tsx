const StatsBar = () => {
  const stats = [
    { num: "12K", label: "All Project Completed" },
    { num: "10K", label: "Satisfied Customer" },
    { num: "10K", label: "Running Projects" },
    { num: "12K", label: "All Project Completed" },
  ];
  return (
    <div style={{
      display: "grid", gridTemplateColumns: "repeat(4,1fr)",
      background: "var(--bg2)", borderTop: "1px solid var(--border)", borderBottom: "1px solid var(--border)",
    }}>
      {stats.map((s, i) => (
        <div key={i} style={{
          padding: "32px 24px", textAlign: "center",
          borderRight: i < 3 ? "1px solid var(--border)" : "none",
        }}>
          <div style={{ fontFamily: "var(--font-display)", fontWeight: 800, fontSize: 36, color: "var(--accent)" }}>{s.num}</div>
          <div style={{ fontSize: 12, color: "var(--muted)", marginTop: 4 }}>{s.label}</div>
        </div>
      ))}
    </div>
  );
};

export default StatsBar