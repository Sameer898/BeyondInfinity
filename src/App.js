
import './App.css';
import { Route, Routes } from 'react-router-dom';
import {toast} from 'react-hot-toast'
import { Navbar } from './pages/Navbar';
import {Home} from './pages/Home';
import { Login } from './pages/Login';
import { Signup } from './pages/Signup';
import { VerifyEmail } from './pages/VerifyEmail';
import { MyProfile } from './pages/MyProfile';
import { SearchPage } from './pages/SearchPage';
import { Auth } from './pages/Auth';
import { Setting } from './pages/Setting';
import { Caregiver } from './pages/Caregiver';
import { Blood } from './pages/Blood';
function App() {
  return (
    <div>
     
      <Routes>
        <Route path="/" element={<Home/>}></Route>
        <Route path="/login" element={<Login/>}></Route>
        <Route path="/signup" element={<Signup/>}/>
        <Route path="/verifyEmail" element={<VerifyEmail/>}/>
       <Route path="/myprofile" element={<MyProfile/>}/>
       <Route path="/search" element={<SearchPage/>}/>
       <Route path="/authentication" element={<Auth/>}/>
       <Route path="/setting" element={<Setting/>}/>
       <Route path="/caregivier" element={<Caregiver/>}/>
       <Route path="/blood" element={<Blood/>}/>
      </Routes>
    </div>

  );
  }
    
   
  


export default App;
