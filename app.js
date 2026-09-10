document.addEventListener("DOMContentLoaded", () => {
	const themeToggle = document.querySelector(".theme-toggle");
	const savedTheme = localStorage.getItem("theme");

	const setTheme = (isDark) => {
		document.body.classList.toggle("dark-mode", isDark);
		themeToggle.textContent = isDark ? "Light mode" : "Dark mode";
		themeToggle.setAttribute("aria-label", isDark ? "Disable dark mode" : "Enable dark mode");
		themeToggle.setAttribute("aria-pressed", String(isDark));
	};

	setTheme(savedTheme === "dark");

	themeToggle.addEventListener("click", () => {
		const isDark = !document.body.classList.contains("dark-mode");
		setTheme(isDark);
		localStorage.setItem("theme", isDark ? "dark" : "light");
	});
});
