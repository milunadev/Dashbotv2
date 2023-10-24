import React from "react";
import {useRoutes, BrowserRouter} from 'react-router-dom'
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';

//Importar Pages y Components
import { Layout } from "../../Components/Layout";
import {Dashbot} from "../Dashbot"
import {Main} from "../MainPage"


//GLOBAL ICONS
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { library } from '@fortawesome/fontawesome-svg-core';
import { faGithub, faTwitter, faInstagram, faYoutube, faLinkedinIn, faLinkedin } from '@fortawesome/free-brands-svg-icons';
import { faUser, faCode, faBlog } from "@fortawesome/free-solid-svg-icons";

library.add(faGithub, faTwitter, faInstagram, faYoutube, faLinkedinIn, faLinkedin, faUser, faCode, faBlog)


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