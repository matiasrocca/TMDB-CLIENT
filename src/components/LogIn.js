import React, { useContext, useState } from "react";
import CancelPresentationIcon from '@mui/icons-material/CancelPresentation';

import { UserContext } from "../index";
import useInput from "../hooks/useInput"
import { login } from "../services/Login";

const LogIn = (props) => {
    const { setUser } = useContext(UserContext);
    const email = useInput();
    const contraseña = useInput();

    const handleSubmit = async (e) => {
        e.preventDefault()

        const respuesta = await login(email.value, contraseña.value)
        if (!respuesta.success){
            alert(respuesta.message)
        } else{
            localStorage.setItem("user", JSON.stringify(respuesta.user))
            setUser(respuesta.user)
            props.setTrigger(0)
        }
    }

    function handleOverlayClick(clase){
        if(clase ==="overlay") props.setTrigger(0)
    }


    return (props.trigger === 1) ? (
        <div className="popup">
            <div className="overlay" onClick={(e)=>handleOverlayClick(e.target.className)}>
                    <div className="envolverLogin">
                            <CancelPresentationIcon style={{"alignSelf":"flex-end", "marginTop":"10px", "marginRight":"10px" }} onClick={()=>props.setTrigger(0)}/>
                        <div className="toPad">
                            <div style={{"display":"flex", "justifyContent":"center"}}>
                                <h1 className="titulos">LOGIN</h1>
                            </div>
                            <br/>
                            <form onSubmit={handleSubmit}>
                                <div id = "inputs_login">
                                    <input className="login" {...email} placeholder="Email"/><br/>
                                    <input type="password" className="login"{...contraseña} placeholder="Password"/>
                                </div>
                                <br/>
                                <div id="botonLogin">
                                    <button className="botonLogin" type="submit">Login</button>
                                </div>
                            </form>
                        </div>
                    </div>
            </div>
        </div>
    ):"";
}


export default LogIn