import React from 'react';

function BackEndInfoCard() {
	return (
		<div
			id='BackEndInfoCard'
			className='fixed z-50 flex items-center content-center justify-center invisible w-full h-full p-3 transition-all duration-500 bg-gray-500 opacity-0 cursor-pointer bg-opacity-30 backdrop-filter backdrop-blur-sm '
			onClick={() => {
				window.document.getElementById('BackEndInfoCard').style.visibility = 'hidden';
				window.document.getElementById('BackEndInfoCard').style.opacity = '0';
			}}>
			<div className='p-5 space-y-3 bg-gray-100 dark:bg-indigo-900 sm:px-20 rounded-2xl'>
				<div className='text-xl font-semibold text-gray-800 dark:text-gray-100'>
					<div className=''>DB and Server</div>
					<div className=''>Setup</div>
				</div>

				<div className='flex items-center space-x-3'>
					<svg
						className='min-w-min fill-blue-500'
						id='check2-circle'
						xmlns='http://www.w3.org/2000/svg'
						width='20.903'
						height='19.41'
						viewBox='0 0 20.903 19.41'>
						<path
							id='Path_60'
							data-name='Path 60'
							d='M26.329,5.842a.746.746,0,0,1,0,1.057L15.878,17.351a.746.746,0,0,1-1.057,0l-4.479-4.479A.747.747,0,0,1,11.4,11.814l3.951,3.951,9.923-9.924a.747.747,0,0,1,1.057,0Z'
							transform='translate(-5.645 -4.13)'
							fill=''
							fillRule='evenodd'
						/>
						<path
							id='Path_61'
							data-name='Path 61'
							d='M13.079,4.867a8.212,8.212,0,1,0,8.212,8.212.747.747,0,1,1,1.493,0,9.7,9.7,0,1,1-4.853-8.406.747.747,0,1,1-.747,1.291A8.17,8.17,0,0,0,13.079,4.867Z'
							transform='translate(-3.375 -3.373)'
							fill=''
							fillRule='evenodd'
						/>
					</svg>

					<div className='text-gray-800 dark:text-gray-100'>I implement server side functionality.</div>
				</div>
				<div className='flex items-center space-x-3'>
					<svg
						className=' min-w-min fill-blue-500'
						id='check2-circle'
						xmlns='http://www.w3.org/2000/svg'
						width='20.903'
						height='19.41'
						viewBox='0 0 20.903 19.41'>
						<path
							id='Path_60'
							data-name='Path 60'
							d='M26.329,5.842a.746.746,0,0,1,0,1.057L15.878,17.351a.746.746,0,0,1-1.057,0l-4.479-4.479A.747.747,0,0,1,11.4,11.814l3.951,3.951,9.923-9.924a.747.747,0,0,1,1.057,0Z'
							transform='translate(-5.645 -4.13)'
							fill=''
							fillRule='evenodd'
						/>
						<path
							id='Path_61'
							data-name='Path 61'
							d='M13.079,4.867a8.212,8.212,0,1,0,8.212,8.212.747.747,0,1,1,1.493,0,9.7,9.7,0,1,1-4.853-8.406.747.747,0,1,1-.747,1.291A8.17,8.17,0,0,0,13.079,4.867Z'
							transform='translate(-3.375 -3.373)'
							fill=''
							fillRule='evenodd'
						/>
					</svg>

					<div className='text-gray-800 dark:text-gray-100'>I create DBs to store data.</div>
				</div>
				<div className='flex items-center space-x-3'>
					<svg
						className=' min-w-min fill-blue-500'
						id='check2-circle'
						xmlns='http://www.w3.org/2000/svg'
						width='20.903'
						height='19.41'
						viewBox='0 0 20.903 19.41'>
						<path
							id='Path_60'
							data-name='Path 60'
							d='M26.329,5.842a.746.746,0,0,1,0,1.057L15.878,17.351a.746.746,0,0,1-1.057,0l-4.479-4.479A.747.747,0,0,1,11.4,11.814l3.951,3.951,9.923-9.924a.747.747,0,0,1,1.057,0Z'
							transform='translate(-5.645 -4.13)'
							fill=''
							fillRule='evenodd'
						/>
						<path
							id='Path_61'
							data-name='Path 61'
							d='M13.079,4.867a8.212,8.212,0,1,0,8.212,8.212.747.747,0,1,1,1.493,0,9.7,9.7,0,1,1-4.853-8.406.747.747,0,1,1-.747,1.291A8.17,8.17,0,0,0,13.079,4.867Z'
							transform='translate(-3.375 -3.373)'
							fill=''
							fillRule='evenodd'
						/>
					</svg>

					<div className='text-gray-800 dark:text-gray-100'>I maintain or add functionality if needed.</div>
				</div>
			</div>
		</div>
	);
}

export default BackEndInfoCard;
