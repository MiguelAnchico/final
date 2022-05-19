import React from "react";

function ComprobarLogin(){

    return(
        <>
        {(!localStorage.logeado) ? window.location.href = window.location.origin + "/login" : <></>}
        </>
    )
}

export default ComprobarLogin;