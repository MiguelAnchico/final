import React from 'react'
import 'bootstrap/dist/css/bootstrap.min.css'
import Navar from '../../components/nav/Navar'
import NavarColaborador from '../../components/nav/NavarColaborador'
import ComprobarLogin from '../../components/comprobarLogin/ComprobarLogin'

function HomeColaborador() {

return(
    <div className="HomeStreamer">
    <ComprobarLogin />
    <NavarColaborador/>


    <a href="/colaborador"><button class=" btn btn-primary btn-lg botonlarge" onclick="">Administrar Streamers</button></a>

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
          </tr>
        </thead>
        <tbody id="personajes">
        </tbody>
      </table>
    </div>



    </div>
)
}
export default HomeColaborador;