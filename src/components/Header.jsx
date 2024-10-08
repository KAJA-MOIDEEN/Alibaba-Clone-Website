import logo from '../assets/logo.png'
import './Header.css'
import { Link } from "react-router-dom";

const Header = (props) => {
let {name} = props;
  return (
    <>
      {/* Header */}
      <header className='header'>
        <img src={logo} alt="" />
        
        <nav className='nav'>
          <Link to={'/'} className='navLink'>Home</Link>
          <Link to='#' className='navLink'>Features</Link>
          <Link to="/about" className='navLink'>About</Link>
          <Link to="/form" className='navLink'>Contact</Link>
        </nav>
        <Link to="/signup" ><button className='header-btn'>SignUp</button></Link>
      </header>
      </>
      )};

export default Header ;