import Navbar from "./components/navbar";

export default function Home() {
  return (
    <main>
      <Navbar />
      <header>
        <h1>Rohit Rathod</h1>
        <p>Nagpur, Maharashtra | +91 9850704543 | rohit2703rathod@gmail.com</p>
        <p>
           <a href="#">LinkedIn</a> | <a href="#">GitHub</a> | <a href="#">LeetCode</a>
        </p>
      </header>
      
      <section>
        <h2>Summary</h2>
        <p>
          Full Stack Developer with experience in building RESTful APIs, authentication systems, and
          database-driven web applications. Skilled in Node.js, Express.js, React.js, JWT authentica-
          tion, Firebase, MySQL, and AWS. Currently working as a Backend Developer Intern at Aylark,
          contributing to scalable backend services and GenAI-powered applications[cite: 4, 5].
        </p>
      </section>
    </main>
  );
}