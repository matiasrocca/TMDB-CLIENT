import useInput from "../hooks/useInput"
import CancelPresentationIcon from '@mui/icons-material/CancelPresentation';
import { register } from "../services/Register";



const Register = (props) => {
    const nombre = useInput()
    const apellido = useInput()
    const usuario = useInput()
    const email = useInput()
    const contraseña = useInput()

    const handleSubmit = async (e) => {
        e.preventDefault()

        const datos = {
            nombre: nombre.value,
            apellido: apellido.value,
            usuario: usuario.value,
            email: email.value,
            contraseña: contraseña.value
        }
        
        const resultado = await register(datos)
        console.log(resultado)
        
        if(!resultado[1]) {
            alert("Su nombre de usuario o email ya se encuentran en uso, por favor intentar con uno distinto.")
        }else{
            alert("Su usuario fue creado con éxito!")
            props.setTrigger(1)
        }
        
    }

    function handleOverlayClick(clase){
        if(clase ==="overlay") props.setTrigger(0)
    }

    return (props.trigger === 2) ? (
        <div className="popup">
            <div className="overlay" onClick={(e)=>handleOverlayClick(e.target.className)}>
                <div className="cajaDeFormularios">
                    <div className="envolverLogin">
                            <CancelPresentationIcon style={{"align-self":"flex-end", "margin-top":"10px", "margin-right":"10px" }} onClick={()=>props.setTrigger(0)}/>
                        <div className="toPad">
                            <div style={{"display":"flex", "justifyContent":"center"}}>
                                <h1 className="titulos">REGISTER</h1>
                            </div>
                            <br/>
                            <form onSubmit={handleSubmit}>
                                <div id = "inputs_register">
                                    <input {...nombre} className="login" placeholder="Nombre"/><br/>
                                    <input {...apellido} className="login" placeholder="Apellido"/><br/>
                                    <input {...usuario} className="login" placeholder="Usuario"/><br/>
                                    <input {...email} className="login" placeholder="Email"/><br/>
                                    <input {...contraseña} className="login" type="password" placeholder="Contraseña"/>
                                </div>
                                <br/>
                                <div id="botonLogin">
                                    <button className="botonLogin" type="submit">Create account</button>
                                </div>
                            </form>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    ):"";


        /*
        <section className="section is-medium ingreso">
            <div className="cajaDeFormularios">
                <div className="section is-small envolverLogin">
                    <h1 className="titulos">REGISTRARSE</h1>
                    <br/>
                    <form onSubmit={handleSubmit}>
                    <div id = "inputs_register">
                        <input {...nombre} className="login" placeholder="Nombre"/><br/>
                        <input {...apellido} className="login" placeholder="Apellido"/><br/>
                        <input {...usuario} className="login" placeholder="Usuario"/><br/>
                        <input {...email} className="login" placeholder="Email"/><br/>
                        <input {...contraseña} className="login" type="password" placeholder="Contraseña"/>
                    </div>
                        <br/>
                        <br/>
                    <div id="botonLogin">
                        <button className="botonLogin" type="submit">Crear</button>
                    </div>
                    </form>
                </div>
            </div>
            <br/>
            <br/>
            <br/>
            <br/>
            <br/>
            <br/>
            <br/>
            <br/>
            <br/>
            <br/>
            <br/>
            <br/>
            <br/>
            <br/>
            <br/>
            <br/>
            <br/>
            <br/>
            <br/>
            <br/>
            <br/>
            <br/>
            <br/>
        </section>
        */
}

export default Register