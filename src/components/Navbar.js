import { NavLink } from 'react-router-dom'

const Navbar = () => {
    function handleClick(event) {
        console.log('className',event.target.className)
    }

    return (
        <div id='navbar'>
            <header>
        <h1>Ultraviolet</h1>
      </header>
        <nav>
            <NavLink onClick={handleClick}className={isActive => {
            console.log('isActive', isActive)
            console.log("nav-link" + !isActive )
    return "nav-link" + (!isActive ? "-unselected" : "-selected")}
  } to="/">Home</NavLink>
            <NavLink  className={isActive => {
            console.log('isActive', isActive)
            console.log("nav-link" + !isActive )
    return "nav-link" + (!isActive ? "-unselected" : "")}
  }to="/videos">Videos</NavLink>
            <NavLink className={isActive => {
            console.log('isActive', isActive)
            console.log("nav-link" + !isActive )
    return "nav-link" + (!isActive ? "-unselected" : "")}
  }to='/posts'>Posts</NavLink>
        </nav>
        </div>
        
    )
}

export default Navbar