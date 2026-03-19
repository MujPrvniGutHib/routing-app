import React, { Component } from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import { NavigationBar } from './components/NavigationBar';
import Header from './components/Header';
import FooterPage from './components/FooterPage';
import 'bootstrap/dist/css/bootstrap.min.css';
import {Home} from './Home'
import { About } from './About';
import { References } from './References';
import { Contact } from './Contact';
import { Layout } from './components/Layout.jsx';


function App() {
 return (
      <>
        <NavigationBar />
        <Header />
          <Router>
              <Layout>
                  <Routes>
                      <Route path="/" element={<Home />} />
                      <Route path="/about" element={<About />} />
                      <Route path="/references" element={<References />} />
                      <Route path="/contact" element={<Contact />} />
                  </Routes>
              </Layout>
          </Router>
        <FooterPage />

      </>
    )
}

export default App
