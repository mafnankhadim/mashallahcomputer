import { Link } from "react-router-dom";
import "./CollectionArea.css";

// Import images from public folder
import collectionImg from "/assets/images/home_one/collection1.png";
import collectionImg2 from "/assets/images/home_one/collection002.png";
import collectionShp2 from "/assets/images/home_one/collection_shp2.png";

const CollectionArea = () => {
  const servicesLeft = [
    {
      key: "mobile",
      icon: "fas fa-headphones",
      title: "Mobile Accessories",
      desc: "Headsets, chargers, cases & cables",
    },
    {
      key: "scan",
      icon: "fas fa-file-alt",
      title: "Document Scanning",
      desc: "Scan to email, PDF creation & archiving",
    },
    {
      key: "accessories",
      icon: "fas fa-plug",
      title: "Accessories & Cases",
      desc: "Screen guards, power banks & protective cases",
    },
    {
      key: "forms",
      icon: "fas fa-edit",
      title: "Online Form Filling",
      desc: "Assistance completing and submitting forms online",
    },
  ];

  const servicesRight = [
    {
      key: "photo",
      icon: "fas fa-camera",
      title: "Photography",
      desc: "Professional passport & ID photos in all sizes",
    },
    {
      key: "print",
      icon: "fas fa-print",
      title: "Printing & Photocopy",
      desc: "Fast B/W & colour prints, A4–A3 copies",
    },
    {
      key: "graphic",
      icon: "fas fa-palette",
      title: "Graphic Designing",
      desc: "Logo design, branding & creative graphics",
    },
    {
      key: "mug",
      icon: "fas fa-mug-hot",
      title: "Mug Printing",
      desc: "Personalised photo mugs & gifts",
    },
  ];

  return (
    <section className="collection_area" aria-labelledby="collection-heading">
      <div className="container">
        <div className="row">
          <div className="col-lg-6 col-md-12">
            {/* Mobile & Accessories */}
            <div className="collection_single_item">
              <div className="collection_content">
                <h3 id="collection-heading">Mobile Accessories & Services</h3>
                <p>
                  Quality mobile accessories and essential services to keep
                  customers connected — curated chargers, headsets, document
                  scanning, and protective cases for all your device needs.
                </p>
                <ul className="collection_services">
                  {servicesLeft.map((s) => (
                    <li key={s.key}>
                      <i className={s.icon} aria-hidden="true"></i>
                      <div>
                        <strong>{s.title}</strong>
                        <span>{s.desc}</span>
                      </div>
                    </li>
                  ))}
                </ul>
                <div className="collection_btn printmax_btn">
                  <Link
                    to="/shop?category=mobile"
                    aria-label="Shop mobile accessories"
                  >
                    <span></span>
                    Get Started{" "}
                    <i
                      className="flaticon flaticon-right-arrow"
                      aria-hidden="true"
                    ></i>
                    <span className="sr-only">Open mobile accessories</span>
                  </Link>
                </div>
              </div>
              <div className="collection_thumb">
                <img
                  src={collectionImg}
                  alt="mobile accessories showcase"
                  loading="lazy"
                />
              </div>
            </div>
          </div>
          <div className="col-lg-6 col-md-12">
            {/* Printing & Photography */}
            <div className="collection_single_item second">
              <div className="collection_content">
                <h3>Print & Photo Services</h3>
                <p>
                  End-to-end document and imaging services — fast printing,
                  photocopy, personalised gifts, professional photography and
                  creative graphic design with expert help for all your needs.
                </p>
                <ul className="collection_services">
                  {servicesRight.map((s) => (
                    <li key={s.key}>
                      <i className={s.icon} aria-hidden="true"></i>
                      <div>
                        <strong>{s.title}</strong>
                        <span>{s.desc}</span>
                      </div>
                    </li>
                  ))}
                </ul>
                <div className="collection_btn printmax_btn">
                  <Link
                    to="/shop?category=print-photo"
                    aria-label="Shop print and photo services"
                  >
                    <span></span>
                    Get Started
                    <i
                      className="flaticon flaticon-right-arrow"
                      aria-hidden="true"
                    ></i>
                    <span className="sr-only">
                      Open print and photo services
                    </span>
                  </Link>
                </div>
              </div>
              <div className="collection_thumb">
                <img
                  src={collectionImg2}
                  alt="cameras and computer accessories"
                  className="collection2"
                  loading="lazy"
                />
              </div>
              <div className="collection_shap">
                <img
                  src={collectionShp2}
                  alt="decorative collection shape"
                  loading="lazy"
                />
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default CollectionArea;
