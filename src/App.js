import { BrowserRouter, Routes, Route } from 'react-router-dom'
import Home from './Views/home/Home.js'
import Login from './Views/login/Login.js'
import Register from './Views/register/Register.js'

import Penas from './Views/Penas/Penas.js'

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path='/' element={<Home />}></Route>
        <Route path='login' element={<Login />}></Route>
        <Route path='register' element={<Register />}></Route>
        <Route path='penas' element={<Penas />}></Route>
      </Routes>
    </BrowserRouter>
  );
}

export default App;
