import React from 'react'
import { NavLink } from 'react-router-dom'

function Nav() {
    return (
        <div>
            <ul>
                <li className="navlink">
                    <NavLink to="/service">Service</NavLink>
                </li>
                <li className="navlink">
                    <NavLink to="/kitchen">Kitchen</NavLink>
                </li>
            </ul>
        </div>
    )
}

export default Nav
