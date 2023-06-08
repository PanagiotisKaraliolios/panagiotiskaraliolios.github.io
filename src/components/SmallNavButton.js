/* eslint-disable no-unused-vars */
import React from 'react';
import PropTypes from 'prop-types';

function SmallNavButton({ Text, Icon }) {
	const id = { Text }.Text;

	const scrollToSection = () => {
		console.log(id);
		window.document.getElementById(id).scrollIntoView({
			block: 'start',
			behavior: 'smooth'
		});
		window.document.getElementById('nav').style.bottom = '-100%';
		window.document.getElementById('nav').style.opacity = '0';
	};

	return (
		<div
			onClick={scrollToSection}
			className=' round cursor-pointer flex flex-col m-5 justify-center items-center text-black  dark:text-gray-100'>
			{Icon}
			{Text}
		</div>
	);
}

SmallNavButton.propTypes = {
	Text: PropTypes.string.isRequired,
	Icon: PropTypes.object.isRequired
};

export default SmallNavButton;
