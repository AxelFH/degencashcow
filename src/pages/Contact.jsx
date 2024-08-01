import React from 'react';
import '../assets/styles/Contact.css'; // Importa el archivo CSS para el footer

const Contact = () => {
  return (
    <footer className="footer">
      <div className="footer-content">
        <div className="footer-section">
          <h2>Contact Us</h2>
          <p>If you have any questions, feel free to reach out to us!</p>
        </div>
        <div className="footer-section">
          <h2>Follow Us</h2>
          <div className="footer-links">
            <a href="https://twitter.com" className="footer-link">Twitter</a>
            <a href="https://facebook.com" className="footer-link">Facebook</a>
            <a href="https://instagram.com" className="footer-link">Instagram</a>
          </div>
        </div>
        <div className="footer-section">
          <h2>Legal</h2>
          <a href="/privacy-policy" className="footer-link">Privacy Policy</a>
          <a href="/terms-of-service" className="footer-link">Terms of Service</a>
        </div>
      </div>
    </footer>
  );
}

export default Contact;
