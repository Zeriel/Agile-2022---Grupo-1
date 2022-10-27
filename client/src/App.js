import logo from './logo.svg';
import './App.css';
import Navbar from './components/navbar/Navbar';
import IdeaSummary from './components/IdeaSummary';

function App() {
  return (
    <>
      <Navbar/>
      <IdeaSummary saved={false}/>
    </>
  );
}

export default App;
