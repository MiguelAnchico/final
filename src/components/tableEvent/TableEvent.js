import React from 'react'

import 'bootstrap/dist/css/bootstrap.min.css'
import DataTable from 'react-data-table-component'
import Eventos from '../services/eventos/Eventos'

function TableEvent(props){
    const[deletedID, setDeleteID] = React.useState("");
    const[data, setData] = React.useState([]);

    const[load, setLoad] = React.useState(false);
    const[cargar, setCargar] = React.useState("1");
    const[firstLoad, setFirstLoad] = React.useState(true);

    const columnas = [
        {
            name: 'Nombre',
            selector: 'nombre',
            sorteable: true,
        },
        {
            name: 'Comienza en',
            sorteable: true,
            cell: row => <p>{row.fechaLegible}</p>
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
            cell: row => <button className="btn btn-primary" onClick={(e) => {actualizarEvento(row)}}>Editar</button>,
            ignoreRowClick: true,
		    allowOverflow: true,
            button: true,
        },
        {
            cell: row => <button className="btn btn-danger" onClick={(e) => {setDeleteID(row._id)}}>Eliminar</button>,
            ignoreRowClick: true,
		    allowOverflow: true,
            button: true,
        },
        {
            cell: () => <button className="btn btn-success">Lanzar</button>,
            ignoreRowClick: true,
		    allowOverflow: true,
            button: true,
        }
    ]

    function actualizarEvento(e){
        localStorage.eventos = [JSON.stringify([e])]
        
        window.location.href = window.location.href + "/actualizar";
        console.log(JSON.stringify(e))
    }

    const paginacionOpciones = {
        rowsPerPageText: 'Filas por Página',
        rangeSeparator: 'de',
        selectAllRowsItem: true,
        selectAllRowsItemText: 'Todos'
    }

    React.useEffect(() => {

        if(firstLoad){
            if(localStorage.eventos != undefined) {
                localStorage.removeItem('eventos')
            }
            setFirstLoad(false)
        }


        if(!load){

            if(cargar == "1"){
                setCargar("2")
            } else{
                setCargar("1")
            }

            if(localStorage.eventos != undefined){
                setData(JSON.parse(localStorage.eventos));
                setLoad(true)
            }
        }
    })

    return(
        <div className="col-8">
            <Eventos get=" " data={localStorage.name} />
            <Eventos deleted=" " data={deletedID}/>
            <DataTable
                columns={columnas}
                data={data}
                title="Eventos registrados"
                pagination
                paginationComponentOptions={paginacionOpciones}
            />
        </div>
    )
}

export default TableEvent;