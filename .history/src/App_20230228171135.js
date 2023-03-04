import './App.css';
import Navbar from './components/Navbar';
import Home from './components/Home';
import About from './components/About';
import NoteState from './Context/Notes/NoteState';
import {
  BrowserRouter as Router,
  Route,
  Routes
} from "react-router-dom";
import Alert from './components/Alert';

function App() {
  return (
    <>
    <NoteState>

      
    <Router>
    <Navbar/>
    <Alert message="Welcome to DailyNotes"/>
    <Routes>
      <Route exact path="/" element={<Home/>} />
      <Route exact path="/about" element={<About/>} />
      {/* <Route exactPath="/navbar" element={<Navbar/>} /> */}
    </Routes>
  </Router> 
  </NoteState>

    </>

  );
}

export default App;
