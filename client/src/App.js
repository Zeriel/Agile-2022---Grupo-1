import logo from './logo.svg';
import './App.css';
import Navbar from './components/navbar/Navbar';
import smart from './images/smart.png';

function App() {
  return (
    <>
      <Navbar/>
      <div className="MainIdea">
        <p style={{fontSize:"3rem"}}>Mesita de Luz Smart</p>
        <div style={{display:"flex"}}>
          <img src={smart} alt="Smart" style={{width: "300px", margin: "auto", alignText: "center"}} />
          <p style={{margin: "0 30px"}}>Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, 
            when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic 
            typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently 
            with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum.
          </p>
        </div>
      </div>
    </>
  );
}

export default App;
