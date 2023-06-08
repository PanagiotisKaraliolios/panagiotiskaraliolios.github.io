/* eslint-disable no-unused-vars */
import React from 'react';
import SmallNavButton from './SmallNavButton';

function SmallDevicesNav() {
	return (
		<div
			id='nav'
			className=' grid sm:hidden grid-cols-3 p-6 rounded-t-3xl bg-white dark:bg-indigo-900 z-50 fixed w-screen shadow-xlupper transition-all opacity-0 -bottom-full '>
			<SmallNavButton
				Text={'Home'}
				Icon={
					<svg
						className=' stroke-black dark:stroke-gray-100 w-12 h-12'
						width='24'
						height='24'
						fill='none'
						viewBox='0 0 24 24'>
						<path
							stroke='currentColor'
							strokeLinecap='round'
							strokeLinejoin='round'
							strokeWidth='1.5'
							d='M6.75024 19.2502H17.2502C18.3548 19.2502 19.2502 18.3548 19.2502 17.2502V9.75025L12.0002 4.75024L4.75024 9.75025V17.2502C4.75024 18.3548 5.64568 19.2502 6.75024 19.2502Z'
						/>
						<path
							stroke='currentColor'
							strokeLinecap='round'
							strokeLinejoin='round'
							strokeWidth='1.5'
							d='M9.74963 15.7493C9.74963 14.6447 10.6451 13.7493 11.7496 13.7493H12.2496C13.3542 13.7493 14.2496 14.6447 14.2496 15.7493V19.2493H9.74963V15.7493Z'
						/>
					</svg>
				}
			/>

			<SmallNavButton
				Text={'About'}
				Icon={
					<svg
						className=' stroke-black dark:stroke-gray-100 w-12 h-12'
						width='24'
						height='24'
						fill='none'
						viewBox='0 0 24 24'>
						<circle
							cx='12'
							cy='8'
							r='3.25'
							stroke='currentColor'
							strokeLinecap='round'
							strokeLinejoin='round'
							strokeWidth='1.5'
						/>
						<path
							stroke='currentColor'
							strokeLinecap='round'
							strokeLinejoin='round'
							strokeWidth='1.5'
							d='M6.8475 19.25H17.1525C18.2944 19.25 19.174 18.2681 18.6408 17.2584C17.8563 15.7731 16.068 14 12 14C7.93201 14 6.14367 15.7731 5.35924 17.2584C4.82597 18.2681 5.70558 19.25 6.8475 19.25Z'
						/>
					</svg>
				}
			/>

			<SmallNavButton
				Text={'Skills'}
				Icon={
					<svg
						className=' stroke-black dark:stroke-gray-100 w-12 h-12'
						width='24'
						height='24'
						viewBox='0 0 24 24'
						fill='none'
						xmlns='http://www.w3.org/2000/svg'>
						<path
							d='M12.75 4.75H7.75C6.64543 4.75 5.75 5.64543 5.75 6.75V17.25C5.75 18.3546 6.64543 19.25 7.75 19.25H16.25C17.3546 19.25 18.25 18.3546 18.25 17.25V10.25M12.75 4.75V8.25C12.75 9.35457 13.6454 10.25 14.75 10.25H18.25M12.75 4.75L18.25 10.25'
							stroke='currentColor'
							strokeWidth='1.5'
							strokeLinecap='round'
							strokeLinejoin='round'
						/>
						<path
							d='M8.75 15.75H15.25'
							stroke='currentColor'
							strokeWidth='1.5'
							strokeLinecap='round'
							strokeLinejoin='round'
						/>
						<path
							d='M8.75 12.75H11.25'
							stroke='currentColor'
							strokeWidth='1.5'
							strokeLinecap='round'
							strokeLinejoin='round'
						/>
					</svg>
				}
			/>

			<SmallNavButton
				Text={'Services'}
				Icon={
					<svg
						className=' stroke-black dark:stroke-gray-100 w-12 h-12'
						width='24'
						height='24'
						viewBox='0 0 24 24'
						fill='none'
						xmlns='http://www.w3.org/2000/svg'>
						<path
							d='M4.75 9.75C4.75 8.64543 5.64543 7.75 6.75 7.75H17.25C18.3546 7.75 19.25 8.64543 19.25 9.75V17.25C19.25 18.3546 18.3546 19.25 17.25 19.25H6.75C5.64543 19.25 4.75 18.3546 4.75 17.25V9.75Z'
							stroke='currentColor'
							strokeWidth='1.5'
							strokeLinecap='round'
							strokeLinejoin='round'
						/>
						<path
							d='M8.75 18.75V6.75C8.75 5.64543 9.64543 4.75 10.75 4.75H13.25C14.3546 4.75 15.25 5.64543 15.25 6.75V18.75'
							stroke='currentColor'
							strokeWidth='1.5'
							strokeLinecap='round'
							strokeLinejoin='round'
						/>
					</svg>
				}
			/>

			<SmallNavButton
				Text={'Contact'}
				Icon={
					<svg
						className=' stroke-black dark:stroke-gray-100 w-12 h-12'
						width='24'
						height='24'
						viewBox='0 0 24 24'
						fill='none'
						xmlns='http://www.w3.org/2000/svg'>
						<path
							d='M9.875 13.625L15 19.25L19.25 4.75L4.75 10L9.875 13.625ZM9.875 13.625L12.25 11.75'
							stroke='currentColor'
							strokeWidth='1.5'
							strokeLinecap='round'
							strokeLinejoin='round'
						/>
					</svg>
				}
			/>

			<button
				className='flex justify-center content-center'
				onClick={() => {
					window.document.getElementById('nav').style.bottom = '-100%';
					window.document.getElementById('nav').style.opacity = '0';
				}}>
				<svg
					className=' self-center fill-blue-600 dark:fill-blue-500'
					xmlns='http://www.w3.org/2000/svg'
					width='18.004'
					height='18.003'
					viewBox='0 0 18.004 18.003'>
					<g
						id='x'
						transform='translate(-8.998 -8.998)'>
						<path
							id='Path_88'
							data-name='Path 88'
							d='M26.671,9.329a1.125,1.125,0,0,1,0,1.593l-15.75,15.75a1.126,1.126,0,0,1-1.593-1.593l15.75-15.75a1.125,1.125,0,0,1,1.593,0Z'
							fill=''
							fillRule='evenodd'
						/>
						<path
							id='Path_89'
							data-name='Path 89'
							d='M9.329,9.329a1.125,1.125,0,0,0,0,1.593l15.75,15.75a1.126,1.126,0,0,0,1.593-1.593L10.922,9.329a1.125,1.125,0,0,0-1.593,0Z'
							fill=''
							fillRule='evenodd'
						/>
					</g>
				</svg>
			</button>
		</div>
	);
}

export default SmallDevicesNav;
