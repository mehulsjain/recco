import './App.css';
import React from 'react';
import Header from './components/Header';
import Order from './components/Order';

// Fake api hosted at https://api.npoint.io/2a86cd3f4fb89a582f78

const App = () => {
  return (
    <>
      <Header />
      <Order />
    </>
  );
}

export default App;
