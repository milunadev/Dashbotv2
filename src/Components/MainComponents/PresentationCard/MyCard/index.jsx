import React from 'react';

const MyCard = ({ info, socialLinks, resumeLink }) => {
  return (
    <div className="card">
      <div className="img"></div>
      <span>About Me</span>
      <p className="info">{info}</p>
      <div className="share">
        {socialLinks.map((link) => (
          <a key={link.name} href={link.url}>
            <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" className={`bi bi-${link.name.toLowerCase()}`} viewBox="0 0 16 16">
              {/* Agrega el icono SVG correspondiente aquí */}
            </svg>
          </a>
        ))}
      </div>
      <button>Resume</button>
    </div>
  );
}
export {MyCard}
