import React from 'react';

import './App.css';
import About from './components/About';
import BackEndInfoCard from './components/BackEndInfoCard';
import Contact from './components/Contact';
import Discount from './components/Discount';
import Footer from './components/Footer';
import FrontEndInfoCard from './components/FrontEndInfoCard';
import Header from './components/Header';
import Hero from './components/Hero';
import Qualifications from './components/Qualifications';
import ScrollToTopBtn from './components/ScrollToTop';
import Services from './components/Services';
import Skills from './components/Skills';
import UxInfoCard from './components/UxInfoCard';

function App() {
	const a = [1, 2, 3, 4, 5, 6, 7, 8, 9];
	const b = Array.from(a);

	var args = [1, 2, 3, 4];
	Math.max(...args);
	for (var i = 0; i < 10; i++) {
		console.log(i);
	}
	var indexMap = a.reduce(function (memo, item, index) {
		memo[item] = index;
		return memo;
	}, {});

	var foo = Array.from(b, function (node) {
		var i = indexMap[node.id];
		if (node.tagName === 'DIV') {
			console.log('====================================');
			console.log('i', i);
			console.log('====================================');
		}
		i.toString();
		return false;
	});

	switch (foo) {
		case 1:
			break;
		case 2:
			break;
		default:
			break;
	}
	return (
		<div className='flex flex-col transition duration-500 bg-gray-100 select-none App font font-Poppins dark:bg-indigo-1000'>
			{/* Header */}

			<Header />

			{/* Hero Section */}

			<Hero />

			{/* About Section */}

			<About />

			{/* Skills Section */}

			<Skills />

			{/* Qualifications Section */}

			<Qualifications />

			{/* Services Section */}

			<Services />

			<UxInfoCard />

			<FrontEndInfoCard />

			<BackEndInfoCard />

			{/* Discount Section */}

			<Discount />

			{/* Contact Me Section */}

			<Contact />

			{/* Footer */}

			<Footer />

			{/* Scroll up button */}

			<ScrollToTopBtn />
		</div>
	);
}

export default App;
