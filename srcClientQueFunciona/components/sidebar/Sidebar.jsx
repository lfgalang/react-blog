import "./sidebar.css"

export default function Sidebar() {
    return (
        <div className="sidebar">
            <div className="sidebarItem">
                <span className="sidebarTitle">Nombre del Usuario</span>
                <img src="/assets/escalera2.jpg" alt="" />
                <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Eos esse maxime iste quas vero at neque doloribus tenetur deleniti, natus ullam libero ea cum odit nihil amet ducimus omnis nobis!</p>
            </div>
            <div className="sidebarItem">
                <span className="sidebarTitle">CATEGORIES</span>
                <ul className="sidebarList">
                    <li className="sidebarListItem">Vigas</li>
                    <li className="sidebarListItem">Columnas</li>
                    <li className="sidebarListItem">Muros</li>
                    <li className="sidebarListItem">Plantillas</li>
                </ul>
            </div>
            <div className="sidebarItem">
                <span className="sidebarTitle">FOLLOW</span>
                <div className="sidebarSocial">
                    <i className="sidebarIcon fab fa-facebook-square"></i>
                    <i className="sidebarIcon fab fa-twitter-square"></i>
                    <i className="sidebarIcon fab fa-pinterest-square"></i>
                    <i className="sidebarIcon fab fa-instagram-square"></i>
                </div>
            </div>
        </div>
    )
}
