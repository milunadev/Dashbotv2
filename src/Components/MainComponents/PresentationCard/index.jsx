import * as React from "react";
import { useNavigate } from "react-router-dom";
import Atropos from 'atropos/react';

const PresentationCard = () => {


    return(
        <>
           <div id="app">
                {/* Atropos */}
                <Atropos
        className="my-atropos"    
        activeOffset={40}
        shadowScale={1.05}
        onEnter={() => console.log('Enter')}
        onLeave={() => console.log('Leave')}
        onRotate={(x, y) => console.log('Rotate', x, y)}
      >
                    <img src={require('./imagen.jpg')}alt="" />
                    
                </Atropos>
            </div>
        </>
    )
}

export {PresentationCard}