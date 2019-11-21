const hamburgerIcon = document.getElementById("hamburger");
const nav = document.getElementById("navigation");

// Hamburger icon animation toggle.
hamburgerIcon.addEventListener("click", () => {
	hamburgerIcon.classList.toggle('-open');
	nav.classList.toggle('-open');
}, false);