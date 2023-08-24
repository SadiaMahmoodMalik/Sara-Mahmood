import React, { useEffect } from "react";
import "./styles.css";

function Contact() {
  useEffect(() => {
    const contactItems = document.querySelectorAll(".contact-item");

    contactItems.forEach((item) => {
      const valueSpan = item.querySelector(".contact-value");
      const labelSpan = item.querySelector(".contact-label");
      const valueText = valueSpan.textContent;
      const labelText = labelSpan.textContent;

      if (labelText === "P.") {
        const phoneNumberLink = document.createElement("a");
        phoneNumberLink.href = `tel:${valueText}`;
        phoneNumberLink.textContent = valueText;
         phoneNumberLink.style.color = "#736262";
         phoneNumberLink.style.fontFamily = "sans-serif"; 
        valueSpan.textContent = "";
        valueSpan.appendChild(phoneNumberLink);
      } else if (labelText === "E.") {
        const emailLink = document.createElement("a");
        emailLink.href = `mailto:${valueText}`;
        emailLink.textContent = valueText;
         emailLink.style.color = "#736262";
         emailLink.style.fontFamily = "sans-serif"; 
        valueSpan.textContent = "";
        valueSpan.appendChild(emailLink);
      }
    });
  }, []);

  return (
    <div className="contact-info">
      <div className="contact-content">
        <div className="contact-box">
          <div className="contact-item">
            <span className="contact-value">+92 344 7466951</span>
            <div className="contact-label-box">
              <span className="contact-label">P.</span>
            </div>
          </div>
          <div className="contact-item">
            <span className="contact-value">saramalik6468@gmail.com</span>
            <div className="contact-label-box">
              <span className="contact-label">E.</span>
            </div>
          </div>
          <div className="contact-item">
            <span className="contact-value">Lahore, Pakistan</span>
            <div className="contact-label-box">
              <span className="contact-label">A.</span>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Contact;
