import { Fade } from 'react-awesome-reveal';

function Services() {
	return (
		<div
			id='Services'
			className='flex flex-col items-center justify-center p-10 my-20 space-y-32  sm:p-10'>
			<div className='flex flex-col items-center justify-center space-y-2 '>
				<div className='text-3xl font-semibold text-gray-800  dark:text-gray-100'>Services</div>

				<div className='font-medium text-gray-600  dark:text-gray-500'>What I offer</div>
			</div>

			<div className='flex flex-col justify-center space-y-20  lg:flex-row lg:space-y-0 lg:space-x-20'>
				<Fade
					cascade
					delay={200}
					triggerOnce
					direction='up'
					fraction={0.5}>
					<div className='flex items-end py-5 pl-10 pr-20 bg-indigo-100 shadow-lg dark:bg-indigo-900 rounded-xl h-80'>
						<div className='space-y-4 '>
							<svg
								className=' fill-blue-600'
								xmlns='http://www.w3.org/2000/svg'
								width='53.747'
								height='42.997'
								viewBox='0 0 53.747 42.997'>
								<path
									id='view-quilt'
									d='M1.125,4.5v43H54.872V4.5ZM51.289,24.207H20.832V8.083H51.289ZM20.832,27.79H34.27V43.914H20.832ZM4.708,8.083H17.249V43.914H4.708ZM37.853,43.914V27.79H51.291V43.914Z'
									transform='translate(-1.125 -4.5)'
									fill=''
								/>
							</svg>

							<div className='text-xl font-semibold text-gray-800  dark:text-gray-100'>
								<div className=''>Ui/Ux</div>
								<div className=''>Design</div>
							</div>

							<button
								className='flex items-center justify-center space-x-3 border border-transparent'
								onClick={() => {
									window.document.getElementById('UxInfoCard').style.visibility = 'visible';
									window.document.getElementById('UxInfoCard').style.opacity = '100';
								}}>
								<div className='font-medium text-gray-600  dark:text-gray-500'>Learn More</div>

								<svg
									className=' fill-blue-600'
									xmlns='http://www.w3.org/2000/svg'
									width='18.778'
									height='16.437'
									viewBox='0 0 18.778 16.437'>
									<path
										id='arrow-downward-fill'
										d='M23.663,16.987a1.174,1.174,0,0,0-1.655-.153L16.89,21.1V7.174a1.174,1.174,0,0,0-2.348,0V21.1L9.425,16.834a1.175,1.175,0,1,0-1.5,1.808l7.043,5.869.176.106.153.082a1.174,1.174,0,0,0,.845,0l.153-.082.176-.106,7.043-5.869a1.174,1.174,0,0,0,.153-1.655Z'
										transform='translate(-6 23.935) rotate(-90)'
										fill=''
									/>
								</svg>
							</button>
						</div>
					</div>

					<div className='flex items-end py-5 pl-10 pr-20 bg-indigo-100 shadow-lg dark:bg-indigo-900 rounded-xl h-80'>
						<div className='space-y-4 '>
							<svg
								className=' fill-blue-600'
								xmlns='http://www.w3.org/2000/svg'
								width='53.747'
								height='42.997'
								viewBox='0 0 53.747 42.997'>
								<path
									id='Path_55'
									data-name='Path 55'
									d='M18.976,9.525a1.792,1.792,0,0,1,0,2.537L7.7,23.333,18.978,34.607a1.794,1.794,0,1,1-2.537,2.537L3.9,24.6a1.792,1.792,0,0,1,0-2.537L16.441,9.525a1.792,1.792,0,0,1,2.537,0Zm15.379,0a1.792,1.792,0,0,0,0,2.537L45.632,23.333,34.355,34.607a1.794,1.794,0,0,0,2.537,2.537L49.433,24.6a1.792,1.792,0,0,0,0-2.537L36.892,9.525a1.792,1.792,0,0,0-2.537,0Z'
									transform='translate(-3.373 -8.998)'
									fill=''
									fillRule='evenodd'
								/>
							</svg>

							<div className='text-xl font-semibold text-gray-800  dark:text-gray-100'>
								<div className=''>Frontend</div>
								<div className=''>Development</div>
							</div>

							<button
								className='flex items-center justify-center space-x-3'
								onClick={() => {
									window.document.getElementById('FrontEndInfoCard').style.visibility = 'visible';
									window.document.getElementById('FrontEndInfoCard').style.opacity = '100';
								}}>
								<div className='font-medium text-gray-600  dark:text-gray-500'>Learn More</div>

								<svg
									className=' fill-blue-600'
									xmlns='http://www.w3.org/2000/svg'
									width='18.778'
									height='16.437'
									viewBox='0 0 18.778 16.437'>
									<path
										id='arrow-downward-fill'
										d='M23.663,16.987a1.174,1.174,0,0,0-1.655-.153L16.89,21.1V7.174a1.174,1.174,0,0,0-2.348,0V21.1L9.425,16.834a1.175,1.175,0,1,0-1.5,1.808l7.043,5.869.176.106.153.082a1.174,1.174,0,0,0,.845,0l.153-.082.176-.106,7.043-5.869a1.174,1.174,0,0,0,.153-1.655Z'
										transform='translate(-6 23.935) rotate(-90)'
										fill=''
									/>
								</svg>
							</button>
						</div>
					</div>

					<div className='flex items-end py-5 pl-10 pr-20 bg-indigo-100 shadow-lg dark:bg-indigo-900 rounded-xl h-80'>
						<div className='space-y-4 '>
							<svg
								className=' fill-blue-600'
								id='server-line'
								xmlns='http://www.w3.org/2000/svg'
								width='28.665'
								height='45.864'
								viewBox='0 0 28.665 45.864'>
								<path
									id='Path_56'
									data-name='Path 56'
									d='M19.469,24.3a3.949,3.949,0,1,0,3.949,3.933A3.949,3.949,0,0,0,19.469,24.3Zm0,5.733a1.8,1.8,0,1,1,1.8-1.784A1.8,1.8,0,0,1,19.469,30.033Z'
									transform='translate(-5.137 8.665)'
									fill=''
								/>
								<path
									id='Path_57'
									data-name='Path 57'
									d='M35.515,3.6H11.15A2.15,2.15,0,0,0,9,5.75V49.464H37.665V5.75A2.15,2.15,0,0,0,35.515,3.6Zm-.717,43H11.867V6.466H34.8Z'
									transform='translate(-9 -3.6)'
									fill=''
								/>
								<path
									id='Path_58'
									data-name='Path 58'
									d='M12.6,7.2H29.8V9.493H12.6Z'
									transform='translate(-6.867 -1.467)'
									fill=''
								/>
								<path
									id='Path_59'
									data-name='Path 59'
									d='M12.6,10.8H29.8v2.293H12.6Z'
									transform='translate(-6.867 0.666)'
									fill=''
								/>
							</svg>

							<div className='text-xl font-semibold text-gray-800  dark:text-gray-100'>
								<div className=''>DB and Server</div>
								<div className=''>Setup</div>
							</div>

							<button
								className='flex items-center justify-center space-x-3'
								onClick={() => {
									window.document.getElementById('BackEndInfoCard').style.visibility = 'visible';
									window.document.getElementById('BackEndInfoCard').style.opacity = '100';
								}}>
								<div className='font-medium text-gray-600  dark:text-gray-500'>Learn More</div>

								<svg
									className=' fill-blue-600'
									xmlns='http://www.w3.org/2000/svg'
									width='18.778'
									height='16.437'
									viewBox='0 0 18.778 16.437'>
									<path
										id='arrow-downward-fill'
										d='M23.663,16.987a1.174,1.174,0,0,0-1.655-.153L16.89,21.1V7.174a1.174,1.174,0,0,0-2.348,0V21.1L9.425,16.834a1.175,1.175,0,1,0-1.5,1.808l7.043,5.869.176.106.153.082a1.174,1.174,0,0,0,.845,0l.153-.082.176-.106,7.043-5.869a1.174,1.174,0,0,0,.153-1.655Z'
										transform='translate(-6 23.935) rotate(-90)'
										fill=''
									/>
								</svg>
							</button>
						</div>
					</div>
				</Fade>
			</div>
		</div>
	);
}

export default Services;
