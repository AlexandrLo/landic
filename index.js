function changeCss() {
	var navElement = document.querySelector("nav");
	if (this.scrollY > 0) {
		navElement.classList.add("navbar-scrolled");
	} else {
		navElement.classList.remove("navbar-scrolled");
	}
}
window.addEventListener("scroll", changeCss, false);
