import React, { Component } from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import { NavigationBar } from './components/NavigationBar';
import Header from './components/Header';
import FooterPage from './components/FooterPage';
import 'bootstrap/dist/css/bootstrap.min.css';

function App() {
 return (
      <>
        <NavigationBar />
        <Header />
        <FooterPage />

      </>
    )
}

export default App
