import React from 'react'
import 'bootstrap/dist/css/bootstrap.min.css'
import "./RegistroC.css"
import axios from 'axios'


function RegistroC() {
    const [correo, setCorreo] = React.useState("");
    const [password, setPassword] = React.useState("");
    const [nombre, setNombre] = React.useState("");
    const [edad, setEdad] = React.useState("");
    const [pais, setPais] = React.useState("Colombia");

    const [errorCorreo, setErrorCorreo] = React.useState("");
    const [errorPassword, setErrorPassword] = React.useState("");
    const [errorNombre, setErrorNombre] = React.useState("");
    const [errorConfirmPassword, setErrorConfirmPassword] = React.useState("");

    function registrar(e) {
        e.preventDefault()
    const data = {
        nombre: nombre,
        correo: correo,
        password: password,
        edad: edad,
        pais: pais,
        foto_perfil: "../assets/img/collection/perfil/default_perfil.jpg",
        datos_perfil: "",
    }

        axios.post("https://pruebauao.azurewebsites.net/colaboradores", data)
        .then(function(response) {
            window.location.href = window.location.origin + "/streamer";
            localStorage.name = data.nombre;
            localStorage.logeado = true;
            localStorage.tipoCuenta = "streamer";
            localStorage.correo = data.correo;
        });
    }
    return(
        <div id="contenedor-pricipal"className="registroC">
            <div className="registro">
            <div className="registrate">
                <h2>Registrate</h2>
            </div>
            <h3>
                Colaborador
            </h3>

            <form className="col-md-5 col-lg-4">
                <div className="centrar">
                    <div className="row g-3">
                    <div class="col-12">
                            <label for="nombre" class="form-label"><b>Nombre</b></label>
                            <input required minlength="5" onChange={(e) => setNombre(e.target.value)} type="text" class="form-control widthInput" id="nombre" name="nombre" placeholder=""
                            />
                            <div class="invalid-feedback">
                                Nombre es requerido
                            </div>
                        </div>

                        <div class="col-12">
                            <label for="correo" class="form-label"><b>Correo</b></label>
                            <input onChange={(e) => setCorreo(e.target.value)} type="email" class="form-control widthInput" id="correo" name="correo"
                                placeholder=""  required/>
                            <div class="invalid-feedback">
                                Correo es requerido
                            </div>
                        </div>

                        <div class="col-12">
                            <label for="contrasena" class="form-label"><b>Contraseña</b></label>
                            <input minlength="10" onChange={(e) => setPassword(e.target.value)} type="password" class="form-control widthInput" id="contrasena" name="contrasena" placeholder=""
                                 required/>
                            <div class="invalid-feedback">
                                Contraseña es requerido
                            </div>
                        </div>

                        <div class="col-12">
                            <label for="edad" class="form-label"><b>Edad</b></label>
                            <input onChange={(e) => setEdad(e.target.value)} type="number" class="form-control widthInput" id="edad" name="edad" placeholder=""
                                 required/>
                            <div class="invalid-feedback">
                                Edad es requerido
                            </div>
                        </div>

                        <div class="col-12">
                            <label for="pais" class="form-label"><b>Paises</b></label>
                            <select required onChange={(e) => setPais(e.target.value)} name="pais" id="pais" class="form-select">
                                <option>Colombia</option>
                                <option>Peru</option>
                                <option>Ecuador</option>
                                <option>Venezuela</option>
                                <option>Brasil</option>
                            </select>
                        </div>
                    </div>

                    <h1 className="my-4"/>

                    <button className="w-100 btn btn-primary btn-lg" onclick="registrar()">Registrar</button>
                </div>
            </form>
        </div>
    </div>
    )

}
export default RegistroC;