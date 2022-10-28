import './App.css';
import Navbar from './components/navbar/Navbar';
import IdeaSummary from './components/IdeaSummary';
import FormIdea from './components/FormIdea';
import { Route, Routes } from 'react-router-dom'
import IdeaFull from './components/IdeaFull';

function App() {
  return (
    <>
      <Navbar/>
      <Routes>
        <Route path="/" element={<IdeaSummary saved={false} clicked={() => window.location.pathname = "detail"} />}/>
        <Route path="/detail" element={<IdeaFull />}/>
        <Route path="/loadidea" element={<FormIdea />}/>
      </Routes>
    </>
  );
}

export default App;
