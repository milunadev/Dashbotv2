import React, { useState, useEffect } from "react";
import { Avatar } from "./Avatar";
import { MyCard } from "./MyCard";
import {infoText,socialLinks,resumeLink,cardtitle} from "../../variables"
import { AppContext } from "../../../Context";
import { MyDialog } from "./DialogCard";

const PresentationCard = () => {
    const [rotationDegree, setRotationDegree] = useState(0);
    const [loading, setLoading] = useState(true);
    const [cardVisibility, setCardVisibility] = useState("hidden");
    const { navisActive } = React.useContext(AppContext);

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
          loading ? "rotate-0" 
          : !navisActive
          ? " -translate-y-[75%] scale-50 "
          : "translate-x-full "
        } duration-500 transition-transform  ease-in-out transform`}
      >
        <Avatar loading={loading} rotationDegree={rotationDegree} />
      </div>

      <div
        className={`absolute top-2/4 transform -translate-y-2/4 ${
          navisActive ? "opacity-0 transition-opacity duration-500 hidden" : "opacity-100 transition-opacity duration-500"
        }`}
        style={{ visibility: cardVisibility }}
      >
        <MyCard cardtitle={cardtitle} info={infoText} socialLinks={socialLinks} resumeLink={resumeLink} />
      </div>

      <div className={` absolute translate-x-1/3 z-[-1] ${
          !navisActive ? "hidden " : ""}`} >
        <MyDialog/>
      </div>
      
    </div>
  );
};

export { PresentationCard };
