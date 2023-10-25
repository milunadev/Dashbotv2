import React from 'react';
import { Layout } from '../../Components/Layout';
import '../../css/aboutme.css'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faSquareJs, faReact, faAws } from '@fortawesome/free-brands-svg-icons';
import { library } from '@fortawesome/fontawesome-svg-core';
import { color } from 'framer-motion';
import { faBucket } from '@fortawesome/free-solid-svg-icons';

library.add(faSquareJs,faReact,faAws,faBucket); 

const About = () => {
  return (

    
    
    <section className='bg-black h-full flex gap-4'>
      <div className='relative w-[450px] h-full'>
        <div className='absolute bottom-0 aboutimg'>
          <img className='w-full' src='https://milunadev-documentos.s3.us-east-2.amazonaws.com/michavatar.jpeg' alt="Descripción de la imagen" />
        </div>


        <div className="about-card absolute top-3 left-3">
            <div className="about-tools">
              <div class="about-circle">
                <span class="red box"></span>
              </div>
              <div class="about-circle">
                <span class="yellow box"></span>
              </div>
              <div class="about-circle">
                <span class="green box"></span>
              </div>
            </div>
            <div class="card__content">
            <div id='AboutMainContainer' className='absolute '>
              <h1 className='text-white about-title  ' >Hola, soy Michelle Luna!</h1>
              <ul className='text-white AboutLista1 white'>
                <li>Presales Engineer en Cisco Systems</li>
                <li>Apasionada por la programabilidad</li>
                <li>Entusiasta de la nube y desarrollo</li>
              </ul>
            </div>
            </div>
        </div>

      </div>
      

      <div className='AboutTechContainer'>
        <h2 className='text-white' >¿Que técnologias manejo?</h2>
        <span className='description'>
          <p> 🦄 Para el frontend de está página use:</p>
          <div className='AboutIconContainer'>
            <FontAwesomeIcon style={{color: "#fdf740",}} size='2xl' icon={faSquareJs} />
            <FontAwesomeIcon style={{color: "#6ee0f7",}} size='2xl' icon={faReact} />
            <p className='text-white' >Tailwind</p>
          </div>
        </span>

        <span className='description'>
          <p> 🔙 Para el backend de está página use:</p>
          <div className='AboutIconContainer'>
            <FontAwesomeIcon icon={faAws} style={{color: "#e5a315",}} size='2xl' />
            <FontAwesomeIcon icon={faBucket} style={{color: "#71bc15",}} size='2xl' />
            
          </div>
        </span>
      </div>



      
      

    </section>
    
  );
};

export {About};
