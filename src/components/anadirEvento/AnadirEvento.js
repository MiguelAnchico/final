import React from 'react'
import './AnadirEvento.css'
import Eventos from '../services/eventos/Eventos'

function AnadirEvento(){

    const[nombre, setNombre] = React.useState();
    const[fecha, setFecha] = React.useState();
    const[descripcion, setDescripcion] = React.useState();
    const[data, setData] = React.useState([]);

    const [errorNombre, setErrorNombre] = React.useState("");
    const [errorFecha, setErrorFecha] = React.useState("");
    const [errorDescripcion, setErrorDescripcion] = React.useState("");

    function enviarData(e){
        e.preventDefault();

        let a = false;
        let b = true;
        let c = true;

        if(descripcion == ""){
            setErrorDescripcion("Descripción no puede estar vacio")
            a = true;
        }

        setData({
            nombre: nombre,
            fecha: fecha,
            descripcion: descripcion,
            streamer: localStorage.name,
            estado: "Sin lanzar",
            participantes: "0",
            imagen: "../assets/img/collection/events/default_event.jpg"
        })

    }

    return(
        <>
            <Eventos post=" " data={data}/>
            <div class="col-12 container-registro">
                <form class="" onSubmit={(e) => enviarData(e)}>
                    <h4 class="mb-3">Añadir evento</h4>
                    <div class="row g-3">
                        <div class="col-12">
                            <label for="nombre" class="form-label"><b>Nombre</b></label>
                            <input type="text" class="form-control"  placeholder="Nombre del evento"
                            required onChange={(e) => setNombre(e.target.value)}/>
                            <label>
                                    {errorNombre}
                            </label>
                        </div>
                        <div class="col-12 row">
                            <label for="info" class="form-label"><b>Información del evento</b></label>
                            <div class="col-12">
                                <label for="fecha" class="form-label">Fecha</label>
                                <input type="datetime-local" class="form-control" id="fecha"
                                required onChange={(e) => setFecha(e.target.value)} />
                                <label>
                                    {errorFecha}
                                </label>
                            </div>
                            <div class="col-12">
                                <label for="descripcion" class="form-label">Descripción</label>
                                <textarea class="form-control" id="descripcion" name="descripcion"
                                placeholder="Descripción del evento"  required rows="5" autocomplete="off"
                                onChange={(e) => setDescripcion(e.target.value)}></textarea>
                                <label>
                                    {errorDescripcion}
                                </label>
                            </div>
                        </div>
                    </div>
                    <hr class="my-4" />
                    <button type="submit" class="w-100 btn btn-primary btn-lg" onclick="registrar()">Registrar</button>
                </form>
            </div>
        </>
    )
}

export default AnadirEvento