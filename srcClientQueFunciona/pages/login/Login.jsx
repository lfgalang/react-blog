import { Link } from "react-router-dom"
import "./login.css"

export default function Login() {
    return (
        <div className="login">
            <span className="loginTitle">Login</span>
            <form className="loginForm">
                <label>Email</label>
                <input type="text" className="loginInput" placeholder="Ingrese su correo..."/>
                <label>Contraseña</label>
                <input type="password" className="loginInput" placeholder="Ingrese su contraseña"/>
                <button className="loginButton">Login</button>
            </form>
            <button className="signupButton">
                <Link className="link" to="/signup">Signup</Link>
            </button>
        </div>
    )
}
