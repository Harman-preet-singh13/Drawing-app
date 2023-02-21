import './App.css';
import DrawingArea from './components/DrawingArea'
import Navbar from './components/Navbar';
import About from './components/About';
import { BrowserRouter, Routes, Route } from "react-router-dom";


function App() {
  return (
    <div className="App">  
      <div >
        <BrowserRouter>
        <Navbar />
          <Routes>
            <Route index element={<DrawingArea />} />
            <Route path="about" element={<About />} />
          </Routes>
        </BrowserRouter>
      </div>
    </div>
  );
}

export default App;
