import { useContext, useEffect, useState } from "react";
import { specificApi } from "../services/PedidosApi";
import { añadirAFavoritos, eliminarDeFavoritos, esFavorita } from "../services/FavoritosUsuario";

import { useParams } from "react-router"
import { UserContext } from ".."

import FavoriteIcon from '@mui/icons-material/Favorite';
import { IconButton } from "@mui/material";

import Recomendadas from "./Recomendadas";
import { recomendadasFunc } from "../services/PedidosApi";

const Specific = () => {
    const {user} = useContext(UserContext)
    const { type, id } = useParams();
    const [specific, setSpecific] = useState({})
    const [recomendadas, setRecomendadas] = useState([])
    const [fav, setFav] = useState(false)
    const [isLoading, setLoading] = useState(true);


    useEffect(()=>{
        Promise.all([
            specificApi(type, id),
            recomendadasFunc(id),
            esFavorita(user,id)
        ]).then(results => {
            setSpecific(results[0])
            setRecomendadas(results[1])
            setFav(results[2])
        }).then(() => setLoading(false))
    },[id])

    function handleClick(e){
        e.preventDefault()

        if(!fav){
            añadirAFavoritos(user.id, specific.id, specific.title, specific.poster_path, type).then(()=> {})
        }else{
            eliminarDeFavoritos(user.id, specific.id).then(()=> {})
        }
        
        setFav(!fav)
    }

    return (
        <>
        {isLoading?
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
            <>
            <div className="main" style={{"backgroundImage": `url("https://image.tmdb.org/t/p/original${ specific.backdrop_path}")`, "backgroundPosition": 'center',"backgroundSize": 'cover', "backgroundRepeat": 'no-repeat', "backgroundAttachment": "fixed"}}>
                <section className="section is-medium" style={{"paddingTop": "12rem", "paddingBottom":"3rem"}}>
                    <div className="componenteSpecific" style={{"padding":"5% 5% 5% 5%", "backgroundColor":"rgba(0, 0, 0, 0.508)", "borderRadius":"5px"}}>
                        <div style={{"maxWidth":"30%", "minWidth":"30%" }}>
                            <img style ={{"borderRadius": "5px"}} src={`https://image.tmdb.org/t/p/original${specific.poster_path}`} alt="Placeholder image"/>
                        </div>
                        <div className="informacionSpecific">
                            <div>
                                <h1 className="titulos">{specific.title || specific.original_name}</h1>
                                <br/>
                                <h2 className="principal2"><i>{specific.tagline}</i></h2>
                                <br/>
                                <h3 className="principal2">Rating: {specific.vote_average}</h3>
                                <p className="enBlanco">{specific.overview}</p>
                                <br/>
                                <br/>
                            </div>
                                {user ? (
                                    <>
                                        {fav? (
                                            <>
                                                <div>
                                                    <label>Remove from favourites </label>
                                                    <IconButton onClick={handleClick} style={{color:"red"}} aria-label="remove from favorites">
                                                    <FavoriteIcon></FavoriteIcon>
                                                    </IconButton>
                                                </div>
                                            </>
                                                
                                        ): (
                                            <>
                                            <div>
                                                <label>Add to favourites </label>
                                                <IconButton onClick={handleClick} style={{color:"grey"}} aria-label="add to favorites">
                                                <FavoriteIcon></FavoriteIcon>
                                                </IconButton>
                                            </div>
                                            </>
                                        )}
                                    </>
                                ):("")} 
                        </div>
                    </div>
                </section>
                <section className="section is-small">
                    <div className="componenteSpecific" style={{"padding":"5% 5% 5% 5%", "backgroundColor":"rgba(0, 0, 0, 0.508)", "borderRadius":"5px", "display":"flex", "flexDirection":"column", "marginLeft":"25", "marginRight":"25"}}>
                        <h1 className="titulos" style={{alignSelf:"flex-start", fontSize:"25px" }}>Similares:</h1>
                        <br></br>
                        {recomendadas.hayRecomendadas ? (
                            <Recomendadas recomendadas = {recomendadas.recomendadas}/>
                        ):(
                            <p>No se encontró contenido recomendado.</p>
                        )}
                    </div>

                </section>
            </div>
                </>
            )}
        </>
    )
}
export default Specific