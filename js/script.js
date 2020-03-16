const navSlide = () => {
    const burger = document.querySelector('.burger');
    const nav = document.querySelector('.nav-links');

    // Toggle the burger menu
    burger.addEventListener('click', () => {
        nav.classList.toggle('nav-active');
    })
}

navSlide();