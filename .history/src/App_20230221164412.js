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

      <Route exactPath="/" element={<Navbar/>} />
      <h1>My Daily Notes</h1>
    </Routes>
    </>

  </Router>
  );
}

export default App;
