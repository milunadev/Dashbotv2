import React from "react";
import {useRoutes, BrowserRouter} from 'react-router-dom'
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';

//Importar Pages y Components
import { Layout } from "../../Components/Layout";
import {Dashbot} from "../Dashbot"
import {Main} from "../MainPage"


const AppRoutes = ()=>{
    const routes = useRoutes([
        {path: "/", element: <Main/>},
        {path: "/Dashbot",element: <Dashbot/>}
    ])
    return routes
}

function AppUI(){



    return(
        <BrowserRouter>
            
                <AppRoutes/>
            
        </BrowserRouter>
    )
}

export {AppUI};