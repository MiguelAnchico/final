import React from 'react';
import axios from 'axios';

function Eventos(props){

    function difference(date1, date2) {
        const date1utc = Date.UTC(date1.getFullYear(), date1.getMonth() + 1, date1.getDate());
        const date2utc = Date.UTC(date2.getFullYear(), date2.getMonth() + 1, date2.getDate() + 1);
        var day = 1000*60*60*24;

        var dias = (date2utc - date1utc)/day

        if(date2.getUTCMinutes() - date1.getMinutes() < 0){
            var minuto = (date2.getUTCMinutes() + 60 - date1.getMinutes())
            var hora = (date2.getUTCHours() - date1.getHours()) - 1
        } else {
            var minuto = (date2.getUTCMinutes() - date1.getMinutes())
            var hora = (date2.getUTCHours() - date1.getHours())
        }

        if(hora < 0){
            hora = hora + 24
            dias = dias - 1
        }
        return(dias + " Dias, " + hora + " Horas, " + minuto + " Minutos")
    }

    function get(){
        axios.get("https://pruebauao.azurewebsites.net/eventos/streamer/" + props.data)
        .then((e) => {
            var hoy = new Date(Date.now())
            e.data.eventos.map((element) =>{
                var date = new Date(element.fecha);
                element.fechaLegible = difference(hoy, date)
            })
            localStorage.setItem("eventos", JSON.stringify(e.data.eventos));
        }).catch(err =>{
            if(err.message == "Request failed with status code 404"){
                localStorage.setItem("eventos", JSON.stringify([]));
            } else {
                localStorage.setItem("eventos", JSON.stringify([]));
            }
        });
    }

    function search(){
        axios.get("https://pruebauao.azurewebsites.net/eventos/_id/" + props.data)
        .then((e) => {
            var hoy = new Date(Date.now())
            e.data.eventos.map((element) =>{
                var date = new Date(element.fecha);
                element.fechaLegible = difference(hoy, date)
            })
            localStorage.setItem("eventos", JSON.stringify(e.data.eventos));
        });

    }

    function post(data){
        if(data.length === 0){

        } else {
            axios.post("https://pruebauao.azurewebsites.net/eventos", data)
            .then(function(response) {
                window.location.href = window.location.href;
        });
        }
    }

    function deleted(id){
        if(id !== ""){
            axios.delete("https://pruebauao.azurewebsites.net/eventos/_id/" + id)
            .then(function(response) {
                    console.log(response)
                    if(response.data == 'success') {
                        console.log("Logrado Exitosamente");
                    } else{
                        window.location.href = window.location.href;
                    }
            }).catch(err =>{
                console.log(err)
            });
        }
    }

    function update(){
        if(props.confirmar){
            axios.put("https://pruebauao.azurewebsites.net/eventos/_id/" + props.id, props.data)
            .then((response) => {
                var hoy = new Date(Date.now())
                var date = new Date(response.data.product.fecha);
                response.data.product.fechaLegible = difference(hoy, date)
                
                localStorage.setItem("eventos", JSON.stringify([response.data.product]))
                window.location.href = window.location.href
            }).catch((err) => {
                console.log(err);
            });
        }
    }

    React.useEffect(() => {
        if(props.get){
            get();
        }
        if(props.post){
            post(props.data);
        }
        if(props.deleted){
            deleted(props.data);
        }
        if(props.update){
            update();
        }

        if(props.search){
            search()
        }
    })

    return(
        <>
        </>
    )
}

export default Eventos