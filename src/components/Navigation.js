/* eslint-disable no-unused-vars */
import React from 'react';
import HeaderButton from './NavButton';

function Navigation() {
	return (
		<div className=' hidden sm:flex'>
			<div className='flex space-x-6 2xl:text-xl'>
				<HeaderButton Text={'Home'} />
				<HeaderButton Text={'About'} />
				<HeaderButton Text={'Skills'} />
				<HeaderButton Text={'Services'} />
				<HeaderButton Text={'Contact'} />
			</div>
		</div>
	);
}

export default Navigation;
