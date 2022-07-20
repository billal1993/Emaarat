import { Link } from "react-router-dom";
function Navbar() {
  return (
    <nav className="nav-rapper">
      <Link to="/" className="nav-band-link">
        Emaarat.com
      </Link>
      <div className="nav-links-rapper">
        <div className="center">
          <Link to="/" className="nav-links">
            Home
          </Link>
          <Link to="/properties" className="nav-links disabled">
            Properties
          </Link>
          <Link to="/projects" className="nav-links disabled">
            Projects
          </Link>
          <Link to="/Blogs" className="nav-links disabled">
            Blogs
          </Link>
        </div>
      </div>
    </nav>
  );
}
export default Navbar;
