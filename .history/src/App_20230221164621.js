import './App.css';
import Navbar from './compnents/Navbar';
import Home from './compnents/Home';
import About from './compnents/About';
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link,
  Routes
} from "react-router-dom";

function App() {
  return (
    <Router>
    <>
    <Routes>
      <Route exactPath="/home" element={<Home/>} />
      <Route exactPath="/about" element={<About/>} />
      <Route exactPath="/" element={<Navbar/>} />
    </Routes>
    <h1>My Daily Notes</h1>

    </>

  </Router>
  );
}

export default App;
