import { BrowserRouter, Routes, Route } from 'react-router-dom'
import Home from './Views/home/Home.js'
import Login from './Views/login/Login.js'
import Register from './Views/register/Register.js'
import NewCollective from './Views/collectives_views/NewCollective/NewCollective.js'
import Collectives from './Views/collectives_views/Collectives/Collectives.js'
import CollectiveDetail from './Views/collectives_views/Collective/CollectiveDetail.js'
import NewGame from './Views/games_views/New_game.js'
import Updategame from './Views/games_views/Update_game.js'
import Header from './Components/header/Header.js'
import Footer from './Components/footer/Footer.js'
import Mierda from './Views/Mierda.js'
import UpdateCollective from './Views/collectives_views/updateCollective/UpdateCollective.js'
import { AuthProvider } from './context/AuthProvider';
import ProtectedRoute  from './ProtectedRoute.jsx'

function App() { 
  return (
    <BrowserRouter>
        <AuthProvider>
          <Header />
              <Routes>
                  <Route path='/' element={<Home />}></Route>
                  <Route path='login' element={<Login />}></Route>
                  <Route path='register' element={<Register />}></Route>
                  <Route element={<ProtectedRoute />}>
                      <Route path='collectives' element={<Collectives />} />
                      <Route path='newCollective' element={<NewCollective />}></Route>
                      <Route path='collectiveDetail/:collectiveName' element={<CollectiveDetail />}></Route>
                      <Route path='updateCollective/:idCollective' element={<UpdateCollective />}></Route>
                      <Route path='newGame/:idCollective' element={<NewGame />}></Route>
                      <Route path='updateGame/:idGame' element={< Updategame/>}></Route>
                      <Route path='mierda' element={<Mierda />}></Route>
                  </Route>                
              </Routes>
          <Footer />
        </AuthProvider>
    </BrowserRouter>
  );
}

export default App;

/*
<Routes>
    <Route path='/' element={<Home />}></Route>
    <Route path='login' element={<Login />}></Route>
    <Route path='register' element={<Register />}></Route>
    <Route element={<ProtectedRoute />}>
        <Route path='collectives' element={<Collectives />} />
        <Route path='newCollective' element={<NewCollective />}></Route>
        <Route path='collectiveDetail/:collectiveName' element={<CollectiveDetail />}></Route>
        <Route path='updateCollective/:idCollective' element={<UpdateCollective />}></Route>
        <Route path='newGame/:idCollective' element={<NewGame />}></Route>
        <Route path='updateGame/:idGame' element={< Updategame/>}></Route>
        <Route path='mierda' element={<Mierda />}></Route>
    </Route>                
</Routes>



<Route path='newCollective' element={<NewCollective />}></Route>
<Route path='collectiveDetail/:collectiveName' element={<CollectiveDetail />}></Route>
<Route path='updateCollective/:idCollective' element={<UpdateCollective />}></Route>
<Route path='newGame/:idCollective' element={<NewGame />}></Route>
<Route path='updateGame/:idGame' element={< Updategame/>}></Route>
<Route path='mierda' element={<Mierda />}></Route>
*/