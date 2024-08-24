import logo from './logo.svg';
import './styles/App.css';
import { BrowserRouter } from 'react-router-dom'
import Homepage from "./pages/home.js"

function App() {
  return (
    <BrowserRouter>
    <div className="App">
      <Homepage/>
    </div>
    </BrowserRouter>

    
    
  );
}

export default App;
