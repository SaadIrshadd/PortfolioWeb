import React from "react";

function Footer() {
  return (
    <footer>
      <div className="footer-main">
        <div className="footer-item question">
          <a href="">Questions? Contact us.</a>
        </div>
        <div className="footer-item">
          <a href="faq">FAQ</a>
          <a href="faq">Help Center</a>
          <a href="faq">Account</a>
          <a href="faq">Media Center</a>
        </div>
        <div className="footer-item">
          <a href="faq">Investor Relation</a>
          <a href="faq">Jobs</a>
          <a href="faq">Ways to Watch</a>
          <a href="faq">Terms of Use</a>
        </div>
        <div className="footer-item">
          <a href="faq">Privacy</a>
          <a href="faq">Cookies Preferences</a>
          <a href="faq">Corporate Information</a>
          <a href="faq">Contact Us</a>
        </div>
        <div className="footer-item">
          <a href="faq">Speed Test</a>
          <a href="faq">Legal Notices</a>
          <a href="faq">Only on Netflix</a>
        </div>
        <button className="footer-button">English</button>
        <span>Netflix Pakistan</span>
      </div>
    </footer>
  );
}

export default Footer;