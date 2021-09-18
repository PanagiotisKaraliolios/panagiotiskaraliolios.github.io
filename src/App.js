/* eslint-disable no-unused-vars */
import React, { useEffect, useState } from "react";

import "./App.css";
import About from "./components/About";
import Header from "./components/Header";
import Hero from "./components/Hero";
import Skills from "./components/Skills"
import Contact from "./components/Contact"
import Footer from "./components/Footer"
import ScrollToTopBtn from "./components/ScrollToTop";


function App() {
  
  
  
  return (
    <div className="App flex flex-col select-none font-Poppins bg-gray-100 dark:bg-indigo-1000 transition duration-500">
      
      {/* Header */}

      <Header />

      {/* Hero Section */}

      <Hero />

      {/* About Section */}

      <About/>

      {/* Skills Section */}

      <Skills/>

      {/* Qualifications Section */}



      {/* Services Section */}



      {/* Contact Me Section */}

      <Contact/>

      {/* Footer */}

      <Footer/>

      {/* Scroll up button */}

      <ScrollToTopBtn />

    </div>
  );
}

export default App;
