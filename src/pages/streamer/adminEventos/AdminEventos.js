import React from 'react'
import TableEvent from '../../../components/tableEvent/TableEvent'
import AnadirEvento from '../../../components/anadirEvento/AnadirEvento'
import ComprobarLogin from '../../../components/comprobarLogin/ComprobarLogin'

function AdminEventos() {
    const[data, setData] = React.useState([]);


    React.useEffect(() => {

    }, [])

    return(
        <div>
            <ComprobarLogin />
            <div className="row">
                <TableEvent />
                <AnadirEvento />
            </div>
        </div>
    )
}

export default AdminEventos;