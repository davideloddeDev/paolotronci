import 'bootstrap/dist/css/bootstrap.min.css';

import './App.css'
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import {Italian} from "./components/italian.jsx";
import {English} from "./components/english.jsx";



function App() {
  return (
      <>
          <Router>
              <Routes>
                  <Route path="/" element={<Italian/>}/>
                  <Route path="/english" element={<English/>}/>
                  <Route path="/italian" element={<Italian/>}/>
              </Routes>
          </Router>
      </>


  )
}

export default App
