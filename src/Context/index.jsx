import React from "react";
import { createContext, useEffect, useState } from "react";


const AppContext = createContext();

function Provider({children}){
    const [numConsultas,setNumConsultas] = useState(0);
    const [utilizaciondata, setUtilizaciondata] = useState({});

    return(
        <AppContext.Provider value={{numConsultas, setNumConsultas, utilizaciondata, setUtilizaciondata}} >
            {children}
        </AppContext.Provider>
    )
}

export {AppContext, Provider}