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
import nodejs from "../assets/nodejs (1).png"

const About = () => {
	return (
		<section id="about" className="about">
			<h2>Mon histoire</h2>
			<p>
				Après une expérience dans le secteur paramédical, je me suis tournée
				vers le numérique pour relever de nouveaux défis.
			</p>
			<h3>Compétences</h3>
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
					<img src={git} alt="git" className="skill-icon" />
					GitBash
				</li>
				<li className="skill-item">
					<img src={mysqlIcon} alt="MySQL" className="skill-icon" />
					MySQL
				</li>
				<li className="skill-item">
					<img src={javascript} alt="Javascript" className="skill-icon" />
					Javascript
				</li>
				<li className="skill-item">
					<img src={nodejs} alt="Nodejs" className="skill-icon" />
					Node.js
				</li>
			</ul>
			<p>
				Je suis toujours en quête de nouvelles compétences et passionnée par
				l'apprentissage continu. Ces compétences me permettent de construire des
				projets performants et de répondre à des défis techniques.
			</p>
			<div className="about-image">
				<img src={avatar} alt="Mon avatar" className="avatar" />{" "}
			</div>
		</section>
	);
};

export default About;
