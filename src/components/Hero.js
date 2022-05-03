/* eslint-disable no-unused-vars */
import React from "react";
import heroImage from "./assets/svgs/Profile_Picture (2).svg";
import lottie from "lottie-web";
import Animation from "./assets/pictures/50833-square-dot.json";
import Typewriter from "typewriter-effect";

function Hero() {
	React.useEffect(() => {
		lottie.loadAnimation({
			container: document.querySelector("#animation1"),
			animationData: Animation,
		});
		lottie.loadAnimation({
			container: document.querySelector("#animation2"),
			animationData: Animation,
		});
		lottie.loadAnimation({
			container: document.querySelector("#animation3"),
			animationData: Animation,
		});
	}, []);

	const scrollToSection = () => {
		window.document.getElementById("Contact Me").scrollIntoView({
			block: "center",
			behavior: "smooth",
		});
	};

	return (
		<div id="Home" className=" md:flex md:justify-evenly sm:my-20 ">
			<div
				id="animation1"
				className=" z-0 absolute w-96 left-0 hidden md:flex dark:hidden"
			/>
			<div
				id="animation2"
				className=" z-0 w-80 absolute bottom-20 md:left-40 dark:hidden"
			/>
			<div
				id="animation3"
				className=" z-0 absolute flex w-6/12 dark:hidden"
			/>

			<div className=" z-20 flex sm:flex-row justify-center items-center sm:justify-around m-10 flex-wrap sm:flex-nowrap">
				<div className="flex flex-col m-auto sm:p-10 order-1 sm:order-none">
					<a
						className=" w-max pb-4"
						target="_blank"
						rel="noreferrer"
						href="https://www.linkedin.com/in/panagiotis-karaliolios/"
					>
						<svg
							className="stroke-blue-500"
							xmlns="http://www.w3.org/2000/svg"
							width="34.961"
							height="33.508"
							viewBox="0 0 34.961 33.508"
						>
							<path
								id="linkedin"
								d="M7.482,31.508V10.25H.417V31.508ZM3.95,7.345A3.684,3.684,0,1,0,4,0,3.682,3.682,0,1,0,3.9,7.345H3.95Zm7.443,24.163h7.066V19.636a4.837,4.837,0,0,1,.233-1.724,3.868,3.868,0,0,1,3.625-2.584c2.557,0,3.579,1.949,3.579,4.807V31.508h7.066V19.318c0-6.53-3.486-9.568-8.135-9.568a7.037,7.037,0,0,0-6.415,3.581h.048V10.249H11.394c.092,1.995,0,21.258,0,21.258Z"
								transform="translate(1 1)"
								fill="none"
								stroke=""
								strokeLinecap="round"
								strokeLinejoin="round"
								strokeWidth="2"
							/>
						</svg>
					</a>

					<a
						className="w-max"
						target="_blank"
						rel="noreferrer"
						href="https://github.com/PanagiotisKaraliolios"
					>
						<svg
							className="stroke-blue-500 "
							xmlns="http://www.w3.org/2000/svg"
							width="35.174"
							height="37.585"
							viewBox="0 0 35.174 37.585"
						>
							<path
								id="Icon_feather-github"
								data-name="Icon feather-github"
								d="M14.832,31.931C6.381,34.467,6.381,27.705,3,26.86M26.665,37V30.46a5.7,5.7,0,0,0-1.589-4.412c5.308-.592,10.886-2.6,10.886-11.832a9.194,9.194,0,0,0-2.534-6.338,8.57,8.57,0,0,0-.153-6.374s-1.995-.592-6.609,2.5a22.617,22.617,0,0,0-11.832,0c-4.615-3.093-6.609-2.5-6.609-2.5a8.57,8.57,0,0,0-.152,6.373,9.2,9.2,0,0,0-2.535,6.389c0,9.162,5.578,11.173,10.886,11.832a5.7,5.7,0,0,0-1.589,4.361V37"
								transform="translate(-1.787 -0.417)"
								fill="none"
								stroke=""
								strokeLinecap="round"
								strokeLinejoin="round"
								strokeWidth="2"
							/>
						</svg>
					</a>
				</div>

				<div className="flex flex-col justify-self-center max-w-xs justify-around order-5 sm:order-none space-y-4 pt-10 z-10">
					<div className=" text-4xl font-semibold text-gray-800 dark:text-gray-100">
						Hi, I am Panos
					</div>
					<div className=" text-2xl font-medium text-gray-600 dark:text-gray-500">
						<Typewriter
							options={{
								strings: [
									"Full Stack Developer",
									"UI/UX Designer",
								],
								autoStart: true,
								loop: true,
								delay: 200,
								pauseFor: 1000,
								
							}}
						/>
					</div>
					<div className="font-regular text-gray-600 dark:text-gray-500">
						Web Design and application development experience,
						producing high quality work.
					</div>

					<button
						onClick={scrollToSection}
						className="flex text-white bg-blue-600 w-max items-center space-x-2 justify-evenly p-3 rounded-2xl z-20"
					>
						<div>Contact Me</div>

						<svg
							xmlns="http://www.w3.org/2000/svg"
							width="27.032"
							height="26.995"
							viewBox="0 0 27.032 26.995"
						>
							<path
								id="send-filled"
								d="M30.881,17,6.131,4.624a1.114,1.114,0,0,0-1.586,1.26L7.526,16.875H20.25v2.25L7.526,19.86,4.5,30.082a1.145,1.145,0,0,0,1.631,1.294l14.994-7.5L30.881,19a1.125,1.125,0,0,0,0-2Z"
								transform="translate(-4.461 -4.505)"
								fill="#f8f8f8"
							/>
						</svg>
					</button>

					<div className="pt-20">
						<div className="flex animate-bounce text-gray-700 dark:text-white w-max items-center space-x-5 justify-evenly rounded-3xl ">
							<svg
								className="fill-blue-600"
								xmlns="http://www.w3.org/2000/svg"
								width="20"
								height="32"
								viewBox="0 0 20 32"
							>
								<g id="mouse" transform="translate(-6.75)">
									<path
										id="Path_12"
										data-name="Path 12"
										d="M16.75,6a1,1,0,0,1,1,1v4a1,1,0,0,1-2,0V7A1,1,0,0,1,16.75,6Zm8,16V10a8,8,0,0,0-16,0V22a8,8,0,0,0,16,0Zm-8-22a10,10,0,0,0-10,10V22a10,10,0,0,0,20,0V10A10,10,0,0,0,16.75,0Z"
										transform="translate(0)"
										fill=""
										fillRule="evenodd"
									/>
								</g>
							</svg>

							<div>Scroll down</div>

							<svg
								className="fill-blue-600"
								xmlns="http://www.w3.org/2000/svg"
								width="16.437"
								height="18.778"
								viewBox="0 0 16.437 18.778"
							>
								<path
									id="arrow-downward-fill"
									d="M23.663,16.987a1.174,1.174,0,0,0-1.655-.153L16.89,21.1V7.174a1.174,1.174,0,0,0-2.348,0V21.1L9.425,16.834a1.175,1.175,0,1,0-1.5,1.808l7.043,5.869.176.106.153.082a1.174,1.174,0,0,0,.845,0l.153-.082.176-.106,7.043-5.869a1.174,1.174,0,0,0,.153-1.655Z"
									transform="translate(-7.498 -6)"
									fill=""
								/>
							</svg>
						</div>
					</div>
				</div>

				<div className="order-2 sm:order-none w-48 sm:w-auto m-auto">
					<img className="" src={heroImage} alt="" />
				</div>
			</div>
		</div>
	);
}

export default Hero;
