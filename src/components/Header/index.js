import './Header.css';
import iconeLogin from '../../images/icone-login.png'
import menuHamburguer from '../../images/menu-hamburguer.png';
import { Link } from 'react-router-dom';

function Header() {

    function abreMenu() {
        let navegacao = document.querySelector('.container-navegacao');
        navegacao.classList.toggle('block');    
    }

    return (
        <header className='container-cabecalho'>
            <img onClick={abreMenu} className='menu-hamburguer' src={menuHamburguer} alt='Icone Menu Hamburguer' />
            <nav className='container-navegacao'>
                <ul className='navegacao-lista'>
                    <li><Link to='/'>Página Inicial</Link></li>
                </ul>
            </nav>
            <Link to='/login'>
                <img className='icone-login' src={iconeLogin} alt='Icone de Login' />
            </Link>
        </header>
    )
}

export default Header;