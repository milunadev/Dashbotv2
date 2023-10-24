import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'


const MyCard = ({ cardtitle, info, socialLinks, resumeLink }) => {

  const openNewTab = () => {
    window.open('https://milunadev-documentos.s3.us-east-2.amazonaws.com/CV-MILUNA.pdf', '_blank');
  };

  return (
    <div className="card">
      <div className="img">
        <img  id='profileimage' src="https://milunadev-documentos.s3.us-east-2.amazonaws.com/Perfil-MILUNA.jpeg" alt="" />
      </div>
      <span>{cardtitle}</span>
      <p className="info">{info}</p>
      <div className="share">
        {socialLinks.map((link) => (
         <a key={link.name} href={link.url}>
            <FontAwesomeIcon size='lg' icon={['fab', link.name.toLowerCase()]} />
          </a>
        ))}
      </div>
      <button onClick={openNewTab}>Resume</button>
    </div>
  );
}
export {MyCard}
