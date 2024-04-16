import React, { useEffect, useState } from "react";
import "../styles/home.css";
import { Parallax } from "react-parallax";
import kitchen from "../assets/kitchenimage3.jpeg";
import bathroom from "../assets/bathroomlandscape.jpeg";
import livingroom from "../assets/homeimage2.jpeg";

export default function Home() {
  const [showText, setShowText] = useState(false);

  useEffect(() => {
    setTimeout(() => {
      setShowText(true);
    }, 10);
  }, []);

  return (
    <div className="Home">
      <Parallax strength={300} blur={5} bgImage={kitchen}>
        <div className="content">
          <div
            className="text-content"
            style={{
              backgroundColor: "rgba(1, 1, 1, 0.82)",
              marginLeft: showText ? "0" : "-300px",
              transition: "margin-left 1s",
            }}
          >
            RONDON RENOVATIONS
          </div>
          <div
            className="subtitle"
            style={{
              marginTop: "150px",
            }}
          >
            We provide home renovation services with guaranteed high-quality
            jobs, cleanliness, and competitive prices.
          </div>
        </div>
      </Parallax>

      <Parallax strength={300} blur={5} bgImage={bathroom}>
        <div className="content">
          <div className="title">SERVICES</div>
          <div className="subtitle">
            <ul className="ulservices">
              <li className="lihome">Basement Renovations</li>
              <li className="lihome">Kitchen, Bathroom & Stairs Remodel</li>
              <li className="lihome">Framing, Drywall & Taping</li>
              <li className="lihome">Insulation & Plumbing</li>
              <li className="lihome">Finish Carpentry & Painting</li>
              <li className="lihome">Backsplash Work, Tile & Flooring Installation</li>
            </ul>
          </div>
        </div>
      </Parallax>

      <Parallax strength={300} blur={5} bgImage={livingroom}>
        <div className="content">
          <div className="paragraph" style={{ maxWidth: "100%"}}>
            Rondon Construction & Renovation provides services in the entire
            GTA. Our team is ready to service in residental and commercial
            properties. The first step to bringing your dream project to
            guaranteed satisfactory results starts with planning. We will visit
            your property, inspect it and discuss your plans, visions, and
            needs. <br/> <br/> Our priority is to give you results that meet your
            expectations within safety and quality standards. <br/><br/> We
            are a certified and insured business, therefore, your property is
            safe in our hands. Throughout the project, you have full access to
            our team to ask questions and make any enquiries.<br/><br/> Our priority is to
            bring you satisfaction. 
          </div>
          <div className="footer">
            Rondon Construction & Renovations © 2024 
          </div>
        </div>
      </Parallax>
    </div>
  );
}
