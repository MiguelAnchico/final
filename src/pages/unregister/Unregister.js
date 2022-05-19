import React from "react";
import './Unregister.css'

import CardLink from "../../components/cardLink/CardLink";
import Eventos from "../../components/services/eventos/Eventos";

function Unregister(){

    return(
        <div className="home">
            <section className="image-section">
                <h1>Evoluciona la manera de conectar con tú comunidad</h1>
                <p>La mejor forma de gestionar todos tus eventos con cada uno de tus seguidores</p>
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