import React from 'react'
import { NavLink, Redirect } from 'react-router-dom'

function Nav({setIsAuth}) {
    function logout(){
        // console.log('logout')
        setIsAuth(false);
    }
    return (
        <div>
            <ul>
                <li className="navlink">
                    <NavLink to="/service">Service</NavLink>
                </li>
                <li className="navlink">
                    <NavLink to="/kitchen">Kitchen</NavLink>
                </li>
                <li className="navlink" style={{width: '50px'}} onClick={() => {logout()}}>Logout</li>
            </ul>
        </div>
    )
}

export default Nav
