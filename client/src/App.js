import './App.css';
import React, { useState, useEffect } from 'react';
import Login from './components/login/Login'
import Navbar from './components/navbar/Navbar';
import Homepage from './components/homepage/Homepage';
import FormIdea from './components/FormIdea';
import { BrowserRouter, Route, Routes, Switch  } from 'react-router-dom'
import IdeaFull from './components/IdeaFull';

function App() {
  const [user, setUser] = useState()

  useEffect(() => {
    const loggedInUser = localStorage.getItem("user");
    if (loggedInUser) {
      const foundUser = loggedInUser;
      setUser(foundUser);
    }
  }, []);

  if(!user) {
    return <Login/>
  }
  
  return (
    <>
      <Navbar/>
      <Routes>
        <Route path="/" element={<Homepage saved={false}/>}/>
        <Route exact path="/detail/:id" component={IdeaFull} element={<IdeaFull />}/>
        <Route path="/loadidea" element={<FormIdea />}/>
      </Routes>
    </>
  );
}

export default App;
