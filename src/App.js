import React from 'react';
import { Helmet } from 'react-helmet';


import './App.css';
import Header from './components/Header';

function App() {
  return (
    <div className="App font-Poppins">
      
      <Helmet>
        <title>Panos</title>
      </Helmet>
      {/* Header */}
      
      <Header/>

    </div>
  );
  
}


export default App;
