import { Link } from "react-router-dom";

const Contact = () => {
  return (
    <>
      {/* Breadcrumb Area */}
      <div className="breadcumb-area d-flex style_two">
        <div className="container">
          <div className="row align-items-center">
            <div className="col-lg-12">
              <div className="breadcumb-content">
                <div className="breadcumb-title">
                  <h4>Contact Us</h4>
                </div>
                <ul>
                  <li>
                    <Link to="/">Home</Link>
                  </li>
                  <li>Contact Us</li>
                </ul>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Contact Area */}
      <section className="contact_area inner_section">
        <div className="container">
          <div className="row pb-70">
            <div className="col-lg-4 col-md-6">
              <div className="cotact_info_item">
                <div className="icontact_warpper_icon">
                  <i className="bi bi-geo-alt"></i>
                </div>
                <div className="contact_warpper_content">
                  <h3>Address</h3>
                  <p>Khatam-e-Nabuwat Chowk Main Bazzar Dudhu Chak</p>
                </div>
              </div>
            </div>
            <div className="col-lg-4 col-md-6">
              <div className="cotact_info_item">
                <div className="icontact_warpper_icon">
                  <i className="bi bi-telephone-outbound"></i>
                </div>
                <div className="contact_warpper_content">
                  <h3>Phone Number</h3>
                  <p>
                    +92 345 4140 830 <br /> +92 342 6024 404
                  </p>
                </div>
              </div>
            </div>
            <div className="col-lg-4 col-md-6">
              <div className="cotact_info_item">
                <div className="icontact_warpper_icon">
                  <i className="bi bi-envelope"></i>
                </div>
                <div className="contact_warpper_content">
                  <h3>Email Address</h3>
                  <p>
                    example@gmail.com <br />
                    info@gmail.com
                  </p>
                </div>
              </div>
            </div>
          </div>
          <div className="contact_warpper">
            <div className="row align-items-center">
              <div className="col-lg-6">
                <div className="contact_map">
                  <iframe
                    src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d48384.367867189205!2d-74.01058227968896!3d40.71751035716885!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x89c24fa5d33f083b%3A0xc80b8f06e177fe62!2sNew%20York%2C%20NY%2C%20USA!5e0!3m2!1sen!2sbd!4v1609671967457!5m2!1sen!2sbd"
                    width="90%"
                    height="520"
                    style={{ border: 0 }}
                    allowFullScreen=""
                    aria-hidden="false"
                    tabIndex="0"
                    title="Google Map"
                  ></iframe>
                </div>
              </div>
              <div className="col-lg-6">
                <div className="contact-form-box style_two">
                  <div className="section_title pb-50">
                    <h4>Get In Touch</h4>
                    <h1>Writing us something</h1>
                  </div>
                  <form action="https://formspree.io/f/myyleorq" method="POST">
                    <div className="row">
                      <div className="col-lg-6 col-md-6">
                        <div className="form-box">
                          <input
                            type="text"
                            name="name"
                            placeholder="Your Name"
                          />
                        </div>
                      </div>
                      <div className="col-lg-6 col-md-6">
                        <div className="form-box">
                          <input
                            type="text"
                            name="phone"
                            placeholder="Phone No"
                          />
                        </div>
                      </div>
                      <div className="col-lg-6 col-md-6">
                        <div className="form-box">
                          <input
                            type="email"
                            name="email"
                            placeholder="E-Mail Address"
                          />
                        </div>
                      </div>
                      <div className="col-lg-6 col-md-6">
                        <div className="form-box">
                          <input
                            type="text"
                            name="subject"
                            placeholder="Subject"
                          />
                        </div>
                      </div>
                      <div className="col-lg-12 col-md-12">
                        <div className="form-box message">
                          <textarea
                            name="message"
                            id="message"
                            cols="30"
                            rows="10"
                            placeholder="Write Message"
                          ></textarea>
                        </div>
                      </div>
                      <div className="contact-form">
                        <button type="submit">Send Message</button>
                      </div>
                    </div>
                  </form>
                  <div id="status"></div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default Contact;
