import React from 'react'

import 'bootstrap/dist/css/bootstrap.min.css'
import DataTable from 'react-data-table-component'

function TableUpdateEvent(props){

    const columnas = [
        {
            name: 'Nombre',
            selector: 'nombre',
            sorteable: true,
        },
        {
            name: 'Comienza en',
            selector: 'fechaLegible',
            sorteable: true,
        },
        {
            name: 'Participantes',
            selector: 'participantes',
            sorteable: true
        },
        {
            name: 'Estado',
            selector: 'estado',
            sorteable: true
        },
        {
            name: 'Descripción',
            selector: 'descripcion',
            sorteable: true
        },
    ]

    return(
        <div className="col-12">
            {console.log(JSON.parse(localStorage.eventos))}
            <DataTable
                columns={columnas}
                data={JSON.parse(localStorage.eventos)}
                title="Eventos registrados"
            />
        </div>
    )
}

export default TableUpdateEvent;