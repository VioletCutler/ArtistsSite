import { NavLink } from "react-router-dom";

const Navbar = () => {

  return (
    <div id="navbar">
      <header>
        <h1>Ultraviolet</h1>
      </header>
      <nav>
        <NavLink
          className={({isActive}) => {
           isActive ? '.currentPage' : '.inactiveNavLinks'
          }}
          to="/"
        >
          Home
        </NavLink>
        <NavLink
         className={({isActive}) => {
          isActive ? '.currentPage' : '.inactiveNavLinks'
         }}
          to="/videos"
        >
          Videos
        </NavLink>
        <NavLink
          className={({isActive}) => {
            isActive ? '.currentPage' : '.inactiveNavLinks'
           }}
          to="/posts"
        >
          Posts
        </NavLink>
        <NavLink
        className={({isActive}) => {
          isActive ? '.currentPage' : '.inactiveNavLinks'
         }}
          to="/templates"
        >
          Templates
        </NavLink>
      </nav>
    </div>
  );
};

export default Navbar;
