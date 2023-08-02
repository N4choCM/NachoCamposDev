import PropTypes from "prop-types";
// import nachoPicSm from "../assets/nachoPic-sm.png";
import nachoPicLg from "../assets/nachoPic-lg.png";
import "../css/about.css";
import "atropos/css";
import Atropos from "atropos/react";

const AboutCard = ({ darkMode }) => {
	return (
		<>
			{!darkMode ? <hr /> : ""}

			<div className="container">
				<div className="row py-5 px-4">
					<div className="offset-1 col-10 col-md-5">
						Lorem ipsum dolor sit amet consectetur adipisicing elit.
						Reiciendis ipsam eaque assumenda vero tempora aspernatur
						fugit debitis velit dignissimos doloribus, distinctio
						magni officia, vitae eos similique voluptatum
						consequatur est. Facilis. Lorem ipsum, dolor sit amet
						consectetur adipisicing elit. Voluptas facilis
						dignissimos velit! Doloribus atque error sint sit maxime
						itaque numquam harum eaque odit quam aliquam pariatur,
						illo quidem velit rem? Lorem ipsum dolor sit amet
						consectetur adipisicing elit. Autem distinctio doloribus
						quisquam enim! Similique officiis numquam alias vero
						fugiat quo fugit rerum amet harum. Architecto delectus
						natus doloremque inventore ipsam. Lorem ipsum dolor sit
						amet consectetur adipisicing elit. Officia atque magni
						facilis unde necessitatibus laboriosam quidem tenetur
						commodi sed ad. Illum quia accusamus maxime eos quasi
						nesciunt hic autem obcaecati?
					</div>
					<div className="offset-1 offset-md-0 col-10 col-md-5 my-auto">
						<Atropos
							activeOffset={40}
							shadowScale={1.05}
							shadow={false}
							onEnter={() => console.log("Enter")}
							onLeave={() => console.log("Leave")}
							onRotate={(x, y) => console.log("Rotate", x, y)}
						>
							<img
								src={nachoPicLg}
								className="border-nacho rounded-circle d-flex justify-content-center w-75 mx-auto"
								alt="Nacho Campos Martí"
								data-atropos-offset="-5"
							/>
						</Atropos>
					</div>
				</div>
			</div>
			<div className="container">
				<div className="row">
					<div className="offset-1 col-10">
						<div className="accordion" id="accordionExample">
							<div className="accordion-item">
								<h2 className="accordion-header">
									<button
										className="accordion-button bg-accordion-header text-white"
										type="button"
										data-bs-toggle="collapse"
										data-bs-target="#collapseOne"
										aria-expanded="true"
										aria-controls="collapseOne"
									>
										Experience
									</button>
								</h2>
								<div
									id="collapseOne"
									className="accordion-collapse collapse show"
									data-bs-parent="#accordionExample"
								>
									<div
										className={
											darkMode
												? "accordion-body bg-accordion-dark text-white"
												: "accordion-body bg-accordion-light text-dark"
										}
									>
										<h5>
											Full Stack Developer at Dekra
											Digital & Product Solutions (2023 -
											ongoing)
										</h5>
										<div className="mb-2">
											<span className="badge rounded-pill bg-spring me-2">
												Spring Boot
											</span>
											<span className="badge rounded-pill bg-java me-2">
												Java
											</span>
											<span className="badge rounded-pill bg-python me-2">
												Python
											</span>
											<span className="badge rounded-pill bg-angular me-2">
												Angular
											</span>
										</div>
										<ul>
											<li>
												Development of Backend Rest APIs
												with Java/Spring Boot
											</li>
											<li>
												Development of Python scripts to
												populate Data Bases
											</li>
											<li>
												Development of Thymeleaf
												templates to establish email
												services
											</li>
											<li>
												Development of Insomnia/Postman
												request Collections
											</li>
											<li>
												Development of Angular
												Responsive Web Apps
											</li>
										</ul>
									</div>
								</div>
							</div>
							<div className="accordion-item">
								<h2 className="accordion-header">
									<button
										className="accordion-button bg-accordion-header text-white"
										type="button"
										data-bs-toggle="collapse"
										data-bs-target="#collapseTwo"
										aria-expanded="false"
										aria-controls="collapseTwo"
									>
										University Background
									</button>
								</h2>
								<div
									id="collapseTwo"
									className="accordion-collapse collapse"
									data-bs-parent="#accordionExample"
								>
									<div
										className={
											darkMode
												? "accordion-body bg-accordion-dark text-white"
												: "accordion-body bg-accordion-light text-dark"
										}
									>
										{" "}
										<ul>
											<li>
												BSc in Computing Engineering -{" "}
												<span className="badge rounded-pill bg-uned me-2">
													UNED
												</span>
												(2023 - ongoing)
											</li>
											<li>
												Higher Level Education Cycle
												(CFGS) in Multiplatform Apps
												Development -{" "}
												<span className="badge rounded-pill bg-ilerna me-2">
													Ilerna Online
												</span>{" "}
												(2022 - 2023)
											</li>
											<li>
												MA in English Studies and
												Multilingual and Intercultural
												Communication -{" "}
												<span className="badge rounded-pill bg-uma me-2">
													UMA
												</span>{" "}
												(2019 - 2020)
											</li>
											<li>
												BA in Translation and
												Interpreting (EN/FR/DE/ES) -{" "}
												<span className="badge rounded-pill bg-uma me-2">
													UMA
												</span>{" "}
												(2014 - 2018)
											</li>
										</ul>
									</div>
								</div>
							</div>
							<div className="accordion-item">
								<h2 className="accordion-header">
									<button
										className="accordion-button bg-accordion-header text-white"
										type="button"
										data-bs-toggle="collapse"
										data-bs-target="#collapseThree"
										aria-expanded="false"
										aria-controls="collapseThree"
									>
										Certificates
									</button>
								</h2>
								<div
									id="collapseThree"
									className="accordion-collapse collapse"
									data-bs-parent="#accordionExample"
								>
									<div
										className={
											darkMode
												? "accordion-body bg-accordion-dark text-white"
												: "accordion-body bg-accordion-light text-dark"
										}
									>
										{" "}
										<ul className="mx-md-5">
											<li>
												Bootcamp in Web App Development
												using the MERN stack - Rolling
												Code School (2022 - 2023)
											</li>
											<li>
												Spring Boot and Angular,
												developing apps as a Full Stack
												Developer - Udemy (2022)
											</li>
										</ul>
									</div>
								</div>
							</div>
							<div className="accordion-item">
								<h2 className="accordion-header">
									<button
										className="accordion-button bg-accordion-header text-white"
										type="button"
										data-bs-toggle="collapse"
										data-bs-target="#collapseFour"
										aria-expanded="false"
										aria-controls="collapseFour"
									>
										Languages
									</button>
								</h2>
								<div
									id="collapseFour"
									className="accordion-collapse collapse"
									data-bs-parent="#accordionExample"
								>
									<div
										className={
											darkMode
												? "accordion-body bg-accordion-dark text-white"
												: "accordion-body bg-accordion-light text-dark"
										}
									>
										{" "}
										<ul className="mx-md-5">
											<li>Spanish - Native Language</li>
											<li>English - C1 TOEFL</li>
											<li>German - B1 TELC</li>
											<li>
												French - B1 not certificated (I
												worked in France for 1 year as a
												Spanish teacher)
											</li>
										</ul>
									</div>
								</div>
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
