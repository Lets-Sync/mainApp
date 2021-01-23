import React, { useState, useEffect } from 'react';
import { registerRootComponent } from 'expo';
import { Text } from 'react-native';
import Login from './Login.js'
import Home from './Home.js';
import Schedule from './Schedule.js';

const app = () => {
  const [page, setPage] = useState('login');

  useEffect(() => {}, [ page ]);

  if (page === 'login') {
    return (
    <Login setPage={setPage}/>
    )
  } else if (page === 'home') {
    return (
      <Home setPage={setPage} />
    )
  } else if (page === 'schedule') {
    return (
      <Schedule setPage={setPage} />
    )
  } else {
    return (
      <Text style={{marginTop: 100}}>Failed</Text>
    )
  }

}

export default registerRootComponent(app);


