import { useState } from 'react';

import '../assets/css/header.css'

function Header() {
    const [isMenuOpen, setIsMenuOpen] = useState(false);

    // Função para alternar o menu
    const toggleMenu = () => {
        setIsMenuOpen(!isMenuOpen);
    };

    return (
        <header>
            <nav className="navbar">
                <div className="logo">
                    &lt;RAFA<span className="barra_logo"><strong>/</strong></span>&gt;
                </div>

                <div onClick={() => { toggleMenu(); }}> <span>{isMenuOpen ? <img src="../public/menu-close.svg" className='menu-close' /> : <img src="../public/menu.svg" className='menu' /> }</span> </div>

                <ul className={`nav-list ${isMenuOpen ? 'active' : ''}`}>
                    <li><a href="index.html" className="item">Início</a></li>
                    <li><a href="#Sobre" className="item">Sobre</a></li>
                    <li><a href="#Projetos" className="item">Projetos</a></li>
                    <li><a href="#Contato" className="item">Contato</a></li>
                </ul>

            </nav>
        </header>
    )
}

export default Header;