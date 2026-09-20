import React from 'react';
import './Contact.css';

function Contact() {
  return (
    <div className="Contact">
      <h1>Contact</h1>

      <div className="contact-card">
        <p>
          <strong>Phone No:</strong> 8332072042
        </p>

        <p>
          <strong>Email:</strong> samreenkausar1306@gmail.com
        </p>

        <div className="contact-links">
          <a
            href="https://www.linkedin.com/in/samreen-kausar-701701326/"
            target="_blank"
            rel="noreferrer"
          >
            LinkedIn
          </a>

          <a
            href="https://github.com/24f3000718"
            target="_blank"
            rel="noreferrer"
          >
            GitHub
          </a>
        </div>
      </div>
    </div>
  );
}

export default Contact;