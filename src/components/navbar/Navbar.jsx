import '../navbar/navbar.css'
import '../navbar/navbarAnimations.css'
import logo from '../../assets/logo.png'

import {useState} from 'react'
const Menu = () =>{
  return (
    <>
      <p><a href="#home">Home</a></p>
      <p><a href="#personal">Personal</a></p>
      <p><a href="#professional">Professional</a></p>
      <p><a href="#api">Api</a></p>
      <p><a href="#contact">Contact</a></p>
    </>
  )
}
const Navbar = () => {
  const [dropDown, setDropDown] = useState(false);

  const handleDropDown = () =>{
    setDropDown(!dropDown)
  }

  return (
    <div className='navbar'>
      <div className='navbar-links'>
        <div className='navbar-logo_container'>
            <img src={logo} className= "navbar-logo" alt="Jayden Evans Logo" />
        </div>
        <div className="navbar-links_container">
          <Menu />
        </div>
      </div>
      
      <div onClick={()=>handleDropDown()} className= "navbar-dropdown">
          <div  className='navbar-dropdown_menu-container'>
              <div className='navbar-menu_button'>
                <h1>Menu</h1>
              </div>
              <div className={dropDown?'navbar-dropdown_arrow rotate-90-cw':'navbar-dropdown_arrow rotate-90-ccw'}>
                <h5> &lt; </h5>
              </div>
          </div>
          <div className={dropDown? "navbar-dropdown_menu scale-in-ver-top":"navbar-dropdown_menu scale-out-ver-top"}>
              <Menu />
          </div>
      </div>
    </div>
  )
}

export default Navbar
