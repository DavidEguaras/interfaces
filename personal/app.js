const navSlide = () => {
    const burger = document.querySelector('.burger');
    const nav = document.querySelector('.nav-links');
    const navLinks = document.querySelectorAll('.nav-links li');
    const body = document.body;

    burger.addEventListener('click', () => {
        // toggle Nav
        nav.classList.toggle('nav-active');

        // Add or remove backdrop-filter class based on nav-active class
        if (nav.classList.contains('nav-active')) {
            body.style.backdropFilter = 'blur(10px)';
        } else {
            body.style.backdropFilter = 'none';
        }

        // Animate Links
        navLinks.forEach((link, index) => {
			if(link.style.animation){
				link.style.animation = '';
			} else{
				link.style.animation = `navLinkFade 0.5s ease forwards ${index / 7 + 0.6}s`;
			}
		});

        // Burger Animation
        burger.classList.toggle('toggle');
    });
}

navSlide();
