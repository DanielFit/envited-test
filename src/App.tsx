import React from 'react';
import logo from './logo.svg';
import LandingPage from './pages/landing-page'
import ReactDOM from "react-dom/client";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import './App.css';
import EventPage from './pages/event-page';
import CreateEvent from './pages/create-event';


function App() {
  return (

    <BrowserRouter>
     <Routes> 

     <Route path="/" element={<CreateEvent />}>

     </Route>
     </Routes>
    </BrowserRouter>
   
   
  );
}

export default App;
