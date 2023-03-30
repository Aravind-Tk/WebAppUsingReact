import './App.css';
import Login from './Login';
import Users from './Users';
import Home from './Home/Home';
import { BrowserRouter, Routes, Route } from "react-router-dom";


function App() {
  return (
    <div className="App">
     {/* < Login /> */}
     <BrowserRouter>
       <Routes>
       <Route path="/" element={<Home />} /> 
       <Route path="login" element={<Login />} />
       <Route path="users" element={<Users/>} />
       </Routes>
       </BrowserRouter>
    </div>
  );
}

export default App;
