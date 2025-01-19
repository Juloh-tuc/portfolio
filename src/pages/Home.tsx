import "./Home.css";
import avatar from "../assets/Moi.png";
import cv from "../assets/MonCv.pdf";

function Home() {
	return (
		<section className="home">
			<div className="home-bg">
				<h1>Bienvenue sur mon portfolio</h1>
				<p>
					Découvrez mon parcours, mes projets, et ma passion pour le
					développement web.
				</p>

				<div className="avatar-container">
					<a href={cv} download="MonCv.pdf" className="avatar-link">
						<img src={avatar} alt="Mon avatar" className="avatar" />
						<span className="download-text">Télécharger mon CV</span>
					</a>

					<a href="mailto:julie.tuco@gmail.com" className="button-blur">
						Me Contacter
					</a>
				</div>
			</div>
		</section>
	);
}

export default Home;
