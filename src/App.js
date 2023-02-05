import './App.css';
import Header from './Components/Header';
import Main from './Components/Main';
import Projects from './Components/Projects';
import Me from './Components/Me';
import Contact from './Components/Contact';
import React from 'react';
import { Context } from './Context';


function App() {

  const { Lightmode }= React.useContext(Context)


  return (
    <div className={Lightmode ? "light" : "dark"}>
        <Header />
        <Main />
        <Projects />
        <Me />
        <Contact />
    </div>  
  );
}

export default App;
