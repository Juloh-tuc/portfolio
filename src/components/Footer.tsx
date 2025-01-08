import "./Footer.css";
import github from "../assets/github.png";
import linkedin from "../assets/linkedin.png";




const Footer = () => {
	const currentYear = new Date().getFullYear();
	return (
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
	);
};

export default Footer;
