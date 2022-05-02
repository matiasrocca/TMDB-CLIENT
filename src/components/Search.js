import { useEffect, useState } from "react"
import { useParams } from "react-router"
import { Link } from "react-router-dom"
import Card from "./Card"
import { usersQuery } from "../services/AllUsers"
import { contentQuery } from "../services/PedidosApi"


const Search = () => {

    const {query} = useParams()
    const [busqueda, setBusqueda] = useState([])
    const [busquedaUsuarios, setBusquedaUsuarios] = useState([])
    const [isLoading, setLoading] = useState(true);

    useEffect(()=>{

        Promise.all([
            contentQuery(query),
            usersQuery(query)
        ]).then(results => {
            setBusqueda(results[0])
            setBusquedaUsuarios(results[1])
        }).then(() => setLoading(false))

    },[query])

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
        <div className="main">
            <section className="section is-large" style={{"padding": "14rem 3rem 3rem 3rem"}}>
                <div className="componentesInicio" style={{"padding":"5% 5% 5% 5%", "backgroundColor":"rgba(0, 0, 0, 0.508)", "borderRadius":"5px"}}>
                    <h1 className="titulos">Usuarios</h1>
                    <br/>
                    {busquedaUsuarios[0] ? (
                    <ul>
                        {busquedaUsuarios.map((data,i)=>(
                                <Link to={`/find/user/${data.id}`}>
                                    <li><strong> {data.usuario} </strong></li>
                                </Link>
                        ))}
                    </ul>): (
                        <p> No existe ningun usuario con ese nombre.</p>
                    )}
                </div>
            </section>
            <section className="section is large">
                <div className="componentesInicio" style={{"padding":"5% 5% 5% 5%", "backgroundColor":"rgba(0, 0, 0, 0.508)", "borderRadius":"5px"}}>
                    <h1 className="titulos">Results</h1>
                    <br/>
                    <div className="columns is-multiline layout">
                        {busqueda.map((data, i) => (
                            <div className="column is-3" key={i}>
                                <Link to={`/find/${data.media_type}/${data.id}`}>
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


export default Search