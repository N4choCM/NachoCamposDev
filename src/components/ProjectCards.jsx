import PropTypes from "prop-types";
import "../css/projects.css";
import { Link } from "react-router-dom";

const ProjectCards = ({ darkMode }) => {
	return (
		<>
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
								src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcS8N0tUijh_HHnvvTSUA-vNph2IuwTKWUgoYg&usqp=CAU"
								className="card-img-top img-custom-filter"
								alt="..."
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
											? "card-title text-white"
											: "card-title text-dark"
									}
								>
									Shadowbane
								</h5>
								<p
									className={
										darkMode
											? "card-text text-white"
											: "card-text text-dark"
									}
								>
									Some quick example text to build on the card
									title and make up the bulk of the card's
									content.
								</p>
								<div className="d-flex justify-content-end">
									<Link
										to="https://github.com/N4choCM"
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
								src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcS8N0tUijh_HHnvvTSUA-vNph2IuwTKWUgoYg&usqp=CAU"
								className="card-img-top img-custom-filter"
								alt="..."
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
											? "card-title text-white"
											: "card-title text-dark"
									}
								>
									Shadowbane
								</h5>
								<p
									className={
										darkMode
											? "card-text text-white"
											: "card-text text-dark"
									}
								>
									Some quick example text to build on the card
									title and make up the bulk of the card's
									content.
								</p>
								<div className="d-flex justify-content-end">
									<Link
										to="https://github.com/N4choCM"
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
								src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcS8N0tUijh_HHnvvTSUA-vNph2IuwTKWUgoYg&usqp=CAU"
								className="card-img-top img-custom-filter"
								alt="..."
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
											? "card-title text-white"
											: "card-title text-dark"
									}
								>
									Shadowbane
								</h5>
								<p
									className={
										darkMode
											? "card-text text-white"
											: "card-text text-dark"
									}
								>
									Some quick example text to build on the card
									title and make up the bulk of the card's
									content.
								</p>
								<div className="d-flex justify-content-end">
									<Link
										to="https://github.com/N4choCM"
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
								src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcS8N0tUijh_HHnvvTSUA-vNph2IuwTKWUgoYg&usqp=CAU"
								className="card-img-top img-custom-filter"
								alt="..."
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
											? "card-title text-white"
											: "card-title text-dark"
									}
								>
									Shadowbane
								</h5>
								<p
									className={
										darkMode
											? "card-text text-white"
											: "card-text text-dark"
									}
								>
									Some quick example text to build on the card
									title and make up the bulk of the card's
									content.
								</p>
								<div className="d-flex justify-content-end">
									<Link
										to="https://github.com/N4choCM"
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
								src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcS8N0tUijh_HHnvvTSUA-vNph2IuwTKWUgoYg&usqp=CAU"
								className="card-img-top img-custom-filter"
								alt="..."
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
											? "card-title text-white"
											: "card-title text-dark"
									}
								>
									Shadowbane
								</h5>
								<p
									className={
										darkMode
											? "card-text text-white"
											: "card-text text-dark"
									}
								>
									Some quick example text to build on the card
									title and make up the bulk of the card's
									content.
								</p>
								<div className="d-flex justify-content-end">
									<Link
										to="https://github.com/N4choCM"
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
								src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcS8N0tUijh_HHnvvTSUA-vNph2IuwTKWUgoYg&usqp=CAU"
								className="card-img-top img-custom-filter"
								alt="..."
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
											? "card-title text-white"
											: "card-title text-dark"
									}
								>
									Shadowbane
								</h5>
								<p
									className={
										darkMode
											? "card-text text-white"
											: "card-text text-dark"
									}
								>
									Some quick example text to build on the card
									title and make up the bulk of the card's
									content.
								</p>
								<div className="d-flex justify-content-end">
									<Link
										to="https://github.com/N4choCM"
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
								src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcS8N0tUijh_HHnvvTSUA-vNph2IuwTKWUgoYg&usqp=CAU"
								className="card-img-top img-custom-filter"
								alt="..."
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
											? "card-title text-white"
											: "card-title text-dark"
									}
								>
									Shadowbane
								</h5>
								<p
									className={
										darkMode
											? "card-text text-white"
											: "card-text text-dark"
									}
								>
									Some quick example text to build on the card
									title and make up the bulk of the card's
									content.
								</p>
								<div className="d-flex justify-content-end">
									<Link
										to="https://github.com/N4choCM"
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
								src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcS8N0tUijh_HHnvvTSUA-vNph2IuwTKWUgoYg&usqp=CAU"
								className="card-img-top img-custom-filter"
								alt="..."
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
											? "card-title text-white"
											: "card-title text-dark"
									}
								>
									Shadowbane
								</h5>
								<p
									className={
										darkMode
											? "card-text text-white"
											: "card-text text-dark"
									}
								>
									Some quick example text to build on the card
									title and make up the bulk of the card's
									content.
								</p>
								<div className="d-flex justify-content-end">
									<Link
										to="https://github.com/N4choCM"
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
								src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcS8N0tUijh_HHnvvTSUA-vNph2IuwTKWUgoYg&usqp=CAU"
								className="card-img-top img-custom-filter"
								alt="..."
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
											? "card-title text-white"
											: "card-title text-dark"
									}
								>
									Shadowbane
								</h5>
								<p
									className={
										darkMode
											? "card-text text-white"
											: "card-text text-dark"
									}
								>
									Some quick example text to build on the card
									title and make up the bulk of the card's
									content.
								</p>
								<div className="d-flex justify-content-end">
									<Link
										to="https://github.com/N4choCM"
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
				</div>
			</div>
		</>
	);
};

ProjectCards.propTypes = {
	darkMode: PropTypes.bool.isRequired,
};

export default ProjectCards;
