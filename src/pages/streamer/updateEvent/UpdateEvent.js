import React from 'react'
import UpdateTableEvent from '../../../components/tableUpdateEvent/TableUpdateEvent'
import UpdateEventForm from '../../../components/UpdateEventForm/UpdateEventForm'

function UpdateEvent() {

    return(
        <div>

            <div className="row">
                <UpdateTableEvent />
                <UpdateEventForm />
            </div>
        </div>
    )
}

export default UpdateEvent;