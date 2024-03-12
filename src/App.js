import { BrowserRouter, Routes, Route } from 'react-router-dom'
import Header from './Components/header/Header.js'
import Footer from './Components/footer/Footer.js'
import Home from './Views/home/Home.js'
import Login from './Views/login/Login.js'
import Register from './Views/register/Register.js'
import NewCollective from './Views/collectives_views/NewCollective/NewCollective.js'
import Collectives from './Views/collectives_views/Collectives/Collectives.js'
import CollectiveDetail from './Views/collectives_views/Collective/CollectiveDetail.js'
import UpdateCollective from './Views/collectives_views/updateCollective/UpdateCollective.js'
import Game from './Views/games_views/game/GameDetail.js'
import Games from './Views/games_views/Games/Games.js'
import NewGame from './Views/games_views/New_game/New_game.js'
import Updategame from './Views/games_views/Update_game/Update_game.js'
import Players from './Views/players_views/players/Players.js'
import NewPlayer from './Views/players_views/newPlayer/New_Player.js'
import { AuthProvider } from './context/AuthProvider';
import ProtectedRoute  from './ProtectedRoute.jsx'
import PlayersToGame from './Views/players_views/new_Player_to_Game/playersToGames.js'
import UpdatePlayer from './Views/players_views/UpdatePlayer/UpdatePlayer.js'
import PlayerDetail from './Views/players_views/player/PlayerDetail.js'
import Fields from './Views/field_views/fields/Fields.js'
import FieldDetail from './Views/field_views/field/FieldDetail.js'
import NewField from './Views/field_views/newField/NewField.js'
import UpdateField from './Views/field_views/updateField/UpdateField.js'

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
                      <Route path='collectiveDetail/:collectiveId' element={<CollectiveDetail />}></Route>
                      <Route path='updateCollective' element={<UpdateCollective />}></Route>
                      <Route path='games' element={<Games />}></Route>
                      <Route path='gameDetail' element={<Game />}></Route>
                      <Route path='newGame' element={<NewGame />}></Route>
                      <Route path='updateGame' element={< Updategame/>}></Route>
                      <Route path='players' element={<Players />}></Route>
                      <Route path='newPlayer' element={<NewPlayer />}></Route>
                      <Route path='addPlayerToGame' element={<PlayersToGame />}></Route>      
                      <Route path='playerDetail' element={<PlayerDetail />}></Route>
                      <Route path='updatePlayer' element={<UpdatePlayer />}></Route>
                      <Route path='fields' element={<Fields />}></Route>
                      <Route path='fieldDetail' element={<FieldDetail />}></Route>
                      <Route path='newField' element={<NewField />}></Route>
                      <Route path='updateField/:fieldId' element={<UpdateField />}></Route>
                  </Route>                
              </Routes>
          <Footer />
        </AuthProvider>
    </BrowserRouter>
  );
}

export default App;

