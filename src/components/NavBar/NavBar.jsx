// npm modules
import { NavLink } from 'react-router-dom'

const NavBar = ({ user, handleLogout }) => {
  return (
    <nav>
      {user ?
        <ul>
          
          {/* Content */}
          <li><NavLink to="/photos">About You</NavLink></li>
          <li><NavLink to="/photos">Photos</NavLink></li>
          {/* store api */}
          {/* store title api */}
          {/* <li><NavLink to="/products">Shop</NavLink></li> */}

          
          {/* <li><NavLink to="/auth/change-password">Change Password</NavLink></li> */}
          {/* <li><NavLink to="" onClick={handleLogout}>Log Out</NavLink></li> */}
        </ul>
      :
        <ul>
          <li><NavLink to="/auth/login">Log In</NavLink></li>
          <li><NavLink to="/auth/signup">Sign Up</NavLink></li>
        </ul>
      }
    </nav>
  )
}

export default NavBar
