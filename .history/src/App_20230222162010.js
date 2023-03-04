import './App.css';
import Navbar from './components/Navbar';
import Home from './components/Home';
import About from './components/About';
import {
  BrowserRouter as Router,
  Route,
  Routes
} from "react-router-dom";
import NoteContext from './Context/Notes/NoteContext';

function App() {
  return (
    <>
    <NoteState>
    <Router>
      <Navbar/>
    <Routes>
      <Route exact path="/home" element={<Home/>} />
      <Route exact path="/about" element={<About/>} />
      {/* <Route exactPath="/navbar" element={<Navbar/>} /> */}
    </Routes>
    <h1>My Daily Notes</h1>
  </Router> 
  </NoteState>
    </>

  );
}

export default App;
