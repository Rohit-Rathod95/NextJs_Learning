import Counter from "./componets/Counter";

export default function Home() {
  const today = new Date();

  return (
    <main style={{ padding: "20px" }}>
      <h1>Server vs Client Components</h1>

      <section>
        <h2>Server Component</h2>
        <p>Rendered on the server</p>
        <p>Today's date: {today.toDateString()}</p>
      </section>

      <hr />

      <section>
        <h2>Client Component</h2>
        <Counter />
      </section>
    </main>
  );
}
