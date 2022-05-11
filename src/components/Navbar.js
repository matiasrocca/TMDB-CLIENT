import { useContext, useState } from "react"
import { Link } from "react-router-dom"
import useInput from "../hooks/useInput"
import { useNavigate } from "react-router";
import { UserContext } from "../index"

import imagen from "../utils/logo.jpg"
import { logout } from "../services/Logout";
import HamburgerMenu from "./MobileNavigation";

const Navbar = ({setIndice}) => {
    const [isActive, setisActive] = useState(false);
    const search = useInput()
    const navigate = useNavigate()
    const {user, setUser} = useContext(UserContext)

    function handleSubmit(e){
        navigate(`/search/${search.value}`)
      }

    const handleClick = () =>{
        logout()
        setUser("")
        navigate("/")
    }

    console.log(user)

    return (

        <nav className="navbar" style={{"position":"fixed", "width":"100%", "boxShadow":"0px 5px 20px 0px rgb(201, 200, 255)","backgroundColor":"black"}}>
        <div className="navbar-brand" style={{"justifyContent": "space-between"}}>
            <Link to= "/">
                <img className="logo" src={imagen} alt="logo" width="115" height="24"></img>
            </Link>
            <div style={{"display":"flex"}}>
            {isActive && <HamburgerMenu setActive={setisActive} setTrigger ={setIndice}/>}
            <a
            onClick={() => {
              setisActive(!isActive);
            }}
            role="button"
            className={`navbar-burger burger ${isActive ? "is-active" : ""}`}
            aria-label="menu"
            aria-expanded="false"
            data-target="navbarBasicExample"
            style={{"alignSelf": "center"}}
          >
                <span aria-hidden="true"></span>
                <span aria-hidden="true"></span>
                <span aria-hidden="true"></span>
            </a>
            </div>
            
            
        </div>
      
        <div id="navbarExampleTransparentExample" className="navbar-menu">
          <div className="navbar-start" style={{"alignItems" : "center"}}>

          </div>

            <div className="center">
                <div className="control">
                    <form id = "busqueda" onSubmit={handleSubmit}>
                        <input {...search} className="input" style={{"backgroundColor":"transparent", "color":"white"}} type="text"></input>
                    </form>
                </div>
            </div>
          
          <div className="navbar-end">
            <div className="navbar-item" >
                {user ? (
                    <div className="field is-grouped" style={{"flexDirection":"column"}}>
                        <h2 id = "textoBienvenida" >Bienvenido {user.user}!</h2>
                        <div style={{"display":"flex","justifyContent":"center"}}>
                            <Link to={"perfil"}>
                            <button className= "botones">Perfil</button>
                            </Link>
                            <button className= "botones" onClick={handleClick}>Log Out</button>
                        </div>
                    </div>
                    ):(
                    <div className="field is-grouped">
                        <button onClick={()=> setIndice(1)} className= "botones" >LOGIN</button>
                        <button onClick={()=> setIndice(2)} className= "botones" >REGISTER</button>
                    </div>
                )}
            </div>
          </div>
        </div>
      </nav>

    )
}

export default Navbar