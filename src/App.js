import React from "react";
import { Helmet } from "react-helmet";

import "./App.css";
import About from "./components/About";
import Header from "./components/Header";
import Hero from "./components/Hero";
import Skills from "./components/Skills"
import Footer from "./components/Footer"

function App() {
  return (
    <div className="App flex flex-col select-none font-Poppins bg-gray-100 dark:bg-indigo-1000 transition duration-500">
      <Helmet>
        <title>Panos | Welcome</title>
      </Helmet>
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

      

      {/* Footer */}

      <Footer/>

      {/* Scroll up button */}

      <button className=" bg-blue-600 z-30 bottom-28 sm:bottom-8 right-12 fixed rounded-2xl shadow-md">
      
        <svg className=" w-6 h-6 m-3" xmlns="http://www.w3.org/2000/svg" width="32.397" height="37.01" viewBox="0 0 32.397 37.01">
          <path id="arrow-downward-fill" d="M39.359,27.655a2.314,2.314,0,0,0-3.262-.3l-10.087,8.4V8.314a2.314,2.314,0,0,0-4.627,0V35.753L11.3,27.354a2.316,2.316,0,1,0-2.961,3.563L22.215,42.485l.347.208.3.162a2.314,2.314,0,0,0,1.666,0l.3-.162.347-.208L39.058,30.917a2.314,2.314,0,0,0,.3-3.262Z" transform="translate(39.895 43.01) rotate(180)" fill="#f8f8f8"/>
        </svg>

      </button>

    </div>
  );
}

export default App;
