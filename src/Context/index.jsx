import React from "react";
import { createContext, useEffect, useState } from "react";


const AppContext = createContext();

function Provider({children}){
    const [numConsultas,setNumConsultas] = useState(0);
    const [utilizaciondata, setUtilizaciondata] = useState({});
    const [navisActive, setNavIsActive] = useState(false);
    const [activeNavIcon, setActiveNavIcon] = useState(null);

    return(
        <AppContext.Provider value={{navisActive, setNavIsActive, numConsultas, setNumConsultas, utilizaciondata, setUtilizaciondata, activeNavIcon, setActiveNavIcon}} >
            {children}
        </AppContext.Provider>
    )
}

export {AppContext, Provider}