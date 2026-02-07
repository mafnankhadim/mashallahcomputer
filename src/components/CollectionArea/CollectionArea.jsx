import { Link } from "react-router-dom";
import "./CollectionArea.css";

// Import images from public folder
import collectionImg from "/assets/images/home_one/collection1.png";
import collectionImg2 from "/assets/images/home_one/collection002.png";
import collectionShp2 from "/assets/images/home_one/collection_shp2.png";
import services from "../../data/services";

const CollectionArea = () => {
  // Use central services list and split into two columns
  const iconFor = (title) => {
    const t = title.toLowerCase();
    if (t.includes("photocopy") || t.includes("photocopy")) return "fas fa-copy";
    if (t.includes("b/w") || t.includes("printing") || t.includes("print")) return "fas fa-print";
    if (t.includes("color")) return "fas fa-paint-brush";
    if (t.includes("scan") || t.includes("scanning") || t.includes("document")) return "fas fa-file-alt";
    if (t.includes("computer")) return "fas fa-desktop";
    if (t.includes("mobile") || t.includes("phone")) return "fas fa-mobile-alt";
    if (t.includes("duplicate") || t.includes("id")) return "fas fa-id-card";
    if (t.includes("online")) return "fas fa-globe";
    if (t.includes("photo") || t.includes("studio")) return "fas fa-camera";
    if (t.includes("laminat")) return "fas fa-file";
    if (t.includes("mug")) return "fas fa-mug-hot";
    if (t.includes("t-shirt") || t.includes("tshirt")) return "fas fa-tshirt";
    if (t.includes("graphic") || t.includes("design")) return "fas fa-palette";
    return "fas fa-concierge-bell";
  };

  const half = Math.ceil(services.length / 2);
  const servicesLeft = services.slice(0, half);
  const servicesRight = services.slice(half);

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
                    <li key={s.id}>
                      <i className={iconFor(s.title)} aria-hidden="true"></i>
                      <div>
                        <strong>{s.title}</strong>
                        <span>{s.description}</span>
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
                    <li key={s.id}>
                      <i className={iconFor(s.title)} aria-hidden="true"></i>
                      <div>
                        <strong>{s.title}</strong>
                        <span>{s.description}</span>
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
