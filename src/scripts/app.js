const header = document.getElementById("js-header");
const hamburgerIcon = document.getElementById("js-hamburger");
const nav = document.getElementById("js-navigation");
const navHeader = document.getElementById("js-navigation-header");

// Back to top
const backToTop = document.getElementById("back-to-top");
backToTop.onclick = () => {
	document.body.scrollTop = 0;
	document.documentElement.scrollTop = 0;
}

const scroll = () => {
	if(window.pageYOffset > 330) {
		backToTop.style.display = "block"
	} else {
		backToTop.style.display = "none"
	}
}

window.onscroll = () => {
	scroll()
}

// Toggle Hamburger icon when open
function toggleHamburger() {
	if (hamburgerIcon.classList.contains("-open")) {
		hamburgerIcon.classList.toggle("-open");
		nav.classList.toggle("-open");
		navHeader.removeChild(hamburgerIcon);
		header.appendChild(hamburgerIcon);		
	} else {
		hamburgerIcon.classList.toggle("-open");
		nav.classList.toggle("-open");
		header.removeChild(hamburgerIcon);
		navHeader.appendChild(hamburgerIcon);
	}
}

// Hamburger icon animation toggle.
hamburgerIcon.addEventListener("click", toggleHamburger, true);

// Carousel
const tabs = document.querySelectorAll('.carousel__item');
const tabsTitles = document.querySelectorAll('.carousel__label');

tabsTitles.forEach((tab, index) => {
	tab.addEventListener("click", () => {
		tabsTitles.forEach(tab => {
			tab.classList.remove("-active");
		});
		tab.classList.toggle("-active");
		tabs.forEach(tab => {
			tab.classList.remove("-active");
		});
		tabs[index].classList.toggle("-active");
	});
});

// FAQ
const items = document.querySelectorAll('.faq__item');

items.forEach(function(item) {
	item.addEventListener('click', function() {
		item.classList.toggle('-active');
	}, true);
});
