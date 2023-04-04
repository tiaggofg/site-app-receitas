import { BrowserRouter, Switch, Route } from 'react-router-dom';
import Header from './components/Header/index'
import Home from './pages/Home/index.js';
import Login from './pages/Login/index.js';
import Register from './pages/Register/index.js';

function Routes() {
    return (
        <BrowserRouter>
            <Header />
            <Switch>
                <Route exact path="/" component={ Home } />
                <Route exact path="/login" component={ Login } />
                <Route exact path="/register" component={ Register } />

            </Switch>
        </BrowserRouter>
    )
}

export default Routes;