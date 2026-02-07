import { Link } from "react-router-dom";
import "./AboutArea.css";

// Import images from public folder
import aboutImg2 from "/assets/images/home_one/about.jpg";
import aboutShp from "/assets/images/home_one/about_shp.png";
import aboutShp2 from "/assets/images/home_one/about_shp2.png";
import settingIcon from "/assets/images/home_one/setting_icon.png";
import rotateImg from "/assets/images/home_one/rotate.png";
import services from "../../data/services";

const AboutArea = () => {
  const aboutFeatures = services;

  return (
    <section className="about_area" aria-labelledby="about-services-heading">
      <div className="container">
        <div className="row align-items-center">
          <div className="col-lg-6">
            <div className="about_thumb">
              <div className="about_thumb_inner">
                <img src={aboutImg2} alt="service showcase" loading="lazy" />
              </div>
              <div className="about_shap bounce-animate-3">
                <img src={aboutShp} alt="" aria-hidden="true" loading="lazy" />
              </div>
              {/* removed decorative green icon per request */}
              <div className="about_shap2 dance">
                <img src={aboutShp2} alt="" aria-hidden="true" loading="lazy" />
              </div>
            </div>
          </div>
          <div className="col-lg-6 col-md-12">
            <div className="about_content">
              {/* Section Title */}
              <div className="section_title">
                <h4>Our Services</h4>
                {/* <h1 id="about-services-heading">
                  Print, Photo & Digital Services
                </h1> */}
              </div>
              <p>
                We provide photocopying and printing, online form filling,
                professional photo studio services, mobile accessories,
                lamination, custom mug printing and graphic designing —
                everything you need under one roof.
              </p>
              <div className="about_list">
                <ul aria-label="Services list">
                  {aboutFeatures.map((feature) => (
                    <li key={feature.id}>
                      <img src={settingIcon} alt="" aria-hidden="true" />
                      <span>{feature.title}</span>
                    </li>
                  ))}
                </ul>
              </div>
              <div className="about_btn printmax_btn">
                <Link to="/shop">
                  Get Started<i className="flaticon flaticon-right-arrow"></i>
                  <span></span>
                </Link>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className="about_shaps rotate">
        <img src={rotateImg} alt="" aria-hidden="true" loading="lazy" />
      </div>
    </section>
  );
};

export default AboutArea;
