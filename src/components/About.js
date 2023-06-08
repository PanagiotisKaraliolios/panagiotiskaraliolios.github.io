/* eslint-disable no-unused-vars */
import React from 'react';
import AboutImage from './assets/svgs/portrait.svg';
import MyPDF from './assets/files/Karaliolios_Panagiotis-CV.pdf';
import { Fade } from 'react-awesome-reveal';

function About() {
	return (
		<div
			id='About'
			className='flex flex-col items-center justify-center p-10 space-y-32 sm:p-10 sm:my-20'>
			<div className='flex flex-col items-center justify-center space-y-2 '>
				<div className='text-3xl font-semibold text-gray-800 dark:text-gray-100'>About Me</div>

				<div className='font-medium text-gray-600 dark:text-gray-500'>My introduction</div>
			</div>

			<div className='flex flex-col items-center justify-center space-y-10 md:flex-row md:space-y-0 md:space-x-20 lg:space-x-40'>
				<Fade
					delay={200}
					triggerOnce
					duration={1000}
					fraction={0.5}>
					<img
						className='flex w-72 lg:w-auto'
						src={AboutImage}
						alt=''
					/>
				</Fade>
				<div className='flex flex-col items-center justify-center max-w-md space-y-10 '>
					<div className='break-words dark:text-gray-400 '>
						Current undergraduate student in applied information technology with dozens of classroom hours
						in software engineering and system development related courses. Seeking to utilize my skills and
						gain further experience.
					</div>

					<div className='flex flex-col justify-center space-y-10 font-semibold md:flex-row md:items-start md:space-y-0 md:space-x-10'>
						<Fade
							cascade
							delay={200}
							damping={0.5}
							triggerOnce
							duration={1000}
							direction='up'
							fraction={0.5}>
							<div className='flex flex-col items-center justify-center '>
								<div className='text-3xl text-gray-700 dark:text-white'>03+</div>

								<div className='items-center self-center justify-center font-normal text-center dark:text-gray-400 max-w-min'>
									Years of experience
								</div>
							</div>

							<div className='flex flex-col items-center justify-center '>
								<div className='text-3xl text-gray-700 dark:text-white'>02</div>
								<div className='items-center self-center justify-center font-normal text-center dark:text-gray-400 max-w-min'>
									Completed Projects
								</div>
							</div>

							<div className='flex flex-col items-center justify-center '>
								<div className='text-3xl text-gray-700 dark:text-white'>04+</div>
								<div className='items-center self-center justify-center font-normal text-center dark:text-gray-400 max-w-min'>
									Years of continuous development
								</div>
							</div>
						</Fade>
					</div>

					<a
						href={MyPDF}
						/**
						 * Download="Karaliolios_Panagiotis-CV.pdf"
						 * Open the PDF in a new tab
						 */
						target='_blank'
						rel='noopener noreferrer'
						className='flex items-center p-3 space-x-2 text-white bg-blue-600 w-max justify-evenly rounded-2xl md:self-start'>
						<div>Open Resume</div>

						<svg
							xmlns='http://www.w3.org/2000/svg'
							width='34.462'
							height='28'
							viewBox='0 0 34.462 28'>
							<g
								id='download'
								transform='translate(0 -2.25)'>
								<path
									id='Path_13'
									data-name='Path 13'
									d='M1.077,18a1.077,1.077,0,0,1,1.077,1.077v7.538a2.154,2.154,0,0,0,2.154,2.154H30.154a2.154,2.154,0,0,0,2.154-2.154V19.077a1.077,1.077,0,1,1,2.154,0v7.538a4.308,4.308,0,0,1-4.308,4.308H4.308A4.308,4.308,0,0,1,0,26.615V19.077A1.077,1.077,0,0,1,1.077,18Z'
									transform='translate(0 -0.673)'
									fill='#f8f8f8'
									fillRule='evenodd'
								/>
								<path
									id='Path_14'
									data-name='Path 14'
									d='M11.236,16.861a1.077,1.077,0,0,1,1.523,0L17.7,21.8l4.939-4.939a1.077,1.077,0,1,1,1.523,1.523l-5.7,5.7a1.077,1.077,0,0,1-1.525,0l-5.7-5.7a1.077,1.077,0,0,1,0-1.523Z'
									transform='translate(-0.467 -0.611)'
									fill='#f8f8f8'
									fillRule='evenodd'
								/>
								<path
									id='Path_15'
									data-name='Path 15'
									d='M17.952,2.25a1.077,1.077,0,0,1,1.077,1.077V20.558a1.077,1.077,0,0,1-2.154,0V3.327A1.077,1.077,0,0,1,17.952,2.25Z'
									transform='translate(-0.721)'
									fill='#f8f8f8'
									fillRule='evenodd'
								/>
							</g>
						</svg>
					</a>
				</div>
			</div>
		</div>
	);
}

export default About;
