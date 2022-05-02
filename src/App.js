import { Route, Routes } from "react-router";
import Navbar from "./components/Navbar";
import Register from "./components/Register";
import LogIn from "./components/LogIn";
import Main from "./components/Main";
import Specific from "./components/Specific";
import Search from "./components/Search";
import Perfil from "./components/Perfil"
import PerfilAjeno from "./components/PerfilAjeno";
import { UserContext } from "./index";
import { useContext, useEffect, useState } from "react";
import { persistence } from "./services/Persistencia";

const App = () => {
    const {user, setUser} = useContext(UserContext)
    const [indice, setIndice] = useState(0)
    const [isLoading, setLoading] = useState(true);
    

    useEffect(() => {
        persistence()
        .then(resultadoUsuario => setUser(resultadoUsuario))
        .then(() => setLoading(false))
      }, []);

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
        <div>
            <Navbar setIndice ={setIndice}/>
                <LogIn trigger={indice} setTrigger={setIndice}/>
                <Register trigger={indice} setTrigger={setIndice}/>
                <Routes>
                    <Route path = "/" element = {<Main setTrigger={setIndice}/>}/>
                    <Route path = "/find/:type/:id" element = {<Specific/>}/>
                    <Route path="/search/:query" element= {<Search/>}/>
                    <Route path = "/perfil" element= {<Perfil/>}/>
                    <Route path = "/find/user/:id" element = {<PerfilAjeno/>}/>
                </Routes>
        </div>
      )}
      </>
    )
}


export default App;