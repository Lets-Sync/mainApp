import React from 'react';
import { registerRootComponent } from 'expo';
import { StatusBar } from 'expo-status-bar';
import Splash from './Splash.js';
import Home from './Home.js';


const App = () => {
  return (
    <Home />
  )
}

export default registerRootComponent(App);


