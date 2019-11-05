import React, { Component } from 'react'
import { NavLink } from 'react-router-dom'

class NavgationBar extends Component {
    render() {
        return (
            <nav className="navbar navbar-expand navbar-dark bg-dark">
                <NavLink className="navbar-brand" to='/'>ReudxSignup</NavLink>
                <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarsExample02" aria-controls="navbarsExample02" aria-expanded="false" aria-label="切换导航">
                    <span className="navbar-toggler-icon"></span>
                </button>

                <div className="collapse navbar-collapse" id="navbarsExample02">
                    <ul className="navbar-nav mr-auto">
                        <li className="nav-item active">
                            <NavLink className="nav-link" to='/login'>login</NavLink>
                        </li>
                        <li className="nav-item">
                            <NavLink className="nav-link" to='/signup'>signup</NavLink>
                        </li>
                    </ul>
                    <form className="form-inline my-2 my-md-0">
                        <input className="form-control" type="text" placeholder="Search" />
                    </form>
                </div>
            </nav>
        )
    }
}

export default NavgationBar;

