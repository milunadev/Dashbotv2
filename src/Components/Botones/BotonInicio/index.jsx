import React from 'react';
import { useNavigate } from "react-router-dom";

function BotonInicio() {
  let navigate = useNavigate();

  function handleClick() {
    navigate("/");
  }

  return (
    <div className='flex flex-col items-center justify-center'>
      <button className='botonInicio lg:bottom-4 ali' type="button" onClick={handleClick}>
        Inicio
      </button>
    </div>
    
  );
}

export {BotonInicio}