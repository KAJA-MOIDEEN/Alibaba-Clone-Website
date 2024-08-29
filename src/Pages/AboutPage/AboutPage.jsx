import React from 'react';
import './AboutPage.css'; // Optional: For additional styling

function AboutPage() {
  return (
    <div className="about-page">
      {/* Header */}
      <header className="about-header">
        <h1>About Alibaba</h1>
        <p>Empowering businesses and transforming global trade</p>
      </header>

      {/* Section 1: Company Overview */}
      <section className="about-section">
        <h2>Company Overview</h2>
        <div className="about-card">
          <p>
            Founded in 1999, Alibaba Group is a global leader in e-commerce, retail, internet, and technology. Our mission is to make it easy to do business anywhere.
          </p>
        </div>
      </section>

      {/* Section 2: Our Mission & Vision */}
      <section className="about-section">
        <h2>Our Mission & Vision</h2>
        <div className="about-card">
          <p>
            Alibaba’s mission is to build the future infrastructure of commerce. Our vision is that our customers will meet, work, and live at Alibaba.
          </p>
        </div>
      </section>

      {/* Section 3: History & Milestones */}
      <section className="about-section">
        <h2>History & Milestones</h2>
        <div className="about-card">
          <p>
            From our humble beginnings in a small apartment in Hangzhou to becoming a global powerhouse, discover the key milestones in Alibaba's journey.
          </p>
        </div>
      </section>

      {/* Section 4: Our Values */}
      <section className="about-section">
        <h2>Our Values</h2>
        <div className="about-card">
          <p>
            Our culture is defined by our values: customer first, teamwork, embrace change, integrity, passion, and commitment. These values guide our every action.
          </p>
        </div>
      </section>

      {/* Section 5: Global Impact */}
      <section className="about-section">
        <h2>Global Impact</h2>
        <div className="about-card">
          <p>
            Alibaba is committed to creating a positive impact worldwide. From empowering small businesses to promoting sustainable development, we strive to make a difference.
          </p>
        </div>
      </section>

      {/* Extra Footer */}
      <footer className="about-footer">
        <div className="footer-content">
          <h3>Contact Us</h3>
          <p>Email: contact@alibaba.com</p>
          <p>Phone: +1-800-123-4567</p>
          <p>Follow us on social media</p>
        </div>
        <div className="footer-links">
          <a href="/privacy">Privacy Policy</a> | <a href="/terms">Terms of Service</a> | <a href="/support">Support</a>
        </div>
        <p className="footer-credit">&copy; 2024 Alibaba Group. All rights reserved.</p>
      </footer>
    </div>
  );
}

export default AboutPage;
