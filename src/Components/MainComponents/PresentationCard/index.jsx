import React, { useState, useEffect } from "react";
import { Avatar } from "./Avatar";
import { MyCard } from "./MyCard";
import {infoText,socialLinks,resumeLink} from "../../variables"

const PresentationCard = () => {
    const [rotationDegree, setRotationDegree] = useState(0);
    const [loading, setLoading] = useState(true);
    const [cardVisibility, setCardVisibility] = useState("hidden");
  
    useEffect(() => {
      const rotateInterval = setInterval(() => {
        if (rotationDegree >= 360) {
          clearInterval(rotateInterval);
          setLoading(false);
  
          // Hacer que la tarjeta sea visible cuando el gatito deje de girar
          setCardVisibility("visible");
        } else {
          setRotationDegree(rotationDegree + 45);
        }
      }, 200);

    return () => clearInterval(rotateInterval);
  }, [rotationDegree]);

  return (
    <div className="flex justify-center items-center h-screen z-10">
      <div
        className={`${
          loading ? "rotate-0" : " -translate-y-[75%] scale-50 "
        } duration-100 transition-transform  ease-in-out transform`}
      >
        <Avatar loading={loading} rotationDegree={rotationDegree} />
      </div>

      <div
        className="absolute top-2/4 transform -translate-y-2/4"
        style={{ visibility: cardVisibility }}
      >
        <MyCard info={infoText} socialLinks={socialLinks} resumeLink={resumeLink} />
      </div>
      
    </div>
  );
};

export { PresentationCard };
