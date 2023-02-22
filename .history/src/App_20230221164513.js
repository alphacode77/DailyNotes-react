import './App.css';
import Navbar from './compnents/Navbar';
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
    </>

  </Router>
  );
}

export default App;
