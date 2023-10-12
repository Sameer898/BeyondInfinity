
import './App.css';
import { Route, Routes } from 'react-router-dom';
import {toast} from 'react-hot-toast'
import { Navbar } from './pages/Navbar';
import {Home} from './pages/Home';
import { Login } from './pages/Login';
import { Signup } from './pages/Signup';
import { VerifyEmail } from './pages/VerifyEmail';
import { MyProfile } from './pages/MyProfile';
function App() {
  return (
    <div>
     
      <Routes>
        <Route path="/" element={<Home/>}></Route>
        <Route path="/login" element={<Login/>}></Route>
        <Route path="/signup" element={<Signup/>}/>
        <Route path="/verifyEmail" element={<VerifyEmail/>}/>
       <Route path="/myprofile" element={<MyProfile/>}/>
      </Routes>
    </div>

  );
  }
    
   
  


export default App;
