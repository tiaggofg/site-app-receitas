import React from 'react';
import './Login.css';
import { Link } from 'react-router-dom';
import Input from '../../components/Input/index.js';
import Label from '../../components/Label';

function Login() {
    function loginUser(e) {
        e.preventDefault();
        let username = e.target[0].value;
        let password = e.target[1].value;
        
        let credentials = btoa(username + ':' + password);

        let config = {
            headers: {
                'Authorization': 'Basic ' + credentials
            }
        }

        axios.post(URL_BASE + '/authenticate', null, config)
            .then(res => {
                if (res.status == 200) {
                    console.log('Credenciais válidas!')
                    // TODO: inciar sessão para o usuário salvando as credenciais nos cookies/localstorage
                }
            })
            .catch(err => {
                let status = err.response.status;
                if (status == 401) {
                    console.log('Credenciais inválidas!');
                    // TODO:retornar mensagem de erro para o usário que o usuário ou a senha estão incorretos
                }
            });
    }

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