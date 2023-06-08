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
			className='flex flex-col items-center justify-center m-5 text-black cursor-pointer round dark:text-gray-100'>
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
