import React from 'react'
import "./HomeStreamer.css"
import 'bootstrap/dist/css/bootstrap.min.css'
import Navar from '../../components/nav/Navar'
import ComprobarLogin from '../../components/comprobarLogin/ComprobarLogin'

function HomeStreamer() {

return(
    <div className="HomeStreamer">
    <ComprobarLogin />
    <Navar/>


    <a href="./streamer/eventos"><button class=" btn btn-primary btn-lg botonlarge" onclick="">Administrar Eventos</button></a>

    <h2 class="h2pru">Eventos</h2>
    <div class="contenedor">
      <table class="table table-light">
        <thead>
          <tr>
            <th scope="col">Numero</th>
            <th scope="col">Nombre</th>
            <th scope="col">Fecha</th>
            <th scope="col">Cantidad de participantes</th>
            <th scope="col">Imagen</th>
            <th scope="col">Estado</th>
          </tr>
        </thead>
        <tbody id="personajes">
        </tbody>
      </table>
    </div>



    </div>
)
}
export default HomeStreamer;