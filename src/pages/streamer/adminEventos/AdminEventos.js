import React from 'react'
import TableEvent from '../../../components/tableEvent/TableEvent'
import AnadirEvento from '../../../components/anadirEvento/AnadirEvento'

function AdminEventos() {
    const[data, setData] = React.useState([]);


    React.useEffect(() => {

    }, [])

    return(
        <div>

            <div className="row">
                <TableEvent />
                <AnadirEvento />
            </div>
        </div>
    )
}

export default AdminEventos;