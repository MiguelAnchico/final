import React from 'react'
import 'bootstrap/dist/css/bootstrap.min.css'
import "./Navar.css"

function NavarColaborador() {
    function deslogear(){
        localStorage.clear()
        window.location.reload()
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
                            <a class="nav-link active" aria-current="page" href="/colaborador">Inicio</a>
                            <a class="nav-link" href="/buscar/streamer">Buscar</a>
                        </ul>
                        <div class="d-flex">
                            <ul class="navbar-nav me-auto mb-2 mb-lg-0">
                                <li class="nav-item">
                                    <a class="nav-link active" aria-current="page" href="#" onClick={deslogear}>Cerrar sesion</a>
                                </li>
                            </ul>
                        </div>
                    </div>
                </div>
            </nav>
        </div>
    )
}

    export default NavarColaborador;