
import './styles/App.css';
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Homepage from "./pages/home.js"
import Header from './components/header.js';


function App() {
  return (
    <BrowserRouter>
    <div className="App">
    <Routes>
        <Route path="/" element={<Header/>}>
          <Route index element={<Homepage />} />
        </Route>
      </Routes>
    </div>
    </BrowserRouter>

    
    
  );
}

export default App;
