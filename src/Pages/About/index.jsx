import React from 'react';
import { Layout } from '../../Components/Layout';
import '../../css/aboutme.css';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faSquareJs, faReact, faAws} from '@fortawesome/free-brands-svg-icons';



const About = () => {
  return (
    <Layout>
      <div className="w-full mx-auto p-4">
        <section className="mb-6">
          <h1 className="text-4xl font-bold text-center mb-4">Michelle Luna Alama</h1>
          <p className="text-xl text-center">DevOps Aspirante | Ingeniera Electrónica</p>
          <div className="flex justify-center">
            <img  src="https://milunadev-documentos.s3.us-east-2.amazonaws.com/Perfil-MILUNA.jpeg" alt="Michelle Luna Alama" className=" border-4 border-violet-900 profile-pic rounded-full w-40 h-40 mt-4 mb-4 object-cover"/> 
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
              <div class="card_content">
              <div id='AboutMainContainer' className=' '>
                <p className="text-sm leading-relaxed text-white">
                👩‍🎓 Soy Ingeniera de Preventa especializada en tecnologías de red y apasionada por DevOps. Mi experiencia incluye el desarrollo de soluciones innovadoras utilizando la nube de AWS 👩‍💻, destacando en proyectos como reconocimiento facial con AWS Rekognition y Lambda y APIs Cisco Meraki. 
                🤖 Con habilidades en programación, automatización, he creado un chatbot Cisco Webex con AWS EC2, Terraform, Bash, JavaScript y Python. Estoy y estare siempre enfocada en el aprendizaje continuo y en superar nuevos retos en DevOps para aportar valor excepcional a los clientes.
                </p>
              </div>
              </div>
            </div>

          
        </section>

        <section className="mb-6">
          <h2 className="text-3xl font-bold mb-3">CERTIFICACIONES</h2>
          <div className="flex flex-wrap justify-center">
            
          </div>
        </section>

        <section>
          <h2 className="text-3xl font-bold mb-3">Contacto</h2>
          <p className="text-md">Email: michelle.luna.alama@gmail.com | misusuyatec@gmail.com</p>
          <p className="text-md">LinkedIn: <a href="www.linkedin.com/in/milunadev" className="text-blue-600">milunadev</a></p>
        </section>
      </div>
    </Layout>
  );
};


export {About};
