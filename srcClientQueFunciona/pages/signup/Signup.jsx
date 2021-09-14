import "./signup.css"
import { Link } from "react-router-dom"

export default function Signup() {
    return (
        <div className="signup">
            <span className="signupTitle">Signup</span>
            <form className="signupForm">
                <label>Nombre de usuario</label>
                <input type="text" className="signupInput" placeholder="Ingrese su nombre de usuario..."/>
                <label>Email</label>
                <input type="text" className="signupInput" placeholder="Ingrese su correo..."/>
                <label>Contraseña</label>
                <input type="password" className="signupInput" placeholder="Ingrese su contraseña"/>
                <button className="signupButton2">Signup</button>
            </form>
            <button className="loginButton2">
                <Link className="link"  to="/login">Login</Link>
            </button>
        </div>
    )
}
