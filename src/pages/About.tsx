import "./About.css";
import avatar from "../assets/Moi.png";
// Importation des icônes
import htmlIcon from "../assets/html.png";
import cssIcon from "../assets/css-3.png";
import reactIcon from "../assets/react.png";
import typescriptIcon from "../assets/typescript.png";
import git from "../assets/git.png";
import mysqlIcon from "../assets/mysql.png";
import javascript from "../assets/java-script.png";
import nodejs from "../assets/nodejs (1).png";

const About = () => {
	return (
		<section id="about" className="about">
			<div className="about-content">
				<div className="about-text">
					<h2 className="about-title">Mon histoire</h2>
					<p className="about-description">
						Après une expérience dans le secteur paramédical, je me suis tournée
						vers le numérique pour relever de nouveaux défis. Passionnée par
						l'apprentissage continu, je m'efforce d'acquérir de nouvelles
						compétences et de relever des défis techniques pour construire des
						projets performants.
					</p>
				</div>
				<div className="about-avatar">
					<img src={avatar} alt="Mon avatar" className="avatar" />
				</div>
			</div>

			<div className="skills">
				<h3 className="skills-title">Compétences</h3>
				<ul className="skills-list">
					<li className="skill-item">
						<img src={htmlIcon} alt="HTML" className="skill-icon" />
						HTML
					</li>
					<li className="skill-item">
						<img src={cssIcon} alt="CSS" className="skill-icon" />
						CSS
					</li>
					<li className="skill-item">
						<img src={reactIcon} alt="React" className="skill-icon" />
						React
					</li>
					<li className="skill-item">
						<img src={typescriptIcon} alt="TypeScript" className="skill-icon" />
						TypeScript
					</li>
					<li className="skill-item">
						<img src={git} alt="Git" className="skill-icon" />
						GitBash
					</li>
					<li className="skill-item">
						<img src={mysqlIcon} alt="MySQL" className="skill-icon" />
						MySQL
					</li>
					<li className="skill-item">
						<img src={javascript} alt="JavaScript" className="skill-icon" />
						JavaScript
					</li>
					<li className="skill-item">
						<img src={nodejs} alt="Node.js" className="skill-icon" />
						Node.js
					</li>
				</ul>
			</div>
		</section>
	);
};

export default About;
