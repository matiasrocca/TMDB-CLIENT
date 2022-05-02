import { useContext } from "react";
import { Link, useNavigate } from "react-router-dom"
import { UserContext } from "..";
import useInput from "../hooks/useInput";
import { logout } from "../services/Logout";

const HamburgerMenu = (props) => {
    const {user, setUser} = useContext(UserContext)
    const navigate = useNavigate()
    const search = useInput()

    const handleClick = () =>{
        
        logout()
        setUser("")
        localStorage.removeItem("user");
        localStorage.removeItem("id");
        navigate("/")
        closeMobileNavigation()
    }

    function handleSubmit(e){
        navigate(`/search/${search.value}`)
        closeMobileNavigation()
      }

    function closeMobileNavigation(){
        props.setActive(false)
    }

    return (
        <>
        {user ? (
            <div className="soloMobile">
                <ul>
                    <li>
                    <form id = "busqueda" onSubmit={handleSubmit}>
                        <label>Search...</label>
                        <input {...search} className="input" type="text" placeholder="Type here..."></input>
                    </form>
                    </li>
                    <Link to={"perfil"} onClick={()=> closeMobileNavigation()} style={{"textDecoration":"none"}}>
                    <li className="menuHamburguesa">Perfil</li>
                    </Link>
                    <li className="menuHamburguesa" onClick={handleClick}>Log Out</li>
                </ul>
            </div>
                ):(
            <div className="soloMobile">
                <ul>
                    <li>
                    <form id = "busqueda" onSubmit={handleSubmit}>
                        <label>Search...</label>
                        <input {...search} className="input" type="text" placeholder="Type here..."></input>
                    </form>
                    </li>
                    <li onClick={()=>{
                        closeMobileNavigation()
                        props.setTrigger(1)}} className={"menuHamburguesa"}>Login
                    </li>
                    <li onClick={()=>{
                        closeMobileNavigation()
                        props.setTrigger(2)}} className={"menuHamburguesa"} >Register
                    </li>
                </ul>
            </div>
        )}
        </>
    )
}

export default HamburgerMenu