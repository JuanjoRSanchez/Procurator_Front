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

function App() {
  return (
    <BrowserRouter>
          <Header />
              <Routes>
                  <Route path='/' element={<Home />}></Route>
                  <Route path='login' element={<Login />}></Route>
                  <Route path='register' element={<Register />}></Route>
                  <Route path='collectives' element={<Collectives />}></Route>
                  <Route path='newCollective' element={<NewCollective />}></Route>
                  <Route path='collectiveDetail/:collectiveName' element={<CollectiveDetail />}></Route>
                  <Route path='newGame/:idCollective' element={<NewGame />}></Route>
                  <Route path='updateGame/:idGame' element={<Updategame />}></Route>
                  <Route path='mierda' element={<Mierda />}></Route>
              </Routes>
          <Footer />
    </BrowserRouter>
  );
}

export default App;


/*
    <Header />

<Authprovider>
*/