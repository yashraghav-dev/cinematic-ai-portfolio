
import { useState } from "react";
import {
  Mail,
  Phone,
  MessageCircle,
  Code2,
  MapPin,
  Send,
  ArrowUpRight,
  ArrowUp,
  Copy,
  Check,
  Sparkles,
} from "lucide-react";

import "./Contact.css";

const EMAIL = "yashr092003@gmail.com";
const PHONE = "8882107352";
const WHATSAPP = "https://wa.me/918882107352";
const LINKEDIN =
  "https://www.linkedin.com/in/yash-raghav-bab6a1264/";
const GITHUB = "https://github.com/yashraghav-dev";

const contactItems = [
  {
    title: "PHONE",
    value: "+91 " + PHONE,
    link: "tel:+91" + PHONE,
    Icon: Phone,
  },
  {
    title: "WHATSAPP",
    value: "Chat on WhatsApp",
    link: WHATSAPP,
    Icon: MessageCircle,
  },
  {
    title: "LINKEDIN",
    value: "Connect with me",
    link: LINKEDIN,
    Icon: Code2,
  },
  {
    title: "GITHUB",
    value: "Explore my repositories",
    link: GITHUB,
    Icon: Code2,
  },
];

export default function Contact() {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    subject: "",
    message: "",
  });

  const [copied, setCopied] = useState(false);

  const handleChange = (event) => {
    const { name, value } = event.target;
    setFormData((previous) => ({
      ...previous,
      [name]: value,
    }));
  };

  const copyEmail = async () => {
    try {
      await navigator.clipboard.writeText(EMAIL);
      setCopied(true);
      window.setTimeout(() => setCopied(false), 2000);
    } catch {
      alert("Please copy the email address manually.");
    }
  };

  const handleSubmit = (event) => {
    event.preventDefault();

    const subject = encodeURIComponent(formData.subject);
    const body = encodeURIComponent(
      `Name: ${formData.name}
Email: ${formData.email}

Message:
${formData.message}`
    );

    window.location.href =
      `mailto:${EMAIL}?subject=${subject}&body=${body}`;
  };

  return (
    <section id="contact" className="portfolio-contact">
      <div className="portfolio-contact-glow glow-left" />
      <div className="portfolio-contact-glow glow-right" />

      <div className="portfolio-contact-container">
        <div className="portfolio-contact-heading">
          <div className="portfolio-contact-label">
            <span className="portfolio-contact-line" />
            04 / GET IN TOUCH
          </div>
          <h2 className="contact-purple-title">
  LET'S CONNECT.
</h2>
<p>
            Have an exciting opportunity or project idea?
            Let's collaborate and create intelligent solutions
            using AI, Machine Learning, and Data Analytics.
          </p>
        </div>

        <div className="portfolio-contact-grid">
          <div className="portfolio-contact-left">
            <div className="portfolio-available">
              <span className="portfolio-available-dot" />
              OPEN TO OPPORTUNITIES
            </div>

            <h3>
              Let's build something
              <span> extraordinary.</span>
            </h3>

            <p className="portfolio-contact-description">
              I'm interested in AI Engineering, Data Science,
              and Data Analyst opportunities. Whether you have
              a role, collaboration, or project in mind,
              feel free to get in touch.
            </p>

            <div className="portfolio-contact-links">
              <div className="portfolio-contact-link">
                <div className="portfolio-contact-icon">
                  <Mail size={21} />
                </div>

                <div className="portfolio-contact-link-text">
                  <span>EMAIL ADDRESS</span>
                  <strong>{EMAIL}</strong>
                </div>

                <button
                  type="button"
                  onClick={copyEmail}
                  className="portfolio-contact-copy"
                  aria-label="Copy email"
                  title="Copy email"
                >
                  {copied ? (
                    <Check size={19} />
                  ) : (
                    <Copy size={19} />
                  )}
                </button>
              </div>

              {contactItems.map((item) => {
                const Icon = item.Icon;

                return (
                  <a
                    key={item.title}
                    href={item.link}
                    target={
                      item.link.startsWith("http")
                        ? "_blank"
                        : undefined
                    }
                    rel={
                      item.link.startsWith("http")
                        ? "noopener noreferrer"
                        : undefined
                    }
                    className="portfolio-contact-link"
                  >
                    <div className="portfolio-contact-icon">
                      <Icon size={21} />
                    </div>

                    <div className="portfolio-contact-link-text">
                      <span>{item.title}</span>
                      <strong>{item.value}</strong>
                    </div>

                    <ArrowUpRight size={19} />
                  </a>
                );
              })}

              <div className="portfolio-contact-link">
                <div className="portfolio-contact-icon">
                  <MapPin size={21} />
                </div>

                <div className="portfolio-contact-link-text">
                  <span>LOCATION</span>
                  <strong>India</strong>
                </div>
              </div>
            </div>

            <div className="portfolio-contact-bottom-note">
              <Sparkles size={17} />
              Building the future with AI and Data.
            </div>
          </div>

          <div className="portfolio-contact-form-card">
            <div className="portfolio-form-header">
              <div>
                <span>START A CONVERSATION</span>
                <h3>Send me a message</h3>
              </div>

              <div className="portfolio-form-header-icon">
                <Send size={22} />
              </div>
            </div>

            <p className="portfolio-form-description">
              Share your opportunity or project details below.
            </p>

            <form onSubmit={handleSubmit}>
              <div className="portfolio-form-row">
                <div className="portfolio-form-group">
                  <label htmlFor="contact-name">
                    YOUR NAME
                  </label>
                  <input
                    id="contact-name"
                    type="text"
                    name="name"
                    placeholder="Your name"
                    value={formData.name}
                    onChange={handleChange}
                    required
                  />
                </div>

                <div className="portfolio-form-group">
                  <label htmlFor="contact-email">
                    YOUR EMAIL
                  </label>
                  <input
                    id="contact-email"
                    type="email"
                    name="email"
                    placeholder="Your email"
                    value={formData.email}
                    onChange={handleChange}
                    required
                  />
                </div>
              </div>

              <div className="portfolio-form-group">
                <label htmlFor="contact-subject">
                  SUBJECT
                </label>
                <input
                  id="contact-subject"
                  type="text"
                  name="subject"
                  placeholder="Project or job opportunity"
                  value={formData.subject}
                  onChange={handleChange}
                  required
                />
              </div>

              <div className="portfolio-form-group">
                <label htmlFor="contact-message">
                  YOUR MESSAGE
                </label>
                <textarea
                  id="contact-message"
                  name="message"
                  rows={5}
                  placeholder="Tell me about your project or opportunity..."
                  value={formData.message}
                  onChange={handleChange}
                  required
                />
              </div>

              <button
                type="submit"
                className="portfolio-form-submit"
              >
                Compose Email
                <Send size={18} />
              </button>

              <p className="portfolio-form-disclaimer">
                Opens your email application with a prepared
                message. Review and send it to complete your enquiry.
              </p>
            </form>
          </div>
        </div>

        <footer className="portfolio-contact-footer">
          <div>
            <strong>
              AI ENGINEER · DATA SCIENTIST · DATA ANALYST
            </strong>
            <p>Designed and developed with React.</p>
          </div>

          <a href="#home" className="portfolio-back-top">
            BACK TO TOP
            <ArrowUp size={17} />
          </a>
        </footer>
      </div>
    </section>
  );
}
