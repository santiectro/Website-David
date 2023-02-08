import './App.css';
import Header from './Components/Header';
import Main from './Components/Main';
import Projects from './Components/Projects';
import Me from './Components/Me';
import Contact from './Components/Contact';
import React from 'react';
import { Context } from './Context';
import {Routes, Route} from "react-router-dom"
import WebsiteInfo from './Components/WebsiteInfo';

function App() {

  const { Lightmode }= React.useContext(Context)


  return (
    <div className={Lightmode ? "light" : "dark"}>
      <Routes>
        <Route exact path="/" element={
          <>
            <Header/>
            <Main />
            <Projects />
            <Me />
            <Contact />
          </>
          
        }/>
        <Route path='/fuck' element = {
          <WebsiteInfo />
        }/>
          
      </Routes>    
    </div>  
  );
}

export default App;
