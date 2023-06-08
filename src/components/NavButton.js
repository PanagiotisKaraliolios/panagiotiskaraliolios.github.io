import PropTypes from 'prop-types';

function HeaderButton({ Text }) {
	const id = { Text }.Text;

	const scrollToSection = () => {
		window.document.getElementById(id).scrollIntoView({
			block: 'center',
			behavior: 'smooth'
		});
	};

	return (
		<div
			onClick={scrollToSection}
			className='flex items-center font-medium text-gray-700 cursor-pointer rounded-b-md active:border-b-2 active:border-blue-600 hover:text-blue-600 dark:text-gray-300 dark:hover:text-blue-500 dark:active:border-blu-500'>
			{Text}
		</div>
	);
}

HeaderButton.propTypes = {
	Text: PropTypes.string.isRequired
};
export default HeaderButton;
