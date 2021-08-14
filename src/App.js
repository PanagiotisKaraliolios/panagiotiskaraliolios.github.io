import React from "react";
import { Helmet } from "react-helmet";

import "./App.css";
import Header from "./components/Header";
import Hero from "./components/Hero";

function App() {
  return (
    <div className="App font-Poppins bg-gray-100 dark:bg-indigo-1000 transition duration-500">
      <Helmet>
        <title>Panos</title>
      </Helmet>
      {/* Header */}

      <Header />

      {/* Hero Section */}

      <Hero />

      {/* About Section */}

      {/* Skills Section */}

      {/* Services Section */}

      {/* Contact Me Section */}
    </div>
  );
}

export default App;
