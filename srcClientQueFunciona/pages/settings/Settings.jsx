import Sidebar from "../../components/sidebar/Sidebar"
import "./settings.css"

export default function Settings() {
    return (
        <div className="settings">
            <div className="settingsWrapper">
                <div className="settingsTitle">
                    <span className="settingsUpdateTitle">Actualiza tus datos</span>
                    <span className="settingsDeleteTitle">Borre su cuenta</span>
                </div>
                <form className="settingsForm">
                    <label>Foto de perfil</label>
                    <div className="settingsPP">
                        <img src="/assets/towers.jpg" alt="" />
                        <label htmlFor="fileInput">
                            <i className="settingsPPIcon fas fa-user-edit"></i>
                        </label>
                        <input type="file" id="fileInput" style={{display:"none"}}/>
                    </div>
                    <label>Nombre del usuario</label>
                    <input type="text" placeholder="Usuario"/>
                    <label>Email</label>
                    <input type="email" placeholder="usuario@correo.com"/>
                    <label>Contraseña</label>
                    <input type="password"/>
                    <button className="settingsSubmit">Actualizar</button>
                </form>
            </div>
            <Sidebar/>
        </div>
    )
}
