/* eslint-disable no-unused-vars */
import React, { useEffect, useState } from "react"



function Qualifications() {
    const [visibleSection, setVisibleSection] = useState('education');
    

    const changeVisibleSectionToWork = () =>{
        setVisibleSection('work');
    }
    const changeVisibleSectionToEducation = () =>{
        setVisibleSection('education');
    }

    return (
		<div
			id="Qualifications"
			className=" flex flex-col justify-center items-center p-10 sm:p-10 space-y-32 sm:my-20 pb-20 sm:pb-0"
		>
			<div className=" flex flex-col justify-center items-center space-y-2">
				<div className=" text-gray-800 dark:text-gray-100 font-semibold text-3xl">
					Qualifications
				</div>

				<div className=" text-gray-600 dark:text-gray-500 font-medium">
					My personal journey
				</div>
			</div>

			<div className=" flex flex-col justify-center items-center">
				<div className="flex items-center justify-center gap-x-10">
					<button
						onClick={changeVisibleSectionToEducation}
						className={`flex items-center space-x-10 text-2xl ${
							visibleSection === "education"
								? "text-blue-600"
								: "text-gray-700 dark:text-gray-500"
						}`}
					>
						<svg
							className="fill-current"
							id="education"
							xmlns="http://www.w3.org/2000/svg"
							width="57.284"
							height="51.707"
							viewBox="0 0 57.284 51.707"
						>
							<path
								id="Path_23"
								data-name="Path 23"
								d="M40.609,29.51,26.288,37.566,11.967,29.51V21L7.875,18.726V31.9L26.288,42.26,44.7,31.9V18.724L40.609,21v8.511Z"
								transform="translate(2.354 9.447)"
								fill=""
							/>
							<path
								id="Path_24"
								data-name="Path 24"
								d="M30.892,3.233,2.25,18.083v3.546L30.892,37.542,55.442,23.9V35.2h4.092V18.083ZM51.351,21.5,47.259,23.77,30.892,32.863,14.525,23.77,10.433,21.5,7.6,19.922,30.892,7.841,54.186,19.92Z"
								transform="translate(-2.25 -3.233)"
								fill=""
							/>
						</svg>
						<div className=" hidden sm:flex font-semibold">
							Education
						</div>
					</button>

					<button
						onClick={changeVisibleSectionToWork}
						className={`flex items-center space-x-10 text-2xl ${
							visibleSection === "work"
								? "text-blue-600"
								: " text-gray-700 dark:text-gray-500"
						}`}
					>
						<svg
							className="fill-current"
							id="briefcase-line"
							xmlns="http://www.w3.org/2000/svg"
							width="58.193"
							height="50.92"
							viewBox="0 0 58.193 50.92"
						>
							<path
								id="Path_25"
								data-name="Path 25"
								d="M56.556,34.638H5.637V22.491A12.912,12.912,0,0,1,2,19.89V34.638a3.637,3.637,0,0,0,3.637,3.637H56.556a3.637,3.637,0,0,0,3.637-3.637V19.89a12.257,12.257,0,0,1-3.637,2.582Z"
								transform="translate(-2 12.644)"
								fill=""
							/>
							<path
								id="Path_26"
								data-name="Path 26"
								d="M34,27.688a1.819,1.819,0,0,0,1.819-1.819V15.94H32.185v3.746H14v3.637H32.185v2.546A1.819,1.819,0,0,0,34,27.688Z"
								transform="translate(7.823 9.411)"
								fill=""
							/>
							<path
								id="Path_27"
								data-name="Path 27"
								d="M58.375,9.274H42.008V6.328A4.4,4.4,0,0,0,37.553,2H24.641a4.4,4.4,0,0,0-4.455,4.328V9.274H3.819A1.819,1.819,0,0,0,2,11.093V25.641a9.093,9.093,0,0,0,9.093,9.093h5.456V37.28a1.819,1.819,0,1,0,3.637,0V27.351H16.548V31.1H11.093a5.456,5.456,0,0,1-5.456-5.456V12.911H56.556v12.73A5.456,5.456,0,0,1,51.1,31.1H49.282v3.637H51.1a9.093,9.093,0,0,0,9.093-9.093V11.093A1.819,1.819,0,0,0,58.375,9.274Zm-20,0H23.823V6.419a.818.818,0,0,1,.818-.782h12.93a.782.782,0,0,1,.8.764Z"
								transform="translate(-2 -2)"
								fill=""
							/>
						</svg>

						<div className="hidden sm:flex font-semibold">Work</div>
					</button>
				</div>

				{visibleSection === "education" ? (
					<div className="flex flex-col sm:flex-row sm:space-x-10 pt-20 h-96">
						<div className="flex flex-col space-y-2">
							<div className=" font-semibold text-2xl text-gray-800 dark:text-gray-100">
								Highschool Diploma
							</div>

							<div className=" font-medium text-gray-700 dark:text-gray-300">
								2nd Highschool <br /> of Grevena
							</div>

							<div className=" font-medium text-gray-600 dark:text-gray-500 flex items-center">
								<svg
									className="fill-current "
									id="calendar"
									xmlns="http://www.w3.org/2000/svg"
									width="20"
									height="20"
									viewBox="0 0 20 20"
								>
									<path
										id="Path_28"
										data-name="Path 28"
										d="M25.2,25.762H9.2a1.959,1.959,0,0,1-2-1.989V9.189A1.823,1.823,0,0,1,8.867,7.2h1V8.526h-1c-.133,0-.333.265-.333.663V23.773a.628.628,0,0,0,.667.663h16a.628.628,0,0,0,.667-.663V9.189c0-.4-.2-.663-.333-.663h-1V7.2h1A1.823,1.823,0,0,1,27.2,9.189V23.773A1.959,1.959,0,0,1,25.2,25.762Z"
										transform="translate(-7.2 -5.762)"
										fill=""
									/>
									<path
										id="Path_29"
										data-name="Path 29"
										d="M12.239,10.075a.679.679,0,0,1-.719-.719V6.479a.719.719,0,0,1,1.438,0V9.356a.679.679,0,0,1-.719.719Z"
										transform="translate(-7.543 -5.76)"
										fill=""
									/>
									<path
										id="Path_30"
										data-name="Path 30"
										d="M23.759,10.075a.679.679,0,0,1-.719-.719V6.479a.719.719,0,1,1,1.438,0V9.356a.679.679,0,0,1-.719.719Z"
										transform="translate(-8.456 -5.76)"
										fill=""
									/>
									<path
										id="Path_31"
										data-name="Path 31"
										d="M14.4,7.2h7.192V8.638H14.4Z"
										transform="translate(-7.996 -5.762)"
										fill=""
									/>
									<path
										id="Path_32"
										data-name="Path 32"
										d="M8.64,11.52H25.763v1.438H8.64Z"
										transform="translate(-7.202 -6.217)"
										fill=""
									/>
									<path
										id="Path_33"
										data-name="Path 33"
										d="M24.48,14.4h1.438v1.438H24.48Z"
										transform="translate(-8.795 -6.445)"
										fill=""
									/>
									<path
										id="Path_34"
										data-name="Path 34"
										d="M21.6,14.4h1.438v1.438H21.6Z"
										transform="translate(-8.342 -6.445)"
										fill=""
									/>
									<path
										id="Path_35"
										data-name="Path 35"
										d="M18.72,14.4h1.438v1.438H18.72Z"
										transform="translate(-8.113 -6.445)"
										fill=""
									/>
									<path
										id="Path_36"
										data-name="Path 36"
										d="M15.84,14.4h1.438v1.438H15.84Z"
										transform="translate(-7.885 -6.445)"
										fill=""
									/>
									<path
										id="Path_37"
										data-name="Path 37"
										d="M12.96,14.4H14.4v1.438H12.96Z"
										transform="translate(-7.657 -6.445)"
										fill=""
									/>
									<path
										id="Path_38"
										data-name="Path 38"
										d="M24.48,17.28h1.438v1.438H24.48Z"
										transform="translate(-8.795 -6.673)"
										fill=""
									/>
									<path
										id="Path_39"
										data-name="Path 39"
										d="M21.6,17.28h1.438v1.438H21.6Z"
										transform="translate(-8.342 -6.673)"
										fill=""
									/>
									<path
										id="Path_40"
										data-name="Path 40"
										d="M18.72,17.28h1.438v1.438H18.72Z"
										transform="translate(-8.113 -6.673)"
										fill=""
									/>
									<path
										id="Path_41"
										data-name="Path 41"
										d="M15.84,17.28h1.438v1.438H15.84Z"
										transform="translate(-7.885 -6.673)"
										fill=""
									/>
									<path
										id="Path_42"
										data-name="Path 42"
										d="M12.96,17.28H14.4v1.438H12.96Z"
										transform="translate(-7.657 -6.673)"
										fill=""
									/>
									<path
										id="Path_43"
										data-name="Path 43"
										d="M10.08,17.28h1.438v1.438H10.08Z"
										transform="translate(-7.203 -6.673)"
										fill=""
									/>
									<path
										id="Path_44"
										data-name="Path 44"
										d="M24.48,20.16h1.438V21.6H24.48Z"
										transform="translate(-8.795 -6.902)"
										fill=""
									/>
									<path
										id="Path_45"
										data-name="Path 45"
										d="M21.6,20.16h1.438V21.6H21.6Z"
										transform="translate(-8.342 -6.902)"
										fill=""
									/>
									<path
										id="Path_46"
										data-name="Path 46"
										d="M18.72,20.16h1.438V21.6H18.72Z"
										transform="translate(-8.113 -6.902)"
										fill=""
									/>
									<path
										id="Path_47"
										data-name="Path 47"
										d="M15.84,20.16h1.438V21.6H15.84Z"
										transform="translate(-7.885 -6.902)"
										fill=""
									/>
									<path
										id="Path_48"
										data-name="Path 48"
										d="M12.96,20.16H14.4V21.6H12.96Z"
										transform="translate(-7.657 -6.902)"
										fill=""
									/>
									<path
										id="Path_49"
										data-name="Path 49"
										d="M10.08,20.16h1.438V21.6H10.08Z"
										transform="translate(-7.203 -6.902)"
										fill=""
									/>
									<path
										id="Path_50"
										data-name="Path 50"
										d="M21.6,23.04h1.438v1.438H21.6Z"
										transform="translate(-8.342 -7.355)"
										fill=""
									/>
									<path
										id="Path_51"
										data-name="Path 51"
										d="M18.72,23.04h1.438v1.438H18.72Z"
										transform="translate(-8.113 -7.355)"
										fill=""
									/>
									<path
										id="Path_52"
										data-name="Path 52"
										d="M15.84,23.04h1.438v1.438H15.84Z"
										transform="translate(-7.885 -7.355)"
										fill=""
									/>
									<path
										id="Path_53"
										data-name="Path 53"
										d="M12.96,23.04H14.4v1.438H12.96Z"
										transform="translate(-7.657 -7.355)"
										fill=""
									/>
									<path
										id="Path_54"
										data-name="Path 54"
										d="M10.08,23.04h1.438v1.438H10.08Z"
										transform="translate(-7.203 -7.355)"
										fill=""
									/>
								</svg>

								<div className="pl-2">2015-2018</div>
							</div>
						</div>

						<svg
							className="fill-current h-max text-blue-600 transform translate-y-2 hidden sm:flex"
							xmlns="http://www.w3.org/2000/svg"
							width="21"
							height="158.5"
							viewBox="0 0 21 158.5"
						>
							<g
								id="Group_66"
								data-name="Group 66"
								transform="translate(-297.704 -179.995)"
							>
								<line
									id="Line_1"
									data-name="Line 1"
									y2="119"
									transform="translate(308.204 199.495)"
									fill="none"
									stroke="#707070"
									strokeWidth="2"
								/>
								<circle
									id="Ellipse_1"
									data-name="Ellipse 1"
									cx="10.5"
									cy="10.5"
									r="10.5"
									transform="translate(297.704 179.995)"
									fill=""
								/>
								<g
									id="Group_27"
									data-name="Group 27"
									transform="translate(-662.296 -2865.505)"
								>
									<circle
										id="Ellipse_1-2"
										data-name="Ellipse 1"
										cx="10.5"
										cy="10.5"
										r="10.5"
										transform="translate(960 3183)"
										fill=""
									/>
								</g>
							</g>
						</svg>

						<div className="flex flex-col space-y-2 place-self-end pt-36">
							<div className=" font-semibold text-2xl transform -translate-y-16 text-gray-800 dark:text-gray-100">
								Applied Inf. Technology BSc
							</div>
							<div className=" font-medium text-gray-700 dark:text-gray-300 transform -translate-y-16">
								University of Macedonia
							</div>
							<div className=" font-medium text-gray-600 dark:text-gray-500 flex items-center transform -translate-y-16">
								<svg
									className="fill-current "
									id="calendar"
									xmlns="http://www.w3.org/2000/svg"
									width="20"
									height="20"
									viewBox="0 0 20 20"
								>
									<path
										id="Path_28"
										data-name="Path 28"
										d="M25.2,25.762H9.2a1.959,1.959,0,0,1-2-1.989V9.189A1.823,1.823,0,0,1,8.867,7.2h1V8.526h-1c-.133,0-.333.265-.333.663V23.773a.628.628,0,0,0,.667.663h16a.628.628,0,0,0,.667-.663V9.189c0-.4-.2-.663-.333-.663h-1V7.2h1A1.823,1.823,0,0,1,27.2,9.189V23.773A1.959,1.959,0,0,1,25.2,25.762Z"
										transform="translate(-7.2 -5.762)"
										fill=""
									/>
									<path
										id="Path_29"
										data-name="Path 29"
										d="M12.239,10.075a.679.679,0,0,1-.719-.719V6.479a.719.719,0,0,1,1.438,0V9.356a.679.679,0,0,1-.719.719Z"
										transform="translate(-7.543 -5.76)"
										fill=""
									/>
									<path
										id="Path_30"
										data-name="Path 30"
										d="M23.759,10.075a.679.679,0,0,1-.719-.719V6.479a.719.719,0,1,1,1.438,0V9.356a.679.679,0,0,1-.719.719Z"
										transform="translate(-8.456 -5.76)"
										fill=""
									/>
									<path
										id="Path_31"
										data-name="Path 31"
										d="M14.4,7.2h7.192V8.638H14.4Z"
										transform="translate(-7.996 -5.762)"
										fill=""
									/>
									<path
										id="Path_32"
										data-name="Path 32"
										d="M8.64,11.52H25.763v1.438H8.64Z"
										transform="translate(-7.202 -6.217)"
										fill=""
									/>
									<path
										id="Path_33"
										data-name="Path 33"
										d="M24.48,14.4h1.438v1.438H24.48Z"
										transform="translate(-8.795 -6.445)"
										fill=""
									/>
									<path
										id="Path_34"
										data-name="Path 34"
										d="M21.6,14.4h1.438v1.438H21.6Z"
										transform="translate(-8.342 -6.445)"
										fill=""
									/>
									<path
										id="Path_35"
										data-name="Path 35"
										d="M18.72,14.4h1.438v1.438H18.72Z"
										transform="translate(-8.113 -6.445)"
										fill=""
									/>
									<path
										id="Path_36"
										data-name="Path 36"
										d="M15.84,14.4h1.438v1.438H15.84Z"
										transform="translate(-7.885 -6.445)"
										fill=""
									/>
									<path
										id="Path_37"
										data-name="Path 37"
										d="M12.96,14.4H14.4v1.438H12.96Z"
										transform="translate(-7.657 -6.445)"
										fill=""
									/>
									<path
										id="Path_38"
										data-name="Path 38"
										d="M24.48,17.28h1.438v1.438H24.48Z"
										transform="translate(-8.795 -6.673)"
										fill=""
									/>
									<path
										id="Path_39"
										data-name="Path 39"
										d="M21.6,17.28h1.438v1.438H21.6Z"
										transform="translate(-8.342 -6.673)"
										fill=""
									/>
									<path
										id="Path_40"
										data-name="Path 40"
										d="M18.72,17.28h1.438v1.438H18.72Z"
										transform="translate(-8.113 -6.673)"
										fill=""
									/>
									<path
										id="Path_41"
										data-name="Path 41"
										d="M15.84,17.28h1.438v1.438H15.84Z"
										transform="translate(-7.885 -6.673)"
										fill=""
									/>
									<path
										id="Path_42"
										data-name="Path 42"
										d="M12.96,17.28H14.4v1.438H12.96Z"
										transform="translate(-7.657 -6.673)"
										fill=""
									/>
									<path
										id="Path_43"
										data-name="Path 43"
										d="M10.08,17.28h1.438v1.438H10.08Z"
										transform="translate(-7.203 -6.673)"
										fill=""
									/>
									<path
										id="Path_44"
										data-name="Path 44"
										d="M24.48,20.16h1.438V21.6H24.48Z"
										transform="translate(-8.795 -6.902)"
										fill=""
									/>
									<path
										id="Path_45"
										data-name="Path 45"
										d="M21.6,20.16h1.438V21.6H21.6Z"
										transform="translate(-8.342 -6.902)"
										fill=""
									/>
									<path
										id="Path_46"
										data-name="Path 46"
										d="M18.72,20.16h1.438V21.6H18.72Z"
										transform="translate(-8.113 -6.902)"
										fill=""
									/>
									<path
										id="Path_47"
										data-name="Path 47"
										d="M15.84,20.16h1.438V21.6H15.84Z"
										transform="translate(-7.885 -6.902)"
										fill=""
									/>
									<path
										id="Path_48"
										data-name="Path 48"
										d="M12.96,20.16H14.4V21.6H12.96Z"
										transform="translate(-7.657 -6.902)"
										fill=""
									/>
									<path
										id="Path_49"
										data-name="Path 49"
										d="M10.08,20.16h1.438V21.6H10.08Z"
										transform="translate(-7.203 -6.902)"
										fill=""
									/>
									<path
										id="Path_50"
										data-name="Path 50"
										d="M21.6,23.04h1.438v1.438H21.6Z"
										transform="translate(-8.342 -7.355)"
										fill=""
									/>
									<path
										id="Path_51"
										data-name="Path 51"
										d="M18.72,23.04h1.438v1.438H18.72Z"
										transform="translate(-8.113 -7.355)"
										fill=""
									/>
									<path
										id="Path_52"
										data-name="Path 52"
										d="M15.84,23.04h1.438v1.438H15.84Z"
										transform="translate(-7.885 -7.355)"
										fill=""
									/>
									<path
										id="Path_53"
										data-name="Path 53"
										d="M12.96,23.04H14.4v1.438H12.96Z"
										transform="translate(-7.657 -7.355)"
										fill=""
									/>
									<path
										id="Path_54"
										data-name="Path 54"
										d="M10.08,23.04h1.438v1.438H10.08Z"
										transform="translate(-7.203 -7.355)"
										fill=""
									/>
								</svg>

								<div className="pl-2">2018-Present</div>
							</div>
						</div>
					</div>
				) : (
					<div className="flex flex-row space-x-10 pt-20 h-96 justify-center items-center">
						<div className="font-semibold text-xl dark:text-gray-100">
							Looking forward to it...😃
						</div>
					</div>
				)}
			</div>
		</div>
	);
}

export default Qualifications
