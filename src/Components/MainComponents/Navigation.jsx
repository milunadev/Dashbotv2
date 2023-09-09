import * as React from "react";
import { motion } from "framer-motion";
import { useNavigate } from "react-router-dom";
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



const itemIds = ['Sobre MiLu', 'Proyectos', 'Blog', 'Youtube'];
//motion.ul crea una lista de animaciones 
const Navigation = () => {

  const navigate = useNavigate();
  const handleDashBOTClick = () => {
    // Usar navigate para ir a la página "/dashbot"
    navigate("/dashbot");
  };
  
  
  return(
  <>
    <motion.ul variants={variants}>
      {itemIds.map((i) => (
        <motion.li
          key={i}
          variants={itemVariants}
          whileHover={{ scale: 1.1 }}
          whileTap={{ scale: 0.95 }}
        >
          <div className="icon-placeholder" style={style(i)}></div>
          <div className="text-placeholder hover:bg-[#352d3e] hover:text-[#f0ed34] text-center" style={style(i)}>
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
      >🤖DashBOT</div>
      </motion.li>
    </motion.ul>
    
  </>
)}




const style = (i) => ({
  
  //border: `2px solid ${colors[i]}`,
  border: '2px solid #352d3e'
});

////NO USADO
const colors = ["#FF008C", "#D309E1", "#9C1AFF", "#7700FF", "#4400FF"];

export {Navigation}