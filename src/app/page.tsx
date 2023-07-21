export default function Home() {
  return (
    <main style={{ maxWidth: 1200, marginInline: "auto", padding: 20 }}>
      <div style={{ marginBottom: "4rem", textAlign: "center" }}>
        <h4 style={{ marginBottom: 16 }}>0</h4>
        <button>increment</button>
        <button style={{ marginInline: 16 }}>decrement</button>
        <button>reset</button>
      </div>
    </main>
  );
}
