import { useEffect, useState } from "react";
import axios from "axios";

import { useParams } from "react-router"
import { Link } from "react-router-dom";
import Card from "./Card";
import { userSpecific } from "../services/AllUsers";
import { favoritosUsuario } from "../services/FavoritosUsuario";

const PerfilAjeno = () => {
    const [isLoading, setLoading] = useState(true);
    const {id} = useParams()
    const [busqueda, setBusqueda] = useState({})
    const [favoritos, setFavoritos] = useState([])

    useEffect(()=>{


        Promise.all([
            userSpecific(id),
            favoritosUsuario(id)
        ]).then(results => {
            setBusqueda(results[0])
            setFavoritos(results[1])
        }).then(()=>setLoading(false))


    },[])

    return (
        <>
        {isLoading ?
            (
                <div className="main2">
                    <section className="section is-large" style={{"display":"flex", "justifyContent":"center"}}>
                        <h1 className= "texto">
                            De Pelicula
                        </h1>
                    </section>
                </div>
            ) : 
            (
        <div className="main" style={favoritos[0]?({"height":"100%"}):({"height":"100vh"})}>
            <section className="section is-large" style={{"padding": "14rem 3rem 3rem 3rem"}}>
                <div className="componentesInicio" style={{"padding":"5% 5% 5% 5%", "backgroundColor":"rgba(0, 0, 0, 0.508)", "borderRadius":"5px"}}>
                    <h1 className="titulos">{busqueda.usuario}</h1>
                    <br/>
                    <h3 id="nombreUsuario">{busqueda.nombre} {busqueda.apellido}</h3>
                    <h3>{busqueda.email}</h3>
                    <br/>
                    <div className="columns is-multiline layout">
                        {favoritos.map((data, i) => (
                            <div className="column is-3" key={i}>
                                <Link to={`/find/${data.type}/${data.favoriteId}`}>
                                    <Card data={data} />
                                </Link>
                            </div>
                        ))}
                    </div>
                </div>
            </section>
        </div>
        )}
    </>
    )

}


export default PerfilAjeno