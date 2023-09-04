import logo from './logo.svg';
import './App.css';
import Chart from './Chart';
import { BrowserRouter as Router, Routes , Route } from 'react-router-dom';

function App() {
  return (

    <Router>
      <Routes >
        <Route path="/" element={<Chart />} />
      </Routes >
    </Router>

  );
}

export default App;
