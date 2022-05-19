import React from 'react'
import 'bootstrap/dist/css/bootstrap.min.css'
import Navar from '../../components/nav/Navar'
import NavarColaborador from '../../components/nav/NavarColaborador'
import ComprobarLogin from '../../components/comprobarLogin/ComprobarLogin'

import Select from 'react-select';
import makeAnimated from 'react-select/animated';
import axios from 'axios'

function Buscador() {
    const animatedComponents = makeAnimated();
    const[streamer, setStreamer] = React.useState([]);
    const[datos, setDatos] = React.useState([])
    const[datosFiltrado, setDatosFiltrado] = React.useState([]);
    const[load, setLoad] = React.useState(true)

    function obtener(){
        axios.get("https://pruebauao.azurewebsites.net/streamers")
        .then((e) => {
            let aux = [];
            let i = 0;

            aux[i] = {label: "Todos", value: i}
            i++

            e.data[0].map((elem) =>{
                aux[i] = {label: elem.nombre, value: i,};
                i++;
            })

            setStreamer(aux);
            setDatos(e.data[0])
            setDatosFiltrado(e.data[0])
        }).catch(err =>{
            console.log(err)
        });
    }

    function filtrar(e){
        datos.map((elem) => {
            if(elem.nombre == e){
                setDatosFiltrado([elem])
            }

            if(e == "Todos"){
                setDatosFiltrado(datos);
            }
        })
    }

    React.useEffect(() => {
        if(load){
            obtener()
            setLoad(false)
        }
    })

return(
    <div className="HomeStreamer">
    <ComprobarLogin />
    <NavarColaborador/>

    <Select
    className="col-md-8"
    options={streamer}
    components={animatedComponents}
    onChange={(e) => filtrar(e.label)}
    />

    <div class="container.fluid m-5">
        <table class="table table-light">
        <thead>
            <tr>
                <th scope="col">Nombre</th>
                <th scope="col">Descripción</th>
                <th scope="col">Edad</th>
                <th scope="col">Pais</th>
                <th scope="col">Acciones</th>
            </tr>
        </thead>
        <tbody id="personajes">
            {datosFiltrado.map(elemento => (
                            <tr>
                                <td>{elemento.nombre}</td>
                                <td>{elemento.datos_perfil}</td>
                                <td>{elemento.edad}</td>
                                <td>{elemento.pais}</td>
                                <td>
                                    {
                                        <button>Seguir</button>
                                    }
                                </td>
                            </tr>
                        ))
                        }
        </tbody>
        </table>
    </div>



    </div>
)
}
export default Buscador;