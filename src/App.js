import {BrowserRouter as Router, Routes, Route} from "react-router-dom";
import './App.css';

import Unregister from './pages/unregister/Unregister'
import AdminEventos from './pages/streamer/adminEventos/AdminEventos'
import Login from './pages/login/Login'
import RegistroC from "./pages/registroC/RegistroC";
import RegistroS from "./pages/registroS/RegistroS";
import HomeStreamer from "./pages/homeStreamer/HomeStreamer";
import ActualizarEvento from "./pages/streamer/updateEvent/UpdateEvent"
import 'bootstrap/dist/js/bootstrap.min.js'

import HomeColaborador from "./pages/homeColaborador/HomeColaborador"
import Colaborador from "./pages/colaborador/Colaborador"

function App() {
  return (
    <>
      <Router>
        <Routes>
          <Route exact path='/' element={<Unregister />}/>
          <Route path='/uploadProblem' element={<></>}/>
          <Route path='/uploadSolution' element={<></>}/>
          <Route path='/login' element={<Login />}/>
          <Route path='/registrarse/colaborador' element={<RegistroC />}/>
          <Route path='/registrarse/streamer' element={<RegistroS />}/>
          <Route path='/streamer' element={<HomeStreamer />}/>
          <Route path='/streamer/eventos' element={<AdminEventos />}/>
          <Route path='/streamer/eventos/actualizar' element={<ActualizarEvento />}/>
          <Route path='/colaborador' element={<HomeColaborador />}/>
          <Route path='/colaborador/streamers' element={<Colaborador />}/>
        </Routes>
      </Router>
    </>
  );
}

export default App;
