import "./Contact.css";

const Contact = () => {
	return (
		<section className="contact">
			<div className="contact-bg" />
			<form
				className="contact-form"
				action="https://formspree.io/f/xlddoobq" 
				method="POST"
			>
				<h2>Contactez-moi</h2>
				<input type="text" name="user_name" placeholder="Votre nom" required />
				<input
					type="email"
					name="user_email"
					placeholder="Votre email"
					required
				/>
				<textarea
					name="message"
					placeholder="Votre message"
					rows={5}
					required
				/>
				<button type="submit" className="button-56">
					Envoyer
				</button>
			</form>
		</section>
	);
};

export default Contact;
