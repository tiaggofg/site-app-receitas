import React from 'react';
import './Login.css';
import { Link } from 'react-router-dom';
import Input from '../../components/Input/index.js';
import Label from '../../components/Label';

function Login() {
    return (
        <div className="container-login">
            <h2>Login</h2>
            <form className='formulario-login'>
                <Label>Usuário</Label>
                <Input type='text' placeholder='Insira seu usuário' />
                <Label>Senha</Label>
                <Input className='input-password' type='password' placeholder='Insira sua senha' />
                <button>Entrar</button>
            </form>
            <Link className='link-esqueceu-senha'>Esqueceu a senha?</Link>
            <Link to='/register' className='aviso-cadastro'>Ainda não possui cadastro?</Link>
        </div>
    )
}

export default Login;