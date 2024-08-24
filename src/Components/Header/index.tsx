import logo from "../../assets/svg/logo.svg"
import menu from "../../assets/svg/menu.svg"
import search from "../../assets/svg/search.svg"

import "./index.css"

function Header(){
    return(
        <header>
            <nav className="container">
                <a className="logo" href=""><img src={logo} alt="Logo Ragnarok" /></a>
                <a className="menu" href=""><img src={menu} alt="Menu" /> MENU</a>
                <div className="pesquisa">
                    <img src={search} alt="Lupa" />
                    <input type="text" placeholder="Search" />
                </div>
                <a className="login" href="">LOGIN</a>
            </nav>
        </header>
            
    )
}

export default Header;