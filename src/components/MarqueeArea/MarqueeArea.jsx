import "./MarqueeArea.css";

// Import images from public folder
import marqueeImg from "/assets/images/home_one/marquee_img.png";

const MarqueeArea = () => {
  const services = [
    "Photocopy & Printing",
    "Online Form Filling",
    "Photo Studio Services",
    "Mobile Accessories",
    "Internet Cafe",
    "Document Lamination",
    "Custom Mug Printing",
  ];

  return (
    <div className="marquee_area">
      <div className="marquee_bg">
        <div className="container-fluid">
          <div className="row">
            <div className="col-lg-12">
              <div className="marquee">
                <div className="marquee-block">
                  {services.map((item, index) => (
                    <h3 key={index}>
                      <span>
                        <img src={marqueeImg} className="rotates" alt="icon" />
                      </span>
                      {item}
                    </h3>
                  ))}
                </div>
                <div className="marquee-block">
                  {services.map((item, index) => (
                    <h3 key={`repeat-${index}`}>
                      <span>
                        <img src={marqueeImg} className="rotates" alt="icon" />
                      </span>
                      {item}
                    </h3>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default MarqueeArea;
