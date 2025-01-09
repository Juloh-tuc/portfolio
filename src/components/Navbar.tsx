import { Link } from "react-router-dom";
import "./Navbar.css";
import logo from "../assets/LogoJ.png";

function Navbar() {
	return (
		<nav className="navbar">
			<div className="navbar-container">
				<div className="logo">
					<Link to="/">
						<img src={logo} alt="logo" className="logo-img" />
					</Link>
				</div>
				<ul className="nav-links">
					<li>
						<Link to="/">
							<span className="first-letter">H</span>ome
						</Link>
					</li>
					<li>
						<Link to="/about">
							<span className="first-letter">A</span>bout
						</Link>
					</li>
					<li>
						<Link to="/projects">
							<span className="first-letter">P</span>rojets
						</Link>
					</li>
				</ul>
			</div>
		</nav>
	);
}

export default Navbar;
