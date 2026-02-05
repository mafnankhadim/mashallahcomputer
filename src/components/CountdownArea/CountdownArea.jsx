import { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import "./CountdownArea.css";

// Import images from public folder
import countdownImg from "/assets/images/home_one/countdown_img.png";
import countdownImg2 from "/assets/images/home_one/countdown_img2.png";
import countdownShape from "/assets/images/home_one/countdown_shape.png";

const CountdownArea = () => {
  const [timeLeft, setTimeLeft] = useState({
    days: 10,
    hours: 12,
    minutes: 20,
    seconds: 50,
  });

  useEffect(() => {
    const timer = setInterval(() => {
      setTimeLeft((prevTime) => {
        let { days, hours, minutes, seconds } = prevTime;

        if (seconds > 0) {
          seconds--;
        } else {
          seconds = 59;
          if (minutes > 0) {
            minutes--;
          } else {
            minutes = 59;
            if (hours > 0) {
              hours--;
            } else {
              hours = 23;
              if (days > 0) {
                days--;
              }
            }
          }
        }

        return { days, hours, minutes, seconds };
      });
    }, 1000);

    return () => clearInterval(timer);
  }, []);

  return (
    <section className="countdown_area">
      <div className="container">
        <div className="row align-items-center">
          <div className="col-lg-3 col-md-12">
            <div className="countdown_thumbs">
              <img src={countdownImg} alt="countdown" />
            </div>
          </div>
          <div className="col-lg-6 col-md-12">
            <div className="Countdown_content text-center">
              <h2>Extra Sale! 30% OFF</h2>
              <div className="countdown_item" id="clockdiv">
                <div className="countdown_number">
                  <span className="days">{timeLeft.days}</span>{" "}
                  <strong>:</strong>
                </div>
                <div className="countdown_number">
                  <span className="hours">{timeLeft.hours}</span>
                  <strong>:</strong>
                </div>
                <div className="countdown_number">
                  <span className="minutes">{timeLeft.minutes}</span>
                  <strong>:</strong>
                </div>
                <div className="countdown_number">
                  <span className="seconds">{timeLeft.seconds}</span>
                </div>
              </div>
              <div className="countdown_btn printmax_btn">
                <Link to="/shop">
                  Shop Now<i className="flaticon flaticon-right-arrow"></i>
                  <span></span>
                </Link>
              </div>
              <div className="countdown_shape rotate">
                <img src={countdownShape} alt="shape" />
              </div>
            </div>
          </div>
          <div className="col-lg-3 col-md-12">
            <div className="countdown_thumb">
              <img src={countdownImg2} alt="countdown" />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default CountdownArea;
