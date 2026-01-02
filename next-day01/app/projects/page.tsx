import Navbar from "../components/navbar";

export default function Projects() {
  return (
    <main>
      <Navbar />
      <h2>Projects</h2>

      <article>
        <h3>Trust Lens – GenAI Financial Document Analyzer</h3>
        <p><em>React.js, AWS Lambda, API Gateway, AWS Bedrock</em></p>
        <ul>
          <li>Developed a full-stack application to analyze financial documents using Generative AI[cite: 15].</li>
          <li>Designed and implemented RESTful APIs using a serverless architecture[cite: 16].</li>
          <li>Integrated AWS Bedrock for AI-driven risk analysis and text summarization[cite: 17].</li>
        </ul>
      </article>

      <article>
        <h3>Vidya Vani - AI-Powered Voice-First Teaching Assistant</h3>
        <p><em>Node.js, AWS Bedrock, AWS Polly, Deepgram</em></p>
        <ul>
          <li>Built a multilingual voice-first teaching assistant for smart classrooms[cite: 20].</li>
          <li>Optimized backend APIs using caching, reducing API usage and latency by 60-80%[cite: 20].</li>
          <li>Designed REST APIs for efficient frontend-backend integration[cite: 21].</li>
        </ul>
      </article>

      <article>
        <h3>Campus Connect Student Housing Platform</h3>
        <p><em>React.js, Node.js, MySQL, Firebase, Leaflet.js</em></p>
        <ul>
          <li>Built a role-based platform connecting students with property owners[cite: 24].</li>
          <li>Implemented JWT-based authentication and authorization with CRUD APIs for listings[cite: 25].</li>
          <li>Integrated interactive maps using Leaflet.js for property visualization[cite: 25].</li>
        </ul>
      </article>
    </main>
  );
}