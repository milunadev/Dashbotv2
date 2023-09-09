import React from 'react'
import { useEffect, useRef } from "react";
import { motion, sync, useCycle } from "framer-motion";
import { MenuToggle } from "../../Components/MainComponents/MenuToggle";
import { Navigation } from "../../Components/MainComponents/Navigation";
import "./styles.css";
import 'atropos/css'
import { PresentationCard } from '../../Components/MainComponents/PresentationCard';


const useDimensions = ref => {
    const dimensions = useRef({ width: 0, height: 0 });
  
    useEffect(() => {
      dimensions.current.width = ref.current.offsetWidth;
      dimensions.current.height = ref.current.offsetHeight;
    }, []);
  
    return dimensions.current;
}; 

const sidebar = {
    open: (height = 1000) => ({
      clipPath: `circle(${height * 2 + 200}px at 40px 40px)`,
      transition: {
        type: "spring",
        stiffness: 20,
        restDelta: 2
      }
    }),
    closed: {
      clipPath: "circle(30px at 40px 40px)",
      transition: {
        delay: 0.5,
        type: "spring",
        stiffness: 400,
        damping: 40
      }
    }
  };

const Main = () => {
  const [isOpen, toggleOpen] = useCycle(false, true);
  const containerRef = useRef(null);
  const { height } = useDimensions(containerRef);

  return (
    <div className='main-body'>

        <PresentationCard/>
        
    
        <motion.nav
        initial={false}
        animate={isOpen ? "open" : "closed"}
        custom={height}
        ref={containerRef}
        >
        <motion.div className="background" variants={sidebar} />
        <Navigation />
        <MenuToggle toggle={() => toggleOpen()} />
        </motion.nav>
    </div>
  );
};

export {Main};
