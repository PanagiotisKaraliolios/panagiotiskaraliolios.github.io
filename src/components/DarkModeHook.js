import { useEffect, useState } from "react";

export default function DarkModeHook() {
	//Get the initial state from localStorage
	const [darkMode, setDarkMode] = useState(
		localStorage.getItem("darkMode") === "true"
	);

	//Set the initial state to the localStorage
	useEffect(() => {
		localStorage.setItem("darkMode", darkMode);
		if (darkMode) {
			document.body.classList.add("dark");
		} else {
			document.body.classList.remove("dark");
		}
	}, [darkMode]);

	//Set the darkMode to the opposite of the current state
	const toggleMode = () => {
		setDarkMode(!darkMode);
	};

	return [darkMode, toggleMode];
}
