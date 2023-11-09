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

    <section className='bg-black h-full '>
      <div className='relative w-full h-full flex  flex-wrap justify-center p-4 '>
        <div className='absolute bottom-0 aboutimg'>
          <img className='w-full' src='https://milunadev-documentos.s3.us-east-2.amazonaws.com/michavatar.jpeg' alt="Descripción de la imagen" />
        </div>


        <div className="about-card ">
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
            <div id='AboutMainContainer' className=' '>
              <h1 className='text-white about-title  ' >Hola, soy Michelle Luna!</h1>
              <ul className='text-white AboutLista1 white'>
                <li>Presales Engineer en Cisco Systems</li>
                <li>Apasionada por la programabilidad</li>
                <li>Entusiasta de la nube y desarrollo</li>
              </ul>
            </div>
            </div>
        </div>

        <div className='AboutTechContainer'>
        <h2 className='text-white' >¿TECNOLOGÍAS USADAS?</h2>
        <span className='description'>
          <p> Para el frontend de está página use:</p>
          <div className='AboutIconContainer'>

            <FontAwesomeIcon style={{color: "#fdf740",}} size='s' icon={faSquareJs} />
            <FontAwesomeIcon style={{color: "#6ee0f7",}} size='s' icon={faReact} />
            <p className='AboutItem'>Tailwind, React y JavaScript </p>
          </div>
        </span>

        <span className='description'>
          <p> Para el backend de está página use:</p>
          <div className='AboutIconContainer'>
            <FontAwesomeIcon icon={faAws} style={{color: "#e5a315",}} size='s' />
            <p className='AboutItem'> Página hosteada en una instancia Linux EC2 de AWS. </p>
          </div>
          <div className='AboutIconContainer'> 
            <FontAwesomeIcon icon={faBucket} style={{color: "#71bc15",}} size='s' />
            <p className='AboutItem'> Imagenes y documentos hosteados en un bucket AWS S3. </p> 
          </div>

        </span>

        <span className='description'>
          <p>HI, Michelle</p>
        </span>
      </div>

      </div>
      
      
      



      
      

    </section>
    
  );
};

export {About};
