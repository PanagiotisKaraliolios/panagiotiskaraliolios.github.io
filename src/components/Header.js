import Navigation from './Navigation';
import SmallDevicesNav from './SmallDevicesNav';
import sun from './assets/svgs/sunny-outline.svg';
import moon from './assets/svgs/moon.svg';

import DarkModeHook from './DarkModeHook';

function Header() {
	const [darkMode, toggleMode] = DarkModeHook();

	return (
		<div className='fixed bottom-0 z-40 flex justify-around w-screen p-5 bg-gray-100 sm:w-auto dark:bg-indigo-1000 sm:top-0 sm:sticky sm:p-8 shadow-xlupper sm:shadow-xl'>
			{/* Left */}

			<div className='flex text-2xl font-medium text-blue-600 transition duration-500 ease-in-out sm:transform hover:-rotate-12 sm:cursor-pointer dark:text-blue-500 2xl:text-4xl'>
				Panos
			</div>

			{/* Right */}

			<div className='flex space-x-6'>
				<Navigation />

				<button
					onClick={() => toggleMode()}
					className=' w-7 2xl:w-12'>
					<img
						src={darkMode ? sun : moon}
						alt='sun'
					/>
				</button>

				<button
					className=' sm:hidden w-7 2xl:w-12'
					onClick={() => {
						window.document.getElementById('nav').style.bottom = '0';
						window.document.getElementById('nav').style.opacity = '100';
					}}>
					{!darkMode ? (
						<svg
							id='menu-grid-o'
							xmlns='http://www.w3.org/2000/svg'
							width='35'
							height='35'
							viewBox='0 0 35 35'>
							<path
								id='Path_73'
								data-name='Path 73'
								d='M14.75,10.375A4.375,4.375,0,1,1,10.375,6,4.375,4.375,0,0,1,14.75,10.375Z'
								transform='translate(-6 -6)'
								fill='#707070'
							/>
							<path
								id='Path_74'
								data-name='Path 74'
								d='M14.75,19.375A4.375,4.375,0,1,1,10.375,15,4.375,4.375,0,0,1,14.75,19.375Z'
								transform='translate(-6 -1.875)'
								fill='#707070'
							/>
							<path
								id='Path_75'
								data-name='Path 75'
								d='M10.375,32.75A4.375,4.375,0,1,0,6,28.375,4.375,4.375,0,0,0,10.375,32.75Z'
								transform='translate(-6 2.25)'
								fill='#707070'
							/>
							<path
								id='Path_76'
								data-name='Path 76'
								d='M23.75,10.375A4.375,4.375,0,1,1,19.375,6,4.375,4.375,0,0,1,23.75,10.375Z'
								transform='translate(-1.875 -6)'
								fill='#707070'
							/>
							<path
								id='Path_77'
								data-name='Path 77'
								d='M19.375,23.75A4.375,4.375,0,1,0,15,19.375,4.375,4.375,0,0,0,19.375,23.75Z'
								transform='translate(-1.875 -1.875)'
								fill='#707070'
							/>
							<path
								id='Path_78'
								data-name='Path 78'
								d='M23.75,28.375A4.375,4.375,0,1,1,19.375,24,4.375,4.375,0,0,1,23.75,28.375Z'
								transform='translate(-1.875 2.25)'
								fill='#707070'
							/>
							<path
								id='Path_79'
								data-name='Path 79'
								d='M28.375,14.75A4.375,4.375,0,1,0,24,10.375,4.375,4.375,0,0,0,28.375,14.75Z'
								transform='translate(2.25 -6)'
								fill='#707070'
							/>
							<path
								id='Path_80'
								data-name='Path 80'
								d='M32.75,19.375A4.375,4.375,0,1,1,28.375,15,4.375,4.375,0,0,1,32.75,19.375Z'
								transform='translate(2.25 -1.875)'
								fill='#707070'
							/>
							<path
								id='Path_81'
								data-name='Path 81'
								d='M28.375,32.75A4.375,4.375,0,1,0,24,28.375,4.375,4.375,0,0,0,28.375,32.75Z'
								transform='translate(2.25 2.25)'
								fill='#707070'
							/>
						</svg>
					) : (
						<svg
							className=' fill-gray-300'
							id='menu-grid-o'
							xmlns='http://www.w3.org/2000/svg'
							width='35'
							height='35'
							viewBox='0 0 35 35'>
							<path
								id='Path_73'
								data-name='Path 73'
								d='M14.75,10.375A4.375,4.375,0,1,1,10.375,6,4.375,4.375,0,0,1,14.75,10.375Z'
								transform='translate(-6 -6)'
								fill=''
							/>
							<path
								id='Path_74'
								data-name='Path 74'
								d='M14.75,19.375A4.375,4.375,0,1,1,10.375,15,4.375,4.375,0,0,1,14.75,19.375Z'
								transform='translate(-6 -1.875)'
								fill=''
							/>
							<path
								id='Path_75'
								data-name='Path 75'
								d='M10.375,32.75A4.375,4.375,0,1,0,6,28.375,4.375,4.375,0,0,0,10.375,32.75Z'
								transform='translate(-6 2.25)'
								fill=''
							/>
							<path
								id='Path_76'
								data-name='Path 76'
								d='M23.75,10.375A4.375,4.375,0,1,1,19.375,6,4.375,4.375,0,0,1,23.75,10.375Z'
								transform='translate(-1.875 -6)'
								fill=''
							/>
							<path
								id='Path_77'
								data-name='Path 77'
								d='M19.375,23.75A4.375,4.375,0,1,0,15,19.375,4.375,4.375,0,0,0,19.375,23.75Z'
								transform='translate(-1.875 -1.875)'
								fill=''
							/>
							<path
								id='Path_78'
								data-name='Path 78'
								d='M23.75,28.375A4.375,4.375,0,1,1,19.375,24,4.375,4.375,0,0,1,23.75,28.375Z'
								transform='translate(-1.875 2.25)'
								fill=''
							/>
							<path
								id='Path_79'
								data-name='Path 79'
								d='M28.375,14.75A4.375,4.375,0,1,0,24,10.375,4.375,4.375,0,0,0,28.375,14.75Z'
								transform='translate(2.25 -6)'
								fill=''
							/>
							<path
								id='Path_80'
								data-name='Path 80'
								d='M32.75,19.375A4.375,4.375,0,1,1,28.375,15,4.375,4.375,0,0,1,32.75,19.375Z'
								transform='translate(2.25 -1.875)'
								fill=''
							/>
							<path
								id='Path_81'
								data-name='Path 81'
								d='M28.375,32.75A4.375,4.375,0,1,0,24,28.375,4.375,4.375,0,0,0,28.375,32.75Z'
								transform='translate(2.25 2.25)'
								fill=''
							/>
						</svg>
					)}
				</button>
			</div>

			{/* Small Devices Nav */}
			<SmallDevicesNav />
		</div>
	);
}

export default Header;
