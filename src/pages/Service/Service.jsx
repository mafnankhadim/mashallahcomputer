import { useEffect } from "react";
import { Link } from "react-router-dom";
import "./Service.css";

// Image imports
import serviceIcon from "/assets/images/home-two/service_icon.png";
import serviceIcon2 from "/assets/images/home-two/service_icon2.png";
import serviceIcon3 from "/assets/images/home-two/service_icon3.png";
import serviceIcon4 from "/assets/images/home-two/service_icon4.png";

const Service = () => {
  useEffect(() => {
    // Initialize service carousel
    if (window.jQuery?.fn?.owlCarousel) {
      window.jQuery(".service_list").owlCarousel({
        items: 4,
        loop: true,
        margin: 30,
        nav: true,
        dots: false,
        autoplay: true,
        autoplayTimeout: 5000,
        navText: [
          '<i class="bi bi-arrow-left"></i>',
          '<i class="bi bi-arrow-right"></i>',
        ],
        responsive: {
          0: { items: 1 },
          576: { items: 1 },
          768: { items: 2 },
          992: { items: 3 },
          1200: { items: 4 },
        },
      });
    }
  }, []);

  const services = [
    {
      id: 1,
      icon: serviceIcon,
      title: "Packaging Printing",
      description:
        "Enable equity invested infomediaries rathe matrix alternative catalysts for change with vertical web fully tested",
    },
    {
      id: 2,
      icon: serviceIcon2,
      title: "Productbox Printing",
      description:
        "Enable equity invested infomediaries rathe matrix alternative catalysts for change with vertical web fully tested",
    },
    {
      id: 3,
      icon: serviceIcon3,
      title: "Design Mockupbox",
      description:
        "Enable equity invested infomediaries rathe matrix alternative catalysts for change with vertical web fully tested",
    },
    {
      id: 4,
      icon: serviceIcon4,
      title: "Product Prototyping",
      description:
        "Enable equity invested infomediaries rathe matrix alternative catalysts for change with vertical web fully tested",
    },
    {
      id: 5,
      icon: serviceIcon,
      title: "Packaging Printing",
      description:
        "Enable equity invested infomediaries rathe matrix alternative catalysts for change with vertical web fully tested",
    },
  ];

  return (
    <>
      {/* Breadcrumb Area */}
      <div className="breadcumb-area d-flex style_two">
        <div className="container">
          <div className="row align-items-center">
            <div className="col-lg-12">
              <div className="breadcumb-content">
                <div className="breadcumb-title">
                  <h4>Service</h4>
                </div>
                <ul>
                  <li>
                    <Link to="/">Home</Link>
                  </li>
                  <li>Service</li>
                </ul>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Service Area */}
      <section className="service_area">
        <div className="container-fluid">
          <div className="row">
            <div className="col-lg-12">
              <div className="section_title pb-50">
                <h4>New Arraival</h4>
                <h1>
                  Arrivale New Products <br />
                  See Our Store
                </h1>
              </div>
            </div>
          </div>
          <div className="row">
            <div className="service_list owl-carousel">
              {services.map((service) => (
                <div className="col-lg-12" key={service.id}>
                  <div className="service_single_item">
                    <div className="service_icon">
                      <img src={service.icon} alt="" />
                    </div>
                    <div className="service_content">
                      <h3>{service.title}</h3>
                      <p>{service.description}</p>
                    </div>
                    <div className="service_button pt-22">
                      <div className="printmax_btn service_btn">
                        <Link to="/service-details">
                          View Details<span></span>
                        </Link>
                      </div>
                      <div className="printmax_btn popular_btn_arrow">
                        <Link to="/contact">
                          <i className="flaticon flaticon-right-arrow"></i>
                          <span></span>
                        </Link>
                      </div>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default Service;
