import React from 'react';
import {PresentacionBot} from '../../Components/PresentacionBot'
import {DashletUtilizacion} from '../../Components/DashletUtilizacion'
import { BotonInicio } from '../../Components/Botones/BotonInicio';
import { Layout } from '../../Components/Layout';

const Dashbot = () => {
  return (
    <>
    <Layout>
        <PresentacionBot/>
        
        <DashletUtilizacion/>

        <BotonInicio/>
    </Layout>
    </>
  );
};

export {Dashbot};
