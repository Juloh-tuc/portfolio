import { Link } from "react-router-dom";
import Logo from "../assets/LogoJ.png"; // Remplace par le chemin réel vers ton logo
import "./Navbar.css"; // Assurez-vous d'importer le fichier CSS

const Navbar = () => {
	return (
		<header className="navbar">
			<div className="navbar-container">
				{/* Logo */}
				<Link to="/">
					<img
						src={Logo} // Utilisation du logo importé
						alt="Logo"
						className="logo-img"
					/>
				</Link>

				{/* Liens de navigation */}
				<nav>
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
							<Link to="/projets">
								<span className="first-letter">P</span>rojets
							</Link>
						</li>
					</ul>
				</nav>
			</div>
		</header>
	);
};

export default Navbar;
