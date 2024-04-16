import React, {useState, useEffect }from "react";
import igIcon from "../assets/contacticons/igicon.png";
import mailIcon from "../assets/contacticons/emailicon.jpeg";
import phoneIcon from "../assets/contacticons/phoneicon.jpeg";
import "../styles/ContactUs.css";
import { Parallax } from "react-parallax";
import home from "../assets/kitchenimage4.jpeg";

export default function ContactUs() {
  const sendEmail = () => {
    console.log("Email sent!");
  };

  const [showText, setShowText] = useState(false);

  useEffect(() => {
    setTimeout(() => {
      setShowText(true);
    }, 10);
  }, []);

  return (
    <div className="contactContainer">
      <Parallax strength={300} blur={5} bgImage={home}>
        <div className="bodyContainer">
          <div className="iconsContainer" style={{
              backgroundColor: "black",
              marginLeft: showText ? "0" : "-300px",
              transition: "margin-left 1s",
            }}>
            <div>
              <img src={igIcon} alt="Instagram" />
              <a href="https://www.instagram.com/rondonrenovations/" className="links">@rondonrenovations</a>
            </div>
            <div>
              <img src={mailIcon} alt="Email" />
              <a href="mailto:rondonrenovations@gmail.com" className="links">rondonrenovations@gmail.com</a>
            </div>
            <div>
              <img src={phoneIcon} alt="Phone" />
              <text className="text">(647) 866-6407</text>
            </div>
          </div>

          {/* <div className="quotesDiv">
            <label>Reach out to our team for a free quote today:</label>
            <input type="text" id="emailUs" name="emailUs"></input>
            <button type="button" id="submitButton" onClick={sendEmail}>
              SUBMIT
            </button>
          </div> */}
        </div>

       
      </Parallax>
      <div className="footer">Rondon Construction & Renovations © 2024</div>
    </div>
  );
}
