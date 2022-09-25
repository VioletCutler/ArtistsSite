import { Link } from 'react-router-dom'

const Navbar = () => {
    return (
        <nav>
            <Link to="/">Home</Link>
            <Link to="/videos">Videos</Link>
            <Link to='/posts'>Posts</Link>
        </nav>
    )
}

export default Navbar