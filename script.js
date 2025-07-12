function toggleMenu() {
      const navLinks = document.querySelector('.nav-links');
      navLinks.classList.toggle('active');
    }


// Dynamically set the current year
document.getElementById('year').textContent = new Date().getFullYear();