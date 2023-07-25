import PropTypes from "prop-types";
import nachoPicSm from "../assets/nachoPic-sm.png";
import nachoPicLg from "../assets/nachoPic-lg.png";
import "../css/about.css";

const AboutCard = ({ darkMode }) => {
	return (
		<>
			{!darkMode ? <hr /> : ""}
			<h1
				className={
					darkMode
						? "text-center text-white my-4"
						: "text-center text-dark my-4"
				}
			>
				About Me
			</h1>
			<div className="container">
				<div className="row">
					<div className="offset-lg-2 col-lg-8">
						<div
							className={
								darkMode
									? "card bg-card-dark text-white"
									: "card bg-card-light text-dark"
							}
						>
							<img
								src={nachoPicSm}
								className="card-img-top d-lg-none"
								alt="Nacho Campos Martí"
							/>
							<img
								src={nachoPicLg}
								className="d-none d-lg-block border-nacho rounded-circle w-50 mx-auto mt-5 mb-4"
								alt="Nacho Campos Martí"
							/>
							<hr className="d-none d-lg-block" />
							<div className="card-body">
								<h2 className="card-title text-center mb-3">
									Experience
								</h2>
								<h5 className="mx-md-5">
									Full Stack Developer at Dekra Digital &
									Product Solutions (2023 - ongoing)
								</h5>
								<ul className="mx-md-5 mb-4">
									<li>
										Development of Backend Rest APIs with
										Java/Spring Boot
									</li>
									<li>
										Development of Python scripts to
										populate Data Bases
									</li>
									<li>
										Development of Thymeleaf templates to
										establish email services
									</li>
									<li>
										Development of Insomnia/Postman request
										Collections
									</li>
									<li>
										Contribution in the development of
										Angular applications
									</li>
								</ul>
                <hr />
								<h2 className="card-title text-center mt-3 mb-3">
									Official Background
								</h2>
								<ul className="mx-md-5 mb-4">
									<li>
										BSc in Computing Engineering at UNED
										(2023 - ongoing)
									</li>
									<li>
										CFGS in Multiplatform Apps Development
										at Ilerna Online (2022 - 2023)
									</li>
									<li>
										MA in English Studies and Multilingual
										and Intercultural Communication at UMA
										(2019 - 2020)
									</li>
									<li>
										BA in Translation and Interpreting at
										UMA (EN/FR/DE <> ES) (2014 - 2018)</>
									</li>
								</ul>
                <hr />
								<h2 className="card-title text-center mt-3 mb-3">
									Certificates
								</h2>
								<ul className="mx-md-5">
									<li>Bootcamp in Web App Development using the MERN stack - Rolling Code School (2022 - 2023)</li>
                  <li>Spring Boot and Angular, developing apps as a Full Stack Developer - Udemy (2022)</li>
								</ul>
								<hr />
								<h2 className="card-title text-center mt-3 mb-3">
									Languages
								</h2>
								<ul className="mx-md-5">
									<li>Spanish - Native Language</li>
                  <li>English - C1 TOEFL</li>
									<li>German - B1 TELC</li>
									<li>French - B1 not certificated (I worked in France for 1 year as a Spanish teacher)</li>
								</ul>
							</div>
						</div>
					</div>
				</div>
			</div>
		</>
	);
};

AboutCard.propTypes = {
	darkMode: PropTypes.bool.isRequired,
};

export default AboutCard;
