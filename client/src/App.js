import './App.css';
import Navbar from './components/navbar/Navbar';
import IdeaSummary from './components/IdeaSummary';
import { Route, Routes } from 'react-router-dom'
import IdeaFull from './components/IdeaFull';

function App() {
  return (
    <>
      <Navbar/>
      <Routes>
        <Route path="/" element={<IdeaSummary saved={false} clicked={() => window.location.pathname = "detail"} />}/>
        <Route path="/detail" element={<IdeaFull />}/>
      </Routes>
    </>
  );
}

export default App;
