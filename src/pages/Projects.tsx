import "./Projects.css";
import TravelUp from "../assets/logoTravel.png";
import BookWilder from "../assets/LogoBook.png";
import LogoLetter from "../assets/LogoLetter.png";
import LogoC from "../assets/LogoC.png";
import LogoM from "../assets/LogoM.png";

const Projects = () => {const projectsData = [
		{
			id: "1",
			title: "Travel Up",
			description: "Un application sur le voyage sous forme de quizz",
			image: TravelUp,
			link: "https://travel-up.netlify.app/",
		},
		{
			id: "2",
			title: "Book Wilder",
			description:
				"Premier projet de groupe des développeurs a porté de main pour vos projets",
			image: BookWilder,
			link: "https://rudy-flexcode.github.io/CFJR-developpeur-web/",
		},
		{
			id: "3",
			title: "Application anti-harcèlement",
			description:
				"Une plateforme pour sensibiliser et lutter contre le harcèlement scolaire.",
			image: LogoLetter,
			link: "https://unelettreouverte.netlify.app/",
		},
		{
			id: "4",
			title: "Compte à rebours",
			description: "projet personnel décompte pour le jour de l'an en JS",
			image: LogoC,
			link: "https://bonne-annee-2026.netlify.app/",
		},
		{
			id: "5",
			title: "Mathémagie",
			description: "projet personnel décompte pour le jour de l'an en JS",
			image: LogoM,
			link: "mathemagie.remote-fr-2.wilders.dev",
		},
	];

	return (
		<section id="projects" className="projects">
			<h2>Mes Projets</h2>
			<div className="projects-grid">
				{projectsData.map((project) => (
					<div className="project-card" key={project.id}>
						<img
							src={project.image}
							alt={project.title}
							className="project-image"
						/>
						<h3>{project.title}</h3>
						<p>{project.description}</p>
						<a
							href={project.link}
							target="_blank"
							rel="noopener noreferrer"
							className="project-link"
						>
							Voir le projet
						</a>
					</div>
				))}
			</div>
		</section>
	);
};

export default Projects;
