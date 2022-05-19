import React from 'react'
import 'bootstrap/dist/css/bootstrap.min.css'
import "./Navar.css"

function NavarInicio() {
    function iniciar(){
        localStorage.clear()
        window.location.reload()
    }

    function registrarse(){
        window.location.href = window.location.origin + "/registrarse"
    }
    return (
        <div>
            <nav class="navbar navbar-expand-lg navbar-dark bg-dark funcionaporfa2">
                <div class="container-fluid">
                    <a class="navbar-brand" href="#"><img src="" alt=""/></a>
                    <button class="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
                        <span class="navbar-toggler-icon"></span>
                    </button>
                    <div class="collapse navbar-collapse" id="navbarSupportedContent">
                        <ul class="navbar-nav me-auto mb-2 mb-lg-0 funcionaporfa">
                            <a class="nav-link active text" aria-current="page" href="/">Inicio</a>
                        </ul>
                        <div class="d-flex">
                            <ul class="navbar-nav me-auto mb-2 mb-lg-0">
                                <li class="nav-item">
                                    <a class="nav-link active text" aria-current="page" href="./login" onClick={iniciar}>Iniciar Sesión</a>
                                </li>
                                <a class="nav-link active text" href="./" onClick={registrarse}>Registrarse</a>
                            </ul>
                        </div>
                    </div>
                </div>
            </nav>
        </div>
    )
}

    export default NavarInicio;