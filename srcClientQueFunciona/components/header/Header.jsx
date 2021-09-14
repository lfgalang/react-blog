import "./header.css"

export default function Header() {
    return (
        <div className="header">
            <div className="headerTitles">
                <span className="headerTitleSm">Diseño De Soluciones</span>
                <span className="headerTitleLg">DDS</span>
            </div>
            <img src="/assets/muro.jpg" alt="" className="headerImg" />
        </div>
    )
}
