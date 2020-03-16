const navSlide = () => {
    const burger = document.querySelector('.burger');
    const nav = document.querySelector('.nav-links');
    const navLinks = document.querySelector('.nav-links li')

    // Toggle the burger menu
    burger.addEventListener('click', () => {
        nav.classList.toggle('nav-active');

        // Animate the burger icon
        burger.classList.toggle('toggle');
    })
}

navSlide();