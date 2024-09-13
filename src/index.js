import React from 'react';
import ReactDOM from 'react-dom/client';
import './styles/App.css';
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Homepage from "./pages/Home.js"
import Stories from './pages/Stories.js';
import About from './pages/About.js';
import Header from './components/Layout.js';



export default  function App() {
  return (
   
    <BrowserRouter>
    <Routes>
        <Route path="/" element={<Header/>}>
          <Route index element={<Homepage />} />
          <Route path="about" element={<About />} />
          <Route path="stories" element={<Stories />} />
        </Route>
      </Routes>

    </BrowserRouter>

    
    
  );
}

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>
);


