// Burger menu for mobile
const burger = document.querySelector('.burger');

const nav = document.querySelector('.nav-links');

burger.addEventListener('click', () =>
{ nav.classList.toggle('nav-active');
    burger.classList.toggle('toggle');
});

// Smooth scrolling
document.querySelectorAll('a[href^="#"]').forEach(anchor => {
anchor.addEventListener('click', function(e) { e.preventDefault();
    document.querySelector(this.getAttribute('href')).scrollIntoView({ behavior: 'smooth' });
});
});
// Contact form
const form = document.getElementById('contact-form');
form.addEventListener('submit', function(e) { e.preventDefault();
alert("Thank you for contacting me!");
form.reset();
});
