import React from 'react';
import { registerRootComponent } from 'expo';
import Splash from './Splash.js';
import Home from './Home.js';
import Schedule from './Schedule.js';

const App = () => {
  return (
    <Schedule />
  )
}

export default registerRootComponent(App);


