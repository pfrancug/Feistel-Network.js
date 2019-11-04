import React from 'react';
import { NavLink } from 'react-router-dom'

const Header = () => (
    <header>
        <h1>Crypto</h1>
        <NavLink to="/" activeClassName="is-active" exact={true}>Modulo Table</NavLink>
        <NavLink to="/encrypt" activeClassName="is-active">Encrypt</NavLink>
    </header>
)

export default Header