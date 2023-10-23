const navSlide = () => {
    const burger = document.querySelector('.burger');
    const nav = document.querySelector('.nav-links');
    const navLinks = document.querySelectorAll('.nav-links li');
<<<<<<< HEAD
    const body = document.body;
=======
    const body = document.body; // Obtén la referencia al elemento body
>>>>>>> fe8c017aea8476e72eeb23055e023004d101dee7

    burger.addEventListener('click', () => {
        // toggle Nav
        nav.classList.toggle('nav-active');

        // Add or remove backdrop-filter class based on nav-active class
        if (nav.classList.contains('nav-active')) {
            body.style.backdropFilter = 'blur(10px)';
        } else {
            body.style.backdropFilter = 'none';
        }
<<<<<<< HEAD
=======
    	//Animate Links
    	navLinks.forEach((link, index) => {
			if(link.style.animation){
				link.style.animation = '';
			} else{
				link.style.animation = `navLinkFade 0.7s ease forwards ${index / 7 + 0.4}s`;
			}
		});

		//Burger Animation
		burger.classList.toggle('toggle');
>>>>>>> fe8c017aea8476e72eeb23055e023004d101dee7

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
