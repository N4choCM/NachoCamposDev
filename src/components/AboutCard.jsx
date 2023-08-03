import PropTypes from "prop-types";
// import nachoPicSm from "../assets/nachoPic-sm.png";
import nachoPicLg from "../assets/nachoPic-lg.png";
import "../css/about.css";
import "atropos/css";
// import Atropos from "atropos/react";

const AboutCard = ({ darkMode }) => {
	return (
		<>
			<div className="container">
				<div className="row py-5 px-4">
					<div className="offset-1 col-10 col-md-5">
						<p className="text-justify-both">
						As a passionate full-stack developer, I find immense joy in programming and take great pride in my work. My primary focus lies in backend development, where I thrive in crafting efficient and scalable solutions. However, my insatiable appetite for learning leads me to embrace new challenges across both frontend and backend domains. With a strong command over Java and Spring Boot, as well as proficiency in React, I'm well-equipped to build robust and dynamic applications. Additionally, my knowledge extends to Python, Angular, Kotlin, and C#, allowing me to adapt and innovate in diverse tech environments. I relish the opportunity to tackle exciting projects and continue growing every day. Let's create something amazing together!

						</p>
					</div>
					<div className="offset-1 offset-md-0 col-10 col-md-5 my-auto">
					<img
								src={nachoPicLg}
								className="border-nacho rounded-circle d-flex justify-content-center w-75 mx-auto custom-shadow-pic"
								alt="Nacho Campos Martí"
								data-atropos-offset="-5"
							/>
						{/* <Atropos
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
						</Atropos> */}
					</div>
				</div>
			</div>
			<div className="container">
				<div className="row">
					<div className="offset-1 col-10">
						<div className="accordion custom-shadow" id="accordionExample">
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
										<ul>
											<li className="mb-3">
												Bootcamp in Web App Development - 												<span className="badge rounded-pill bg-rolling me-2">
													Rolling Code School</span> (2022 - 2023)
													<div>
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
											</li>
											<li className="mb-3">
												Spring Boot and Angular,
												developing apps as a Full Stack
												Developer - 												<span className="badge rounded-pill bg-udemy me-2">
													Udemy
												</span> (2022)
												<div className="mb-2">
											<span className="badge rounded-pill bg-spring me-2">
												Spring Boot
											</span>
											<span className="badge rounded-pill bg-java me-2">
												Java
											</span>
											<span className="badge rounded-pill bg-angular me-2">
												Angular
											</span>
											<span className="badge rounded-pill bg-docker me-2">
												Docker
											</span>
										</div>
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
										<ul>
											<li>Spanish - <span><i className="fa fa-star mx-2" aria-hidden="true"></i><i className="fa fa-star me-2" aria-hidden="true"></i><i className="fa fa-star me-2" aria-hidden="true"></i><i className="fa fa-star me-2" aria-hidden="true"></i><i className="fa fa-star me-2" aria-hidden="true"></i></span> (Native Language)</li>
											<li>English &nbsp;- <span><i className="fa fa-star mx-2" aria-hidden="true"></i><i className="fa fa-star me-2" aria-hidden="true"></i><i className="fa fa-star me-2" aria-hidden="true"></i><i className="fa fa-star me-2" aria-hidden="true"></i><i className="fa fa-star-half-o me-2" aria-hidden="true"></i></span>(C1 TOEFL)</li>
											<li>German - <span><i className="fa fa-star mx-2" aria-hidden="true"></i><i className="fa fa-star me-2" aria-hidden="true"></i><i className="fa fa-star me-2" aria-hidden="true"></i><i className="fa fa-star-o me-2" aria-hidden="true"></i><i className="fa fa-star-o me-2" aria-hidden="true"></i></span> (B1 TELC)</li>
											<li>
												French &nbsp;&nbsp;- <span><i className="fa fa-star mx-2" aria-hidden="true"></i><i className="fa fa-star me-2" aria-hidden="true"></i><i className="fa fa-star me-2" aria-hidden="true"></i><i className="fa fa-star-o me-2" aria-hidden="true"></i><i className="fa fa-star-o me-2" aria-hidden="true"></i>(B1 not certificated, but I
												worked in France for 1 year as a
												Spanish teacher)</span>
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
