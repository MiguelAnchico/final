import React from 'react'
import "./Login.css"
import 'bootstrap/dist/css/bootstrap.min.css'
import axios from 'axios';
import NavarCancelar from '../../components/nav/NavarCancelar';

function Login() {
    const [correo, setCorreo] = React.useState("");
    const [password, setPassword] = React.useState("");

    function registrar(e) {
        e.preventDefault()
        const data = {
            correo: correo,
            password: password,
        }

        axios.post("https://pruebauao.azurewebsites.net/streamers/login", data)
        .then(function(response) {
            if(response.data.message == "Correcto"){
                window.location.href = window.location.origin + "/streamer";
                localStorage.name = response.data.nombre;
                localStorage.logeado = true;
                localStorage.tipoCuenta = "streamer";
                localStorage.correo = data.correo;
            }
        });
    }

    function dirigirRegistro(){
        window.location.href = window.location.origin + "/registrarse"
    }


    return(
        <form className="login" onSubmit={registrar}>
            <NavarCancelar/>
            <div className="generaldiv">
            <div className="loginfrom">
            <h1 className="iniciotitel">Iniciar sesión </h1>
                <input onChange={(e) => setCorreo(e.target.value)} type="email" id="email" className="form-control inputlogin" placeholder="Email" aria-describedby="emailHelp" />
                <input onChange={(e) => setPassword(e.target.value)} type="password" id="contrasena" placeholder="Contraseña" className="form-control inputlogin" />

                <div className=".container row">
                    <div className="col-6 contenedor" onclick="tipoDeCuenta('streamer')">
                        <input className="form-check-input seleccion" type="radio" name="Streamer" id="Streamer" value="Streamer" checked />
                        <label className="form-check-label" for="exampleRadios1" id="labelStreamer">
                        Streamer
                        </label>
                    </div>
                    <div className="col-6 contenedor" onclick="tipoDeCuenta('colaborador')">
                        <input className="form-check-input" type="radio" name="Colaborador" id="Colaborador" value="Colaborador" />
                        <label className="form-check-label " for="exampleRadios2" id="labelColaborador">
                        Colaborador
                        </label>
                    </div>
                </div>
            <button className="btn btn-primary buttoninciar" onclick="solicitar()"><b>Iniciar</b></button>
            <button onClick={dirigirRegistro} className="btn btn-outline-primary buttonregistro"><b>Registarse</b></button>
            </div>
        </div>
        </form>
    )
}

export default Login;