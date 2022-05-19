import React from 'react'
import UpdateTableEvent from '../../../components/tableUpdateEvent/TableUpdateEvent'
import UpdateEventForm from '../../../components/UpdateEventForm/UpdateEventForm'
import ComprobarLogin from '../../../components/comprobarLogin/ComprobarLogin'

import Navar from '../../../components/nav/Navar'

function UpdateEvent() {

    return(
        <div>
            <ComprobarLogin />
            <Navar />
            <div className="row">
                <UpdateTableEvent />
                <UpdateEventForm />
            </div>
        </div>
    )
}

export default UpdateEvent;