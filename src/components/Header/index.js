import './Header.css';

function Header() {
    return (
        <header className='container-cabecalho'>
            <h1>Projeto Receitas</h1>
            <nav>
                <ul>
                    <li>Início</li>
                    <li>Doces</li>
                    <li>Salgadas</li>
                    <li>Login</li>       
                </ul>
            </nav>
        </header>
    )
}

export default Header;