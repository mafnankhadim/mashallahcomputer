import { Link } from "react-router-dom";
import "./Footer.css";

// Import images from public folder
import logo from "/assets/images/logo.png";
import payments from "/assets/images/home_one/payments.png";

const Footer = () => {
  const companyLinks = [
    { title: "About Us", link: "/about" },
    { title: "Our Service", link: "/service" },
    { title: "Pracing Plans", link: "/service" },
    { title: "Latest Blogs", link: "/blog" },
    { title: "Contact", link: "/contact" },
  ];

  const serviceLinks = [
    { title: "Our Products", link: "/shop" },
    { title: "Latest Work", link: "/portfolio" },
    { title: "Partners", link: "/about" },
    { title: "Privacy Policy", link: "/contact" },
    { title: "Faqs", link: "/contact" },
  ];

  return (
    <section className="footer_area boxed">
      <div className="container">
        <div className="row">
          <div className="col-lg-4 col-md-6">
            <div className="footer_logo">
              <Link to="/">
                <img src={logo} alt="logo" />
              </Link>
            </div>
            <p className="footer_desc">
              Competently fabricate parallel web-readiness exceptional sources.
              Credibly streamline top B2C testing procedures
            </p>
            <div className="footer_info">
              <p>
                <i className="bi bi-headset-vr"></i>Speak to Our Expert at:
              </p>
              <h6>+980 (1234) 5678</h6>
            </div>
          </div>
          <div className="col-lg-2 col-md-6">
            <div className="footer-widget-content">
              <div className="footer-widget-title">
                <h4>Company</h4>
              </div>
              <div className="footer-widget-menu">
                <ul>
                  {companyLinks.map((link, index) => (
                    <li key={index}>
                      <Link to={link.link}>
                        <i className="bi bi-chevron-double-right"></i>{" "}
                        {link.title}
                      </Link>
                    </li>
                  ))}
                </ul>
              </div>
            </div>
          </div>
          <div className="col-lg-2 col-md-6">
            <div className="footer-widget-content">
              <div className="footer-widget-title">
                <h4>Service</h4>
              </div>
              <div className="footer-widget-menu">
                <ul>
                  {serviceLinks.map((link, index) => (
                    <li key={index}>
                      <Link to={link.link}>
                        <i className="bi bi-chevron-double-right"></i>{" "}
                        {link.title}
                      </Link>
                    </li>
                  ))}
                </ul>
              </div>
            </div>
          </div>
          <div className="col-lg-1"></div>
          <div className="col-lg-3 col-md-6">
            <div className="footer-widget-contact">
              <div className="footer-widget-title">
                <h4>Contact</h4>
              </div>
              <p className="subscribe_text">
                Subscribe Our Latest Newsletter and Get in touch with us any
                update
              </p>
              <div className="footer_from">
                <form
                  action="https://formspree.io/f/myyleorq"
                  method="POST"
                  id="dreamit-form"
                >
                  <div className="subscribe_form">
                    <input
                      type="email"
                      name="email"
                      id="email"
                      className="form-control"
                      required
                      data-error="Please enter your email"
                      placeholder="Enter Your E-Mail"
                    />
                    <button type="submit" className="btn">
                      <i className="flaticon flaticon-right-arrow"></i>
                    </button>
                  </div>
                </form>
              </div>
              <div className="footer_social_icon">
                <a href="#">
                  <i className="fab fa-facebook-f"></i>
                </a>
                <a href="#">
                  <i className="fa-brands fa-x-twitter"></i>
                </a>
                <a href="#">
                  <i className="fab fa-linkedin-in"></i>
                </a>
                <a href="#">
                  <i className="fab fa-instagram"></i>
                </a>
              </div>
            </div>
          </div>
        </div>
        <div className="row add-border align-items-center">
          <div className="col-md-7">
            <div className="footer-bottom-content">
              <div className="footer-bottom-content-copy">
                <p>Copyright © 2025 Prinmax all Rights Reserved</p>
              </div>
            </div>
          </div>
          <div className="col-md-5 text-right">
            <div className="payments">
              <img src={payments} alt="payment methods" />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Footer;
