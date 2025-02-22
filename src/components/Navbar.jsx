import { NavLink } from 'react-router-dom'

const Navbar = () => {
    return (
        <nav className='navbar'>
            <div className='nav-links'>
                <NavLink to="/">Home</NavLink>
                <NavLink to="/create">Create Profile</NavLink>
            </div>
        </nav>
    )
}

export default Navbar