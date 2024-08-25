
import './styles/App.css';
import ReactDOM from "react-dom/client";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Homepage from "./pages/home.js"


function App() {
  return (
    <BrowserRouter>
    <div className="App">
    <Routes>
        <Route path="/" element={<Homepage/>}>
          <Route index element={<Homepage />} />
        </Route>
      </Routes>
    </div>
    </BrowserRouter>

    
    
  );
}

export default App;
