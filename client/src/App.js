import './App.css';
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import 'bootstrap/dist/css/bootstrap.min.css';

import Homepage from './pages/Homepage'

function App() {
  return (
    <Router>
      <div className="App d-flex justify-content-center">
        <Routes>
          <Route path="/" element={<Homepage />} />
        </Routes>
      </div>
    </Router>
  );
}
export default App;
    // <div className="App d-flex justify-content-center">
      
    // </div>