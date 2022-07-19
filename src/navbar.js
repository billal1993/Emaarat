import { Link } from "react-router-dom";
function Navbar() {
  return (
    <div>
      <nav>
        <h3>Emaarat.com</h3>
        <Link to="/">Home</Link>
        <Link to="/properties">Properties</Link>
        <Link to="/projects">Projects</Link>
        <Link to="/Blogs">Blogs</Link>
      </nav>
    </div>
  );
}
export default Navbar;
