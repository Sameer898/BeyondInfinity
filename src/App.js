
import './App.css';
import { Route, Routes } from 'react-router-dom';
import {toast} from 'react-hot-toast'
import { Navbar } from './pages/Navbar';
import {Home} from './pages/Home';
import { Login } from './pages/Login';
function App() {
  return (
    <div>
      
      <Routes>
        <Route path="/" element={<Home/>}></Route>
        <Route path="/login" element={<Login/>}></Route>
      </Routes>
    </div>

  );
  }
    
   
  


export default App;
