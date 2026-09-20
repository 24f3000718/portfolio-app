import React from "react";
import './Projects.css'
function Projects(){
  return (
    <div style={{ backgroundColor: '#F2E9E4', fontFamily: 'emoji' ,color: '#22223B',overflow:'hidden'}}>
      <h1 style={{textAlig:'left'}}>Projects</h1>
      <br></br>
      <div class="Projects">
          <div className="Project">
            <h2>Placement Training Portal</h2>

            <p>
              Built a comprehensive Placement Management platform that streamlines
              student recruitment, company hiring, and placement tracking while
              integrating administrative processes and training activities into an
              efficient system.
            </p>

            <h3>Technologies Used</h3>

            <div className="technologies">
              <span>Flask</span>
              <span>Jinja2</span>
              <span>Bootstrap</span>
              <span>Flask-Login</span>
              <span>SQLite</span>
            </div>
            <a href="/doc/Project Report.pdf" target="_blank" rel="noopener noreferrer"   className="doc-button" > Documentation </a>
            <a href="https://github.com/24f3000718/Placement-portal" target="_blank" rel="noopener noreferrer"   className="doc-button" > GitHub </a>
          </div>
          <div className="Project">
            <h2>FinBuddy</h2>

            <p>
              Developed an intelligent financial management platform that enables
              expense tracking, spending analysis, and future expense forecasting
              through personalized AI-driven insights.
            </p>

            <h3>Technologies Used</h3>

            <div className="technologies">
              <span>React 18.3</span>
              <span>TypeScript</span>
              <span>Vite</span>
              <span>Tailwind CSS</span>
              <span>Supabase</span>
              <span>PostgreSQL</span>
              <span>Groq API</span>
              <span>LLaMA 3.3 70B</span>
              <span>Resend API</span>
              <span>TanStack Query</span>
              <span>Recharts</span>
              <span>Vercel</span>
              <br></br>
            </div>
            <a href="/doc/B2_MP1_DOCUMENTATION.pdf" target="_blank" rel="noopener noreferrer"   className="doc-button" > Documentation </a>
            <a href="https://github.com/ttifa-aa/agentic-ai-study-guide" target="_blank" rel="noopener noreferrer"   className="doc-button" > GitHub  </a>
          </div>

          <div className="Project">
            <h2>Agentic-AI Study Guide</h2>

            <p>
              Built an AI-powered academic assistant that enables students to upload
              lecture notes, textbooks, lab manuals, and past papers, and ask
              natural-language questions to receive comprehensive, source-attributed
              answers.
            </p>

            <h3>Technologies Used</h3>

            <div className="technologies">
              <span>Streamlit</span>
              <span>Groq API</span>
              <span>LLaMA 3.1 8B</span>
              <span>LangChain</span>
              <span>HuggingFace</span>
              <span>all-MiniLM-L6-v2</span>
              <span>FAISS</span>
              <span>PyPDF2</span>
              <span>python-docx</span>
              <span>python-pptx</span>
              <span>Unstructured</span>
              <span>SQLite</span>
            </div>
            <a href="https://github.com/24f3000718/agenticai-study-guide" target="_blank" rel="noopener noreferrer"   className="doc-button" > GitHub </a>
          </div>
      </div>
    </div>
  );
}
export default Projects;