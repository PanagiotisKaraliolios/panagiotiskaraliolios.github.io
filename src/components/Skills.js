import React from "react";
import { Fade } from "react-awesome-reveal";

function About() {
	return (
		<div
			id="Skills"
			className=" flex flex-col justify-center items-center p-20 sm:p-10 space-y-32 sm:my-20"
		>
			<div className=" flex flex-col justify-center items-center space-y-2">
				<div className=" text-gray-800 dark:text-gray-100 font-semibold text-3xl">
					Skills
				</div>

				<div className=" text-gray-600 dark:text-gray-500 font-medium">
					My technical knowledge
				</div>
			</div>

			<div className=" flex flex-col lg:flex-row justify-center space-y-20 lg:space-y-0 lg:space-x-20">
				<Fade
					cascade
					delay={500}
					triggerOnce
					direction="left"
					fraction={0.5}
				>
					<div className="flex flex-col items-center space-y-10 md:pr-8">
						<div className=" flex flex-row items-center font-medium dark:text-white w-60">
							<svg
								className="fill-current text-blue-500"
								xmlns="http://www.w3.org/2000/svg"
								width="37.77"
								height="40.123"
								viewBox="0 0 37.77 40.123"
							>
								<path
									id="pen-nib"
									d="M38.9,12.911a2.127,2.127,0,0,0-.56-1.55L29.948,2.414a1.858,1.858,0,0,0-1.454-.6,1.884,1.884,0,0,0-1.391.748l-7.2,9.38L9.489,14.209a2.213,2.213,0,0,0-1.6,1.453L1.274,34.245a2.439,2.439,0,0,0,.5,2.467l4.264,4.546a2.086,2.086,0,0,0,2.314.529l17.437-7.051a2.279,2.279,0,0,0,1.357-1.677l2.249-10.982L38.2,14.394a2.1,2.1,0,0,0,.7-1.483ZM24.686,32.26,7.672,39.14,6.62,38.019l7.953-8.479a4.308,4.308,0,0,0,5.752-1.252,5.023,5.023,0,0,0-.332-6.249,4.285,4.285,0,0,0-5.848-.551,4.984,4.984,0,0,0-1.354,6.09l-7.982,8.51L3.756,34.968,10.2,16.841l9.982-2.169,6.648,7.088Zm-9.841-6.886a1.925,1.925,0,1,1,1.922,2.049A1.988,1.988,0,0,1,14.845,25.374Zm13.478-5.893-5.99-6.386,6.305-8.216,7.391,7.88Z"
									transform="translate(-1.133 -1.815)"
									fill=""
								/>
							</svg>

							<div className=" m-auto">Design</div>
						</div>

						<div className="flex-col content-center space-y-6 m-auto text-gray-700 dark:text-gray-400">
							<div className="flex items-center space-x-5">
								<svg
									className="fill-current text-blue-500"
									xmlns="http://www.w3.org/2000/svg"
									width="13.5"
									height="18.004"
									viewBox="0 0 13.5 18.004"
								>
									<path
										id="arrow-down-fill"
										d="M18,25.5a2.58,2.58,0,0,1-2-.96L9.69,16.89a3.15,3.15,0,0,1-.39-3.315A2.64,2.64,0,0,1,11.685,12h12.63A2.64,2.64,0,0,1,26.7,13.575a3.15,3.15,0,0,1-.39,3.315L20,24.54A2.58,2.58,0,0,1,18,25.5Z"
										transform="translate(-12 27.002) rotate(-90)"
										fill=""
									/>
								</svg>

								<div>Figma</div>
							</div>

							<div className="flex items-center space-x-5">
								<svg
									className="fill-current text-blue-500"
									xmlns="http://www.w3.org/2000/svg"
									width="13.5"
									height="18.004"
									viewBox="0 0 13.5 18.004"
								>
									<path
										id="arrow-down-fill"
										d="M18,25.5a2.58,2.58,0,0,1-2-.96L9.69,16.89a3.15,3.15,0,0,1-.39-3.315A2.64,2.64,0,0,1,11.685,12h12.63A2.64,2.64,0,0,1,26.7,13.575a3.15,3.15,0,0,1-.39,3.315L20,24.54A2.58,2.58,0,0,1,18,25.5Z"
										transform="translate(-12 27.002) rotate(-90)"
										fill=""
									/>
								</svg>

								<div>Adobe Illustrator</div>
							</div>

							<div className="flex items-center space-x-5">
								<svg
									className="fill-current text-blue-500"
									xmlns="http://www.w3.org/2000/svg"
									width="13.5"
									height="18.004"
									viewBox="0 0 13.5 18.004"
								>
									<path
										id="arrow-down-fill"
										d="M18,25.5a2.58,2.58,0,0,1-2-.96L9.69,16.89a3.15,3.15,0,0,1-.39-3.315A2.64,2.64,0,0,1,11.685,12h12.63A2.64,2.64,0,0,1,26.7,13.575a3.15,3.15,0,0,1-.39,3.315L20,24.54A2.58,2.58,0,0,1,18,25.5Z"
										transform="translate(-12 27.002) rotate(-90)"
										fill=""
									/>
								</svg>

								<div>Adobe XD</div>
							</div>
						</div>
					</div>

					<div className="flex flex-col items-center space-y-10 md:pr-8">
						<div className=" flex flex-row items-center font-medium dark:text-white w-60">
							<svg
								className="fill-current text-blue-500"
								xmlns="http://www.w3.org/2000/svg"
								width="37.771"
								height="40.123"
								viewBox="0 0 37.771 40.123"
							>
								<path
									id="Path_16"
									data-name="Path 16"
									d="M5.985,24.834v-.547c3.37-.341,5.02-2.063,5.02-5.366V12.895c0-3.67,1.309-5.159,4.54-5.159h.915V4.5H15.2c-5.4,0-7.952,2.546-7.952,7.888V17.5c0,3.67-1.261,4.883-5,4.883v4.357c3.737,0,5,1.215,5,4.883v5.111c0,5.342,2.546,7.888,7.955,7.888h1.261V41.389h-.915c-3.233,0-4.54-1.489-4.54-5.159V30.2c0-3.3-1.65-5.02-5.02-5.366Zm30.3-.547v.547c-3.37.346-5.02,2.066-5.02,5.366v6.031c0,3.67-1.309,5.159-4.54,5.159h-.915v3.233h1.261c5.409,0,7.955-2.546,7.955-7.888V31.624c0-3.67,1.261-4.883,5-4.883V22.382c-3.737,0-5-1.215-5-4.883V12.388c0-5.342-2.549-7.888-7.955-7.888H25.807V7.733h.915c3.233,0,4.54,1.489,4.54,5.159v6.029C31.262,22.221,32.912,23.941,36.282,24.287Z"
									transform="translate(-2.25 -4.5)"
									fill=""
								/>
							</svg>

							<div className=" m-auto">Front-end development</div>
						</div>

						<div className="flex-col content-center space-y-6 m-auto text-gray-700 dark:text-gray-400">
							<div className="flex items-center space-x-5">
								<svg
									className="fill-current text-blue-500"
									xmlns="http://www.w3.org/2000/svg"
									width="13.5"
									height="18.004"
									viewBox="0 0 13.5 18.004"
								>
									<path
										id="arrow-down-fill"
										d="M18,25.5a2.58,2.58,0,0,1-2-.96L9.69,16.89a3.15,3.15,0,0,1-.39-3.315A2.64,2.64,0,0,1,11.685,12h12.63A2.64,2.64,0,0,1,26.7,13.575a3.15,3.15,0,0,1-.39,3.315L20,24.54A2.58,2.58,0,0,1,18,25.5Z"
										transform="translate(-12 27.002) rotate(-90)"
										fill=""
									/>
								</svg>

								<div>HTML</div>
							</div>

							<div className="flex items-center space-x-5">
								<svg
									className="fill-current text-blue-500"
									xmlns="http://www.w3.org/2000/svg"
									width="13.5"
									height="18.004"
									viewBox="0 0 13.5 18.004"
								>
									<path
										id="arrow-down-fill"
										d="M18,25.5a2.58,2.58,0,0,1-2-.96L9.69,16.89a3.15,3.15,0,0,1-.39-3.315A2.64,2.64,0,0,1,11.685,12h12.63A2.64,2.64,0,0,1,26.7,13.575a3.15,3.15,0,0,1-.39,3.315L20,24.54A2.58,2.58,0,0,1,18,25.5Z"
										transform="translate(-12 27.002) rotate(-90)"
										fill=""
									/>
								</svg>

								<div>
									JavaScript
									<div>(React , NextJS)</div>
								</div>
							</div>

							<div className="flex items-center space-x-5">
								<svg
									className="fill-current text-blue-500"
									xmlns="http://www.w3.org/2000/svg"
									width="13.5"
									height="18.004"
									viewBox="0 0 13.5 18.004"
								>
									<path
										id="arrow-down-fill"
										d="M18,25.5a2.58,2.58,0,0,1-2-.96L9.69,16.89a3.15,3.15,0,0,1-.39-3.315A2.64,2.64,0,0,1,11.685,12h12.63A2.64,2.64,0,0,1,26.7,13.575a3.15,3.15,0,0,1-.39,3.315L20,24.54A2.58,2.58,0,0,1,18,25.5Z"
										transform="translate(-12 27.002) rotate(-90)"
										fill=""
									/>
								</svg>

								<div>
									CSS
									<div>(Sass , Tailwind)</div>
								</div>
							</div>
						</div>
					</div>

					<div className="flex flex-col items-center space-y-10">
						<div className=" flex flex-row items-center font-medium dark:text-white w-60">
							<svg
								className="fill-current text-blue-500"
								id="bx-server"
								xmlns="http://www.w3.org/2000/svg"
								width="45.067"
								height="40.561"
								viewBox="0 0 45.067 40.561"
							>
								<path
									id="Path_17"
									data-name="Path 17"
									d="M6,30.034v9.013H42.058l0-9.013Zm27.04,6.76H28.534V32.287H33.04Zm6.76,0H35.294V32.287H39.8ZM6,7.5v9.013H42.058l0-9.013Zm27.04,6.76H28.534V9.753H33.04Zm6.76,0H35.294V9.753H39.8Z"
									transform="translate(-1.493 -2.993)"
									fill="none"
								/>
								<path
									id="Path_18"
									data-name="Path 18"
									d="M43.561,4.5H7.507A4.51,4.51,0,0,0,3,9.007V18.02a4.51,4.51,0,0,0,4.507,4.507H43.561a4.51,4.51,0,0,0,4.507-4.507V9.007A4.51,4.51,0,0,0,43.561,4.5ZM7.507,18.02V9.007H43.561l0,9.013Zm36.054,9.013H7.507A4.51,4.51,0,0,0,3,31.54v9.013a4.51,4.51,0,0,0,4.507,4.507H43.561a4.51,4.51,0,0,0,4.507-4.507V31.54A4.51,4.51,0,0,0,43.561,27.034ZM7.507,40.554V31.54H43.561l0,9.013Z"
									transform="translate(-3 -4.5)"
									fill=""
								/>
								<path
									id="Path_19"
									data-name="Path 19"
									d="M27.76,9h4.507v4.507H27.76ZM21,9h4.507v4.507H21Zm6.76,22.534h4.507V36.04H27.76Zm-6.76,0h4.507V36.04H21Z"
									transform="translate(6.04 -2.24)"
									fill=""
								/>
							</svg>

							<div className=" m-auto">Back-end development</div>
						</div>

						<div className="flex-col content-center space-y-6 m-auto text-gray-700 dark:text-gray-400">
							<div className="flex items-center space-x-5">
								<svg
									className="fill-current text-blue-500"
									xmlns="http://www.w3.org/2000/svg"
									width="13.5"
									height="18.004"
									viewBox="0 0 13.5 18.004"
								>
									<path
										id="arrow-down-fill"
										d="M18,25.5a2.58,2.58,0,0,1-2-.96L9.69,16.89a3.15,3.15,0,0,1-.39-3.315A2.64,2.64,0,0,1,11.685,12h12.63A2.64,2.64,0,0,1,26.7,13.575a3.15,3.15,0,0,1-.39,3.315L20,24.54A2.58,2.58,0,0,1,18,25.5Z"
										transform="translate(-12 27.002) rotate(-90)"
										fill=""
									/>
								</svg>

								<div>PHP</div>
							</div>

							<div className="flex items-center space-x-5">
								<svg
									className="fill-current text-blue-500"
									xmlns="http://www.w3.org/2000/svg"
									width="13.5"
									height="18.004"
									viewBox="0 0 13.5 18.004"
								>
									<path
										id="arrow-down-fill"
										d="M18,25.5a2.58,2.58,0,0,1-2-.96L9.69,16.89a3.15,3.15,0,0,1-.39-3.315A2.64,2.64,0,0,1,11.685,12h12.63A2.64,2.64,0,0,1,26.7,13.575a3.15,3.15,0,0,1-.39,3.315L20,24.54A2.58,2.58,0,0,1,18,25.5Z"
										transform="translate(-12 27.002) rotate(-90)"
										fill=""
									/>
								</svg>

								<div>Node Js</div>
							</div>

							<div className="flex items-center space-x-5">
								<svg
									className="fill-current text-blue-500"
									xmlns="http://www.w3.org/2000/svg"
									width="13.5"
									height="18.004"
									viewBox="0 0 13.5 18.004"
								>
									<path
										id="arrow-down-fill"
										d="M18,25.5a2.58,2.58,0,0,1-2-.96L9.69,16.89a3.15,3.15,0,0,1-.39-3.315A2.64,2.64,0,0,1,11.685,12h12.63A2.64,2.64,0,0,1,26.7,13.575a3.15,3.15,0,0,1-.39,3.315L20,24.54A2.58,2.58,0,0,1,18,25.5Z"
										transform="translate(-12 27.002) rotate(-90)"
										fill=""
									/>
								</svg>

								<div>Firebase</div>
							</div>

							<div className="flex items-center space-x-5">
								<svg
									className="fill-current text-blue-500"
									xmlns="http://www.w3.org/2000/svg"
									width="13.5"
									height="18.004"
									viewBox="0 0 13.5 18.004"
								>
									<path
										id="arrow-down-fill"
										d="M18,25.5a2.58,2.58,0,0,1-2-.96L9.69,16.89a3.15,3.15,0,0,1-.39-3.315A2.64,2.64,0,0,1,11.685,12h12.63A2.64,2.64,0,0,1,26.7,13.575a3.15,3.15,0,0,1-.39,3.315L20,24.54A2.58,2.58,0,0,1,18,25.5Z"
										transform="translate(-12 27.002) rotate(-90)"
										fill=""
									/>
								</svg>

								<div>Python</div>
							</div>
						</div>
					</div>
				</Fade>
			</div>
		</div>
	);
}

export default About;
