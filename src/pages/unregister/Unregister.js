import React from "react";
import './Unregister.css'

import CardLink from "../../components/cardLink/CardLink";
import Eventos from "../../components/services/eventos/Eventos";

import Navar from '../../components/nav/Navar'
import NavarColaborador from '../../components/nav/NavarInicio'
import NavarInicio from "../../components/nav/NavarInicio";

function Unregister(){

    return(
        <div className="home">
            <NavarInicio/>

            <section className="image-section">
                <h1 className="titulo">Evoluciona la manera de conectar con tú comunidad</h1>
                <p className="parrafo">La mejor forma de gestionar todos tus eventos con cada uno de tus seguidores</p>
                <section className="selection">
                    <CardLink />
                    <CardLink />
                </section>
            </section>
            <section className="info">
                <h2>¿Cómo usarlo?</h2>
                <section>
                    <article>
                        Algo de informacion #1
                    </article>
                    <article>
                        Algo de informacion #2
                    </article>
                    <article>
                        Algo de informacion #3
                    </article>
                    <article>
                        Algo de informacion #4
                    </article>
                </section>
            </section>
        </div>
    )
}

export default Unregister;