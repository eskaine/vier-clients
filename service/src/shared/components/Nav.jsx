import React from 'react'
import { NavLink } from 'react-router-dom'

function Nav() {
    return (
        <div>
            <ul>
                <NavLink to="/service">Service</NavLink>
                <NavLink to="/kitchen">Kitchen</NavLink>
            </ul>
        </div>
    )
}

export default Nav
