import React from "react";
import {useRoutes, BrowserRouter} from 'react-router-dom'

import {Home} from "../Home"
import { Layout } from "../../Components/Layout";

const AppRoutes = ()=>{
    const routes = useRoutes([
        {path: "/", element: <Home/>},
    ])
    return routes
}

function AppUI(){



    return(
        <BrowserRouter>
            <Layout>
                <AppRoutes/>
            </Layout>
        </BrowserRouter>
    )
}

export {AppUI};