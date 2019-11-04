import React from 'react';
import { BrowserRouter, Route, Switch } from 'react-router-dom'
import 'bootstrap/dist/css/bootstrap.min.css';
import Header from '../components/Header'
import ModuloPage from '../components/ModuloPage'
import EncryptPage from '../components/EncryptPage'
import NotFoundPage from '../components/NotFoundPage'

const AppRouter = () => (
    <BrowserRouter>
        <div className="container-fluid">
            <Header />
            <Switch>
                <Route path="/" component={ModuloPage} exact={true} />
                <Route path="/encrypt" component={EncryptPage} />
                <Route component={NotFoundPage} />
            </Switch>
        </div>
    </BrowserRouter>
)

export default AppRouter