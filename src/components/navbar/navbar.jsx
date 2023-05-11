import { Link } from 'react-router-dom'
import Logo from '../../assets/logo.svg'
import './css/navbar.scss'

const Navbar = () => {
    return (
        <nav className="navbar navbar-expand-lg navbar-light  ">
            <div className="container-fluid d-flex align-items-center justify-content-center">
                {/* <a className="navbar-brand" href="#">Navbar</a> */}
                <Link className="navbar-brand" to="/">
                    <img src={Logo} alt="Logo"  className="navbar-img"/>
                </Link>
            </div>
        </nav>
    )
}

export default Navbar