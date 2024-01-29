import React, { Component } from 'react';
import './App.css'
import Navbar from './Components/Navbar';
import Header from './Components/Header';
import EduContent from './Components/EduContent';
import LearnModules from './Components/LearnModules';
import CaseStudy from './Components/CaseStudy';
import CommunityEng from './Components/CommunityEng';
import ResourceLib from './Components/ResourceLib';
import Policies from './Components/Policies';
import 'bootstrap/dist/css/bootstrap.css'
import 'font-awesome/css/font-awesome.css'

function App() {

  return (
    <>
      <Navbar />
      <Header />
      <EduContent />
      <LearnModules />
      <CaseStudy />
      <CommunityEng />
      <ResourceLib />
      <Policies />
    </>
  )
}

export default App
