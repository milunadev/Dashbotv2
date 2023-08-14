import React from 'react';
import { Dashboard } from '../../Components/Dash1';
import { Dashlet2 } from '../../Components/Dash2';
import { Dashlet3 } from '../../Components/Dash3';

const Home = () => {
  return (
    <>
        <Dashboard/>
        <Dashlet2/>
        <Dashlet3/>
    </>
  );
};

export {Home};
