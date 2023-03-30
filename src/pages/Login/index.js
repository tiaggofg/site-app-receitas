import React from 'react';
import { Link } from 'react-router-dom';
import './Login.css';

function Login() {
    return (
        <div className="container-login">
            <form className='formulario-login'>
                <label>Usuário</label>
                <input className='input-login' type='text' placeholder='Insira seu usuário' />
                <label>Senha</label>
                <input className='input-password' type='password' placeholder='Insira sua senha' />
                <button>Entrar</button>
                <Link className='link-esqueceu-senha'>Esqueceu a senha?</Link>
                <span className='aviso-cadastro'>Ainda não possui cadastro?</span>
                <button>Cadastrar-se</button>
            </form>
        </div>
    )
}

export default Login;