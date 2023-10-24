import * as React from "react";
import { motion } from "framer-motion";
import { useNavigate } from "react-router-dom";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faUser, faCode , faPen  } from '@fortawesome/free-solid-svg-icons'
import {  faYoutube } from '@fortawesome/free-brands-svg-icons';

import { AppContext } from "../../Context";


//variants define las animaciones cuando el menu se abre o cierra, y el otro para los items del MENU
const variants = {
  open: {
    transition: { staggerChildren: 0.07, delayChildren: 0.2 }
  },
  closed: {
    transition: { staggerChildren: 0.05, staggerDirection: -1 }
  }
};
const itemVariants = {
  open: {
    y: 0,
    opacity: 1,
    transition: {
      y: { stiffness: 1000, velocity: -50 }
    }
  },
  closed: {
    y: 50,
    opacity: 0,
    transition: {
      y: { stiffness: 1000 }
    }
  }
};

const iconMapping = {
  'Sobre MiLu': [faUser, 'AboutMi'],
  'Proyectos': [faCode, 'Proyectos'],
  'Blog': [faPen, 'Blog' ],
  'Youtube': [faYoutube, 'MiInfluencer' ]
};


const itemIds = Object.keys(iconMapping)
//motion.ul crea una lista de animaciones 
const Navigation = () => {


  const navigate = useNavigate();
  const handleDashBOTClick = () => {
    // Usar navigate para ir a la página "/dashbot"
    navigate("/dashbot");
  };
  const {activeNavIcon, setActiveNavIcon, navisActive, setNavIsActive} = React.useContext(AppContext)

  const handlenNav = (option) => { setActiveNavIcon(null); setNavIsActive(false) ;navigate(`/${option}`); }

  
  const set = (li) => {
    setActiveNavIcon(li);
    console.log(activeNavIcon)
  }

  
 

  return(
  <>
    
    <motion.ul  variants={variants}>
      {itemIds.map((i) => (
         <motion.li
         key={i}
         variants={itemVariants}
         whileHover={{ scale: 1.1 }}
         whileTap={{ scale: 0.95 }}
         onMouseEnter={() => {if(navisActive) {set(i)}}}
         onMouseLeave={() =>  {if(navisActive) {set(null)}}}
       >
         <div className="icon-placeholder" 
          style={style(i)}
          
         >
           <FontAwesomeIcon size="lg" icon={iconMapping[i][0]} /> 
         </div>
         <div className="text-placeholder hover:bg-[#352d3e] hover:text-[#f0ed34] text-center" style={style(i)} onClick={ () => navisActive ? handlenNav(iconMapping[i][1]) : ""}>
           {i}          
         </div>
       </motion.li>
        
      ))}
      <motion.li variants={
        { open: {
          opacity: 1,
          transition: {
            y: { stiffness: 1000, velocity: -50 }
          }
        },
        closed: {
          opacity: 0,
          transition: {
            y: { stiffness: 1000 }
          }}}}>
      <div className="absolute bottom-0 w-full text-center hover:scale-110 p-4 border-2 border-[#352d3e]"
      onClick={handleDashBOTClick}
      onMouseEnter={() => {if(navisActive) {set("Dashbot")}}}
      onMouseLeave={() =>  {if(navisActive) {set(null)}}}
      >🤖DashBOT</div>
      </motion.li>
    </motion.ul>
    
  </> 
)}




const style = (i) => ({
  //border: `2px solid ${colors[i]}`,
  border: '2px solid #352d3e',
  display: 'flex',
  justifyContent: 'center',  // Centrar horizontalmente
  alignItems: 'center',      // Centrar verticalmente
});

////NO USADO
const colors = ["#FF008C", "#D309E1", "#9C1AFF", "#7700FF", "#4400FF"];

export {Navigation}