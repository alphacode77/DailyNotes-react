import './App.css';
import Navbar from './components/Navbar';
import Home from './components/Home';
import About from './components/About';
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Routes
} from "react-router-dom";

function App() {
  return (
    <>
    <Router>
      <Navbar/>
    <Routes>
      <Route exact path="/home" element={<Home/>} />
      <Route exact path="/about" element={<About/>} />
      {/* <Route exactPath="/navbar" element={<Navbar/>} /> */}
    </Routes>
    <h1>My Daily Notes</h1>
  </Router> 

    </>

  );
}

export default App;
