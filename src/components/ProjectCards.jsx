import PropTypes from "prop-types";
import "../css/projects.css";
import { Link } from "react-router-dom";
import shadowbanePic from "../assets/shadowbane.jpg";
import rollingEatsPic from "../assets/rollingEats.jpg";
import flaggedPic from "../assets/flagged.jpg";

const ProjectCards = ({ darkMode }) => {
	return (
		<div id="projects" className="ancla">
			<h2
				className={
					darkMode
						? "text-center mt-5 mb-4 text-white"
						: "text-center mt-5 mb-4 text-dark"
				}
			>
				Take a look at some of my best projects!
			</h2>
			<div className="container">
				<div className="row row-cols-1 row-cols-md-2 row-cols-lg-3 g-4">
					<div className="col">
						<div
							className={
								darkMode
									? "card custom-shadow-card-dark"
									: "card custom-shadow-card-light"
							}
						>
							<img
								src={shadowbanePic}
								className="card-img-top img-custom-filter"
								alt="Shadowbane main screen"
							/>
							<div
								className={
									darkMode
										? "card-body bg-projects-dark"
										: "card-body bg-projects-light"
								}
							>
								<h5
									className={
										darkMode
											? "card-title text-white mb-0"
											: "card-title text-dark mb-0"
									}
								>
									Shadowbane
								</h5>
								<div className="mb-2">
									<span className="badge rounded-pill bg-html me-2">
										HTML
									</span>
									<span className="badge rounded-pill bg-css me-2">
										CSS
									</span>
									<span className="badge rounded-pill bg-js me-2">
										JS
									</span>
								</div>
								<p
									className={
										darkMode
											? "card-text text-white text-justify-both"
											: "card-text text-dark text-justify-both"
									}
								>
									In Shadowbane, a thrilling JS vanilla
									videogame, embark on a daring quest to
									escape a perilous dungeon teeming with foes.
									Race against time, locate the key, and
									secure your freedom!
								</p>
								<div className="d-flex justify-content-end">
									<Link
										to="https://github.com/N4choCM/shadowbane"
										className="text-white social-hover me-3"
										target="_blank"
									>
										<i
											className={
												darkMode
													? "fa fa-github fa-2x text-white social-hover"
													: "fa fa-github fa-2x text-dark social-hover"
											}
											aria-hidden="true"
										></i>
									</Link>
									<Link
										to="https://github.com/N4choCM"
										className="text-white social-disabled"
										target="_blank"
									>
										<i
											className={
												darkMode
													? "fa fa-link fa-2x social-disabled"
													: "fa fa-link fa-2x social-disabled"
											}
											aria-hidden="true"
										></i>
									</Link>
								</div>
							</div>
						</div>
					</div>
					<div className="col">
						<div
							className={
								darkMode
									? "card custom-shadow-card-dark"
									: "card custom-shadow-card-light"
							}
						>
							<img
								src={rollingEatsPic}
								className="card-img-top img-custom-filter"
								alt="Rolling Eats main screen"
							/>
							<div
								className={
									darkMode
										? "card-body bg-projects-dark"
										: "card-body bg-projects-light"
								}
							>
								<h5
									className={
										darkMode
											? "card-title text-white mb-0"
											: "card-title text-dark mb-0"
									}
								>
									Rolling Eats
								</h5>
								<div className="mb-2">
									<span className="badge rounded-pill bg-mongo me-2">
										MongoDB
									</span>
									<span className="badge rounded-pill bg-express me-2">
										Express.js
									</span>
									<span className="badge rounded-pill bg-react me-2">
										React
									</span>
									<span className="badge rounded-pill bg-node me-2">
										Node.js
									</span>
								</div>
								<p
									className={
										darkMode
											? "card-text text-white text-justify-both"
											: "card-text text-dark text-justify-both"
									}
								>
									Rolling Code School Bootcamp&apos;s final
									project: A responsive MERN stack web app for
									managing customer orders and providing
									real-time order status updates to both
									customers and restaurant workers.
								</p>
								<div className="d-flex justify-content-end">
									<Link
										to="https://github.com/N4choCM/rollingEats"
										className="text-white social-hover me-3"
										target="_blank"
									>
										<i
											className={
												darkMode
													? "fa fa-github fa-2x text-white social-hover"
													: "fa fa-github fa-2x text-dark social-hover"
											}
											aria-hidden="true"
										></i>
									</Link>
									<Link
										to="https://rolling-eats.netlify.app/login"
										className="text-white social-hover"
										target="_blank"
									>
										<i
											className={
												darkMode
													? "fa fa-link fa-2x text-white social-hover"
													: "fa fa-link fa-2x text-dark social-hover"
											}
											aria-hidden="true"
										></i>
									</Link>
								</div>
							</div>
						</div>
					</div>
					<div className="col">
						<div
							className={
								darkMode
									? "card custom-shadow-card-dark"
									: "card custom-shadow-card-light"
							}
						>
							<img
								src={flaggedPic}
								className="card-img-top img-custom-filter"
								alt="Flagged logo"
							/>
							<div
								className={
									darkMode
										? "card-body bg-projects-dark"
										: "card-body bg-projects-light"
								}
							>
								<h5
									className={
										darkMode
											? "card-title text-white mb-0"
											: "card-title text-dark mb-0"
									}
								>
									Flagged!
								</h5>
								<div className="mb-2">
									<span className="badge rounded-pill bg-kotlin me-2">
										Kotlin
									</span>
								</div>
								<p
									className={
										darkMode
											? "card-text text-white text-justify-both"
											: "card-text text-dark text-justify-both"
									}
								>
									Discover the world with FlagsQuiz, a
									captivating Kotlin-powered game on Google
									Play! Test your knowledge of countries&apos;
									flags in a fun and educational quiz
									adventure. Are you ready for the challenge?{" "}
								</p>
								<div className="d-flex justify-content-end">
									<Link
										to="https://github.com/N4choCM/flagged"
										className="text-white social-hover me-3"
										target="_blank"
									>
										<i
											className={
												darkMode
													? "fa fa-github fa-2x text-white social-hover"
													: "fa fa-github fa-2x text-dark social-hover"
											}
											aria-hidden="true"
										></i>
									</Link>
									<Link
										to="https://play.google.com/store/apps/details?id=com.nachocampos.flagged&hl=es&gl=US"
										className="text-white social-hover"
										target="_blank"
									>
										<i
											className={
												darkMode
													? "fa fa-link fa-2x social-hover"
													: "fa fa-link fa-2x social-hover"
											}
											aria-hidden="true"
										></i>
									</Link>
								</div>
							</div>
						</div>
					</div>
				</div>
			</div>
		</div>
	);
};

ProjectCards.propTypes = {
	darkMode: PropTypes.bool.isRequired,
};

export default ProjectCards;
