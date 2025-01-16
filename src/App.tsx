import { Outlet } from "react-router-dom";
import github from "./assets/github.png";
import linkedin from "./assets/linkedin.png";
import Navbar from "./components/Navbar"; // Import du Navbar
import "./App.css";

function App() {
	const currentYear = new Date().getFullYear();

	return (
		<div className="layout">
			{/* Utilisation du Navbar */}
			<Navbar />

			{/* Main Content */}
			<main>
				<Outlet />
			</main>

			<footer className="footer">
				<p>© {currentYear} Julie Lohier. Tous droits réservés.</p>
				<div className="social-links">
					<a
						href="https://www.linkedin.com/in/julie-lohier-b71b711ab/"
						target="_blank"
						rel="noopener noreferrer"
					>
						<img src={linkedin} alt="LinkedIn" className="social-icon" />
					</a>
					<a
						href="https://github.com/Juloh-tuc"
						target="_blank"
						rel="noopener noreferrer"
					>
						<img src={github} alt="GitHub" className="social-icon" />
					</a>
				</div>
			</footer>
		</div>
	);
}

export default App;
