import { useState } from 'react';

import menuClose from '../assets/images/menu-close.svg';
import menuMenu from '../assets/images/menu.svg';

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

                <div onClick={() => { toggleMenu(); }}> 
                    <span>
                        {
                        isMenuOpen ? 
                        <img src={menuClose} className='menu-close' /> 
                        : 
                        <img src={menuMenu} className='menu' /> }
                    </span> 
                </div>

                <ul className={`nav-list ${isMenuOpen ? 'active' : ''}`}>
                    <li><a href="#Index" className="item" data-text="Inicio" onClick={() => { toggleMenu(); }}>Início</a></li>
                    <li><a href="#Sobre" className="item" data-text="Sobre" onClick={() => { toggleMenu(); }}>Sobre</a></li>
                    <li><a href="#Projetos" className="item" data-text="Projetos" onClick={() => { toggleMenu(); }}>Projetos</a></li>
                    <li><a href="#Contato" className="item" data-text="Contato" onClick={() => { toggleMenu(); }}>Contato</a></li>
                </ul>

            </nav>
        </header>
    )
}

export default Header;