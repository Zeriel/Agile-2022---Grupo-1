import './App.css';
import React, { useState, useEffect } from 'react';
import { Route, Routes  } from 'react-router-dom'
import Login from './components/login/Login'
import Register from './components/login/FormRegister'
import Navbar from './components/navbar/Navbar';
import Homepage from './components/homepage/Homepage';
import FormIdea from './components/idea/FormIdea';
import IdeaFull from './components/idea/IdeaFull';
import MisIdeas from './components/idea/MisIdeas';

function App() {
  const [user, setUser] = useState()

  useEffect(() => {
    const loggedInUser = localStorage.getItem("user");
    if (loggedInUser) {
      const foundUser = loggedInUser;
      setUser(foundUser);
    }
  }, []);

  //if(!user) {
  //  return <Login/>
  //}
  
  return (
    <>
      {(() => {
        if (user) {
          return <Navbar/>
        }
      })()}
      <Routes>
        <Route path="/ingresar" element={<Login />}/>
        <Route path="/registrarse" element={<Register />}/>
        <Route path="/" element={<Homepage user={user} saved={false}/>}/>
        <Route exact path="/detail/:id" component={IdeaFull} element={<IdeaFull user={user}/>}/>
        <Route path="/loadidea" element={<FormIdea user={user}/>}/>
        <Route path="/mis-ideas" element={<MisIdeas user={user}/>}/>
      </Routes>
    </>
  );
}

export default App;
