import './App.css';
import Navbar from './components/navbar/Navbar';
import Homepage from './components/homepage/Homepage';
import FormIdea from './components/FormIdea';
import { Route, Routes } from 'react-router-dom'
import IdeaFull from './components/IdeaFull';

function App() {
  return (
    <>
      <Navbar/>
      <Routes>
        <Route path="/" element={<Homepage saved={false}/>}/>
        <Route path='/detail/:id' component={IdeaFull} element={<IdeaFull />}/>
        <Route path="/loadidea" element={<FormIdea />}/>
      </Routes>
    </>
  );
}

export default App;
