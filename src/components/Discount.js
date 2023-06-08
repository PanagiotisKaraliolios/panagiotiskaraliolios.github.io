import DiscountSVG from './assets/svgs/Discount.svg';
import React from 'react';

function Discount() {
	const scrollToSection = () => {
		window.document.getElementById('Contact').scrollIntoView({
			block: 'center',
			behavior: 'smooth'
		});
	};

	return (
		<div className='flex items-center justify-center '>
			<div className='flex flex-col items-center justify-center w-screen px-10 bg-blue-600 sm:flex-row sm:max-w-max sm:rounded-3xl sm:mx-3'>
				<div className='flex flex-col items-center justify-center p-10 space-y-5 sm:items-start'>
					<div className='text-xl font-semibold text-center text-white sm:text-left'>
						You have a new project in mind ?
					</div>

					<div className='text-center text-white sm:text-left'>
						Contact me now and get 30% discount on your new project.
					</div>

					<button
						onClick={scrollToSection}
						className='z-20 flex items-center p-3 space-x-2 text-blue-600 bg-white w-max justify-evenly rounded-2xl'>
						<div>Contact Me</div>

						<svg
							className='fill-blue-600'
							xmlns='http://www.w3.org/2000/svg'
							width='27.032'
							height='26.995'
							viewBox='0 0 27.032 26.995'>
							<path
								id='send-filled'
								d='M30.881,17,6.131,4.624a1.114,1.114,0,0,0-1.586,1.26L7.526,16.875H20.25v2.25L7.526,19.86,4.5,30.082a1.145,1.145,0,0,0,1.631,1.294l14.994-7.5L30.881,19a1.125,1.125,0,0,0,0-2Z'
								transform='translate(-4.461 -4.505)'
								fill=''
							/>
						</svg>
					</button>
				</div>

				<img
					className='w-auto '
					src={DiscountSVG}
					alt='discount'
				/>
			</div>
		</div>
	);
}

export default Discount;
