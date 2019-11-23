const header = document.getElementById("js-header");
const hamburgerIcon = document.getElementById("js-hamburger");
const nav = document.getElementById("js-navigation");
const logo = document.getElementById("js-logo");

// Toggle Hamburger icon when open
function toggleHamburger() {
	hamburgerIcon.classList.toggle('-open');
	header.removeChild(hamburgerIcon);
	header.removeChild(logo);
	nav.appendChild(hamburgerIcon);
	nav.appendChild(logo);
};

// Hamburger icon animation toggle.
hamburgerIcon.addEventListener("click", () => {
	hamburgerIcon.classList.toggle('-open');
	nav.classList.toggle('-open');
}, false);