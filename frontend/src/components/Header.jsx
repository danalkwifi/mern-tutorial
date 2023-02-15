import {FaSignInAlt, FaSignOutAlt, FaUser} from 'react-icons/fa' //font awsome
import {Link} from 'react-router-dom'


function Header() {
  return (
    <header className='header'>
        <div className='logo'>
            <Link to='/'>GoalSetters</Link>
        </div>
        {/*if the user is loged in we see the logout button,
        and if the user is not loged in we see the login register */}
        <ul>
            <li>
                <Link to='/login'>
                    <FaSignInAlt /> Login
                </Link>
            </li>
            <li>
                <Link to='/register'>
                    <FaUser /> Register
                </Link>
            </li>
        </ul>
    </header>
  )
}

export default Header