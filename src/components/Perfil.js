import { useEffect, useState } from "react"
import { Link } from "react-router-dom"
import Card from "./Card"
import {favoritosUsuario } from "../services/FavoritosUsuario"

const Perfil = () => {
    const [isLoading, setLoading] = useState(true);
    const [favoritas, setFavoritas] = useState([])
    const id = localStorage.getItem("id")

    useEffect(()=>{

        favoritosUsuario(id).then(results => setFavoritas(results)).then(()=>setLoading(false))

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
        <div className="main" style={window.innerWidth < 760?({"height":"100%"}):( ((!favoritas[0]) || (favoritas.length <= 4)) ?({"height":"100vh","overflow":"hidden"}):({"height":"100%"}))}>
        <section className="section is-large" style={{"padding": "14rem 3rem 3rem 3rem"}}>
            <div className="envolverPerfil">
                <h1 className="titulos">Tus películas Favoritas</h1>
                <br/>
                {!favoritas[0]&&(<p style={{"color":"white", "paddingBottom":"3rem"}}>Todavía no guardaste favoritos</p>)}
                <div className="columns is-multiline layout">
                    {favoritas.map((data, i) => (
                        <div className="column is-3" key={i}>
                            <Link to={`/find/${data.type}/${data.favoriteId}`}>
                                <Card data={data} />
                            </Link>
                        </div>
                    ))}
                </div>
            </div>
            <br/>
            <br/>
        </section>
        </div>
    )}
    </>
    )

}

export default Perfil